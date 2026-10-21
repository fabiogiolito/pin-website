import { shouldFollow } from './link-policy'

// Rewrites outbound <a> tags to:
//   1. Strip any inherited ?ref=pin-com.ghost.io (Ghost legacy)
//   2. For external links, append ?ref=pin.com + UTM attribution (except
//      Wayback snapshots, see WAYBACK_HOST_RE)
//   3. Apply rel="nofollow noopener" unless host is in FOLLOW_DOMAINS
//   4. Leave internal pin.com links untouched (except ghost-ref stripping)
//
// Idempotent: if a link already carries ?ref=pin.com it is left alone, so this
// can run multiple times (e.g. once during post render, once at build:done)
// without double-tagging.

export interface RewriteOptions {
  // When provided, outbound links also get &utm_source=pin.com&utm_content=<sourceSlug>
  // so referrer logs can attribute clicks to a specific page.
  sourceSlug?: string
}

const PIN_HOST_RE = /^https?:\/\/([a-z0-9-]+\.)*pin\.com(\/|$|\?|#)/i

// Wayback snapshot URLs embed the archived URL in their path, so an appended
// query string becomes part of the archived target and the snapshot 404s.
const WAYBACK_HOST_RE = /^https?:\/\/([a-z0-9-]+\.)*archive\.org(\/|$|\?|#)/i

function stripGhostRef(urlTail: string): string {
  // Remove ?ref=pin-com.ghost.io or &ref=pin-com.ghost.io, then tidy "?" / "?&"
  let cleaned = urlTail.replace(/[?&]ref=pin-com\.ghost\.io/gi, '')
  cleaned = cleaned.replace(/\?&/, '?')
  cleaned = cleaned.replace(/\?(#|$)/, '$1')
  return cleaned
}

function hasPinRef(urlTail: string): boolean {
  return /[?&]ref=pin\.com(&|#|$)/i.test(urlTail)
}

function appendRef(urlTail: string, sourceSlug?: string): string {
  // Separate query from hash so we can append safely
  const hashIdx = urlTail.indexOf('#')
  const hash = hashIdx === -1 ? '' : urlTail.slice(hashIdx)
  const withoutHash = hashIdx === -1 ? urlTail : urlTail.slice(0, hashIdx)

  const sep = withoutHash.includes('?') ? '&' : '?'
  let params = `ref=pin.com&utm_source=pin.com&utm_medium=referral`
  if (sourceSlug) {
    params += `&utm_content=${encodeURIComponent(sourceSlug)}`
  }
  return `${withoutHash}${sep}${params}${hash}`
}

export function rewriteExternalLinks(
  html: string,
  opts: RewriteOptions = {},
): string {
  if (!html) return html
  const { sourceSlug } = opts

  return html.replace(
    // Multi-line safe: dotAll via [\s\S] on attribute section.
    // Captures: before-href attrs, protocol, url tail, after-href attrs.
    /<a([^>]*?\shref=["'])(https?:\/\/)([^"']+)(["'][^>]*)>/gi,
    (_match, before, protocol, urlTail, after) => {
      const cleanedTail = stripGhostRef(urlTail)
      const url = protocol + cleanedTail

      // Internal pin.com: only strip ghost ref, leave rest alone
      if (PIN_HOST_RE.test(url)) {
        return `<a${before}${protocol}${cleanedTail}${after}>`
      }

      // Skip attribution if already tagged (idempotency) or on a Wayback snapshot
      const finalTail = hasPinRef(cleanedTail) || WAYBACK_HOST_RE.test(url)
        ? cleanedTail
        : appendRef(cleanedTail, sourceSlug)
      const finalUrl = protocol + finalTail

      // Preserve author-provided rel
      const hasExistingRel = /\srel\s*=/i.test(before) || /\srel\s*=/i.test(after)
      if (hasExistingRel) {
        return `<a${before}${finalUrl}${after}>`
      }

      const relValue = shouldFollow(protocol + cleanedTail) ? 'noopener' : 'nofollow noopener'
      return `<a rel="${relValue}"${before}${finalUrl}${after}>`
    },
  )
}
