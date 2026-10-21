import type { BuiltForPage } from "./index";

export const hiringManagersPage: BuiltForPage = {
  slug: "hiring-managers",
  meta: {
    title: "AI Candidate Sourcing for Hiring Managers | Pin",
    description:
      "AI candidate sourcing for hiring managers: type the role, approve the matches, and Pin handles outreach, replies and scheduling. 83% match acceptance. 14-day time-to-fill.",
  },
  hero: {
    eyebrow: "Pin for hiring managers",
    title: 'AI candidate sourcing for <span class="text-green">hiring managers</span>',
    description:
      "Don't wait for recruiter bandwidth. Tell Pin the role and it finds people who fit, explains why, reaches out from your inbox and books the intros. You review candidates, not resumes.",
    badges: ["83% match acceptance", "Skills-based matching", "Free trial, no credit card"],
  },
  stats: {
    title: "AI candidate sourcing for hiring managers, by the numbers",
    items: [
      { value: "83%", label: "Match acceptance (Pin 2026 user survey)" },
      { value: "14 days", label: "Average time-to-fill" },
      { value: "35%", label: "Fewer interviews per hire" },
      { value: "5x", label: "Higher reply rate on outreach" },
    ],
  },
  journey: {
    title: "From an open req to intros on your calendar",
    sub: "Pin does the sourcing, chasing and scheduling. You spend your time on the candidates who want to talk.",
    steps: [
      {
        title: "Describe the role",
        description:
          "Type the role and your company. Pin drafts the criteria and asks the questions that change who's a match, like IC or mentor, hybrid or remote.",
      },
      {
        title: "Review matches with reasons",
        description:
          "Pin searches 850M+ profiles and explains why each person fits: the work they've shipped, not just their title. Approve or pass, and loop in your recruiter with a review link.",
      },
      {
        title: "Outreach from your inbox",
        description:
          "Candidates hear from the person they'd work for. Pin writes a personal sequence and sends it from your Gmail or Outlook, plus LinkedIn and text steps. Edit anything.",
      },
      {
        title: "Questions handled",
        description:
          "Pin archives the not-interested with a thank-you and answers what it knows, like office days. New questions come to you on Slack once, then Pin reuses your answer.",
      },
      {
        title: "Intros booked",
        description:
          "Pin offers times you're free and sends the invite. Your calendar fills with conversations, not scheduling threads.",
      },
    ],
  },
  useCases: {
    title: "When hiring managers use Pin",
    items: [
      {
        heading: "Your recruiter has 15 reqs and yours is lowest priority",
        description:
          "Don't wait. Source your own shortlist with Pin and hand qualified, interested candidates to your recruiter to close, cutting 10-15 days off time-to-fill.",
        outcome: "14-day average time-to-fill on Pin.",
      },
      {
        heading: "You need to judge skills your recruiter can't assess",
        description:
          "Pin explains each match in terms of demonstrated work, like what they built and where, so you see why someone fits, not just that they do.",
        outcome: "35% fewer interviews per hire (Pin 2026 user survey).",
      },
      {
        heading: "You're hiring your first direct report",
        description:
          "Pin does what a recruiter would for your first 3-5 hires: sourcing, outreach, replies and scheduling. Add a dedicated recruiter later when volume justifies it.",
        outcome: "Start sourcing in 15 minutes from a single line.",
      },
      {
        heading: "You're an engineering manager hiring senior ICs",
        description:
          "Evaluate candidates on demonstrated work, like open-source contributions and systems they've owned, rather than the credential screens recruiters run.",
        outcome: "Surface the top 10-20 candidates from 30-50 sourced per req.",
      },
    ],
  },
  testimonial: {
    quote:
      '"Pin immediately felt intuitive. We simplified our job descriptions, launched searches in minutes, and started reaching candidates the same afternoon."',
    name: "Ben Caggia",
    role: "Co-Founder, Syelo",
    avatar: "/images/testimonials/bencaggia_photo.jpg",
    paragraphs: [
      "Hiring managers own the req and the final call, and often end up sourcing themselves when recruiter bandwidth is tight. Pin gives them the same AI recruiter a recruiting team uses.",
      "83% of Pin-recommended candidates are accepted into hiring pipelines, and a review link keeps your recruiter in the loop without losing context.",
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
      { name: "iCIMS", category: "ATS" },
      { name: "Google Calendar", category: "Calendar" },
      { name: "Microsoft Outlook", category: "Email & Calendar" },
      { name: "Gmail", category: "Email" },
      { name: "Slack", category: "Collaboration" },
    ],
  },
  faq: {
    title: "Hiring manager questions",
    items: [
      {
        question: "Can hiring managers use Pin directly when there's no dedicated recruiter on the team?",
        answer:
          "Yes. Many hiring managers use Pin to source and screen candidates when recruiter bandwidth is tight or when they own the full hiring process for their team. Plans start at $99/mo with a free trial, no enterprise contract required.",
      },
      {
        question: "How does Pin support skills-based hiring?",
        answer:
          "Pin evaluates candidates on demonstrated capability (work history, projects, publications, certifications) rather than degree or title pattern matching, and explains why each person fits. This surfaces candidates traditional keyword search misses.",
      },
      {
        question: "Can I share candidates with my recruiter?",
        answer:
          "Yes. Send a review link and your recruiter, or anyone on the team, can approve or decline candidates without an account. Conversations stay in one place, so you can hand a warm candidate to a recruiter with the full history intact.",
      },
      {
        question: "How does Pin compare to hiring a dedicated recruiter?",
        answer:
          "Pin handles the 70% of recruiting that's repetitive: sourcing, outreach, follow-ups, candidate questions and scheduling. A human recruiter is still valuable for judgment-heavy work like offer negotiation and complex closes. Many teams start with Pin and add a recruiter once hiring volume justifies it.",
      },
      {
        question: "Is Pin the right AI recruiting tool for engineering managers?",
        answer:
          "Yes. Engineering hiring managers use Pin to source senior ICs their recruiter doesn't have the context to evaluate, and report 35% fewer interviews per hire.",
      },
      {
        question: "How accurate is Pin's AI candidate matching?",
        answer:
          "83% of Pin-recommended candidates are accepted into customers' hiring pipelines (Pin 2026 user survey). Matching is tuned to skills and demonstrated capability rather than keyword overlap.",
      },
      {
        question: "Does Pin help reduce bias in candidate selection?",
        answer:
          "Pin's AI never sees names, gender, or protected demographic characteristics during ranking. Users report 6x more diverse candidate pipelines compared to their prior sourcing methods, while still meeting role-specific skills thresholds.",
      },
      {
        question: "How much does Pin cost for low-volume hiring managers?",
        answer:
          "Plans start at $99/mo with a free trial, which suits hiring managers running one or two open reqs. Contact lookup credits are only used when you choose to reveal a candidate's email or phone number.",
      },
      {
        question: "How does Pin integrate with our existing ATS?",
        answer:
          "Pin integrates natively with 120+ ATS platforms including Ashby, Greenhouse, Lever, Workday, SmartRecruiters, and iCIMS. Candidates and activity sync bidirectionally so hiring managers and recruiters work off the same pipeline.",
      },
      {
        question: "Is Pin better than LinkedIn for hiring manager sourcing?",
        answer:
          "For hiring managers doing their own sourcing, Pin goes further than a single-source LinkedIn search: 850M+ profiles across multiple data sources, skills-based matching, and outreach that runs itself. Most Pin customers reduce or eliminate LinkedIn Recruiter seats within 90 days.",
      },
      {
        question: "How quickly can a hiring manager start sourcing on Pin?",
        answer:
          "About 15 minutes. Type the role in plain language, answer Pin's clarifying questions, and the first shortlist lands within minutes, no extra setup required.",
      },
      {
        question: "What's the best AI recruiting tool for hiring managers without a dedicated recruiter?",
        answer:
          "Pin is built for this: AI candidate sourcing, skills-based matching, automated outreach from your inbox, candidate questions answered and interviews booked, from $99/mo. You get a recruiter-grade workflow without an enterprise contract or a full-time recruiter hire.",
      },
    ],
  },
  related: {
    title: "Related reading for hiring managers",
    items: [
      { label: "How to automate your recruiting workflow with AI", href: "/blog/automate-recruiting-workflow-ai/", description: "How skills-based AI recruiting differs from older automation stacks." },
      { label: "Best candidate sourcing tools for passive talent", href: "/blog/candidate-sourcing-tools/", description: "How to build a warm pipeline before a req opens." },
      { label: "Recruit passive candidates on LinkedIn without InMail", href: "/blog/recruiting-passive-candidates-linkedin/", description: "What still works on LinkedIn, and what to supplement it with." },
      { label: "Time-to-hire metrics and how AI moves them", href: "/blog/time-to-hire-metrics-ai/", description: "Benchmarks on time-to-fill and interview-to-hire ratios." },
      { label: "AI candidate screening explained", href: "/blog/ai-candidate-screening/", description: "How Pin evaluates skills, work history, and signals beyond the resume." },
      { label: "AI candidate matching explained", href: "/blog/ai-candidate-matching/", description: "Why skills-based ranking outperforms keyword match for hiring managers." },
    ],
  },
  siblings: {
    title: "Also built for",
    items: [
      { label: "Recruiting teams", href: "/built-for/recruiting-teams/", description: "In-house recruiters collaborating with hiring managers on a shared pipeline." },
      { label: "Startup founders", href: "/built-for/founders/", description: "Founder-led hiring before the first recruiter joins the team." },
      { label: "Tech companies", href: "/built-for/tech-companies/", description: "Engineering hiring with the signal that matters for technical roles." },
    ],
  },
  cta: {
    title: "Fill your team without waiting in the recruiting queue.",
    body: "Bring your open role to a 20-minute walkthrough and watch Pin build the shortlist and draft outreach live. Or start free today.",
  },
};
