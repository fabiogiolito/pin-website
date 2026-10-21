import type { BuiltForPage } from "./index";

export const techCompaniesPage: BuiltForPage = {
  slug: "tech-companies",
  meta: {
    title: "AI Recruiting for Tech Companies: Engineering Hiring | Pin",
    description:
      "AI recruiting for tech companies hiring engineers. Pin sources from 850M+ profiles plus GitHub, Stack Overflow and patents, sends outreach that cites real work, and books the screens. From $99/mo.",
  },
  hero: {
    eyebrow: "Pin for tech companies",
    title: 'AI recruiting for <span class="text-green">tech companies</span>',
    description:
      "Engineers' best work rarely shows up in a job title. Pin finds it across 850M+ profiles plus GitHub, Stack Overflow, patents and papers, reaches out about what they actually built, and books the screen with your team.",
    badges: ["Multi-source technical data", "35% fewer interviews per hire", "4.8/5 on G2"],
  },
  stats: {
    title: "AI recruiting for tech companies, by the numbers",
    items: [
      { value: "850M+", label: "Profiles, plus GitHub, Stack Overflow, patents and publications" },
      { value: "35%", label: "Fewer interviews per hire (Pin 2026 user survey)" },
      { value: "14 days", label: "Average time-to-fill for engineering roles" },
      { value: "91%", label: "Of Pin users reduced or eliminated LinkedIn Recruiter spend" },
    ],
  },
  journey: {
    title: "From a req to a technical screen",
    sub: "Pin does the sourcing, the outreach and the scheduling. Your engineers only meet candidates who already want to talk.",
    steps: [
      {
        title: "Describe the role",
        description:
          "Type the role and your company. Pin drafts criteria and asks what changes the search: hands-on or design-heavy, which stack, which deal-breakers.",
      },
      {
        title: "Matches backed by real work",
        description:
          "Pin searches 850M+ profiles plus GitHub, Stack Overflow, patents and papers, and explains each match with evidence. Send a review link to the engineering manager. No account needed.",
      },
      {
        title: "Outreach that cites their work",
        description:
          "Engineers ignore generic pitches. Pin writes each message around what the candidate built and sends it from your inbox, with LinkedIn and text steps.",
      },
      {
        title: "Technical questions, handled",
        description:
          "Pin answers what it knows, like on-call or remote policy, and archives the not-interested with a thank-you. New questions come to you on Slack once.",
      },
      {
        title: "Screens on the calendar",
        description:
          "Pin offers times your interviewers are free, handles the back-and-forth and sends the invite.",
      },
    ],
  },
  useCases: {
    title: "When tech companies choose Pin",
    items: [
      {
        heading: "Hiring senior and staff engineers with open-source experience",
        description:
          "A public GitHub history often says more than a resume. Pin reads contribution history, repo ownership and language activity to surface engineers with demonstrated expertise.",
        outcome: "35% fewer interviews per hire.",
      },
      {
        heading: "Filling ML roles that require published research",
        description:
          "Publications and pre-prints are the strongest signal for ML seniority. Pin indexes publication data to find ML engineers with relevant research and co-author networks.",
        outcome: "Applied-scientist pipelines built in days, not months.",
      },
      {
        heading: "Sourcing niche infrastructure roles (Rust, Kubernetes, eBPF)",
        description:
          "Rare stacks are under-represented in generalist LinkedIn searches. Pin surfaces engineers by their work on the actual tools, not just resume mentions.",
        outcome: "Qualified shortlists for stacks LinkedIn boolean search misses.",
      },
      {
        heading: "Replacing LinkedIn Recruiter seats company-wide",
        description:
          "Engineering orgs with several hiring managers often hold 3–5+ LinkedIn Recruiter seats at $10K+/yr each. Pin replaces them with richer signal on every candidate.",
        outcome: "91% of Pin users reduced or eliminated LinkedIn Recruiter spend.",
      },
    ],
  },
  comparison: {
    title: "Pin vs. the typical engineering hiring stack",
    alternativeLabel: "LinkedIn Recruiter + GitHub tool + ATS",
    criteria: [
      { label: "Multi-source sourcing in one query", pin: "yes", alternative: "no", note: "Typical stacks rely on separate tools stitched together manually" },
      { label: "GitHub contribution and language signal", pin: "yes", alternative: "partial", note: "Usually requires a separate GitHub sourcing add-on" },
      { label: "Academic publication and patent indexing", pin: "yes", alternative: "no" },
      { label: "Personalized outreach that cites candidate's actual work", pin: "yes", alternative: "partial", note: "Usually manual copy-paste from a separate browsing session" },
      { label: "120+ ATS integrations (Ashby, Greenhouse, Lever, Workday)", pin: "yes", alternative: "partial", note: "Varies by vendor; often one-way or polling-based" },
      { label: "Starting price", pin: "$99/mo", alternative: "$10K–$15K+/yr per seat for LinkedIn alone" },
      { label: "G2 rating", pin: "4.8 / 5", alternative: "Varies" },
    ],
  },
  testimonial: {
    quote:
      '"Pin surfaces candidates with the critical-thinking signal that matters for technical roles — not just keyword matches. It changed how we evaluate talent."',
    name: "Colleen Riccinto",
    role: "Founder, Cyber Talent Search",
    avatar: "/images/testimonials/colleen_photo.png",
    paragraphs: [
      "Engineering hiring lives and dies on signal quality. A senior engineer's LinkedIn often undersells their work. The real evidence is on GitHub, in Stack Overflow answers, in patents and in papers.",
      "Tech companies on Pin surface senior and staff engineers traditional LinkedIn searches miss, cut interviews per hire by 35%, and fill engineering roles in 14 days on average.",
    ],
  },
  integrations: {
    title: "Works with your ATS, inbox and calendar",
    items: [
      { name: "Ashby", category: "ATS" },
      { name: "Greenhouse", category: "ATS" },
      { name: "Lever", category: "ATS" },
      { name: "Workday", category: "ATS" },
      { name: "SmartRecruiters", category: "ATS" },
      { name: "Gmail", category: "Outreach" },
      { name: "Microsoft 365", category: "Outreach" },
      { name: "Google Calendar", category: "Scheduling" },
      { name: "Slack", category: "Collaboration" },
    ],
  },
  faq: {
    title: "Tech recruiting questions",
    items: [
      {
        question: "What is the best AI recruiting platform for tech companies?",
        answer:
          "Pin is the highest-rated AI recruiting platform for tech companies on G2 (4.8/5). Unlike LinkedIn-only sourcing tools, Pin indexes GitHub, Stack Overflow, patents, and publications, giving tech companies signal on engineering talent that resume-based tools miss. It then handles outreach, replies and scheduling.",
      },
      {
        question: "How does Pin source engineers from GitHub?",
        answer:
          "Pin indexes public GitHub activity including repository ownership, commit history, language distribution, and contribution graphs. Queries like \"senior Rust engineer with distributed systems experience\" return candidates matched on demonstrated GitHub activity, not resume keywords.",
      },
      {
        question: "Can Pin find ML engineers with published research?",
        answer:
          "Yes. Pin indexes academic publications, so ML roles requiring published research surface candidates with relevant publication history, which makes Pin effective for applied science and research hires.",
      },
      {
        question: "How is Pin different from a GitHub sourcing tool?",
        answer:
          "Most GitHub sourcing tools only cover GitHub. Pin combines GitHub with LinkedIn, Stack Overflow, patents, publications, and the broader web in one search across 850M+ profiles, then runs the outreach, replies and scheduling too.",
      },
      {
        question: "Can Pin help hire senior or staff engineers specifically?",
        answer:
          "Yes. Senior and staff hires often need signal beyond a resume: open-source contributions, technical writing, conference talks. Pin surfaces candidates based on this evidence, reducing interviews per hire by 35%.",
      },
      {
        question: "Does Pin integrate with Ashby, Greenhouse, Lever, and Workday?",
        answer:
          "Yes. Pin has native bidirectional integrations with 120+ ATS platforms including Ashby, Greenhouse, Lever, Workday, SmartRecruiters, and iCIMS. Outreach replies, candidate stages, and notes sync automatically.",
      },
      {
        question: "How much does Pin cost for an engineering org of 20 people?",
        answer:
          "Plans start at $99/mo. Only the hiring managers and recruiters sourcing engineers need seats. Consolidating multiple LinkedIn Recruiter seats usually saves engineering orgs 80–90% on annual recruiting tooling spend.",
      },
      {
        question: "Is Pin better than LinkedIn Recruiter for tech companies?",
        answer:
          "For engineering hiring, yes. LinkedIn Recruiter is keyword-matched against self-reported profiles. Pin adds GitHub, Stack Overflow, patents, and publications as signals, so it surfaces senior engineers whose LinkedIn undersells their actual work.",
      },
      {
        question: "Is Pin only for engineering hiring?",
        answer:
          "No. Pin works across every role. Tech companies use Pin for engineering, design, product, data science, and go-to-market hires, so one AI recruiter covers the whole org.",
      },
      {
        question: "How does Pin ensure unbiased technical hiring?",
        answer:
          "Pin's AI never sees names, gender, or protected demographic characteristics. Users report 6x more diverse pipelines, which matters for engineering orgs trying to expand beyond referral loops.",
      },
      {
        question: "Does Pin work for hiring remote engineers internationally?",
        answer:
          "Yes. Pin covers 100% of North America and Europe. Remote preference and location filters are built in, supporting distributed engineering orgs hiring across regions.",
      },
      {
        question: "Is Pin secure enough for proprietary engineering hiring data?",
        answer:
          "Pin is SOC 2 Type 2 compliant with encryption at rest and in transit, strict access controls, and third-party audits. Candidate data, pipeline notes, and outreach content stay private to your workspace.",
      },
    ],
  },
  related: {
    title: "More on AI recruiting for tech companies",
    items: [
      { label: "AI candidate sourcing: how it works", href: "/blog/ai-candidate-sourcing/", description: "How multi-source AI sourcing compares to traditional LinkedIn boolean workflows." },
      { label: "Best tech recruiting agencies", href: "/blog/best-tech-recruiting-agencies/", description: "When to hire in-house, when to use a tech recruiting agency, and how to evaluate both." },
      { label: "LinkedIn Recruiter alternatives 2026", href: "/blog/linkedin-recruiter-alternatives-2026/", description: "How engineering orgs are replacing LinkedIn Recruiter with AI recruiting." },
      { label: "Best AI sourcing tools 2026", href: "/blog/best-ai-sourcing-tools-2026/", description: "AI sourcing tools for technical hiring, ranked by signal depth and price." },
      { label: "How to source engineers beyond LinkedIn", href: "/blog/sourcing-engineers-beyond-linkedin/", description: "Sourcing workflows that combine LinkedIn data with GitHub and Stack Overflow signal." },
    ],
  },
  siblings: {
    title: "Also built for",
    items: [
      { label: "In-house recruiting teams", href: "/built-for/recruiting-teams/", description: "AI recruiting for in-house teams coordinating across hiring managers and reqs." },
      { label: "Startup founders", href: "/built-for/founders/", description: "Founder-led hiring before a dedicated recruiter joins." },
      { label: "Cybersecurity", href: "/built-for/cybersecurity/", description: "AI sourcing for infosec, AppSec, and security engineering hires." },
    ],
  },
  cta: {
    title: "Hire engineers by what they've built.",
    body: "Bring an open engineering role to a 20-minute walkthrough and watch Pin find candidates and draft outreach that cites their work.",
  },
};
