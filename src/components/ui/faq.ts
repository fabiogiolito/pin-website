// FAQPage JSON-LD for a list of question/answer pairs.
export function faqJsonLd(items: { question: string; answer: string }[], id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id && { "@id": id }),
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer.replace(/<[^>]+>/g, "") },
    })),
  };
}
