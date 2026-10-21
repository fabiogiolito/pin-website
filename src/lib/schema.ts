// Canonical JSON-LD nodes for Pin. Import these from any page that wants to
// reference the same Organization / WebSite / SoftwareApplication identity.
//
// Rationale: Google treats nodes sharing an `@id` across a site as the same
// entity, so keeping one source of truth propagates schema upgrades
// (alternateName, knowsAbout, aggregateRating, offers, etc.) everywhere.

export const ORGANIZATION_ID = "https://www.pin.com/#organization"
export const WEBSITE_ID = "https://www.pin.com/#website"
export const SOFTWARE_ID = "https://www.pin.com/#software"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Pin",
  alternateName: "Pin Recruiting",
  legalName: "Love Thy Recruiting, Inc.",
  url: "https://www.pin.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.pin.com/images/logo-150.png",
  },
  image: "https://www.pin.com/images/logo-150.png",
  description:
    "Pin is an AI recruitment platform and AI recruiting agent that automates candidate sourcing, AI candidate matching, skills-based screening, automated candidate outreach, and AI interview scheduling. A LinkedIn recruiter alternative used by hiring teams, recruiting agencies, and founders. Searches 850M+ candidate profiles and integrates with 120+ ATS platforms.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    "@id": "https://www.pin.com/#person-steven-lu",
    name: "Steven Lu",
    jobTitle: "CEO & Co-Founder",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@pin.com",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://www.pin.com/book-a-demo",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Santa Monica Blvd",
    addressLocality: "West Hollywood",
    addressRegion: "CA",
    postalCode: "90069",
    addressCountry: "US",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 12,
  },
  sameAs: [
    "https://www.linkedin.com/company/pindotcom",
    "https://x.com/pinrecruiting",
    "https://www.tiktok.com/@pinrecruiting",
    "https://www.instagram.com/pinrecruiting",
    "https://www.facebook.com/pinrecruiting",
    "https://www.crunchbase.com/organization/pin-fca2",
    "https://www.g2.com/products/pin/reviews",
  ],
  knowsAbout: [
    "AI recruiting",
    "AI sourcing",
    "AI candidate sourcing",
    "AI candidate matching",
    "Recruiter sourcing tools",
    "Automated recruiting",
    "Recruiting automation software",
    "AI recruiting tools",
    "AI hiring assistant",
    "Automated candidate outreach",
    "Candidate database search",
    "AI interview scheduling",
    "Recruitment agency software",
    "AI talent acquisition",
    "AI recruiting agent",
    "Agentic AI recruiting",
    "High-volume hiring AI",
    "Skills-based hiring AI",
    "Automated recruiting outreach",
    "Applicant tracking systems",
  ],
  slogan: "AI-powered recruiting, simplified",
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Pin",
  url: "https://www.pin.com",
  description:
    "Pin is AI recruiting tools and recruiting automation software for AI candidate sourcing, automated candidate outreach, and AI interview scheduling. A LinkedIn recruiter alternative used by 10,000+ users.",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en-US",
}

export const pinSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": ["Product", "SoftwareApplication"],
  "@id": SOFTWARE_ID,
  name: "Pin",
  brand: { "@id": ORGANIZATION_ID },
  url: "https://www.pin.com",
  description:
    "Pin is an AI recruiting agent and recruiting automation software that automates AI candidate sourcing from 850M+ profiles, AI candidate matching, skills-based hiring, automated candidate outreach, and AI interview scheduling. A LinkedIn recruiter alternative for automated recruiting, high-volume hiring, and AI talent acquisition. Integrates with 120+ ATS platforms. SOC 2 Type 2 compliant.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI Recruiting Tools",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "179",
    priceCurrency: "USD",
    offerCount: 4,
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        description:
          "Free AI recruiting plan for individuals trying Pin. 5 contact lookup credits per week, 1 job position, 1 AI agent, email-only outreach sequences, and 3 candidate searches per day.",
        price: "0",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.pin.com/pricing/",
      },
      {
        "@type": "Offer",
        name: "Solo",
        description:
          "AI recruiting tools for individual recruiters. 1 seat, 500 contact lookup credits per month, AI candidate sourcing, candidate database search, automated candidate outreach, AI interview scheduling, unlimited job positions.",
        price: "99",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.pin.com/pricing/",
      },
      {
        "@type": "Offer",
        name: "Professional",
        description:
          "Recruiter sourcing tools for growing teams. Unlimited seats, 500 contact lookup credits per user per month, AI candidate matching, skills-based hiring AI, automated recruiting outreach, ATS integration, team collaboration.",
        price: "135",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.pin.com/pricing/",
      },
      {
        "@type": "Offer",
        name: "Business",
        description:
          "Custom recruiting automation software for scaling organizations. Unlimited seats, unlimited contact lookup credits, high-volume hiring AI, agentic AI recruiting workflows, recruitment agency software features, premium ATS integrations, dedicated account manager. Contact us for pricing.",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.pin.com/pricing/",
      },
    ],
  },
  featureList: [
    "AI candidate sourcing — search 850M+ profiles with natural language candidate database search",
    "AI candidate matching — skills-based hiring AI ranks candidates beyond keyword matching",
    "Automated candidate outreach — multi-channel sequences with a unified inbox",
    "AI interview scheduling — automated calendar coordination with candidates",
    "AI recruiting agent — agentic AI recruiting automates the full hiring workflow end-to-end",
    "Recruiter sourcing tools — AI sourcing with unified multi-channel inbox",
    "Recruiting automation software — automated recruiting from sourcing to placement",
    "High-volume hiring AI — scale hiring across multiple roles and locations simultaneously",
    "120+ ATS integrations (Greenhouse, Lever, Ashby, Bullhorn, and more)",
    "Recruitment agency software — multi-client management for agencies",
    "LinkedIn recruiter alternative — multi-platform sourcing vs LinkedIn-only",
    "Contact lookup credits (email and phone discovery)",
    "SOC 2 Type 2 compliant with annual third-party audits",
  ],
  screenshot: "https://www.pin.com/images/compare/hero-screenshot.webp",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    ratingCount: "27",
    reviewCount: "27",
    url: "https://www.g2.com/products/pin/reviews",
  },
  author: { "@id": ORGANIZATION_ID },
}
