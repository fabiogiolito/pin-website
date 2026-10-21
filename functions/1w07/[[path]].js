/**
 * Fallback proxy for /1w07/* -> www.googletagmanager.com
 *
 * Production traffic is normally handled by a Cloudflare Origin Rule that
 * rewrites the host header to googletagmanager.com. This Pages Function
 * catches requests that slip past that rule (e.g. blog.pin.com/1w07/* gets
 * 301'd to www.pin.com/blog/1w07/* which the rule doesn't match) so they
 * return real GTM content instead of a 404.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url)
  const upstreamPath = url.pathname.replace(/^.*\/1w07\//, "/")

  // Bare /1w07/ (no sub-path) is never a real GTM request — it's bots/crawlers
  // probing the directory. Short-circuit with a 204 so we don't round-trip to
  // googletagmanager.com just to return a 404.
  if (upstreamPath === "/") {
    return new Response(null, { status: 204 })
  }

  const upstream = "https://www.googletagmanager.com" + upstreamPath + url.search

  const upstreamRes = await fetch(upstream, {
    method: context.request.method,
    headers: {
      "User-Agent": context.request.headers.get("User-Agent") || "",
      "Accept": context.request.headers.get("Accept") || "*/*",
      "Accept-Encoding": context.request.headers.get("Accept-Encoding") || "",
    },
    redirect: "follow",
  })

  const res = new Response(upstreamRes.body, upstreamRes)
  res.headers.set("Cache-Control", "private, max-age=900")
  res.headers.set("Cross-Origin-Resource-Policy", "cross-origin")
  res.headers.delete("Set-Cookie")
  return res
}
