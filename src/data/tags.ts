// Per-tag SEO metadata for /blog/tag/[slug]/ pages.
//
// Any tag that appears on a post but is NOT in this registry renders with the
// default "Learn" header and no intro copy. Add an entry here when you want a
// tag page to rank for its own head term (e.g. "candidate sourcing").
//
// - h1: overrides the "Learn" heading at the top of the page
// - description: short subtitle under the h1 (shown to users)
// - intro: HTML block rendered above the post grid (full SEO copy, ~100-200 words)
// - metaDescription: overrides the <meta name="description"> — used by Google
//   in the SERP snippet. Keep under 160 chars.

export interface TagMeta {
  h1?: string
  description?: string
  intro?: string
  metaDescription?: string
}

export const tagMeta: Record<string, TagMeta> = {
  'ats-pricing': {
    h1: 'ATS Pricing',
    description: 'Real pricing for every major ATS and recruiting platform.',
    metaDescription: 'ATS pricing guides from Pin: real cost breakdowns for Ashby, Greenhouse, Workday, Oracle Taleo, and dozens more. What vendors quote vs. what teams actually pay.',
    intro: `<p>ATS vendors rarely publish full pricing. These guides reconstruct what teams actually pay for each major applicant tracking system, based on buyer-reported data from PriceLevel, Vendr, G2, and direct customer disclosures. Every guide includes tier breakdowns, hidden costs, and the alternatives to consider before signing.</p>`,
  },
  'ats-software': {
    h1: 'ATS and Recruiting Software',
    description: 'Applicant tracking systems, recruiting platforms, and the comparisons that matter.',
    metaDescription: 'ATS and recruiting software guides from Pin: platform comparisons, feature breakdowns, and head-to-head reviews to help you pick the right stack.',
    intro: `<p>The recruiting software market is crowded and noisy. These guides cut through vendor marketing with head-to-head comparisons, feature breakdowns, and honest assessments of which ATS or recruiting platform fits teams of different sizes and use cases.</p>`,
  },
  'ai-recruiting': {
    h1: 'AI Recruiting',
    description: 'AI agents, autonomous workflows, and how artificial intelligence is reshaping hiring.',
    metaDescription: 'AI recruiting guides from Pin: how AI agents source candidates, screen profiles, and automate outreach. Practical breakdowns, not hype.',
    intro: `<p>AI recruiting is moving from novelty to default. These guides cover autonomous AI agents, AI-powered sourcing, candidate matching, screening workflows, and how teams are actually deploying AI across the recruiting funnel — what works, what does not, and how to evaluate it.</p>`,
  },
  'sourcing': {
    h1: 'Sourcing and Candidate Search',
    description: 'Frameworks, tactics, and tools for finding candidates at scale.',
    metaDescription: 'Candidate sourcing guides from Pin: Boolean strings, AI sourcing, channel strategy, LinkedIn tactics, and the tools that find passive talent.',
    intro: `<p>Candidate sourcing is the practice of proactively identifying and engaging people who fit a role, often before they apply. These guides cover Boolean search, X-ray search, semantic search, AI sourcing tools, LinkedIn tactics, and channel diversification beyond the big job boards.</p>`,
  },
  'outreach': {
    h1: 'Outreach and Candidate Engagement',
    description: 'Email, LinkedIn, and multi-channel outreach that gets replies.',
    metaDescription: 'Recruiting outreach guides from Pin: cold email templates, subject lines, candidate nurturing, and the response-rate tactics that actually work.',
    intro: `<p>Getting passive candidates to reply is a discipline of its own. These guides cover cold email templates, LinkedIn InMail, multi-channel sequencing, candidate nurturing, and the experiments that move response rates from 5 percent to 40 percent.</p>`,
  },
  'interviews': {
    h1: 'Interviews and Assessment',
    description: 'Interview questions, scorecards, structured evaluation, and assessment tools.',
    metaDescription: 'Interview and assessment guides from Pin: behavioral questions, structured scorecards, panel processes, and tools that reduce hiring bias.',
    intro: `<p>A consistent interview process turns hiring from gut-feel into a repeatable system. These guides cover behavioral and technical interview questions, structured scorecards, panel processes, and the assessment tools that help teams evaluate candidates fairly.</p>`,
  },
  'hiring-metrics': {
    h1: 'Hiring Metrics and Benchmarks',
    description: 'Cost-per-hire, time-to-hire, funnel data, and the KPIs recruiters actually need.',
    metaDescription: 'Hiring metrics and benchmarks from Pin: cost per hire, time to hire, funnel conversion rates, and the KPIs that prove recruiting ROI.',
    intro: `<p>Good recruiting teams measure what matters. These guides cover cost per hire, time to hire, pipeline conversion, quality of hire, and the benchmark data to compare against. Built for talent leaders who need to justify spend and prioritize where to invest next.</p>`,
  },
  'agencies': {
    h1: 'Recruiting Agencies, Staffing, and RPO',
    description: 'How agencies, staffing firms, and RPO providers actually work.',
    metaDescription: 'Recruiting agency guides from Pin: how top staffing firms, executive search, and RPO providers work, what they cost, and how to pick one.',
    intro: `<p>Recruiting agencies, staffing firms, and RPO providers fill a specific gap for teams that cannot hire fast enough in-house. These guides cover agency pricing models, commission structures, executive search, RPO evaluation, and how to choose the right partner for each type of role.</p>`,
  },
  'compliance-dei': {
    h1: 'Compliance, Legal, and DEI',
    description: 'GDPR, the EU AI Act, background checks, and DEI in recruiting.',
    metaDescription: 'Compliance and DEI guides from Pin: GDPR recruiting, EU AI Act, background check tools, and inclusive hiring strategies that actually reduce bias.',
    intro: `<p>Hiring teams are now operating under overlapping legal regimes: GDPR, the EU AI Act, EEOC guidance, and state-level pay transparency laws. These guides cover compliance essentials, background check vendors, inclusive job descriptions, and the DEI tactics that hold up under scrutiny.</p>`,
  },
  'industry-roles': {
    h1: 'Industry and Role Guides',
    description: 'How to recruit for specific industries, roles, and talent pools.',
    metaDescription: 'Industry and role-specific recruiting guides from Pin: how to hire software engineers, cybersecurity talent, healthcare workers, fintech, and more.',
    intro: `<p>Every industry and role has its own talent market, channels, and closing dynamics. These guides cover hiring for engineering, cybersecurity, healthcare, fintech, manufacturing, executive search, and the specialist roles in between. Written for recruiters who need vertical-specific playbooks.</p>`,
  },
  'employer-branding': {
    h1: 'Employer Branding and EVP',
    description: 'Building an employer brand and employee value proposition that attracts talent.',
    metaDescription: 'Employer branding guides from Pin: how to build an EVP, strengthen your Glassdoor presence, run referral programs, and retain the talent you hire.',
    intro: `<p>Employer brand is the long game in recruiting: what candidates hear about you before you reach out. These guides cover EVP development, recruitment marketing, employee referral programs, and retention strategies that compound into a pipeline advantage.</p>`,
  },
  'hiring-general': {
    h1: 'Hiring Process and Operations',
    description: 'The full hiring process: workflow, onboarding, JDs, and the operational side of recruiting.',
    metaDescription: 'Hiring process guides from Pin: workflow design, job description templates, onboarding, tech stack decisions, and the operational playbooks that scale.',
    intro: `<p>Running a good hiring process is a discipline that touches everything: JDs, intake meetings, pipeline reviews, onboarding, and the tools that hold it together. These guides cover the operational side of recruiting — the workflows, templates, and tech stack decisions that separate hiring teams that scale from ones that stall.</p>`,
  },
  'conferences': {
    h1: 'Recruiting and HR Conferences',
    description: 'Pre-event guides to the recruiting, talent acquisition, and HR conferences worth attending.',
    metaDescription: 'Recruiting and HR conference guides from Pin: agendas, sessions, and what to expect at SHRM, HR Tech, LinkedIn Talent Connect, RecFest, and more.',
    intro: `<p>The biggest recruiting and HR conferences set the agenda for the year: which vendors get attention, which themes go mainstream, and which sessions are worth flying for. These guides cover what recruiters and TA leaders should know before attending the major US, Canadian, and LinkedIn-hosted events — agendas, speakers, and the practical takeaways from each one.</p>`,
  },
}

export function getTagMeta(slug: string | undefined): TagMeta | undefined {
  if (!slug) return undefined
  return tagMeta[slug]
}

// Ghost-side slugs we allow through the canonical filter even though they
// aren't in tagMeta. Keep this list tight — it exists to carry over a small
// number of Ghost-only editorial categories that still have real content and
// no equivalent in the 12-tag vocabulary.
const GHOST_PASSTHROUGH_SLUGS = ['product-updates'] as const

// The canonical tag vocabulary — these are the only slugs that get an archive
// page, appear in the sidebar, or land in the sitemap. Anything else (legacy
// Ghost slugs, retired tags) is suppressed by the loader filter in
// src/lib/posts.ts and redirected at the URL level via public/_redirects.
export const CANONICAL_TAG_SLUGS: ReadonlySet<string> = new Set([
  ...Object.keys(tagMeta),
  ...GHOST_PASSTHROUGH_SLUGS,
])

export function isCanonicalTag(slug: string | undefined): boolean {
  return !!slug && CANONICAL_TAG_SLUGS.has(slug)
}
