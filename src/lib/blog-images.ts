// The -900w variants are generated only for local blog heroes, not Ghost uploads.
export function getBlogImageMobile(src: string | null | undefined): string | null {
  return src && /^\/images\/blog\/.+\.webp$/i.test(src)
    ? src.replace(/\.webp$/i, '-900w.webp')
    : null
}
