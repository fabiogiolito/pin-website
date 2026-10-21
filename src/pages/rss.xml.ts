import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getAllUnifiedPosts } from '../lib/posts'

const SITE_TITLE = 'Pin Blog'
const SITE_DESCRIPTION = 'AI recruiting, candidate sourcing, and hiring best practices from the Pin team.'

export async function GET(context: APIContext) {
  const posts = await getAllUnifiedPosts()

  // Posts are already newest-first; keep that order for the feed.
  const items = posts
    .filter((post: any) => post.slug && post.title)
    .slice(0, 100)
    .map((post: any) => ({
      title: post.title ?? '',
      link: `/blog/${post.slug}/`,
      description: post.excerpt ?? post.custom_excerpt ?? '',
      pubDate: post.published_at ? new Date(post.published_at) : new Date(),
      author: post.authors?.[0]?.name ?? 'Pin Team',
      categories: (post.tags ?? []).map((t: any) => t.name).filter((n: string | undefined): n is string => !!n),
      customData: post.updated_at ? `<atom:updated>${new Date(post.updated_at).toISOString()}</atom:updated>` : undefined,
    }))

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? 'https://www.pin.com',
    items,
    stylesheet: false,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<language>en-us</language><generator>Astro</generator>`,
  })
}
