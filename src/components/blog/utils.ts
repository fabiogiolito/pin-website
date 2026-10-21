// Shared helpers for the blog templates.

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function relativeTime(iso: string | null | undefined): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  const days = Math.floor((Date.now() - d.getTime()) / 86400000)
  if (days < 0) return formatDate(iso)
  if (days === 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 30) return Math.floor(days / 7) === 1 ? '1 week ago' : `${Math.floor(days / 7)} weeks ago`
  if (days < 365) return Math.floor(days / 30) === 1 ? '1 month ago' : `${Math.floor(days / 30)} months ago`
  return Math.floor(days / 365) === 1 ? '1 year ago' : `${Math.floor(days / 365)} years ago`
}

export function displayTitle(title: string | undefined | null): string {
  return (title ?? '').replace(/\s*\(2026\)\s*$/, '').trim()
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Author website/twitter/facebook + override sameAs, deduped (same as new-www author pages).
export function authorSameAs(author: any, override: { sameAs?: string[] } | null): string[] {
  const raw = [
    author.website,
    author.twitter && `https://twitter.com/${String(author.twitter).replace(/^@/, '')}`,
    author.facebook && `https://facebook.com/${author.facebook}`,
    ...(override?.sameAs ?? []),
  ].filter(Boolean) as string[]
  const seen = new Set<string>()
  return raw.filter((url) => {
    const key = url.toLowerCase().replace(/\/$/, '')
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

// Embeddable tools ([tool/slug] in post HTML) live in src/components/tools when
// that group is ported. Until then the registry is empty and placeholders are dropped.
const toolsModule: any = Object.values(import.meta.glob('../tools/index.ts', { eager: true }))[0] ?? {}
export const toolRegistry: Record<string, any> = toolsModule.toolRegistry ?? {}
export const toolSchemas: Record<string, { name: string; description: string; applicationCategory: string; tocLabel: string }> =
  toolsModule.toolSchemas ?? {}
export const toolAnchorId: (slug: string) => string = toolsModule.toolAnchorId ?? ((slug: string) => `pin-tool-${slug}`)
export function detectEmbeddedTools(html: string): string[] {
  if (toolsModule.detectEmbeddedTools) return toolsModule.detectEmbeddedTools(html)
  return []
}
