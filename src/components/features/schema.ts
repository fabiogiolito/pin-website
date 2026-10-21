// JSON-LD shared by the feature pages, ported from new-www's features/* pages.
const BASE = "https://www.pin.com";

export function featurePageSchema(o: { name: string; path: string; description: string; crumb: string; dateModified: string }) {
  const url = `${BASE}${o.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: o.name,
      url,
      description: o.description,
      dateModified: o.dateModified,
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".hero-subtitle"] },
      mainEntity: { "@id": `${BASE}/#software` },
      isPartOf: { "@id": `${BASE}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: o.crumb, item: url },
      ],
    },
  ];
}

export function softwareAppSchema(name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Recruiting Software",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "99", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "418", bestRating: "5" },
    publisher: { "@type": "Organization", name: "Love Thy Recruiting, Inc.", url: BASE },
  };
}
