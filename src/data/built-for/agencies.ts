import type { BuiltForPage } from "./index";

export const agenciesPage: BuiltForPage = {
  slug: "agencies",
  meta: {
    title: "Recruiting Agency Software: AI Recruiter for Agencies | Pin",
    description:
      "Recruiting agency software that takes a client brief to booked candidate calls. AI sourcing from 850M+ profiles, outreach from your inbox, replies and scheduling handled. From $99/mo.",
  },
  hero: {
    eyebrow: "Pin for recruiting agencies",
    title: 'The AI recruiter for <span class="text-green">recruiting agencies</span>',
    description:
      "Hand Pin a client brief. It sources from 850M+ profiles, writes the outreach, sends it from your inbox, sorts the replies and books the calls. Your recruiters spend their day on submittals and client calls, not on chasing.",
    badges: ["4.8/5 on G2", "850M+ profiles", "Free trial, no credit card"],
  },
  stats: {
    title: "The numbers agency owners care about",
    items: [
      { value: "91%", label: "Reduced or eliminated LinkedIn Recruiter spend" },
      { value: "$250K+", label: "Attributable revenue in 6 months (Rich Rosen, Cornerstone Search)" },
      { value: "14 days", label: "Average time-to-fill across agency users" },
      { value: "5x", label: "Higher reply rate on outreach" },
    ],
  },
  journey: {
    title: "From client brief to booked candidate calls",
    sub: "One workflow per search, for every client on your desk. Pin does the sourcing, chasing, sorting and scheduling in between.",
    steps: [
      {
        title: "Take the brief",
        description:
          "Give Pin the role and the client, with or without a job description. Pin researches the client, drafts criteria, and asks the questions a great sourcer would: remote or on-site, must-haves, deal-breakers.",
      },
      {
        title: "Shortlist with reasons",
        description:
          "Pin searches 850M+ profiles and explains why each person fits the brief. Approve or pass, or send a review link to your client. They can approve candidates without an account.",
      },
      {
        title: "Outreach from your inbox",
        description:
          "Approved candidates get a personal sequence sent from your Gmail or Outlook, plus LinkedIn and text steps. Edit any message, or take over any conversation.",
      },
      {
        title: "Replies, sorted",
        description:
          "Pin archives the not-interested with a thank-you, answers questions it already knows, and checks with you on Slack once for new ones, like comp or the client's name.",
      },
      {
        title: "Calls on your calendar",
        description:
          "Pin offers times you're free, handles the back-and-forth and sends the invite. You show up to a call with a candidate who wants to talk.",
      },
    ],
  },
  useCases: {
    title: "When agencies use Pin",
    items: [
      {
        heading: "Running 20 open searches at once",
        description:
          "Solo recruiters and small agencies with a full desk give each search its own Pin workflow. Sourcing and follow-ups keep moving on every search, even the ones you didn't touch today.",
        outcome: "Nick Poloni (Cascadia Search Group) closed $1M+ in billings in 4 months working solo on Pin.",
      },
      {
        heading: "Replacing LinkedIn Recruiter to protect margins",
        description:
          "LinkedIn Recruiter seats can eat 30%+ of a junior recruiter's annual margin. Pin searches 850M+ profiles across multiple sources for a fraction of the cost.",
        outcome: "91% of Pin agency users reduced or eliminated LinkedIn Recruiter spend.",
      },
      {
        heading: "Winning niche or retained searches faster",
        description:
          "Executive and niche searches are won on speed to candidate. Describe the profile in plain English and Pin surfaces specialists boolean strings miss, then reaches them before competitors have built a list.",
        outcome: "Rich Rosen (Cornerstone Search) attributes $250K in revenue to Pin in 6 months.",
      },
      {
        heading: "Scaling the desk without adding headcount",
        description:
          "With outreach, replies and scheduling handled, recruiters get back about 12 hours a week for client calls and submittals. Billings grow without new hires.",
        outcome: "90% reduction in manual sourcing time for Pin agency users.",
      },
    ],
  },
  comparison: {
    title: "Pin vs. the typical agency tech stack",
    alternativeLabel: "Typical agency stack",
    criteria: [
      { label: "AI candidate sourcing across multiple data sources", pin: "850M+ profiles, 1,000s of data points per profile", alternative: "Usually LinkedIn-only" },
      { label: "Multi-channel sequences", pin: "yes", alternative: "partial", note: "Typical stacks send email only, often manually." },
      { label: "AI interview scheduling", pin: "yes", alternative: "no", note: "Usually requires a separate scheduling tool." },
      { label: "Recruiting CRM with placement tracking", pin: "yes", alternative: "partial", note: "Typically a separate ATS with manual sync." },
      { label: "Multi-client support for agencies", pin: "yes", alternative: "no", note: "Rare in generalist recruiting tools." },
      { label: "Starting price", pin: "$99/mo", alternative: "$10K–$35K+/yr for enterprise stacks" },
      { label: "G2 rating", pin: "4.8/5", alternative: "Varies" },
    ],
  },
  testimonial: {
    quote:
      '"Pin is an absolute money maker for recruiters… in 6 months I can directly attribute over $250k in revenue to Pin."',
    name: "Rich Rosen",
    role: "Founder, Cornerstone Search Associates",
    avatar: "/images/advisors/richrosen.webp",
    paragraphs: [
      "Running an agency means every hour not spent on submittals is margin lost. Pin replaces the patchwork of LinkedIn Recruiter, an outreach sequencer and a scheduling tool with one AI recruiter, priced like a single seat.",
      "Agencies using Pin report 12 hours per recruiter per week reclaimed, a 90% reduction in manual sourcing time, and 5x better reply rates.",
    ],
  },
  integrations: {
    title: "Works with the ATS and CRM your agency runs on",
    items: [
      { name: "Bullhorn", category: "ATS / CRM" },
      { name: "Loxo", category: "ATS / CRM" },
      { name: "Crelate", category: "ATS / CRM" },
      { name: "JobAdder", category: "ATS / CRM" },
      { name: "Recruit CRM", category: "ATS / CRM" },
      { name: "TrackerRMS", category: "ATS / CRM" },
      { name: "Gmail", category: "Email" },
      { name: "Outlook", category: "Email" },
      { name: "Google Calendar", category: "Calendar" },
      { name: "Slack", category: "Notifications" },
    ],
  },
  faq: {
    title: "Recruiting agency software FAQ",
    items: [
      {
        question: "How much does recruiting agency software cost?",
        answer:
          "Pin's plans start at $99/mo, with a free trial and no credit card required. Every plan includes AI sourcing across 850M+ profiles, automated outreach and scheduling. See the pricing page for current tiers and contact credit packs.",
      },
      {
        question: "What is the best recruiting software for staffing agencies?",
        answer:
          "Pin is the highest-rated AI recruiting platform on G2 (4.8/5) and is purpose-built for agencies, including multi-client pipeline management, placement tracking, and integrations with Bullhorn, Loxo, and Crelate. 91% of agency users reduced or eliminated their LinkedIn Recruiter spend after switching.",
      },
      {
        question: "How do recruiting agencies use AI?",
        answer:
          "Agencies use AI across the whole search: sourcing candidates that fit the brief, writing and sending personalized outreach, sorting replies and answering candidate questions, and scheduling calls. Pin handles all of it in one workflow, and every step can be automated or kept manual.",
      },
      {
        question: "Can Pin replace LinkedIn Recruiter for my agency?",
        answer:
          "Yes. 91% of Pin users reduced or eliminated LinkedIn Recruiter spend. Pin searches 850M+ profiles across multiple sources, with 100% North America and Europe coverage, at a fraction of the cost.",
      },
      {
        question: "Does Pin integrate with Bullhorn, Loxo, Crelate, or JobAdder?",
        answer:
          "Yes. Pin has native integrations with Bullhorn, Loxo, Crelate, JobAdder, Recruit CRM, TrackerRMS, and 120+ other ATS/CRM platforms. Pipelines sync bidirectionally so candidates added in Pin appear in your ATS automatically.",
      },
      {
        question: "Can one Pin account support multiple agency clients?",
        answer:
          "Yes. Pin's multi-client pipeline separates candidate pools, outreach sequences, and reporting by client engagement. Single login, multiple concurrent searches, no double-counting of candidates across clients.",
      },
      {
        question: "Can my clients review candidates in Pin?",
        answer:
          "Yes. Send your client a review link and they can approve or decline shortlisted candidates without creating an account. Their decisions flow straight back into your search.",
      },
      {
        question: "How does Pin help with placement fees and commission tracking?",
        answer:
          "Pin's recruiting CRM includes custom pipeline stages you can map to your fee structure (engaged, shortlisted, submitted, interviewed, offered, placed). Combine with any ATS integration for an end-to-end placement-to-invoice flow.",
      },
      {
        question: "Is Pin better for retained search or contingent search?",
        answer:
          "Both. Retained agencies use Pin for niche specialist sourcing and executive-level discretion. Contingent agencies use Pin for speed-to-submit across high volume. Nick Poloni (Cascadia Search Group) closed over $1M in billings in 4 months using Pin solo.",
      },
      {
        question: "How long does it take for an agency to see results with Pin?",
        answer:
          "Most agencies make their first candidate submission within a week of starting with Pin. Rich Rosen (Cornerstone Search Associates) attributed $250K in revenue to Pin in 6 months working a retained executive search desk.",
      },
      {
        question: "Is Pin SOC 2 compliant? How is candidate data handled?",
        answer:
          "Pin is SOC 2 Type 2 certified with client-level data encryption at rest and in transit, strict access controls, and GDPR compliance for UK/EU placements. Full compliance documentation is available at trust.pin.com.",
      },
      {
        question: "Does Pin offer a free trial for agencies?",
        answer:
          "Yes. Pin offers a free trial with no credit card required. Source candidates, send outreach, and test the platform on a live search before choosing a plan.",
      },
    ],
  },
  related: {
    title: "Resources for agency owners",
    items: [
      { label: "LinkedIn Recruiter alternatives 2026", href: "/blog/linkedin-recruiter-alternatives-2026/", description: "Why 91% of Pin agency users reduced or eliminated LinkedIn Recruiter spend." },
      { label: "Best sourcing tools for recruiters", href: "/blog/best-sourcing-tools-recruiters/", description: "A side-by-side of the top AI sourcing tools for agency recruiters." },
      { label: "Best recruiting agencies 2026", href: "/blog/best-recruiting-agencies-2026/", description: "How the top recruiting agencies structure their tech stack this year." },
      { label: "Best tech recruiting agencies", href: "/blog/best-tech-recruiting-agencies/", description: "Specialist tech recruiting firms and the tools powering their desks." },
      { label: "AI recruiting guide 2026", href: "/blog/ai-recruiting-guide-2026/", description: "A primer on how AI fits into modern recruiting workflows." },
      { label: "Pin vs Juicebox", href: "/compare/pin-vs-juicebox/", description: "Feature and pricing comparison for agencies evaluating AI sourcing platforms." },
    ],
  },
  siblings: {
    title: "Also built for",
    items: [
      { label: "In-house recruiting teams", href: "/built-for/recruiting-teams/", description: "Pin for in-house recruiting orgs running collaborative pipelines." },
      { label: "Startup founders", href: "/built-for/founders/", description: "Pin for founder-led hiring before the first recruiter is on staff." },
      { label: "Hiring managers", href: "/built-for/hiring-managers/", description: "Pin for hiring managers sourcing directly into their own funnel." },
    ],
  },
  cta: {
    title: "Spend your desk time on submittals, not chasing.",
    body: "Bring a live search to a 20-minute walkthrough and watch Pin source, write outreach and set up the workflow for your client.",
  },
};
