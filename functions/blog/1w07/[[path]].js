/**
 * Same fallback proxy as /functions/1w07/[[path]].js, scoped to the legacy
 * /blog/1w07/* path that the blog.pin.com -> www.pin.com/blog/* redirect
 * produces when a client hits the old subdomain with a GTM URL.
 */
export { onRequest } from "../../1w07/[[path]].js"
