const JSON_HEADERS = { 'Content-Type': 'application/json' }

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'aol.com',
  'protonmail.com',
  'mail.com',
  'live.com',
  'msn.com',
])

export async function onRequestPost({ request, env }) {
  let body
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ name: null }), {
      status: 400,
      headers: JSON_HEADERS,
    })
  }

  const email = body.email
  const domain = typeof email === 'string' ? email.split('@')[1]?.toLowerCase() : null

  if (!domain || FREE_EMAIL_DOMAINS.has(domain)) {
    return new Response(JSON.stringify({ name: null }), {
      status: 400,
      headers: JSON_HEADERS,
    })
  }

  try {
    const logoResponse = await fetch(`https://api.logo.dev/describe/${domain}`, {
      headers: { Authorization: `Bearer ${env.LOGO_DEV_SECRET_KEY}` },
    })

    if (!logoResponse.ok) {
      return new Response(JSON.stringify({ name: null }), { headers: JSON_HEADERS })
    }

    const data = await logoResponse.json()
    return new Response(JSON.stringify({ name: data.name ?? null }), { headers: JSON_HEADERS })
  } catch {
    return new Response(JSON.stringify({ name: null }), { headers: JSON_HEADERS })
  }
}
