import BooleanSearchGenerator from './BooleanSearchGenerator.astro';
import CostPerHireCalculator from './CostPerHireCalculator.astro';
import TimeToHireCalculator from './TimeToHireCalculator.astro';
import PlacementFeeCalculator from './PlacementFeeCalculator.astro';
import LinkedInSwapCalculator from './LinkedInSwapCalculator.astro';
import XRaySearchBuilder from './XRaySearchBuilder.astro';
import InterviewScorecardBuilder from './InterviewScorecardBuilder.astro';
import OfferLetterBuilder from './OfferLetterBuilder.astro';
import ColdOutreachEmailBuilder from './ColdOutreachEmailBuilder.astro';
import RejectionEmailGenerator from './RejectionEmailGenerator.astro';
import JdBiasScanner from './JdBiasScanner.astro';

// Registry of blog-embeddable tools. The key matches the `data-pin-tool` attribute
// on the placeholder `<div>` in post HTML. PostLayout.astro reads this to swap
// placeholders for server-rendered components at build time.
export const toolRegistry = {
  'boolean-search-generator': BooleanSearchGenerator,
  'cost-per-hire-calculator': CostPerHireCalculator,
  'time-to-hire-calculator': TimeToHireCalculator,
  'placement-fee-calculator': PlacementFeeCalculator,
  'linkedin-swap-calculator': LinkedInSwapCalculator,
  'x-ray-search-builder': XRaySearchBuilder,
  'interview-scorecard-builder': InterviewScorecardBuilder,
  'offer-letter-builder': OfferLetterBuilder,
  'cold-outreach-email-builder': ColdOutreachEmailBuilder,
  'rejection-email-generator': RejectionEmailGenerator,
  'jd-bias-scanner': JdBiasScanner,
} as const;

export type ToolSlug = keyof typeof toolRegistry;

// JSON-LD schema map, indexed by the same slug. [slug].astro appends a
// SoftwareApplication entry to the page schema whenever the post HTML embeds
// the corresponding tool placeholder. `tocLabel` is the shorter text shown in
// the post sidebar Table of Contents.
export const toolSchemas: Record<ToolSlug, {
  name: string;
  description: string;
  applicationCategory: string;
  tocLabel: string;
}> = {
  'boolean-search-generator': {
    name: 'Boolean Search Generator for Dice and LinkedIn',
    description: 'Free Boolean search generator. Pick a role, toggle skills, and copy a Dice- or LinkedIn-ready Boolean string in seconds.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Boolean Search Generator',
  },
  'cost-per-hire-calculator': {
    name: 'Cost-per-Hire Calculator',
    description: 'Free cost-per-hire calculator. Add up internal + external hiring costs and see how your $/hire compares to the Pin customer median of $2,800.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Cost-per-Hire Calculator',
  },
  'time-to-hire-calculator': {
    name: 'Time-to-Hire Calculator',
    description: 'Free time-to-hire calculator. Enter days per funnel stage and compare your total to Pin\'s 14-day benchmark and SHRM\'s 42-day industry median.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Time-to-Hire Calculator',
  },
  'placement-fee-calculator': {
    name: 'Placement Fee Calculator',
    description: 'Free placement fee calculator for agency recruiters. Salary × fee % + split + fallout reserve → net take-home and annualized billings.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Placement Fee Calculator',
  },
  'linkedin-swap-calculator': {
    name: 'LinkedIn Recruiter vs Pin Cost Calculator',
    description: 'Free LinkedIn Recruiter vs. Pin cost calculator. Enter your seats and contract term to see 3-year savings and a copy-ready procurement summary.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'LinkedIn Cost Calculator',
  },
  'x-ray-search-builder': {
    name: 'X-Ray Search Builder',
    description: 'Free X-Ray search builder. Generate Google site: queries that surface candidates on LinkedIn, GitHub, Stack Overflow, Reddit, Wellfound, Xing, and more.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'X-Ray Search Builder',
  },
  'interview-scorecard-builder': {
    name: 'Interview Scorecard Builder',
    description: 'Free interview scorecard and rubric generator. Pick traits, set a scoring scale, and produce a structured scorecard each panelist fills in independently.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Scorecard Builder',
  },
  'offer-letter-builder': {
    name: 'Offer Letter Builder',
    description: 'Free offer letter generator with per-state at-will language. Fill in candidate, role, comp package, and copy a ready-to-send letter in seconds.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Offer Letter Builder',
  },
  'cold-outreach-email-builder': {
    name: 'Cold Outreach Email Builder',
    description: 'Free recruiter outreach email generator. Get 3 email variants + 10 subject lines scored by expected reply rate based on role, company, and candidate signals.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Outreach Email Builder',
  },
  'rejection-email-generator': {
    name: 'Rejection Email Generator',
    description: 'Free candidate rejection email generator. Pick stage and reason, get a polite draft plus a legally-risky-phrase check to avoid EEOC pitfalls.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'Rejection Email Generator',
  },
  'jd-bias-scanner': {
    name: 'JD Bias Scanner',
    description: 'Free job description bias scanner. Highlights gendered, ageist, ableist, jargon, and exclusionary language with suggested replacements, plus readability and keyword coverage.',
    applicationCategory: 'BusinessApplication',
    tocLabel: 'JD Bias Scanner',
  },
};

// Anchor ID convention used by both the tool component's <h2 id=...> and the
// TOC entry link. Kept in one place so the two cannot drift.
export function toolAnchorId(slug: ToolSlug): string {
  return `pin-tool-${slug}`;
}

// Extract slugs of tools embedded in a given post's HTML. Used by PostLayout
// and [slug].astro to decide what to render and what schema to emit.
// Matches both the canonical text token `[tool/SLUG]` and the legacy
// `data-pin-tool="SLUG"` div attribute.
export function detectEmbeddedTools(html: string): ToolSlug[] {
  const re = /\[tool\/([a-z0-9-]+)\]|data-pin-tool="([a-z0-9-]+)"/g;
  const found = new Set<ToolSlug>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const slug = (m[1] || m[2]) as string;
    if (slug in toolRegistry) found.add(slug as ToolSlug);
  }
  return [...found];
}
