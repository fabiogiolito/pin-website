import type { BuiltForPage } from "./index";

export const recruitingTeamsPage: BuiltForPage = {
  slug: "recruiting-teams",
  meta: {
    title: "AI Recruiting Platform for In-House Recruiting Teams | Pin",
    description:
      "The AI recruiting platform for in-house teams: Pin sources from 850M+ profiles, runs outreach from each recruiter's inbox, sorts replies and books interviews. 12 hrs/week saved per recruiter.",
  },
  hero: {
    eyebrow: "Pin for in-house recruiting teams",
    title: 'The AI recruiter for <span class="text-green">in-house recruiting teams</span>',
    description:
      "Every recruiter on your team gets an AI recruiter that goes from job title to booked interviews. Pin sources, writes and sends the outreach, answers candidate questions and schedules, so your team spends its week talking to interested candidates.",
    badges: ["4.8/5 on G2", "12 hrs/week saved per recruiter", "Free trial, no credit card"],
  },
  stats: {
    title: "What in-house teams measure on Pin",
    items: [
      { value: "12 hrs", label: "Saved per recruiter per week (Pin 2026 user survey)" },
      { value: "35%", label: "Fewer interviews per hire" },
      { value: "14 days", label: "Average time-to-fill" },
      { value: "83%", label: "Match acceptance" },
    ],
  },
  journey: {
    title: "One workflow per req, for the whole team",
    sub: "Pin runs the repetitive 70% of every search. Your recruiters own the conversations, the hiring managers and the close.",
    steps: [
      {
        title: "Open the req",
        description:
          "Give Pin the role and the team, with or without a JD. Pin drafts the criteria and asks the questions that matter before the first search: location, must-haves, deal-breakers.",
      },
      {
        title: "Calibrate with the hiring manager",
        description:
          "Pin searches 850M+ profiles and explains why each person fits. Send the hiring manager a review link. They approve or pass without an account, and Pin learns from it.",
      },
      {
        title: "Outreach from each recruiter",
        description:
          "Approved candidates get a personal sequence sent from the recruiter's own Gmail or Outlook, with LinkedIn and text steps. Anyone can edit a message or take over a thread.",
      },
      {
        title: "Replies, triaged",
        description:
          "Pin archives the not-interested with a thank-you and answers questions from your knowledge base. When three candidates ask about the loop, it asks the recruiter once on Slack.",
      },
      {
        title: "Screens booked, ATS updated",
        description:
          "Pin offers times the recruiter is free, sends the invite and syncs the candidate to your ATS. No scheduling threads, no copy-paste.",
      },
    ],
  },
  useCases: {
    title: "Scenarios where Pin earns its seat",
    items: [
      {
        heading: "Coordinating sourcing across 5+ open reqs",
        description:
          "Every recruiter pulls from the same candidate pool. Pin flags candidates a teammate is already talking to, so nobody gets the same pitch twice.",
        outcome: "90% reduction in manual sourcing time team-wide.",
      },
      {
        heading: "Handing off between sourcer and closer",
        description:
          "Every conversation lives in one place. The closer sees exactly what the sourcer sent, when the candidate replied, and what they asked.",
        outcome: "35% fewer interviews needed per hire (Pin 2026 user survey).",
      },
      {
        heading: "Scaling from 1 recruiter to 5 without rebuilding the stack",
        description:
          "Per-seat pricing scales with team size. No enterprise contract upgrades, no re-onboarding when you add the third recruiter.",
        outcome: "91% of teams reduce or eliminate LinkedIn Recruiter spend after switching.",
      },
      {
        heading: "Hitting quarterly hiring targets without burning out the team",
        description:
          "Pin handles sourcing, outreach, replies and scheduling. Recruiters spend the reclaimed time on candidate experience and hiring-manager partnership.",
        outcome: "14-day average time-to-fill vs. industry average of 36 days.",
      },
    ],
  },
  comparison: {
    title: "Pin vs. the typical in-house recruiting stack",
    alternativeLabel: "Typical 4-tool stack",
    criteria: [
      { label: "Unified inbox for every candidate conversation", pin: "yes", alternative: "no", note: "Typical stack splits conversations across 3–4 tools" },
      { label: "Shared candidate pipeline with automatic dedupe", pin: "yes", alternative: "partial", note: "Usually manual, spreadsheet-based" },
      { label: "Multi-source AI sourcing (850M+ profiles)", pin: "yes", alternative: "partial", note: "Usually LinkedIn-only in the legacy stack" },
      { label: "AI interview scheduling included", pin: "yes", alternative: "no", note: "Typically a separate paid tool" },
      { label: "120+ bidirectional ATS integrations", pin: "yes", alternative: "partial" },
      { label: "Cost for a 3-seat in-house team", pin: "~$300–$750/mo", alternative: "$3K–$10K+/mo" },
      { label: "Team-wide AI learning from hiring-manager feedback", pin: "yes", alternative: "no" },
      { label: "G2 customer rating", pin: "4.8 / 5", alternative: "Varies by tool" },
    ],
  },
  testimonial: {
    quote:
      '"Pin is an absolute money maker for recruiters… in 6 months I can directly attribute over $250k in revenue to Pin."',
    name: "Rich Rosen",
    role: "Founder, Cornerstone Search Associates",
    avatar: "/images/advisors/richrosen.webp",
    paragraphs: [
      "In-house teams lose the most time to three things: handoffs between sourcers and closers, duplicate outreach to the same candidate, and switching between a sourcer, a sequencer, a scheduler and an ATS.",
      "Pin collapses that into one AI recruiter for the whole team. Teams report saving 12 hours per recruiter per week and cutting interviews per hire by 35%.",
    ],
  },
  integrations: {
    title: "Syncs with the ATS your team already runs",
    items: [
      { name: "Greenhouse", category: "ATS" },
      { name: "Lever", category: "ATS" },
      { name: "Ashby", category: "ATS" },
      { name: "Workday", category: "ATS" },
      { name: "SmartRecruiters", category: "ATS" },
      { name: "iCIMS", category: "ATS" },
      { name: "BambooHR", category: "HRIS / ATS" },
      { name: "Rippling", category: "HRIS" },
      { name: "Gmail", category: "Email" },
      { name: "Outlook", category: "Email" },
      { name: "Google Calendar", category: "Scheduling" },
      { name: "Slack", category: "Notifications" },
    ],
  },
  faq: {
    title: "Recruiting team questions",
    items: [
      {
        question: "What is the best AI recruiting platform for in-house teams?",
        answer:
          "Pin is the highest-rated AI recruiting platform for teams on G2 (4.8/5) and is built for in-house collaboration: shared candidate pipeline, one inbox for every conversation, dedupe across recruiters, and 120+ ATS integrations. In-house teams save an average of 12 hours per recruiter per week.",
      },
      {
        question: "How does Pin handle collaboration between recruiters and hiring managers?",
        answer:
          "Send the hiring manager a review link and they can approve or decline candidates without an account. That feedback teaches Pin what good looks like for the req, so the next matches are better.",
      },
      {
        question: "Can multiple recruiters use the same Pin account?",
        answer:
          "Yes. Pin is priced per seat, and the shared pipeline, inbox, and candidate pool scale across unlimited concurrent reqs. Team members have role-based permissions so sourcers, closers, and hiring managers each see the views they need.",
      },
      {
        question: "Does Pin integrate with Greenhouse, Lever, Ashby, Workday, and SmartRecruiters?",
        answer:
          "Yes. Pin has native bidirectional integrations with Greenhouse, Lever, Ashby, Workday, SmartRecruiters, iCIMS, BambooHR, and 120+ other ATS platforms. Candidates, stages, and notes sync automatically between Pin and your ATS.",
      },
      {
        question: "How does Pin prevent duplicate outreach when multiple recruiters are sourcing?",
        answer:
          "Pin flags any candidate already in an active sequence across your team. If a sourcer tries to add someone a teammate already contacted, Pin surfaces the existing conversation instead of creating a new one.",
      },
      {
        question: "How much time does Pin save a recruiting team?",
        answer:
          "12 hours per recruiter per week on average (Pin 2026 user survey), the equivalent of 1.5 workdays. Savings come from automated sourcing, outreach, reply handling and scheduling. Teams also cut interviews per hire by 35% because match quality is higher upstream.",
      },
      {
        question: "How much does Pin cost for a recruiting team?",
        answer:
          "Plans start at $99/mo per seat and scale from solo recruiters to teams of 20+. A 3-seat in-house team typically pays $300–$750/mo depending on usage, roughly 10x less than a traditional sourcer + sequencer + scheduler + ATS stack.",
      },
      {
        question: "Can we control how much Pin automates?",
        answer:
          "Yes. Every automation is optional. Start hands-on, approving every match and email, then let Pin run outreach, FAQ replies and scheduling as the team builds trust. Settings can differ per req.",
      },
      {
        question: "Does Pin work for agencies and in-house teams equally?",
        answer:
          "Pin serves both, but the features differ by persona. In-house teams use the shared pipeline, team inbox, and ATS sync covered on this page. Agencies get multi-client workspaces, submission tracking, and client review links, covered on the agencies page.",
      },
      {
        question: "What reporting does Pin provide for recruiting team leaders?",
        answer:
          "Pipeline velocity by stage, sourcer-to-submit conversion, interview-to-offer conversion, outreach response rates, and diversity funnel metrics, filterable by recruiter, req, or time range.",
      },
      {
        question: "How does Pin ensure unbiased AI matching?",
        answer:
          "No names, gender, or protected demographic data is ever fed to the matching model. Pin users report 6x more diverse candidate pipelines compared to their prior sourcing tools.",
      },
      {
        question: "Can I get a demo before committing?",
        answer:
          "Yes. Pin offers a free trial with no credit card required, and a live demo with a Pin team member is available on request. Most in-house teams are onboarded and sourcing inside 48 hours.",
      },
    ],
  },
  related: {
    title: "Related reading for recruiting team leaders",
    items: [
      { label: "Best sourcing tools for recruiters", href: "/blog/best-sourcing-tools-recruiters/", description: "The tools in-house teams evaluate alongside Pin." },
      { label: "LinkedIn Recruiter alternatives 2026", href: "/blog/linkedin-recruiter-alternatives-2026/", description: "Why 91% of teams reduce or eliminate LinkedIn Recruiter spend after switching." },
      { label: "Time-to-hire metrics with AI", href: "/blog/time-to-hire-metrics-ai/", description: "How 14-day time-to-fill is possible with an AI recruiter." },
      { label: "AI candidate matching, explained", href: "/blog/ai-candidate-matching/", description: "How matching works and how teams train it over time." },
      { label: "Recruitment funnel benchmarks", href: "/blog/recruitment-funnel-benchmarks/", description: "Conversion benchmarks for in-house teams by stage." },
      { label: "AI recruiting guide 2026", href: "/blog/ai-recruiting-guide-2026/", description: "A primer on building an AI-first recruiting workflow." },
    ],
  },
  siblings: {
    title: "Also built for",
    items: [
      { label: "Recruiting agencies", href: "/built-for/agencies/", description: "Multi-client workspaces, submission tracking, and client review links." },
      { label: "Hiring managers", href: "/built-for/hiring-managers/", description: "For the hiring-manager side of the team: review candidates and track open reqs." },
      { label: "Startup founders", href: "/built-for/founders/", description: "For founder-led hiring before there is a recruiter on the team." },
    ],
  },
  cta: {
    title: "Give every recruiter an AI recruiter.",
    body: "Bring a live req to a 20-minute walkthrough and see how Pin fits your team's workflow, ATS and hiring managers.",
  },
};
