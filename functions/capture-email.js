const JSON_HEADERS = { 'Content-Type': 'application/json' }
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/20339446/u73qnbi/'

export async function onRequestPost({ request }) {
  let body
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'invalid JSON' }), {
      status: 400,
      headers: JSON_HEADERS,
    })
  }

  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return new Response(JSON.stringify({ error: 'invalid email' }), {
      status: 400,
      headers: JSON_HEADERS,
    })
  }

  const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({
      email: body.email,
      numberOfRecruiters: body.numberOfRecruiters,
      recruitingFor: body.recruitingFor,
      gclid: body.gclid,
      fbclid: body.fbclid,
      li_fat_id: body.li_fat_id,
      msclkid: body.msclkid,
      utm_source: body.utm_source,
      utm_medium: body.utm_medium,
      utm_campaign: body.utm_campaign,
      utm_term: body.utm_term,
      utm_content: body.utm_content,
    }),
  })

  if (!zapierResponse.ok) {
    return new Response(JSON.stringify({ error: 'upstream error' }), {
      status: 502,
      headers: JSON_HEADERS,
    })
  }

  return new Response(JSON.stringify({ ok: true }), { headers: JSON_HEADERS })
}
