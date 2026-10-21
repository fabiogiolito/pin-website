// Allowlist of external domains whose outbound links should stay followable.
// Everything NOT listed here gets rel="nofollow noopener" applied by the link
// rewriter (see ./link-rewriter.ts). Entries are matched case-insensitively.
//
// Entry formats:
//   "partner.io"            matches hostname === "partner.io" exactly
//   "github.com/pin-com"    matches hostname === "github.com" AND pathname is "/pin-com" or
//                           starts with "/pin-com/" (whole path segments only, so
//                           "/pin-com-archive" does NOT match)
//   ".gov"                  matches any hostname ending in ".gov" (TLD-tail match)
//
// The "www." prefix on hostnames is treated as equivalent to the apex — "shrm.org"
// automatically matches "www.shrm.org". Other subdomains are explicit only —
// "pin.com" does NOT allowlist "blog.pin.com". Add each subdomain you want
// followed, OR use a TLD-tail entry (".gov" covers *.gov).
export const FOLLOW_DOMAINS: readonly string[] = [
  // --- Government + international bodies (TLD-tail covers everything under) ---
  '.gov',              // bls.gov, eeoc.gov, dol.gov, ftc.gov, nist.gov, etc.
  '.gov.uk',           // UK government
  '.europa.eu',        // ec.europa.eu, eur-lex.europa.eu, eurostat
  '.gc.ca',            // Canadian government
  '.gov.au',           // Australian government

  // --- Academic / research ---
  '.edu',              // harvard.edu, mit.edu, stanford.edu, etc.
  '.ac.uk',            // Oxford, Cambridge, LSE, etc.
  'arxiv.org',
  'ssrn.com',
  'papers.ssrn.com',
  'nature.com',
  'science.org',
  'pnas.org',
  'sciencedirect.com',
  'jstor.org',
  'pubmed.ncbi.nlm.nih.gov',
  'scholar.google.com',

  // --- Multilateral orgs / NGOs ---
  'who.int',
  'oecd.org',
  'worldbank.org',
  'imf.org',
  'un.org',
  'iso.org',
  'ieee.org',
  'acm.org',
  'ilo.org',

  // --- Industry authorities / standards ---
  'shrm.org',
  'atd.org',
  'ahri.com.au',
  'cipd.org',

  // --- Tier-1 journalism ---
  'nytimes.com',
  'wsj.com',
  'washingtonpost.com',
  'reuters.com',
  'apnews.com',
  'bbc.com',
  'bbc.co.uk',
  'ft.com',
  'bloomberg.com',
  'economist.com',
  'theguardian.com',
  'npr.org',
  'pbs.org',
  'axios.com',
  'theatlantic.com',
  'newyorker.com',

  // --- Business / research firms (selective) ---
  'hbr.org',
  'mckinsey.com',
  'bcg.com',
  'bain.com',
  'deloitte.com',
  'pwc.com',
  'gartner.com',
  'forrester.com',
  'idc.com',
  'g2.com',

  // --- Trade / tech press (recruiting-adjacent) ---
  'techcrunch.com',
  'theverge.com',
  'wired.com',
  'arstechnica.com',

  // --- Link exchanges (remove the entry when the exchange ends) ---
  'willo.video/video-interview-software', // Willo, 2026-09-30 (video-interview-platforms)

  // --- Pin-owned ---
  'trust.pin.com',
  'app.pin.com',
  'docs.pin.com',
]

export function shouldFollow(url: string): boolean {
  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return false
  }
  const rawHost = parsed.hostname.toLowerCase()
  const host = rawHost.startsWith('www.') ? rawHost.slice(4) : rawHost
  const path = parsed.pathname

  for (const raw of FOLLOW_DOMAINS) {
    const entry = raw.toLowerCase().trim()
    if (!entry) continue

    // TLD-tail match: ".gov" matches any host ending in ".gov"
    if (entry.startsWith('.')) {
      if (host.endsWith(entry)) return true
      continue
    }

    const slash = entry.indexOf('/')
    if (slash === -1) {
      if (host === entry) return true
    } else {
      const entryHost = entry.slice(0, slash)
      const entryPath = entry.slice(slash).replace(/\/+$/, '')
      const lowerPath = path.toLowerCase()
      if (host === entryHost && (lowerPath === entryPath || lowerPath.startsWith(entryPath + '/'))) {
        return true
      }
    }
  }
  return false
}
