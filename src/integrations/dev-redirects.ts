import type { AstroIntegration } from 'astro'
import { readFileSync, statSync } from 'node:fs'
import path from 'node:path'

/**
 * Serve public/_redirects on the Astro dev server so redirects can be tested
 * locally without deploying to Cloudflare Pages.
 *
 * Supported subset of the Cloudflare Pages format:
 *   /from /to [status]                  — literal match, optional status (default 301)
 *   /from/* /to/:splat [status]         — wildcard with :splat substitution
 *   /blog/:slug /blog/:slug/ [status]   — single-segment placeholders (:name matches [^/]+)
 *   # comment                           — ignored
 *   <blank line>                        — ignored
 *
 * Not supported (yet): country/language conditions, query-string matching.
 *
 * The file is re-read on every request so edits take effect without a restart.
 * This only runs in `astro dev` — the production build output is served by
 * Cloudflare Pages, which reads `_redirects` natively.
 */

type Rule = {
  from: string
  to: string
  status: number
  splat: boolean
  regex?: RegExp
  placeholders?: string[]
}

function buildPlaceholderRegex(from: string): { regex: RegExp; names: string[] } | null {
  if (!/:[A-Za-z_]/.test(from)) return null
  const names: string[] = []
  const pattern = from
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/:([A-Za-z_][A-Za-z0-9_]*)/g, (_, name) => {
      names.push(name)
      return '([^/]+)'
    })
  return { regex: new RegExp('^' + pattern + '$'), names }
}

function parseRedirects(text: string): Rule[] {
  const rules: Rule[] = []
  for (const raw of text.split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    const parts = line.split(/\s+/)
    if (parts.length < 2) continue
    const [from, to, statusRaw] = parts
    const status = statusRaw ? Number.parseInt(statusRaw, 10) : 301
    if (!Number.isFinite(status)) continue
    const splat = from.endsWith('/*')
    const compiled = splat ? null : buildPlaceholderRegex(from)
    rules.push({
      from,
      to,
      status,
      splat,
      regex: compiled?.regex,
      placeholders: compiled?.names,
    })
  }
  return rules
}

function matchRule(rules: Rule[], reqPath: string): { location: string; status: number } | null {
  for (const rule of rules) {
    if (rule.splat) {
      const prefix = rule.from.slice(0, -2) // drop /*
      if (reqPath === prefix || reqPath.startsWith(prefix + '/')) {
        const rest = reqPath.slice(prefix.length).replace(/^\//, '')
        const location = rule.to.replace(':splat', rest)
        return { location, status: rule.status }
      }
    } else if (rule.regex && rule.placeholders) {
      const m = reqPath.match(rule.regex)
      if (m) {
        let location = rule.to
        rule.placeholders.forEach((name, i) => {
          location = location.replace(
            new RegExp(':' + name + '(?![A-Za-z0-9_])', 'g'),
            m[i + 1],
          )
        })
        return { location, status: rule.status }
      }
    } else if (reqPath === rule.from) {
      return { location: rule.to, status: rule.status }
    }
  }
  return null
}

export default function devRedirects(): AstroIntegration {
  return {
    name: 'pin-dev-redirects',
    hooks: {
      'astro:server:setup': ({ server, logger }) => {
        const redirectsPath = path.resolve(process.cwd(), 'public/_redirects')

        let mtime = 0
        let rules: Rule[] = []

        const reload = () => {
          try {
            const stats = statSync(redirectsPath)
            if (stats.mtimeMs === mtime) return
            mtime = stats.mtimeMs
            rules = parseRedirects(readFileSync(redirectsPath, 'utf-8'))
            logger.info(`loaded ${rules.length} redirect rule(s) from public/_redirects`)
          } catch (err) {
            if ((err as NodeJS.ErrnoException).code !== 'ENOENT') {
              logger.warn(`could not read public/_redirects: ${(err as Error).message}`)
            }
            rules = []
          }
        }

        reload()

        server.middlewares.use((req, res, next) => {
          reload()
          if (!req.url) return next()
          // Strip query string for matching (CF Pages also ignores it by default).
          const reqPath = req.url.split('?')[0]
          const hit = matchRule(rules, reqPath)
          if (!hit) return next()
          res.statusCode = hit.status
          res.setHeader('Location', hit.location)
          res.end()
        })

        // Move our middleware to the front of the Connect stack so it runs
        // BEFORE Astro's page handler. Without this, URLs Astro can serve
        // (e.g. /blog/:slug matched by [slug].astro) get a 200 before our
        // redirect rule ever gets a chance to fire — only 404s would fall
        // through. The stack mutation is a documented Connect internal.
        const added = server.middlewares.stack.pop()
        if (added) server.middlewares.stack.unshift(added)
      },
    },
  }
}
