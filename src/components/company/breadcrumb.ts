// Home > <page> BreadcrumbList JSON-LD (same shape as new-www's BreadcrumbSchema).
export const breadcrumb = (name: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pin.com" },
    { "@type": "ListItem", position: 2, name, item: url },
  ],
});
