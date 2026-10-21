/**
 * /__geo — returns visitor geo (country + regionCode) from request.cf and
 * stamps a cf-visitor-region cookie so subsequent page loads can read it
 * synchronously. Replaces the old _middleware.js geo stamp, which made every
 * HTML response uncacheable at the Cloudflare edge.
 *
 * Response is JSON: { country: "US", region: "US-CA" }. Always no-store so
 * the edge never caches it (different visitors → different geo).
 */
const HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "private, no-store",
  "CDN-Cache-Control": "no-store",
}

export async function onRequest(context) {
  const country = context.request.cf?.country ?? ""
  const regionCode = context.request.cf?.regionCode ?? ""
  const region = country && regionCode ? `${country}-${regionCode}` : ""

  const headers = new Headers(HEADERS)
  if (region) {
    headers.append(
      "Set-Cookie",
      `cf-visitor-region=${region}; Path=/; Max-Age=86400; SameSite=Lax`
    )
  }

  return new Response(JSON.stringify({ country, region }), { headers })
}
