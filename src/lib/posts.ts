import { getCollection } from 'astro:content'
import {
  getAllBlogPostsForPaths,
  getAllTags,
  getAuthorBySlug,
  POSTS_PER_PAGE,
} from './ghost'
import { toolRegistry } from '../components/tools'
import { rewriteExternalLinks } from './link-rewriter'
import { tagMeta, CANONICAL_TAG_SLUGS } from '../data/tags'

export { POSTS_PER_PAGE } from './ghost'

export interface UnifiedPost {
  slug: string
  title: string
  excerpt?: string
  feature_image?: string
  hide_feature_image?: boolean
  hero_alt?: string
  published_at?: string
  updated_at?: string
  reading_time?: number
  featured?: boolean
  html?: string
  authors?: {
    name?: string
    slug?: string
    bio?: string
    profile_image?: string | null
    website?: string | null
    twitter?: string | null
    facebook?: string | null
  }[]
  tags?: { name?: string; slug: string }[]
  custom_excerpt?: string
  canonical_url?: string
  _source: 'ghost' | 'local'
}

// Parse a date value consistently across machines. ISO strings with a time
// component but no timezone (e.g. "2026-04-19T10:00:00") are interpreted as
// local time by JS, which means the cutoff between "past" and "future" drifts
// depending on where the build runs. Force these to UTC.
export function parseDateUTC(value: string | Date | null | undefined): Date {
  if (value instanceof Date) return value
  if (typeof value !== 'string') return new Date(NaN)
  if (/T\d{2}:\d{2}/.test(value) && !/(Z|[+-]\d{2}:?\d{2})$/.test(value)) {
    return new Date(value + 'Z')
  }
  return new Date(value)
}

function isFuture(value: string | Date | null | undefined): boolean {
  if (!value) return false
  const d = parseDateUTC(value)
  if (isNaN(d.getTime())) return false
  return d.getTime() > Date.now()
}

let _allPostsCache: UnifiedPost[] | null = null
let _localPostsCache: UnifiedPost[] | null = null

// Title-case a slug as a display-name fallback when no tagMeta entry exists.
function titleCaseSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
}

// Resolve a slug to {name, slug}. Local posts store slug-only; display name
// comes from src/data/tags.ts tagMeta[slug].h1. Falls back to title-casing
// the slug if the registry has no entry (shouldn't happen for canonical tags
// — write-time validation guards this).
export function resolveTag(slug: string): { name: string; slug: string } {
  const meta = tagMeta[slug]
  return { name: meta?.h1 ?? titleCaseSlug(slug), slug }
}

// Normalize frontmatter tags: accepts slug strings (current canonical shape)
// OR legacy {name, slug} objects (for transient tolerance — Ghost still emits
// that shape). Returns the uniform {name, slug} array downstream code expects.
function normalizeTags(raw: unknown): { name: string; slug: string }[] {
  if (!Array.isArray(raw)) return []
  const out: { name: string; slug: string }[] = []
  for (const entry of raw) {
    if (typeof entry === 'string') {
      out.push(resolveTag(entry))
    } else if (entry && typeof entry === 'object' && 'slug' in entry) {
      const slug = String((entry as { slug: unknown }).slug || '')
      if (!slug) continue
      // If the object includes a name, prefer the registry's canonical name
      // when available (keeps rendering consistent after editorial renames).
      const name = (entry as { name?: unknown }).name
      const meta = tagMeta[slug]
      out.push({ name: meta?.h1 ?? (typeof name === 'string' && name ? name : titleCaseSlug(slug)), slug })
    }
  }
  return out
}
let _mdProcessor: any = null

const _authorCache = new Map<string, any>()

type PostImage = { feature_image?: string; hero_alt?: string }
const _postImageCache = new Map<string, PostImage>()
let _postImageLocalLoaded = false
let _postImageGhostLoaded = false

async function getMarkdownProcessor() {
  if (!_mdProcessor) {
    const { createMarkdownProcessor } = await import('@astrojs/markdown-remark')
    _mdProcessor = await createMarkdownProcessor()
  }
  return _mdProcessor
}

async function resolveAuthor(slug: string) {
  if (_authorCache.has(slug)) return _authorCache.get(slug)
  const author = await getAuthorBySlug(slug)
  _authorCache.set(slug, author)
  return author
}


// Reserved first-path segments under /blog/ that are routes, not post slugs.
// Without this, links like /blog/all/ would be stripped when `all` isn't a slug.
const RESERVED_BLOG_PATHS = new Set(['all', 'tag', 'author'])

function stripDeadLinks(html: string, validSlugs: Set<string>, sourceSlug: string): string {
  return html.replace(
    /<a[^>]*?\shref=["']((?:https?:\/\/(?:www\.)?pin\.com)?\/blog\/([a-z0-9-]+)\/?(?:[?#][^"']*)?)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (match, _href, slug, innerText) => {
      if (RESERVED_BLOG_PATHS.has(slug)) return match
      if (validSlugs.has(slug)) return match
      console.warn(`[posts] "${sourceSlug}" links to missing post "/blog/${slug}/" — anchor stripped`)
      return innerText
    }
  )
}

// Replace [[slug]] tokens with anchors to the target post, using the target's
// title as the link text. Unknown slugs are left as literal text and warned.
function resolveWikiLinks(
  html: string,
  titles: Map<string, string>,
  sourceSlug: string,
): string {
  return html.replace(/\[\[([a-z0-9-]+)\]\]/g, (match, slug) => {
    const title = titles.get(slug)
    if (!title) {
      console.warn(`[posts] "${sourceSlug}" references unknown post via [[${slug}]]`)
      return match
    }
    return `<a href="/blog/${slug}/">${title}</a>`
  })
}

// Rewrite screenshot figures into the editorial figure card used on listicle /
// comparison / awards posts. Handles two authoring patterns that end up in the
// rendered HTML:
//   A) Hand-authored <figure class="urlbox-screenshot">…</figure> blocks (with
//      the legacy expand overlay + button siblings).
//   B) Plain-markdown `![alt](/images/urlbox/…)` images that markdown-remark
//      wraps in a <p> tag.
// Both are replaced with a clickable card that dispatches a `pin-figure-open`
// event and a figcaption with a per-post auto-numbered "FIG. 0N — LABEL" pill
// plus short caption derived from the nearest preceding H3. Numbering runs in
// document order across both patterns.
function enhanceUrlboxScreenshots(html: string): string {
  const combined = new RegExp(
    // Pattern A: the hand-authored figure wrapper.
    String.raw`<figure[^>]*class="[^"]*\burlbox-screenshot\b[^"]*"[^>]*>[\s\S]*?<\/figure>` +
    `|` +
    // Pattern B: an <img src="/images/urlbox/…"> wrapped in a <p> tag.
    String.raw`<p>\s*<img\b[^>]*src="\/images\/urlbox\/[^"]+"[^>]*>\s*<\/p>`,
    'gi',
  )

  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  // Decode the handful of HTML entities that markdown-remark emits inside
  // heading text and alt attributes so they don't get double-escaped when we
  // re-emit them via `esc()`.
  const decodeEntities = (s: string) =>
    s
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/gi, "'")
      .replace(/&#(\d+);/g, (_m, d) => String.fromCharCode(parseInt(d, 10)))
      .replace(/&#x([0-9a-f]+);/gi, (_m, h) => String.fromCharCode(parseInt(h, 16)))

  let n = 0
  return html.replace(combined, (match, offset: number) => {
    const imgMatch = match.match(/<img\b[^>]*>/i)
    if (!imgMatch) return match
    const imgTag = imgMatch[0]
    const srcMatch = imgTag.match(/\bsrc="([^"]+)"/i)
    const altMatch = imgTag.match(/\balt="([^"]*)"/i)
    const src = srcMatch ? srcMatch[1] : ''
    const alt = altMatch ? decodeEntities(altMatch[1]) : ''
    if (!src) return match

    n += 1
    const figNum = String(n).padStart(2, '0')

    // Look back for the most recent H3 (preferred) or H2 (fallback).
    const before = html.slice(0, offset)
    const h3All = Array.from(before.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi))
    const h2All = Array.from(before.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi))
    const headingRaw = h3All.length
      ? h3All[h3All.length - 1][1]
      : h2All.length
        ? h2All[h2All.length - 1][1]
        : ''
    const headingText = decodeEntities(headingRaw)
      .replace(/<[^>]+>/g, '')
      .replace(/\\\./g, '.')
      .replace(/\s+/g, ' ')
      .trim()

    // Split a heading like "Korn Ferry - Good for Leadership Search" into
    // (label, caption). Strip a leading numeric prefix ("2. ") first.
    const headingClean = headingText.replace(/^\d+[.)]\s+/, '')
    let label = ''
    let caption = ''
    const dashSplit = headingClean.split(/\s+[-–—]\s+/)
    if (dashSplit.length >= 2) {
      label = dashSplit[0].trim()
      caption = dashSplit.slice(1).join(' — ').trim()
    } else if (headingClean) {
      label = headingClean
    }

    // Clean noisy stock prefixes/suffixes from alt text for both label and
    // caption fallbacks: "Screenshot of the TEKsystems website homepage"
    // → "TEKsystems".
    const altClean = alt
      .replace(/^screenshot of (the )?/i, '')
      .replace(/\s+(homepage|website|home page|site|screenshot)\b\.?/gi, '')
      .trim()

    if (!label) {
      label = altClean || alt || 'Screenshot'
    }
    if (!caption) {
      caption = altClean
        ? altClean.charAt(0).toUpperCase() + altClean.slice(1) + ' homepage'
        : alt || label
    }

    const badgeText = `FIG. ${figNum} — ${label.toUpperCase()}`

    return `<figure class="post-figure" data-fig-n="${figNum}">` +
      `<button type="button" class="post-figure__imagewrap" ` +
      `data-src="${esc(src)}" data-alt="${esc(alt)}" ` +
      `aria-label="View full screenshot: ${esc(alt || label)}" ` +
      `onclick="window.dispatchEvent(new CustomEvent('pin-figure-open', { detail: { src: this.dataset.src, alt: this.dataset.alt } }))">` +
      `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">` +
      `</button>` +
      `<figcaption class="post-figure__caption">` +
      `<span class="post-figure__badge">${esc(badgeText)}</span>` +
      `<span class="post-figure__text">${esc(caption)}</span>` +
      `</figcaption>` +
      `</figure>`
  })
}

// Warn when a [tool/slug] shortcode references a tool not in the registry.
function warnUnknownTools(html: string, sourceSlug: string): void {
  const re = /\[tool\/([a-z0-9-]+)\]|data-pin-tool="([a-z0-9-]+)"/g
  const seen = new Set<string>()
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    const slug = (m[1] || m[2]) as string
    if (seen.has(slug)) continue
    seen.add(slug)
    if (!(slug in toolRegistry)) {
      console.warn(`[posts] "${sourceSlug}" references unknown tool "[tool/${slug}]"`)
    }
  }
}

function computeReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, '')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 265))
}

async function getLocalPosts(): Promise<UnifiedPost[]> {
  if (_localPostsCache) return _localPostsCache

  let entries: Awaited<ReturnType<typeof getCollection>>
  try {
    entries = await getCollection('blog' as any)
  } catch {
    _localPostsCache = []
    return []
  }

  if (!entries.length) {
    _localPostsCache = []
    return []
  }

  const isDev = !import.meta.env.PROD
  const processor = await getMarkdownProcessor()
  const posts: UnifiedPost[] = []

  for (const entry of entries) {
    const data = entry.data as any
    if (data.status === 'draft' && !isDev) continue
    if (!isDev && isFuture(data.published_at)) continue

    // Frontmatter lint
    const slug = data.slug
    if (!data.excerpt) {
      console.warn(`[lint] "${slug}" is missing an excerpt`)
    }
    if (!data.tags?.length) {
      console.warn(`[lint] "${slug}" has no tags`)
    }
    if (isFuture(data.published_at)) {
      console.warn(`[lint] "${slug}" has a future published_at: ${data.published_at}`)
    }

    let html = ''
    if (entry.body) {
      const result = await processor.render(entry.body)
      const enhanced = enhanceUrlboxScreenshots(result.code)
      html = rewriteExternalLinks(enhanced, { sourceSlug: data.slug })
    }

    const authors = []
    for (const authorSlug of (data.authors ?? [])) {
      const ghost = await resolveAuthor(authorSlug)
      if (ghost) {
        authors.push(ghost)
      } else {
        console.warn(`[lint] "${slug}" references unknown author "${authorSlug}" (not found in Ghost)`)
        authors.push({ name: authorSlug, slug: authorSlug })
      }
    }

    posts.push({
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt || undefined,
      feature_image: data.feature_image || undefined,
      hide_feature_image: data.hide_feature_image,
      hero_alt: data.hero_alt || undefined,
      published_at: data.published_at instanceof Date ? data.published_at.toISOString() : data.published_at,
      updated_at: data.updated_at instanceof Date ? data.updated_at?.toISOString() : data.updated_at,
      reading_time: html ? computeReadingTime(html) : 1,
      featured: data.featured ?? false,
      html,
      authors,
      // Drop non-canonical tag slugs (mirrors the Ghost-side filter above): an
      // archive page only exists for tags in CANONICAL_TAG_SLUGS, so rendering
      // a pill for anything else produces a 404 at build time.
      tags: normalizeTags(data.tags).filter((t) => CANONICAL_TAG_SLUGS.has(t.slug)),
      canonical_url: data.canonical_url || undefined,
      _source: 'local',
    })
  }

  _localPostsCache = posts
  return posts
}

export async function getAllUnifiedPosts(): Promise<UnifiedPost[]> {
  if (_allPostsCache) return _allPostsCache

  const [ghostPosts, localPosts] = await Promise.all([
    getAllBlogPostsForPaths(),
    getLocalPosts(),
  ])

  const slugMap = new Map<string, UnifiedPost>()

  for (const post of ghostPosts) {
    slugMap.set(post.slug, {
      slug: post.slug,
      title: post.title ?? '',
      excerpt: post.excerpt ?? undefined,
      feature_image: post.feature_image ?? undefined,
      hero_alt: undefined,
      published_at: post.published_at ?? undefined,
      updated_at: post.updated_at ?? undefined,
      reading_time: post.reading_time,
      featured: post.featured,
      html: post.html ? rewriteExternalLinks(post.html, { sourceSlug: post.slug }) : undefined,
      authors: post.authors as UnifiedPost['authors'],
      // Drop any Ghost-side legacy tags (e.g. "recruiting-tools"): they're no
      // longer in the canonical vocabulary, so their archive pages don't exist
      // and their pills would link to 404s. Canonical-only keeps tag pills
      // on Ghost-origin posts clickable without relying on the 301 layer.
      tags: ((post.tags as UnifiedPost['tags']) ?? []).filter((t) =>
        CANONICAL_TAG_SLUGS.has(t.slug),
      ),
      custom_excerpt: post.custom_excerpt ?? undefined,
      _source: 'ghost',
    })
  }

  for (const post of localPosts) {
    if (slugMap.has(post.slug)) {
      console.warn(`[posts] Local post "${post.slug}" shadows Ghost post`)
    }
    slugMap.set(post.slug, post)
  }

  const merged = Array.from(slugMap.values()).sort((a, b) => {
    const da = a.published_at ? new Date(a.published_at).getTime() : 0
    const db = b.published_at ? new Date(b.published_at).getTime() : 0
    return db - da
  })

  const validSlugs = new Set(merged.map(p => p.slug))
  const titles = new Map(merged.map(p => [p.slug, p.title]))
  for (const post of merged) {
    if (!post.html) continue
    post.html = resolveWikiLinks(post.html, titles, post.slug)
    post.html = stripDeadLinks(post.html, validSlugs, post.slug)
    warnUnknownTools(post.html, post.slug)
  }

  _allPostsCache = merged
  return merged
}

export async function getUnifiedBlogPosts({
  tag,
  page = 1,
}: {
  tag?: string
  page?: number
} = {}): Promise<{ posts: UnifiedPost[]; totalPages: number; currentPage: number }> {
  const all = await getAllUnifiedPosts()

  const filtered = tag
    ? all.filter((p) => p.tags?.some((t) => t.slug === tag))
    : all

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const start = (page - 1) * POSTS_PER_PAGE
  const posts = filtered.slice(start, start + POSTS_PER_PAGE)

  return { posts, totalPages, currentPage: page }
}

export async function getUnifiedFeaturedPosts({
  page = 1,
}: { page?: number } = {}): Promise<{ posts: UnifiedPost[]; totalPages: number }> {
  const all = await getAllUnifiedPosts()
  const featured = all.filter((p) => p.featured)
  const totalPages = Math.max(1, Math.ceil(featured.length / POSTS_PER_PAGE))
  const start = (page - 1) * POSTS_PER_PAGE
  const posts = featured.slice(start, start + POSTS_PER_PAGE)
  return { posts, totalPages }
}

export async function getUnifiedFeaturedPostsByTag(tag: string): Promise<UnifiedPost[]> {
  const all = await getAllUnifiedPosts()
  return all.filter(
    (p) => p.featured && p.tags?.some((t) => t.slug === tag)
  )
}

export async function getAllUnifiedTags(): Promise<{ name?: string; slug: string }[]> {
  const [ghostTags, localPosts] = await Promise.all([
    getAllTags(),
    getLocalPosts(),
  ])

  const tagMap = new Map<string, { name?: string; slug: string }>()

  for (const tag of ghostTags) {
    if (!CANONICAL_TAG_SLUGS.has(tag.slug)) continue
    tagMap.set(tag.slug, { name: tag.name, slug: tag.slug })
  }

  for (const post of localPosts) {
    for (const tag of post.tags ?? []) {
      if (!CANONICAL_TAG_SLUGS.has(tag.slug)) continue
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, { name: tag.name, slug: tag.slug })
      }
    }
  }

  return Array.from(tagMap.values())
}

export async function getUnifiedRecentPosts(limit = 3): Promise<UnifiedPost[]> {
  const all = await getAllUnifiedPosts()
  return all.slice(0, limit)
}

let _tagCountsCache: Map<string, number> | null = null

export async function getTagCounts(): Promise<Map<string, number>> {
  if (_tagCountsCache) return _tagCountsCache
  const all = await getAllUnifiedPosts()
  const counts = new Map<string, number>()
  for (const post of all) {
    for (const tag of post.tags ?? []) {
      if (!CANONICAL_TAG_SLUGS.has(tag.slug)) continue
      counts.set(tag.slug, (counts.get(tag.slug) ?? 0) + 1)
    }
  }
  _tagCountsCache = counts
  return counts
}

export async function getLastPublishedAt(tag?: string): Promise<string | undefined> {
  const all = await getAllUnifiedPosts()
  const filtered = tag ? all.filter((p) => p.tags?.some((t) => t.slug === tag)) : all
  return filtered[0]?.published_at
}

export async function getUnifiedRelatedTags(
  activeTag: string,
  limit = 4,
): Promise<{ slug: string; name?: string; count: number }[]> {
  const [counts, allTags] = await Promise.all([getTagCounts(), getAllUnifiedTags()])
  const nameBySlug = new Map(allTags.map((t) => [t.slug, t.name]))
  return Array.from(counts.entries())
    .filter(([slug]) => slug !== activeTag)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([slug, count]) => ({ slug, name: nameBySlug.get(slug), count }))
}

export async function getUnifiedPostsByAuthor(
  authorSlug: string,
  limit: number | 'all' = 'all'
): Promise<UnifiedPost[]> {
  const all = await getAllUnifiedPosts()
  const byAuthor = all.filter((p) =>
    p.authors?.some((a) => a.slug === authorSlug)
  )
  if (limit === 'all') return byAuthor
  return byAuthor.slice(0, limit)
}

export async function getUnifiedFeaturedPostsByAuthor(
  authorSlug: string,
): Promise<UnifiedPost[]> {
  const all = await getAllUnifiedPosts()
  return all.filter(
    (p) => p.featured && p.authors?.some((a) => a.slug === authorSlug)
  )
}

export async function getAuthorsWithCounts(): Promise<
  { slug: string; name?: string; profile_image?: string | null; count: number }[]
> {
  const all = await getAllUnifiedPosts()
  const byAuthor = new Map<
    string,
    { slug: string; name?: string; profile_image?: string | null; count: number }
  >()
  for (const post of all) {
    for (const a of post.authors ?? []) {
      if (!a.slug) continue
      const existing = byAuthor.get(a.slug)
      if (existing) {
        existing.count += 1
      } else {
        byAuthor.set(a.slug, {
          slug: a.slug,
          name: a.name,
          profile_image: a.profile_image ?? null,
          count: 1,
        })
      }
    }
  }
  return Array.from(byAuthor.values()).sort((x, y) => y.count - x.count)
}

// Lightweight lookup for pages that only need feature_image + hero_alt on a
// handful of hand-picked blog links. Avoids the full getAllUnifiedPosts
// pipeline (no markdown rendering, no link rewriting, no Ghost API call when
// every requested slug resolves locally). Ghost is consulted only if one of
// the requested slugs isn't in the local content collection.
export async function getPostImagesBySlug(
  slugs: string[],
): Promise<Map<string, PostImage>> {
  if (!_postImageLocalLoaded) {
    try {
      const entries = (await getCollection('blog' as any)) as Array<{ data: any }>
      for (const entry of entries) {
        const d = entry.data
        _postImageCache.set(d.slug, {
          feature_image: d.feature_image || undefined,
          hero_alt: d.hero_alt || undefined,
        })
      }
    } catch {
      /* no-op — treat as empty */
    }
    _postImageLocalLoaded = true
  }

  const missingFromLocal = slugs.filter((s) => !_postImageCache.has(s))
  if (missingFromLocal.length > 0 && !_postImageGhostLoaded) {
    try {
      const ghost = await getAllBlogPostsForPaths()
      for (const p of ghost) {
        if (!_postImageCache.has(p.slug)) {
          _postImageCache.set(p.slug, {
            feature_image: p.feature_image || undefined,
            hero_alt: undefined,
          })
        }
      }
    } catch {
      /* Ghost unreachable — requested slug will simply be missing */
    }
    _postImageGhostLoaded = true
  }

  const out = new Map<string, PostImage>()
  for (const s of slugs) {
    const hit = _postImageCache.get(s)
    if (hit) out.set(s, hit)
  }
  return out
}
