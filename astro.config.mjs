// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import GhostContentAPI from "@tryghost/content-api";
import rewriteExternalLinks from "./src/integrations/rewrite-external-links";
import devRedirects from "./src/integrations/dev-redirects";
import { withDiskCache } from "./src/lib/ghost-cache";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://www.pin.com";

const SITEMAP_EXCLUDED_PATHS = [
  '/privacy/',
  '/privacy',
  '/terms/',
  '/terms',
  '/candidate-privacy/',
  '/candidate-privacy',
  '/book-a-demo/success/',
  '/book-a-demo/success',
  '/tools/',
  '/tools',
  '/internal/',
  '/internal',
];

// Load .env so we can reach Ghost at config time (runs once per build).
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// Build a Map<url, ISOdate> of per-page lastmod values.
// Blog posts → Ghost post.updated_at; tag pages → newest post with that tag;
// author pages → newest post by that author. Missing entries fall back to today.
async function buildLastmodMap() {
  const map = new Map();
  const strict = process.env.SITEMAP_STRICT === '1' || process.env.CI === 'true';
  if (!env.GHOST_URL || !env.CONTENT_API_KEY) {
    const msg = '[sitemap] GHOST_URL / CONTENT_API_KEY not set - per-post lastmod will fall back to build date for every URL';
    if (strict) throw new Error(msg);
    console.warn('\n\x1b[33m⚠  ' + msg + '\x1b[0m\n');
    return map;
  }
  try {
    const allPosts = await withDiskCache('lastmod-posts-raw', async () => {
      const api = new GhostContentAPI({
        url: env.GHOST_URL,
        key: env.CONTENT_API_KEY,
        version: 'v6.0',
      });

      // Fetch all posts with updated_at + tags + authors
      const collected = [];
      let page = 1;
      while (true) {
        const batch = await api.posts.browse({
          limit: 100,
          page,
          include: ['tags', 'authors'],
          fields: ['slug', 'updated_at', 'published_at'],
        });
        collected.push(...batch);
        const totalPages = batch.meta?.pagination?.pages ?? 1;
        if (page >= totalPages) break;
        page++;
      }
      return collected;
    });

    // Per-post lastmod
    for (const post of allPosts) {
      const lastmod = post.updated_at || post.published_at;
      if (post.slug && lastmod) {
        map.set(`${SITE_URL}/blog/${post.slug}/`, lastmod);
      }
    }

    // Per-tag + per-author lastmod: newest post in that bucket
    const tagLatest = new Map();
    const authorLatest = new Map();
    for (const post of allPosts) {
      const dt = post.updated_at ?? post.published_at ?? '';
      if (!dt) continue;
      for (const tag of post.tags ?? []) {
        if (!tag.slug) continue;
        const prev = tagLatest.get(tag.slug);
        if (!prev || new Date(dt).getTime() > new Date(prev).getTime()) tagLatest.set(tag.slug, dt);
      }
      for (const author of post.authors ?? []) {
        if (!author.slug) continue;
        const prev = authorLatest.get(author.slug);
        if (!prev || new Date(dt).getTime() > new Date(prev).getTime()) authorLatest.set(author.slug, dt);
      }
    }
    for (const [slug, dt] of tagLatest) {
      map.set(`${SITE_URL}/blog/tag/${slug}/`, dt);
    }
    for (const [slug, dt] of authorLatest) {
      map.set(`${SITE_URL}/blog/author/${slug}/`, dt);
    }

    // Blog index + /blog/all/ — use newest post overall
    if (allPosts.length) {
      /** @type {string[]} */
      const dates = allPosts
        .map((p) => p.updated_at ?? p.published_at ?? '')
        .filter((s) => !!s);
      dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
      const newest = dates[0];
      if (newest) {
        map.set(`${SITE_URL}/blog/`, newest);
        map.set(`${SITE_URL}/blog/all/`, newest);
      }
    }

    // Also read local markdown posts from src/content/blog/
    const blogDir = path.join(__dirname, 'src', 'content', 'blog');
    let localCount = 0;
    try {
      const mdFiles = readdirSync(blogDir).filter(f => f.endsWith('.md'));
      for (const file of mdFiles) {
        const raw = readFileSync(path.join(blogDir, file), 'utf-8');
        const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
        if (!fmMatch) continue;
        const fm = fmMatch[1];
        const slug = fm.match(/^slug:\s*(.+)$/m)?.[1]?.trim();
        const status = fm.match(/^status:\s*(.+)$/m)?.[1]?.trim();
        const updatedAt = fm.match(/^updated_at:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim();
        const publishedAt = fm.match(/^published_at:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim();
        if (!slug || status === 'draft') continue;
        // Force ISO strings without timezone to UTC so the cutoff is consistent
        // across machines (dev laptop vs CI runner).
        /** @param {string} v */
        const toUtc = (v) => /T\d{2}:\d{2}/.test(v) && !/(Z|[+-]\d{2}:?\d{2})$/.test(v) ? v + 'Z' : v;
        if (publishedAt && new Date(toUtc(publishedAt)) > new Date()) continue;
        const lastmod = updatedAt || publishedAt;
        if (lastmod) {
          map.set(`${SITE_URL}/blog/${slug}/`, lastmod);
          localCount++;
        }
      }
    } catch { /* no local blog posts yet */ }

    console.log(`[sitemap] loaded lastmod for ${map.size} URLs from Ghost + ${localCount} local posts`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const errorLine = `[sitemap] FAILED to load Ghost lastmod data: ${msg}`;
    if (strict) throw new Error(errorLine);
    // Yellow warning in dev; upgrade to build-breaking error in CI / when SITEMAP_STRICT=1 is set.
    console.warn('\n\x1b[33m⚠  ' + errorLine + ' (per-post lastmod will fall back to build date)\x1b[0m\n');
  }
  return map;
}

const LASTMOD_MAP = await buildLastmodMap();
const BUILD_DATE = new Date().toISOString().split('T')[0];

// Resolve a sitemap URL (e.g. https://www.pin.com/about/) to a likely Astro source file.
// Returns an absolute file path if one exists, or null.
/** @param {string} url @returns {string | null} */
function urlToSourceFile(url) {
  if (!url.startsWith(SITE_URL)) return null;
  const pathname = url.slice(SITE_URL.length); // "/about/" or "/"
  const trimmed = pathname.replace(/^\/|\/$/g, ''); // "about" or ""
  const pagesDir = path.join(__dirname, 'src', 'pages');
  const candidates = trimmed === ''
    ? [path.join(pagesDir, 'index.astro')]
    : [
        path.join(pagesDir, `${trimmed}.astro`),
        path.join(pagesDir, trimmed, 'index.astro'),
      ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

// Git "last commit touched this file" timestamp. Returns YYYY-MM-DD or null.
/** @type {Map<string, string | null>} */
const GIT_LASTMOD_CACHE = new Map();
/** @param {string} absPath @returns {string | null} */
function gitLastmod(absPath) {
  if (GIT_LASTMOD_CACHE.has(absPath)) {
    return GIT_LASTMOD_CACHE.get(absPath) ?? null;
  }
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${absPath}"`, {
      cwd: __dirname,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    const out = iso ? iso.split('T')[0] : null;
    GIT_LASTMOD_CACHE.set(absPath, out);
    return out;
  } catch {
    GIT_LASTMOD_CACHE.set(absPath, null);
    return null;
  }
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 65536,
    },
  },
  integrations: [
    alpinejs({ entrypoint: "/src/alpine" }),
    icon(),
    rewriteExternalLinks(),
    devRedirects(),
    sitemap({
      // Entries ending in "/" also exclude everything nested under them.
      filter: (page) =>
        !SITEMAP_EXCLUDED_PATHS.some((path) => {
          const url = `${SITE_URL}${path}`;
          return page === url || (path.endsWith('/') && page.startsWith(url));
        }),
      serialize(item) {
        // Three-tier fallback for lastmod:
        //   1. Ghost content timestamps (blog posts, tag/author/index pages pulled from Ghost)
        //   2. Git "last commit that touched this page's source file" (static marketing pages)
        //   3. Today's build date (dynamic pages with no git match)
        const ghostDate = LASTMOD_MAP.get(item.url);
        if (ghostDate) {
          item.lastmod = new Date(ghostDate).toISOString().split('T')[0];
          return item;
        }
        const sourceFile = urlToSourceFile(item.url);
        if (sourceFile) {
          const gitDate = gitLastmod(sourceFile);
          if (gitDate) {
            item.lastmod = gitDate;
            return item;
          }
        }
        item.lastmod = BUILD_DATE;
        return item;
      },
    }),
  ],
});
