export type CellValue =
  | string
  | boolean
  | { text: string; positive: boolean };

export interface ComparisonPage {
  slug: string;
  competitor: string;
  title: string;
  subtitle: string;
  heroImage: string;
  testimonial: {
    quote: string;
    name: string;
    company: string;
    avatar: string;
  };
  advantages: string[];
  comparisonRows: Array<{
    feature: string;
    pin: CellValue;
    competitor: CellValue;
  }>;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  disclaimer: string;
  lastUpdated: string;
}

export const comparisons: ComparisonPage[] = [
  {
    slug: "pin-vs-linkedin-recruiter",
    competitor: "LinkedIn Recruiter",
    title: "Pin vs LinkedIn Recruiter (2026) Comparison",
    subtitle:
      "Pin searches 850M+ profiles across multiple sources in plain English, not just LinkedIn's network. Then it writes the outreach, sends it from your inbox, handles the replies and books the interviews, for a fraction of the cost.",
    heroImage: "/images/compare/hero-screenshot.png",
    testimonial: {
      quote:
        "Old-school recruiters will tell you the best sourcing tool is your brain, and I agree. What I love about Pin is that it takes the critical thinking your brain already does and puts it on steroids. I can target specific company types and industries in my search and let the software handle the kind of strategic thinking I'd normally have to do on my own, something I simply can't do the same way in LinkedIn Recruiter.",
      name: "Colleen Riccinto",
      company: "Cyber Talent Search",
      avatar: "/images/compare/avatar-colleen.png",
    },
    advantages: [
      "Search 850M+ profiles across multiple sources, not just LinkedIn",
      "Multi-channel outreach — email, SMS, and more — not just InMail",
      "A fraction of the cost of a LinkedIn Recruiter license",
    ],
    comparisonRows: [
      {
        feature: "Pricing",
        pin: "$",
        competitor: "$$$$",
      },
      {
        feature: "Search experience",
        pin: "Natural language search",
        competitor: "Boolean search with some AI features",
      },
      {
        feature: "Search filter granularity",
        pin: "Highly flexible filters",
        competitor: "Predefined filters, varies by tier",
      },
      {
        feature: "Ease of use",
        pin: "Simple & intuitive workflows",
        competitor: "Complex interface, learning curve for new users",
      },
      {
        feature: "Search setup time",
        pin: "Seconds",
        competitor: "Varies — manual for Boolean, faster with AI add-on",
      },
      {
        feature: "Candidate matching approach",
        pin: "Role & skill-based matching",
        competitor: "AI + keyword matching",
      },
      {
        feature: "Handles non-standard titles & industries",
        pin: { text: "Yes — built-in", positive: true },
        competitor: "Profile-dependent, may miss non-standard roles",
      },
      {
        feature: "Sourcing coverage",
        pin: "Multi-platform talent sourcing",
        competitor: "Limited to LinkedIn profiles",
      },
      {
        feature: "Visibility beyond network graph",
        pin: { text: "Not connection-dependent", positive: true },
        competitor: {
          text: "Restricted by tier and connection graph",
          positive: false,
        },
      },
      {
        feature: "Multi-channel outreach",
        pin: { text: "Email, text messages, & more", positive: true },
        competitor: {
          text: "Only InMail & connection requests",
          positive: false,
        },
      },
      {
        feature: "Candidate discovery depth",
        pin: "Surfaces hard-to-find candidates",
        competitor: "Favors active profiles, may miss passive talent",
      },
      {
        feature: "Manual effort required",
        pin: "Minimal",
        competitor: "Moderate — some AI assistance available",
      },
      {
        feature: "Time spent reviewing candidates",
        pin: "Minutes",
        competitor: "Manual review still common",
      },
      {
        feature: "Outreach cost",
        pin: "Monthly lookup credits (add-ons available)",
        competitor: "Fixed InMail limits by plan",
      },
      {
        feature: "Automation",
        pin: "Built-in AI agents",
        competitor: "Some AI automation available",
      },
      {
        feature: "Auto-evaluates candidates & adds to pipeline",
        pin: { text: "Yes — built-in", positive: true },
        competitor: "Partially, with AI add-on",
      },
      {
        feature: "AI-generated candidate insights",
        pin: "Role-specific summaries, strengths and fit",
        competitor: "Profile data & activity signals",
      },
      {
        feature: "Searches based on full sentences and job descriptions",
        pin: { text: "Yes — core feature", positive: true },
        competitor: "Supported with newer AI features",
      },
      {
        feature: "Data portability & exports",
        pin: "Flexible exports & direct ATS sync",
        competitor: "Limited exports, ATS-dependent",
      },
    ],
    faqItems: [
      {
        question: "How is Pin different from LinkedIn Recruiter?",
        answer: "LinkedIn Recruiter only searches LinkedIn's own network. Pin searches 850M+ candidate profiles across multiple data sources, so you find people who aren't active on LinkedIn or who LinkedIn's algorithm deprioritizes. Pin also offers multi-channel outreach — email, SMS, and more — instead of being limited to InMail.",
      },
      {
        question: "Is Pin cheaper than LinkedIn Recruiter?",
        answer: "Yes. LinkedIn Recruiter licenses can cost $8,000–$15,000+ per seat per year. Pin offers flat, transparent monthly pricing starting well below that, with no annual lock-in required. Most teams save significantly while expanding their candidate pool beyond LinkedIn.",
      },
      {
        question: "Can I use Pin alongside LinkedIn Recruiter?",
        answer: "Absolutely. Many teams use Pin to source from multiple platforms and LinkedIn Recruiter for in-network outreach. Pin integrates with 120+ ATS platforms, so candidates from any source flow into the same pipeline.",
      },
      {
        question: "Does Pin require Boolean search strings?",
        answer: "No. Pin uses natural language search — describe the role in plain English and the AI handles the rest. No Boolean operators, no keyword gymnastics. You can also paste a full job description and Pin will return a ranked shortlist in seconds.",
      },
      {
        question: "Can I reach candidates outside my LinkedIn network with Pin?",
        answer: "Yes. Pin is not limited by connection graphs or network tiers. It searches across multiple data sources to find candidates regardless of whether they're connected to you, active on LinkedIn, or even have a LinkedIn profile at all.",
      },
    ],
    disclaimer:
      "Data from our internal research as of February 2026. Feature availability and functionality may vary by plan and use case.",
    lastUpdated: "2026-04-13",
  },
  {
    slug: "pin-vs-goperfect",
    competitor: "GoPerfect",
    title: "Pin vs GoPerfect (2026): Which Is Better?",
    subtitle:
      "Tell Pin what you're hiring for and it reads between the lines, then takes it all the way to booked interviews. You keep full control over search and outreach, without an annual plan or a rigid workflow.",
    heroImage: "/images/compare/hero-screenshot.png",
    testimonial: {
      quote:
        "By keeping search, outreach, and feedback tightly connected, Pin helps hiring teams move faster, stay aligned, and continuously improve how they hire.",
      name: "Rich Rosen",
      company: "Founder, Cornerstone Search Associates",
      avatar: "/images/advisors/richrosen.webp",
    },
    advantages: [
      "Flat monthly pricing — no annual commitment required",
      "Full control over search, outreach, and workflow",
      "Works with your existing tools, not around them",
    ],
    comparisonRows: [
      {
        feature: "Pricing",
        pin: "Flat, transparent subscription pricing",
        competitor: "Tiered plans, annual commitment required",
      },
      {
        feature: "AI-powered search",
        pin: { text: "Yes — fully AI-powered", positive: true },
        competitor: "Yes, AI-assisted",
      },
      {
        feature: "Search experience",
        pin: "Natural language search",
        competitor: "AI-assisted search",
      },
      {
        feature: "Search filter granularity",
        pin: "Advanced, customizable filters",
        competitor: "AI-driven filtering",
      },
      {
        feature: "Candidate matching approach",
        pin: { text: "Context-aware matching", positive: true },
        competitor: "AI matching with scored results",
      },
      {
        feature: "Role nuance handling",
        pin: "Understands role variations beyond job titles",
        competitor: "Some contextual matching available",
      },
      {
        feature: "Candidate coverage",
        pin: "Broad candidate coverage across sources",
        competitor: "Large database, access may vary by plan",
      },
      {
        feature: "Industry coverage",
        pin: { text: "Industry-agnostic", positive: true },
        competitor: "Covers multiple industries",
      },
      {
        feature: "Search flexibility",
        pin: "Fully customizable searches",
        competitor: "AI-guided search refinement",
      },
      {
        feature: "Candidate discovery depth",
        pin: "Surfaces hard-to-find candidates",
        competitor: "Some predictive signals available",
      },
      {
        feature: "Manual effort required",
        pin: { text: "Minimal", positive: true },
        competitor: "Automation available on some plans",
      },
      {
        feature: "Outreach automation",
        pin: "Communication accessible outside the platform",
        competitor: "Communication managed within the platform",
      },
      {
        feature: "Workflow independence",
        pin: "Works with existing recruiting workflows",
        competitor: "ATS integrations available, but workflow centered in platform",
      },
      {
        feature: "AI feedback loop",
        pin: "Improves over time based on user's actions",
        competitor: "Some adaptive learning available",
      },
      {
        feature: "Autopilot candidate review",
        pin: { text: "Yes — built-in", positive: true },
        competitor: "Available on some plans",
      },
      {
        feature: "Review cards for hiring managers",
        pin: { text: "Yes — built-in", positive: true },
        competitor: "Available in some form",
      },
      {
        feature: "Best fit for",
        pin: "Teams wanting flexibility, automation, and control",
        competitor: "Teams comfortable with annual plans and structured workflows",
      },
    ],
    faqItems: [
      {
        question: "How is Pin different from GoPerfect?",
        answer: "Pin offers flat monthly pricing with no annual commitment, while GoPerfect requires annual plans. Pin also lets you manage outreach outside the platform and integrates with your existing workflow, rather than locking you into one system.",
      },
      {
        question: "Does Pin require an annual contract like GoPerfect?",
        answer: "No. Pin offers month-to-month plans with transparent pricing. You can scale up or down without being locked into an annual commitment.",
      },
      {
        question: "Can I use Pin with my existing ATS and tools?",
        answer: "Yes. Pin integrates with 120+ ATS platforms and works alongside your existing recruiting workflow. You don't need to replace your current tools — Pin plugs into them.",
      },
      {
        question: "How does Pin's search compare to GoPerfect's?",
        answer: "Both tools offer AI-powered search. Pin focuses on natural language search with highly customizable filters, giving you full control over how you find and evaluate candidates. Pin also lets you access communication outside the platform.",
      },
      {
        question: "Does Pin offer a free trial?",
        answer: "Yes. Pin offers a free trial with full access to core features — AI sourcing, automated outreach, and interview scheduling. No credit card required to start.",
      },
    ],
    disclaimer:
      "Data from our internal research as of February 2026. Feature availability and functionality may vary by plan and use case.",
    lastUpdated: "2026-04-13",
  },
  {
    slug: "pin-vs-juicebox",
    competitor: "Juicebox",
    title: "Pin vs Juicebox (2026): Which Is Better?",
    subtitle:
      "Pin's search holds up across industries and role types, not just tech, so you can reliably find great candidates whether you're hiring GTM, ops, product, finance, or engineering. Then Pin handles the outreach, replies and scheduling.",
    heroImage: "/images/compare/hero-screenshot.png",
    testimonial: {
      quote:
        "We switched to Pin from Juicebox because the customer experience was in a completely different league, from a personalized demo to a webinar that taught me more than any free trial could. The automated sourcing and LinkedIn integration are exactly what I need, and even as a one-woman recruiting team, Pin actually makes me feel like a valued customer.",
      name: "Victoria Wright",
      company: "Principal Recruiter at Odyssey",
      avatar: "/images/compare/victoria-wright-odyssey.jpeg",
    },
    advantages: [
      "Reliable across all industries — not just tech",
      "Multi-channel outreach built in, not email-only",
      "Fresh, regularly updated data from multiple sources",
    ],
    comparisonRows: [
      {
        feature: "AI-powered search",
        pin: { text: "Yes — fully AI-powered", positive: true },
        competitor: "Yes, AI-assisted",
      },
      {
        feature: "Search experience",
        pin: "Natural language search",
        competitor: "AI-powered search",
      },
      {
        feature: "Candidate matching approach",
        pin: "Advanced, customizable filters",
        competitor: "AI-scored ranking, less consistent for niche roles",
      },
      {
        feature: "Search filter granularity",
        pin: "Role & skill-based matching",
        competitor: "AI-based matching",
      },
      {
        feature: "Data source & freshness",
        pin: "Multi-source data with regular updates",
        competitor: "Multiple sources, but data freshness concerns reported",
      },
      {
        feature: "Global talent coverage",
        pin: "US, Canada, Europe, Mexico",
        competitor: "Large database, strongest in US",
      },
      {
        feature: "Industry coverage",
        pin: "Industry-agnostic",
        competitor: "Strongest in tech, less reliable for non-tech roles",
      },
      {
        feature: "Candidate discovery depth",
        pin: "Surfaces hard-to-find candidates",
        competitor: "May miss candidates with low online presence",
      },
      {
        feature: "Time to review candidates",
        pin: "Minutes",
        competitor: "Some AI ranking available",
      },
      {
        feature: "Manual effort required",
        pin: "Minimal",
        competitor: "Varies — automation requires add-on",
      },
      {
        feature: "Outreach automation",
        pin: "Multi-channel automation",
        competitor: "Email-only automation",
      },
      {
        feature: "AI feedback loop to retrain AI",
        pin: { text: "Yes — built-in", positive: true },
        competitor: "Available with Agent add-on",
      },
      {
        feature: "Reporting & insights",
        pin: "Clear, actionable reporting",
        competitor: "Basic dashboards, depth varies by plan",
      },
      {
        feature: "Best fit for",
        pin: "Teams hiring across multiple industries",
        competitor: "Tech-heavy recruiting teams",
      },
    ],
    faqItems: [
      {
        question: "How is Pin different from Juicebox (PeopleGPT)?",
        answer: "Pin delivers consistent results across all industries — not just tech. It also includes multi-channel outreach (email, SMS, and more) built in, while Juicebox is limited to email-only outreach. Pin's data is regularly refreshed from multiple sources, addressing the data freshness concerns reported with Juicebox.",
      },
      {
        question: "Is Pin better than Juicebox for non-tech recruiting?",
        answer: "Yes. Juicebox is strongest in tech recruiting and less reliable for non-tech roles. Pin is industry-agnostic — it works equally well for GTM, ops, product, finance, healthcare, and engineering roles.",
      },
      {
        question: "Does Juicebox only do email outreach?",
        answer: "Yes, Juicebox's outreach automation is limited to email. Pin supports multi-channel outreach — email, SMS, and more — so you can reach candidates where they're most responsive.",
      },
      {
        question: "How fresh is Pin's candidate data compared to Juicebox?",
        answer: "Pin sources from multiple data providers with regular updates. Juicebox has reported data freshness concerns from users, with some profiles being outdated. Pin's multi-source approach helps ensure you're reaching people with current information.",
      },
      {
        question: "Does Pin offer a free trial?",
        answer: "Yes. Pin offers a free trial with full access to core features — AI sourcing, automated outreach, and interview scheduling. No credit card required.",
      },
    ],
    disclaimer:
      "Data from our internal research as of February 2026. Feature availability and functionality may vary by plan and use case.",
    lastUpdated: "2026-04-13",
  },
  {
    slug: "pin-vs-noon-ai",
    competitor: "Noon AI",
    title: "Pin vs Noon AI (2026): Which Is Better?",
    subtitle:
      "Pin delivers reliable sourcing from your first search, with transparent pricing and deep customization, then takes candidates from outreach to booked interviews.",
    heroImage: "/images/compare/hero-screenshot.png",
    testimonial: {
      quote:
        "By keeping search, outreach, and feedback tightly connected, Pin helps hiring teams move faster, stay aligned, and continuously improve how they hire.",
      name: "Rich Rosen",
      company: "Founder, Cornerstone Search Associates",
      avatar: "/images/advisors/richrosen.webp",
    },
    advantages: [
      "Transparent monthly pricing — no custom quotes or hidden costs",
      "Repeatable, consistent search results from day one",
      "Advanced filters you control, not just AI-driven prompts",
    ],
    comparisonRows: [
      {
        feature: "Pricing & commitment",
        pin: "Monthly plans available",
        competitor: "Custom pricing, not publicly available",
      },
      {
        feature: "AI-powered search",
        pin: { text: "Yes — fully AI-powered", positive: true },
        competitor: "Yes, AI-assisted",
      },
      {
        feature: "Search experience",
        pin: "Natural language search",
        competitor: "AI-assisted search",
      },
      {
        feature: "Search filter granularity",
        pin: "Advanced, customizable filters",
        competitor: "AI-driven refinement, less manual filter control",
      },
      {
        feature: "Candidate matching approach",
        pin: "Role & skill-based matching",
        competitor: "AI matching that improves with feedback",
      },
      {
        feature: "Data freshness & accuracy",
        pin: "Multi-source data with regular updates",
        competitor: "Aggregates from multiple online sources",
      },
      {
        feature: "Candidate coverage",
        pin: "Broader candidate pool across sources",
        competitor: "Web-based sourcing across multiple platforms",
      },
      {
        feature: "Result consistency",
        pin: "Designed for repeatable search results",
        competitor: "Results may vary, improves with continued use",
      },
      {
        feature: "Search learning model",
        pin: "Search-specific optimization",
        competitor: "Learns from recruiter feedback over time",
      },
      {
        feature: "Search flexibility",
        pin: "Fully customizable, unlimited searches",
        competitor: "Prompt-based refinement",
      },
      {
        feature: "Outreach automation",
        pin: "Multi-channel automation",
        competitor: "Multi-channel outreach available",
      },
      {
        feature: "Customer support experience",
        pin: "AI-assisted support with human escalation",
        competitor: "Limited public details",
      },
      {
        feature: "Best fit for",
        pin: "Teams needing flexibility and control",
        competitor: "Teams with longer ramp-up tolerance",
      },
    ],
    faqItems: [
      {
        question: "How is Pin different from Noon AI?",
        answer: "Pin offers transparent, published pricing with monthly plans — no custom quotes or sales calls required. Pin also delivers consistent results from your first search, while Noon AI requires a ramp-up period as its model learns your preferences.",
      },
      {
        question: "Is Noon AI's pricing transparent?",
        answer: "No. Noon AI does not publish pricing and requires you to request a demo for a custom quote. Pin's pricing is published on our website with clear monthly plans and no hidden costs.",
      },
      {
        question: "Does Pin give me more control over search than Noon AI?",
        answer: "Yes. Pin offers advanced, customizable filters alongside natural language search, so you control exactly how candidates are found and ranked. Noon AI relies more on AI-driven prompts with less manual filter control.",
      },
      {
        question: "How quickly can I get results with Pin vs Noon AI?",
        answer: "Pin delivers ranked candidate results in seconds from your first search. Noon AI's results improve over time as its model learns from your feedback, which means initial searches may be less consistent.",
      },
      {
        question: "Does Pin offer a free trial?",
        answer: "Yes. Pin offers a free trial with full access to AI sourcing, automated outreach, and interview scheduling. No credit card required to start.",
      },
    ],
    disclaimer:
      "Data from our internal research as of February 2026. Feature availability and functionality may vary by plan and use case.",
    lastUpdated: "2026-04-13",
  },
  {
    slug: "pin-vs-humanly",
    competitor: "Humanly",
    title: "Pin vs Humanly (2026): Which Is Better?",
    subtitle:
      "Pin joins your existing workflow and automates it one step at a time, from job title to booked interviews, without making you replace everything at once.",
    heroImage: "/images/compare/hero-screenshot.png",
    testimonial: {
      quote:
        "By keeping search, outreach, and feedback tightly connected, Pin helps hiring teams move faster, stay aligned, and continuously improve how they hire.",
      name: "Rich Rosen",
      company: "Founder, Cornerstone Search Associates",
      avatar: "/images/advisors/richrosen.webp",
    },
    advantages: [
      "Purpose-built for sourcing — not adapted from a screening tool",
      "Industry-agnostic, not limited to frontline or hourly hiring",
      "Transparent pricing with no custom quotes required",
    ],
    comparisonRows: [
      {
        feature: "Pricing",
        pin: "Flat, transparent subscription pricing",
        competitor: "Custom pricing, not publicly available",
      },
      {
        feature: "Commitment & usage",
        pin: "Monthly plans with predictable usage",
        competitor: "Usage limits vary by plan",
      },
      {
        feature: "AI-powered search",
        pin: { text: "Yes — fully AI-powered", positive: true },
        competitor: "Partial — sourcing added via acquisition",
      },
      {
        feature: "Search experience",
        pin: "Natural language search",
        competitor: "Example-based matching via acquired technology",
      },
      {
        feature: "Search filter granularity",
        pin: "Advanced, customizable filters",
        competitor: "Basic searchable fields",
      },
      {
        feature: "Candidate matching approach",
        pin: "Contextual role & skill-based matching",
        competitor: "Example-based matching from past hires",
      },
      {
        feature: "Role nuance handling",
        pin: "Understands role variations beyond job titles",
        competitor: "Limited public detail",
      },
      {
        feature: "Candidate coverage",
        pin: "Broad candidate coverage across sources",
        competitor: "Large database via acquisition",
      },
      {
        feature: "Industry coverage",
        pin: "Industry-agnostic",
        competitor: "Focused on frontline and hourly hiring",
      },
      {
        feature: "Search flexibility",
        pin: "Fully customizable searches",
        competitor: "Wishlist-based search",
      },
      {
        feature: "Candidate discovery depth",
        pin: "Surfaces hard-to-find candidates",
        competitor: "Some AI matching available",
      },
      {
        feature: "Manual effort required",
        pin: "Minimal",
        competitor: "Moderate — sourcing is not core strength",
      },
      {
        feature: "Outreach automation",
        pin: { text: "Yes — multi-channel, built-in", positive: true },
        competitor: "Yes, primarily chat and SMS",
      },
      {
        feature: "Data ownership & portability",
        pin: "Communication accessible outside the platform",
        competitor: "ATS integrations available",
      },
      {
        feature: "Workflow independence",
        pin: "Works with existing recruiting workflows",
        competitor: "Some ATS integration, primarily platform-centered",
      },
      {
        feature: "AI feedback loop",
        pin: "Improves over time based on user\u2019s actions",
        competitor: "Limited public detail",
      },
      {
        feature: "Autopilot candidate review",
        pin: true,
        competitor: "Screening summaries, not full autopilot review",
      },
      {
        feature: "Review cards for hiring managers",
        pin: true,
        competitor: "Interview summaries available",
      },
      {
        feature: "Best fit for",
        pin: "Teams wanting flexibility, automation, and control",
        competitor: "High-volume and hourly hiring teams",
      },
    ],
    faqItems: [
      {
        question: "How is Pin different from Humanly?",
        answer: "Pin is purpose-built for candidate sourcing and outreach. Humanly started as a conversational AI screening tool and added sourcing later through an acquisition. Pin gives you deeper search control, industry-agnostic coverage, and transparent pricing.",
      },
      {
        question: "Is Humanly a sourcing tool?",
        answer: "Humanly added sourcing capabilities after acquiring Teamable in 2024, but its core strength is still screening, chatbot engagement, and interview scheduling — especially for high-volume and hourly hiring. Pin is built from the ground up for sourcing and outreach.",
      },
      {
        question: "Does Pin work for all industries, not just hourly hiring?",
        answer: "Yes. Pin is industry-agnostic and works across tech, finance, healthcare, GTM, operations, and more. Humanly is primarily focused on frontline, hourly, and high-volume hiring roles.",
      },
      {
        question: "Does Humanly publish its pricing?",
        answer: "No. Humanly uses custom pricing that requires contacting their sales team. Pin publishes transparent pricing on our website with monthly plans and no hidden costs.",
      },
      {
        question: "Does Pin offer a free trial?",
        answer: "Yes. Pin offers a free trial with full access to AI sourcing, automated outreach, and interview scheduling. No credit card required to start.",
      },
    ],
    disclaimer:
      "Data from our internal research as of February 2026. Feature availability and functionality may vary by plan and use case.",
    lastUpdated: "2026-04-13",
  },
];
