import type { BuiltForPage } from "./index";

export const foundersPage: BuiltForPage = {
  slug: "founders",
  meta: {
    title: "AI Recruiting for Startup Founders: Hire in 14 Days | Pin",
    description:
      "AI recruiting for startup founders making their first hires. Pin sources from 850M+ profiles, sends outreach from your inbox, answers candidates and books the calls. 14-day time-to-fill. From $99/mo.",
  },
  hero: {
    eyebrow: "Pin for startup founders",
    title: 'AI recruiting for <span class="text-green">startup founders</span>',
    description:
      "You don't have a recruiter yet. Now you have Pin. Type the role and your company, and Pin finds the people, reaches out as you, answers their questions and puts interviews on your calendar. You spend your hiring hours talking to candidates.",
    badges: ["Free trial, no credit card", "Cheaper than an agency", "14-day time-to-fill"],
  },
  stats: {
    title: "The numbers behind founder-led hiring on Pin",
    items: [
      { value: "14 days", label: "Average time-to-fill for founders on Pin" },
      { value: "5x", label: "Higher reply rate on outreach" },
      { value: "12 hrs", label: "Saved every week vs. DIY sourcing on LinkedIn" },
      { value: "$99/mo", label: "Starting price, a fraction of an agency retainer" },
    ],
  },
  journey: {
    title: "Your first ten hires, without a recruiter",
    sub: "Pin runs the parts of hiring that eat a founder's week. You stay in every conversation that matters.",
    steps: [
      {
        title: "Type the role",
        description:
          "\"Founding engineer at my company\" is enough. Pin researches your startup, drafts the criteria, and asks what a good recruiter would: remote or local, must-haves, deal-breakers.",
      },
      {
        title: "See who fits, and why",
        description:
          "Pin searches 850M+ profiles and tells you why each person matches. Approve or pass, or send a review link to your co-founder. No account needed.",
      },
      {
        title: "Outreach as you",
        description:
          "Candidates hear from the founder, not a recruiter. Pin writes a personal sequence and sends it from your Gmail or Outlook, plus LinkedIn and text steps.",
      },
      {
        title: "Questions answered",
        description:
          "Pin archives the not-interested with a thank-you and answers what it knows. When three people ask about equity, it asks you once on Slack and reuses your answer.",
      },
      {
        title: "Interviews booked",
        description:
          "Pin offers times you're free, handles the back-and-forth and sends the invite. You show up to talk to people who already want to talk to you.",
      },
    ],
  },
  useCases: {
    title: "AI recruiting for startup founders, mapped to real hiring moments",
    items: [
      {
        heading: "Hiring your first engineer",
        description:
          "No sourcing muscle and no recruiter on the team yet. Describe the role in plain English and Pin does the searching, outreach and follow-up for you.",
        outcome: "First engineering hire in under 30 days, typical.",
      },
      {
        heading: "Replacing a $30K+ agency retainer",
        description:
          "An external recruiting agency costs 20-25% of first-year comp per hire. Pin runs the same sourcing and outreach playbook for a monthly subscription, and you keep every candidate relationship.",
        outcome: "Agencies using Pin closed $250K+ in revenue in 6 months — margin founders can reclaim by hiring themselves.",
      },
      {
        heading: "Scaling the team before your first recruiter",
        description:
          "Pin handles the repetitive 70% of recruiting: sourcing, first-touch outreach, follow-ups and scheduling. Founders keep the 30% that needs them: interviews, offers and the close.",
        outcome: "12 hours per week reclaimed vs. DIY sourcing on LinkedIn.",
      },
      {
        heading: "Running every open role in parallel",
        description:
          "Most founders have 3-5 roles open at once. Each one gets its own Pin workflow, so outreach and scheduling keep moving while you build the product.",
        outcome: "Founders run 5 concurrent reqs on Pin before bringing on a dedicated recruiter.",
      },
    ],
  },
  testimonial: {
    quote:
      '"Pin is an absolute money maker for recruiters… in 6 months I can directly attribute over $250k in revenue to Pin."',
    name: "Rich Rosen",
    role: "Founder, Cornerstone Search Associates",
    avatar: "/images/advisors/richrosen.webp",
    paragraphs: [
      "Founders from pre-seed to Series A don't need enterprise recruiting software. They need something that handles sourcing, outreach and scheduling while they run hiring themselves.",
      "Pin compresses what used to take a founder 15 hours a week into 1-2 hours. Founders fill roles faster than external agencies (14 days vs. 30-60) and keep control of every candidate conversation.",
    ],
  },
  integrations: {
    title: "Works with the tools a founding team already uses",
    items: [
      { name: "Gmail", category: "Email" },
      { name: "Google Calendar", category: "Calendar" },
      { name: "Microsoft 365", category: "Email & Calendar" },
      { name: "Slack", category: "Messaging" },
      { name: "Ashby", category: "ATS" },
      { name: "Greenhouse", category: "ATS" },
      { name: "Lever", category: "ATS" },
      { name: "Notion", category: "Docs" },
      { name: "Zapier", category: "Automation" },
    ],
  },
  faq: {
    title: "AI recruiting for founders: questions",
    items: [
      {
        question: "What is the best AI recruiting tool for startup founders?",
        answer:
          "Pin is the highest-rated AI recruiting platform on G2 (4.8/5) and is built for founders making their first key hires before they have a full-time recruiter. Pin sources candidates from 850M+ profiles, sends personalized outreach from your inbox, answers candidate questions and schedules interviews. Plans start at $99/mo with a free trial.",
      },
      {
        question: "How can startup founders run hiring before they bring on a dedicated recruiter?",
        answer:
          "Founders use AI recruiters like Pin to handle sourcing, outreach, replies and scheduling, the parts of recruiting that scale poorly with founder time. Founders on Pin report filling roles in 14 days on average, saving 12 hours per week vs. manual sourcing on LinkedIn.",
      },
      {
        question: "Is Pin cheaper than a recruiting agency?",
        answer:
          "Dramatically. A recruiting agency typically charges 20-25% of first-year comp ($20K-$50K+ per hire). Pin starts at $99/mo. Agencies using Pin internally closed over $250K in attributable revenue in 6 months without paying an external firm.",
      },
      {
        question: "How much does Pin cost for an early-stage startup?",
        answer:
          "Pin has a free trial with no credit card required, and plans start at $99/mo, designed for pre-seed and seed founders making their first hires. There is no annual contract, so you can pause or cancel between hiring sprints.",
      },
      {
        question: "Can I use Pin if I've never hired anyone before?",
        answer:
          "Yes. Pin handles the technical side of sourcing (who to reach out to, what to say, when to follow up), so first-time founder hirers don't need to learn boolean search, write outreach from scratch, or build a sourcing workflow to get results.",
      },
      {
        question: "Does Pin work for pre-seed startups with no team?",
        answer:
          "Yes. Pin is designed for the solo and two-person founding team making hires 3 through 10. The free trial lets you test Pin on a live role before spending a dollar.",
      },
      {
        question: "What is the best ATS for founder-led hiring?",
        answer:
          "Pin includes a built-in recruiting CRM with a Kanban pipeline and custom stages that covers founders hiring their first 10-20 employees. Once you scale past that, Pin integrates with Ashby, Greenhouse, Lever, and 120+ other ATS platforms.",
      },
      {
        question: "How long does it take a founder to fill a role with Pin?",
        answer:
          "14 days on average, based on the Pin 2026 user survey, compared to 30-60 days for external recruiting agencies and 36+ days for founders sourcing manually on LinkedIn. Most roles see first interviews booked within 72 hours of kickoff.",
      },
      {
        question: "Can co-founders and early hires collaborate inside Pin?",
        answer:
          "Yes. Multiple users share a single Pin workspace to review candidates together and avoid duplicate outreach. You can also send a review link to anyone, and they can approve or decline candidates without an account.",
      },
      {
        question: "Does Pin integrate with Gmail, Google Calendar, and Slack?",
        answer:
          "Yes. Pin has native Gmail and Google Calendar integration, Microsoft 365 support, and Slack for new replies, candidate questions and interview bookings. Outreach sends from your own inbox, so responses land where you already read email.",
      },
      {
        question: "Is Pin only useful for technical hiring?",
        answer:
          "No. Pin works across every role a startup hires for: engineering, design, product, sales, ops, marketing, and finance. The 850M+ profile database covers 100% of North America and Europe.",
      },
      {
        question: "Do I need to learn boolean search to use Pin?",
        answer:
          "No. Give Pin a role and your company, or describe it in plain English, like 'senior full-stack engineer with React and Postgres, 5+ years, open to remote'. Pin returns matches with the reasons each one fits.",
      },
    ],
  },
  related: {
    title: "Resources for founders running their first hires",
    items: [
      { label: "AI recruiting guide 2026", href: "/blog/ai-recruiting-guide-2026/", description: "A founder-friendly walkthrough of AI recruiting tools, workflows, and ROI benchmarks for 2026." },
      { label: "Recruiting ROI: when AI tools pay for themselves", href: "/blog/recruiting-roi-ai-tools/", description: "How to model the true cost of your first engineering hire and where AI recruiting beats the alternatives." },
      { label: "Best AI recruiting tools for small teams", href: "/blog/best-ai-recruiting-tools-small-teams/", description: "The tools founders and small teams evaluate before they have a full-time recruiter." },
      { label: "Time-to-hire metrics with AI recruiting", href: "/blog/time-to-hire-metrics-ai/", description: "The 14-day time-to-fill benchmark, how it's measured, and what drives it." },
      { label: "Recruiting email templates", href: "/blog/engage-passive-candidates/", description: "The outreach structure founders use to get replies without sounding templated." },
      { label: "Cost-per-hire benchmarks for startups", href: "/blog/cost-per-hire-benchmarks/", description: "What a realistic cost-per-hire looks like across agency, in-house, and AI-recruiting paths." },
    ],
  },
  siblings: {
    title: "Also built for",
    items: [
      { label: "Hiring managers", href: "/built-for/hiring-managers/", description: "AI candidate sourcing and skills-based hiring for hiring managers." },
      { label: "Recruiting teams", href: "/built-for/recruiting-teams/", description: "AI recruiting for in-house teams scaling past the founder stage." },
      { label: "Tech companies", href: "/built-for/tech-companies/", description: "Engineering and technical recruiting for companies ready to scale past their first 10 hires." },
    ],
  },
  cta: {
    title: "Hire your first ten without hiring a recruiter.",
    body: "Bring an open role to a 20-minute walkthrough and watch Pin find candidates and draft the outreach live. Or start free today.",
  },
};
