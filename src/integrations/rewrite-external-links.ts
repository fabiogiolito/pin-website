import type { AstroIntegration } from 'astro'
import { fileURLToPath } from 'node:url'
import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { rewriteExternalLinks } from '../lib/link-rewriter'

// Derive a UTM source slug from a built HTML file's relative path.
//   dist/index.html                       → "home"
//   dist/pricing/index.html               → "pricing"
//   dist/blog/foo/index.html              → "blog-foo"
//   dist/compare/pin-vs-x/index.html      → "compare-pin-vs-x"
//   dist/404.html                         → "404"
function deriveSourceSlug(relPath: string): string {
  const posixPath = relPath.split(path.sep).join('/')
  const withoutIndex = posixPath.replace(/\/index\.html$/, '').replace(/\.html$/, '')
  if (!withoutIndex || withoutIndex === 'index') return 'home'
  return withoutIndex.replace(/\//g, '-')
}

async function walkHtml(dir: string, acc: string[]): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walkHtml(full, acc)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      acc.push(full)
    }
  }
  return acc
}

export default function rewriteExternalLinksIntegration(): AstroIntegration {
  return {
    name: 'pin-rewrite-external-links',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const distDir = fileURLToPath(dir)
        try {
          await stat(distDir)
        } catch {
          logger.warn(`dist dir not found at ${distDir}; skipping link rewrite`)
          return
        }

        const files = await walkHtml(distDir, [])
        let touched = 0
        for (const file of files) {
          const rel = path.relative(distDir, file)
          const sourceSlug = deriveSourceSlug(rel)
          const original = await readFile(file, 'utf-8')
          const rewritten = rewriteExternalLinks(original, { sourceSlug })
          if (rewritten !== original) {
            await writeFile(file, rewritten, 'utf-8')
            touched++
          }
        }
        logger.info(`rewrote outbound links in ${touched}/${files.length} HTML files`)
      },
    },
  }
}
