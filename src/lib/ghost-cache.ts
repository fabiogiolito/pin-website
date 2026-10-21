import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Disk-cache for Ghost API calls. Active in dev only — production builds
// (NODE_ENV=production) and any run with GHOST_CACHE_DISABLE=1 always fetch
// live. The repo root resolves the same whether this is imported from
// src/lib/ghost.ts or astro.config.mjs.
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const CACHE_DIR = path.join(REPO_ROOT, '.cache', 'ghost')

function isCacheActive(): boolean {
  if (process.env.GHOST_CACHE_DISABLE === '1') return false
  return process.env.NODE_ENV !== 'production'
}

function cachePath(key: string): string {
  return path.join(CACHE_DIR, `${key}.json`)
}

export async function withDiskCache<T>(key: string, fn: () => Promise<T>): Promise<T> {
  if (!isCacheActive()) return fn()

  const file = cachePath(key)
  if (existsSync(file)) {
    try {
      return JSON.parse(readFileSync(file, 'utf-8')) as T
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.warn(`[ghost-cache] failed to read ${key}: ${msg} — refetching`)
    }
  }

  const result = await fn()

  try {
    mkdirSync(CACHE_DIR, { recursive: true })
    writeFileSync(file, JSON.stringify(result), 'utf-8')
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.warn(`[ghost-cache] failed to write ${key}: ${msg} — continuing`)
  }

  return result
}
