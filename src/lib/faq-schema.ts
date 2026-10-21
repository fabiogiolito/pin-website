/**
 * Extracts FAQ Q&A pairs from Ghost HTML and returns FAQPage JSON-LD.
 * Pattern: H2 "Frequently Asked Questions" → H3 question → <p> answer pairs.
 */
export function extractFaqJsonLd(html: string): Record<string, any> | null {
  const faqHeading = html.match(
    /<h2[^>]*>(?:[^<]|<(?!\/h2>)[^>]*>)*(?:Frequently Asked Questions|FAQ)(?:[^<]|<(?!\/h2>)[^>]*>)*<\/h2>/i
  )
  if (!faqHeading) return null

  const afterFaq = html.slice(faqHeading.index! + faqHeading[0].length)
  const nextH2 = afterFaq.match(/<h2[^>]*>/)
  const faqSection = nextH2 ? afterFaq.slice(0, nextH2.index!) : afterFaq

  const parts = faqSection.split(/(<h3[^>]*>.*?<\/h3>)/s)
  const pairs: { question: string; answer: string }[] = []
  let currentQ: string | null = null

  for (const part of parts) {
    const h3 = part.match(/<h3[^>]*>(.*?)<\/h3>/s)
    if (h3) {
      currentQ = stripTags(h3[1])
    } else if (currentQ) {
      const paragraphs = [...part.matchAll(/<p[^>]*>(.*?)<\/p>/gs)]
      const answer = paragraphs.map((m) => stripTags(m[1])).join(' ').trim()
      if (answer) pairs.push({ question: currentQ, answer })
      currentQ = null
    }
  }

  if (pairs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map((p) => ({
      '@type': 'Question',
      name: p.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: p.answer,
      },
    })),
  }
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}
