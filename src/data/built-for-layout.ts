// Per-slug section order for /built-for/[slug]. Hero is always first and the
// CTA band always last. Sections omitted here don't render on that page.

export type Section =
  | "stats"
  | "journey"
  | "useCases"
  | "regulations"
  | "autopilot"
  | "comparison"
  | "testimonial"
  | "integrations"
  | "faq"
  | "related";

// Agencies: money and proof first, then the machine, then the comparison.
const agencies: readonly Section[] = ["stats", "journey", "useCases", "autopilot", "comparison", "testimonial", "integrations", "faq", "related"];

// Founders: story over metrics, no comparison shopping.
const founders: readonly Section[] = ["journey", "useCases", "testimonial", "autopilot", "stats", "integrations", "faq", "related"];

// Hiring managers: "is this for me, and does it work with my tools?"
const hiringManagers: readonly Section[] = ["journey", "useCases", "integrations", "testimonial", "autopilot", "stats", "faq", "related"];

// Recruiting teams: ops-minded. Show the machine, then the business case.
const recruitingTeams: readonly Section[] = ["stats", "journey", "autopilot", "useCases", "integrations", "comparison", "testimonial", "faq", "related"];

// Tech companies: product-driven; the journey is the hook.
const techCompanies: readonly Section[] = ["stats", "journey", "useCases", "autopilot", "integrations", "comparison", "testimonial", "faq", "related"];

// Regulated industries: compliance is why they're on the page.
const industry: readonly Section[] = ["regulations", "journey", "useCases", "stats", "autopilot", "integrations", "comparison", "testimonial", "faq", "related"];

export const layouts: Record<string, readonly Section[]> = {
  agencies,
  founders,
  "hiring-managers": hiringManagers,
  "recruiting-teams": recruitingTeams,
  "tech-companies": techCompanies,
  cybersecurity: industry,
  healthcare: industry,
  fintech: industry,
};
