import GhostContentAPI from '@tryghost/content-api'
import { withDiskCache } from './ghost-cache'

// Without credentials (e.g. a CI/preview env missing GHOST_URL), every Ghost call rejects
// so the callers' existing `.catch` fallbacks kick in and the blog builds from local markdown.
const ghostConfigured = Boolean(import.meta.env.GHOST_URL && import.meta.env.CONTENT_API_KEY)
const missingConfig = () => Promise.reject(new Error('GHOST_URL / CONTENT_API_KEY not set'))
const unconfiguredResource = { browse: missingConfig, read: missingConfig }

export const ghostClient = ghostConfigured
  ? new GhostContentAPI({
      url: import.meta.env.GHOST_URL,
      key: import.meta.env.CONTENT_API_KEY,
      version: 'v6.0',
    })
  : ({ posts: unconfiguredResource, pages: unconfiguredResource, tags: unconfiguredResource, authors: unconfiguredResource, settings: unconfiguredResource } as unknown as ReturnType<typeof GhostContentAPI>)

// Tags excluded from the public tag pills UI
const EXCLUDED_TAG_SLUGS = ['important']

export const POSTS_PER_PAGE = 30

// Ghost errors can carry Node http Agent/ClientRequest objects with circular
// refs. Logging the raw error (or letting it bubble) crashes Vite's HMR error
// serializer. Log the message only and swallow the error into a safe fallback.
function warnGhostError(fnName: string, err: unknown): void {
  const msg = err instanceof Error ? err.message : String(err)
  console.warn(`[ghost] ${fnName} failed: ${msg} — continuing without Ghost data`)
}

export async function getBlogPosts({
  tag,
  page = 1,
}: {
  tag?: string
  page?: number
} = {}) {
  return withDiskCache(`getBlogPosts-tag=${tag ?? 'all'}-page=${page}`, () =>
    ghostClient.posts
      .browse({
        limit: POSTS_PER_PAGE,
        page,
        filter: tag ? `tag:${tag}` : undefined,
        include: ['tags'],
        fields: ['title', 'slug', 'excerpt', 'feature_image', 'published_at', 'reading_time', 'featured'],
      })
      .catch((err: unknown) => {
        warnGhostError('getBlogPosts', err)
        return [] as any
      })
  )
}

export async function getFeaturedPosts({ page = 1 }: { page?: number } = {}) {
  return withDiskCache(`getFeaturedPosts-page=${page}`, () =>
    ghostClient.posts
      .browse({
        limit: POSTS_PER_PAGE,
        page,
        filter: 'featured:true',
        include: ['tags'],
        fields: ['title', 'slug', 'excerpt', 'feature_image', 'published_at', 'reading_time', 'featured'],
      })
      .catch((err: unknown) => {
        warnGhostError('getFeaturedPosts', err)
        return [] as any
      })
  )
}

export async function getFeaturedPostsByTag(tag: string) {
  return withDiskCache(`getFeaturedPostsByTag-${tag}`, () =>
    ghostClient.posts
      .browse({
        limit: 'all',
        filter: `tag:${tag}+featured:true`,
        include: ['tags'],
        fields: ['title', 'slug', 'excerpt', 'feature_image', 'published_at', 'reading_time', 'featured'],
      })
      .catch((err: unknown) => {
        warnGhostError('getFeaturedPostsByTag', err)
        return [] as any
      })
  )
}

export async function getAllTags() {
  return withDiskCache('getAllTags', async () => {
    const FETCH_LIMIT = 100

    const firstPage = await ghostClient.tags
      .browse({
        limit: FETCH_LIMIT,
        page: 1,
        filter: 'visibility:public'
      })
      .catch((err: unknown) => {
        warnGhostError('getAllTags', err)
        return [] as any
      })

    const totalPages = firstPage.meta?.pagination?.pages ?? 1

    const remainingPages = totalPages > 1
      ? await Promise.all(
          Array.from({ length: totalPages - 1 }, (_, i) =>
            ghostClient.tags
              .browse({
                limit: FETCH_LIMIT,
                page: i + 2,
                filter: 'visibility:public',
              })
              .catch((err: unknown) => {
                warnGhostError(`getAllTags (page ${i + 2})`, err)
                return [] as any
              })
          )
        )
      : []

    const allTags = [...firstPage, ...remainingPages.flatMap((pageResult) => [...pageResult])]

    return allTags
  })
}

export async function getAllBlogPostsForPaths() {
  return withDiskCache('getAllBlogPostsForPaths', async () => {
    const FETCH_LIMIT = 100

    const firstPage = await ghostClient.posts
      .browse({
        limit: FETCH_LIMIT,
        page: 1,
        include: ['authors', 'tags'],
      })
      .catch((err: unknown) => {
        warnGhostError('getAllBlogPostsForPaths', err)
        return [] as any
      })

    const totalPages = firstPage.meta?.pagination?.pages ?? 1

    if (totalPages <= 1) {
      return [...firstPage]
    }

    const remainingPages = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, i) =>
        ghostClient.posts
          .browse({
            limit: FETCH_LIMIT,
            page: i + 2,
            include: ['authors', 'tags'],
          })
          .catch((err: unknown) => {
            warnGhostError(`getAllBlogPostsForPaths (page ${i + 2})`, err)
            return [] as any
          })
      )
    )

    return [...firstPage, ...remainingPages.flatMap((pageResult) => [...pageResult])]
  })
}

export async function getRecentPosts(limit = 3) {
  return withDiskCache(`getRecentPosts-limit=${limit}`, () =>
    ghostClient.posts
      .browse({
        limit,
        order: 'published_at desc',
        fields: ['title', 'slug', 'excerpt', 'feature_image', 'published_at', 'reading_time'],
      })
      .catch((err: unknown) => {
        warnGhostError('getRecentPosts', err)
        return [] as any
      })
  )
}

// ----- Authors -----

export async function getAllAuthors() {
  return withDiskCache('getAllAuthors', () =>
    ghostClient.authors
      .browse({ limit: 'all' })
      .catch((err: unknown) => {
        warnGhostError('getAllAuthors', err)
        return []
      })
  )
}

export async function getAuthorBySlug(slug: string) {
  return withDiskCache(`getAuthorBySlug-${slug}`, async () => {
    try {
      const authors = await ghostClient.authors.browse({
        filter: `slug:${slug}`,
        limit: 1,
      })
      return authors[0] ?? null
    } catch (err) {
      warnGhostError(`getAuthorBySlug(${slug})`, err)
      return null
    }
  })
}

export async function getPostsByAuthor(authorSlug: string, limit: number | 'all' = 'all') {
  return withDiskCache(`getPostsByAuthor-${authorSlug}-limit=${limit}`, () =>
    ghostClient.posts
      .browse({
        limit,
        filter: `authors:[${authorSlug}]`,
        include: ['tags', 'authors'],
        fields: ['title', 'slug', 'excerpt', 'feature_image', 'published_at', 'reading_time'],
        order: 'published_at desc',
      })
      .catch((err: unknown) => {
        warnGhostError(`getPostsByAuthor(${authorSlug})`, err)
        return []
      })
  )
}
