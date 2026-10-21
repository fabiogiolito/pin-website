// Per-author E-E-A-T overrides. Merged with Ghost author records at render time.
// Add new file at ./<slug>.json to extend a Ghost author with credentials + sameAs links.

import stevenData from './steven.json'
import ericaData from './erica.json'
import conorData from './conor.json'

export interface AuthorOverride {
  slug: string
  credentials?: string[]
  expertise?: string[]
  sameAs?: string[]
}

const OVERRIDES: Record<string, AuthorOverride> = {
  steven: stevenData,
  erica: ericaData,
  conor: conorData,
}

export function getAuthorOverride(slug: string | undefined): AuthorOverride | null {
  if (!slug) return null
  return OVERRIDES[slug] ?? null
}

export function listAuthorOverrides(): AuthorOverride[] {
  return Object.values(OVERRIDES)
}
