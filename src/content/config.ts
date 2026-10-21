import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string().optional().default(''),
    feature_image: z.string().optional().default(''),
    hide_feature_image: z.boolean().default(false),
    hero_alt: z.string().optional(),
    published_at: z.coerce.date(),
    updated_at: z.coerce.date().optional(),
    status: z.enum(['published', 'draft', 'scheduled']).default('published'),
    featured: z.boolean().default(false),
    authors: z.array(z.string()).default([]),
    // Tags are stored as a slug-only list — the human-readable display name
    // is resolved at load time from src/data/tags.ts via normalizeTags() in
    // src/lib/posts.ts. Keeps rename operations to a single file.
    tags: z.array(z.string()).default([]),
    canonical_url: z.string().url().optional(),
    created_at: z.coerce.date().optional(),
    improved_at: z.coerce.date().optional(),
    primary_keywords: z.array(z.string()).default([]),
    secondary_keywords: z.array(z.string()).default([]),
    // GSC history — compact semicolon-delimited `MM-DD-YY:value` strings,
    // one field per metric. Written by scripts/python/gsc_persistence.py
    // during `/blog-improve`. Capped at 24 entries per field.
    gsc_clicks: z.string().optional(),
    gsc_impressions: z.string().optional(),
    gsc_avg_position: z.string().optional(),
    gsc_weighted_position: z.string().optional(),
    gsc_keywords_count: z.string().optional(),
    gsc_snapshot_at: z.coerce.date().optional(),
    gsc_top_keywords: z.array(z.string()).default([]),
    // Set by `linkedin-post-generator` after a successful run mining this
    // article into LinkedIn pool posts. No field = never processed; presence
    // marks the most-recent process date. Picker uses 90d cooldown.
    linkedin_posts_at: z.coerce.date().optional(),
    // PostHog any-touch attribution — compact `MM-DD-YY:N` history strings,
    // written by `/blog-improve` via scripts/python/posthog_attribution.py.
    // Window: 90 days. Attribution: anyone who visited `/blog/<slug>/` AND
    // later converted (signup / demo book / subscription) within the window.
    blog_pageviews: z.string().optional(),
    blog_signups: z.string().optional(),
    blog_demos: z.string().optional(),
    blog_subscribers: z.string().optional(),
    // Ahrefs live-backlink snapshot — refreshed on single-file analyzer runs
    // via scripts/python/ahrefs_persistence.py. Full profile lives on disk at
    // `ahrefs/<slug>/<YYYY-MM-DD>.json`; frontmatter holds the top 100 by DR.
    backlinks: z.array(z.string()).max(100).optional(),
    ahrefs_snapshot_at: z.coerce.date().optional(),
    ahrefs_total_live: z.number().optional(),
    ahrefs_ref_domains: z.number().optional(),
    // AlsoAsked PAA snapshot — written once per (slug, primary_keyword) pair
    // by scripts/python/alsoasked_persistence.py on single-file analyzer runs.
    // Full tree lives at `alsoasked/<slug>/<YYYY-MM-DD>.json`; frontmatter
    // holds the top-level questions with `#aio` suffix on ones Google AI
    // Overview cites. Consumed by /write-pin + /blog-improve for SERP-grounded
    // FAQ generation.
    also_asked_questions: z.array(z.string()).default([]),
    also_asked_snapshot_at: z.coerce.date().optional(),
    also_asked_keyword: z.string().optional(),
  }),
})

const syndicated = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/syndicated' }),
  schema: z.object({
    title: z.string(),
    published_url: z.string().url().optional(),
    published_at: z.coerce.date().optional(),
    source: z.string().optional(),
    excerpt: z.string().optional().default(''),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.object({
      name: z.string(),
      slug: z.string(),
    })).default([]),
    status: z.enum(['published', 'draft']).default('draft'),
  }),
})

const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: z.object({
    title: z.string(),
    published_url: z.string().url().optional(),
    published_at: z.coerce.date().optional(),
    excerpt: z.string().optional().default(''),
    status: z.enum(['published', 'draft']).default('draft'),
  }),
})

export const collections = { blog, syndicated, press }
