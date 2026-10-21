import type { BuiltForPage } from "./index";

export const fintechPage: BuiltForPage = {
  slug: "fintech",
  meta: {
    title: "Fintech Recruiting Platform: AI Hiring for Finance | Pin",
    description:
      "The AI fintech recruiting platform for engineering, risk and compliance hires: sourcing from 850M+ profiles, outreach from your inbox, replies and scheduling handled, with a full audit trail. SOC 2 Type 2.",
  },
  hero: {
    eyebrow: "Pin for fintech",
    title: 'The AI <span class="text-green">fintech recruiting</span> platform',
    description:
      "Fintech hiring means niche stacks, regulated roles and procurement that reads the fine print. Pin finds engineers, risk and compliance talent across 850M+ profiles, reaches out from your inbox, handles replies and books interviews, with every step logged.",
    badges: ["SOC 2 Type 2 certified", "850M+ profiles", "4.8/5 on G2"],
    stamps: ["SOC 2 Type 2", "FINRA-aware", "GDPR-aligned"],
  },
  stats: {
    title: "Fintech hiring outcomes on Pin",
    items: [
      { value: "14 days", label: "Average time-to-fill across fintech roles" },
      { value: "83%", label: "Match acceptance on AI-matched candidates" },
      { value: "6x", label: "More diverse candidate pipelines" },
      { value: "4.8 / 5", label: "On G2" },
    ],
  },
  journey: {
    title: "From an open req to a first round with the risk director",
    sub: "Pin runs sourcing, outreach, replies and scheduling, and logs every touch for your audit trail.",
    steps: [
      {
        title: "Brief Pin on the role",
        description:
          "Give Pin the role and your company. It drafts criteria (models, tools, certifications) and asks the compliance questions up front, like whether prior SOX-controlled experience is required.",
      },
      {
        title: "Matches with reasons",
        description:
          "Pin searches 850M+ profiles and explains why each person fits: the systems they've owned, the regulated environments they've worked in. Send a review link to the hiring lead. No account needed.",
      },
      {
        title: "Outreach from your inbox",
        description:
          "Pin writes a personal sequence about the candidate's actual work and sends it from your Gmail or Outlook, with LinkedIn and text steps. Every message is logged.",
      },
      {
        title: "Comp and remote questions, handled",
        description:
          "Pin answers what it knows and archives the not-interested with a thank-you. New questions, like the bonus target, come to you on Slack once, then Pin reuses your answer.",
      },
      {
        title: "First rounds booked",
        description:
          "Pin offers times you're free, handles the back-and-forth and sends the invite.",
      },
    ],
  },
  regulations: {
    title: "Compliance and security for fintech recruiting",
    description:
      "Fintech hiring sits under FINRA, SEC, SOC 2, and GDPR obligations. Pin is built so your recruiting platform does not become a compliance gap. Full documentation lives at trust.pin.com.",
    items: [
      {
        heading: "SOC 2 Type 2 certified",
        body: "Pin is SOC 2 Type 2 certified with audited controls on security, availability, and confidentiality. Encryption at rest and in transit, strict access controls, SSO, and continuous monitoring. Your procurement and InfoSec teams can review the full report at trust.pin.com before signature.",
      },
      {
        heading: "FINRA and SEC-ready audit trail",
        body: "Every candidate interaction — search, shortlist, outreach, reply, interview — is logged with user, timestamp, and action. Records are retained under configurable retention policies so fintech employers can produce the evidence trail FINRA examiners and SEC Reg BI reviews expect. Pin also surfaces FINRA-registered candidates natively in search.",
      },
      {
        heading: "EEOC and fair-lending bias controls",
        body: "Pin's AI never sees names, gender, age, or protected demographic characteristics when ranking candidates. This aligns with EEOC Uniform Guidelines and fair-lending oversight from the CFPB and OCC — and customers report 6x more diverse candidate pipelines as a result.",
      },
      {
        heading: "GDPR and UK/EU data handling",
        body: "Pin is GDPR-aligned with candidate right-to-delete workflows, documented subprocessors, configurable data retention windows, and lawful-basis tracking for sourced and contacted profiles. UK and EU fintech employers can run Pin as a compliant recruiting platform without building their own data-subject-request pipeline.",
      },
      {
        heading: "Subprocessor transparency and data residency",
        body: "Pin publishes a full, versioned subprocessor list at trust.pin.com with 30-day change notifications. Candidate data is processed in segregated environments with encryption keys managed per tenant, giving fintech buyers the transparency their third-party-risk programs require.",
      },
    ],
  },
  useCases: {
    title: "Fintech hiring scenarios where Pin wins",
    items: [
      {
        heading: "Hiring backend engineers with ledger and payments depth",
        description:
          "Boolean searches for 'payments engineer' return hundreds of false positives. Pin looks at what candidates have actually built, like payment rails, ledger systems and banking APIs, and explains each match.",
        outcome: "35% fewer interviews per hire.",
      },
      {
        heading: "Finding compliance officers before a regulatory deadline",
        description:
          "BSA, AML, KYC and FINRA-registered candidates are a small pool. Pin's multi-source data surfaces candidates traditional recruiters miss, and runs outreach and scheduling while the clock is ticking.",
        outcome: "14-day average time-to-fill.",
      },
      {
        heading: "Building a risk team before a growth round",
        description:
          "Investors expect a mature risk function. Pin sources risk managers from traditional banking and modern fintech at once, with 100% North America and Europe coverage.",
        outcome: "100% NA/EU profile coverage.",
      },
      {
        heading: "Replacing a fintech-specialist recruiting agency",
        description:
          "Fintech-specialist agencies charge 25-30% of first-year comp. Pin runs the same sourcing and outreach in-house for a monthly subscription, and keeps institutional knowledge of your stack with your team.",
        outcome: "25-30% agency fees eliminated.",
      },
    ],
  },
  comparison: {
    title: "Pin vs. the typical fintech recruiting stack",
    alternativeLabel: "Typical fintech recruiting stack",
    criteria: [
      { label: "SOC 2 Type 2 certification", pin: "yes", alternative: "partial", note: "Varies across stitched-together tools" },
      { label: "Multi-source sourcing (LinkedIn + GitHub + patents + publications)", pin: "yes", alternative: "partial", note: "Usually LinkedIn-only" },
      { label: "Skills-based matching on open-source contributions", pin: "yes", alternative: "no", note: "Most tools rely on keyword matches" },
      { label: "Compliance-ready audit log for every candidate touch", pin: "yes", alternative: "partial", note: "Varies by ATS add-ons" },
      { label: "Bias-elimination safeguards aligned with EEOC", pin: "yes", alternative: "no", note: "Rarely systematic in generalist stacks" },
      { label: "Native FINRA / BSA / AML signal parsing", pin: "yes", alternative: "no" },
      { label: "Starting price", pin: "$99/mo", alternative: "$10K–$35K+/yr", note: "Enterprise sourcing tools or agency retainers" },
      { label: "Public G2 rating", pin: "4.8 / 5", alternative: "Varies" },
    ],
  },
  testimonial: {
    quote:
      '"Pin is an absolute money maker for recruiters… in 6 months I can directly attribute over $250k in revenue to Pin."',
    name: "Rich Rosen",
    role: "Founder, Cornerstone Search Associates",
    avatar: "/images/advisors/richrosen.webp",
    paragraphs: [
      "Fintech hiring is harder than generalist recruiting: the stack is specialized, the regulatory overlay is strict, and the best candidates often don't advertise themselves on LinkedIn.",
      "Pin surfaces candidates with demonstrated experience in ledger systems, fraud detection and regulated markets, then handles outreach and scheduling on a SOC 2 Type 2 certified platform. Fintech teams fill engineering, risk and compliance roles in 14 days on average.",
    ],
  },
  integrations: {
    title: "Works with your ATS, CRM and calendar",
    items: [
      { name: "Greenhouse", category: "ATS" },
      { name: "Ashby", category: "ATS" },
      { name: "Lever", category: "ATS" },
      { name: "Workday", category: "ATS" },
      { name: "SmartRecruiters", category: "ATS" },
      { name: "iCIMS", category: "ATS" },
      { name: "Bullhorn", category: "ATS / CRM" },
      { name: "Salesforce", category: "CRM" },
      { name: "HubSpot", category: "CRM" },
      { name: "Google Calendar", category: "Scheduling" },
      { name: "Microsoft 365", category: "Scheduling" },
      { name: "Slack", category: "Collaboration" },
    ],
  },
  faq: {
    title: "Fintech recruiting platform FAQ",
    items: [
      {
        question: "How does Pin work as a fintech recruiting platform?",
        answer:
          "Pin is an AI recruiter for fintech companies. Give it a role and it sources candidates from 850M+ profiles, picks up fintech-specific signals like BSA, AML, KYC, FINRA, and PCI-DSS, sends personalized outreach from your inbox, answers candidate questions and schedules interviews, all with a SOC 2 Type 2 certified audit trail.",
      },
      {
        question: "Is Pin compliant with SOC 2 and fintech security requirements?",
        answer:
          "Yes. Pin is SOC 2 Type 2 certified with encryption at rest and in transit, strict access controls, and full audit logging for every candidate interaction. Documentation is available at trust.pin.com for your procurement and InfoSec reviews.",
      },
      {
        question: "How does Pin support compliance and risk hiring for fintech?",
        answer:
          "Pin picks up regulatory experience, certifications, and industry-specific signals (BSA, AML, KYC, FINRA) that keyword searches miss. Multi-source data surfaces compliance officers and risk managers from traditional banking and modern fintech at once, typically filling roles in 14 days.",
      },
      {
        question: "Can Pin source engineers with payments, ledger, or fraud experience?",
        answer:
          "Yes. Pin looks at GitHub repositories, open-source contributions, patents, and publications to surface engineers with demonstrated experience in payments rails, ledger systems, and fraud detection, not just keyword matches on resume titles.",
      },
      {
        question: "How does Pin help fintech teams meet FINRA and SEC hiring obligations?",
        answer:
          "Pin logs every candidate interaction for audit review, retains records under configurable retention policies, and surfaces FINRA-registered candidates directly. Combined with SOC 2 Type 2 certification, this supports the evidence trail FINRA and SEC examiners expect from regulated fintech employers.",
      },
      {
        question: "How does Pin ensure bias-free candidate selection for fair-lending oversight?",
        answer:
          "Pin's AI never sees names, gender, or protected demographic characteristics. Pin users report 6x more diverse candidate pipelines, which matters for fintech companies subject to EEOC and fair-lending oversight from regulators like the CFPB and OCC.",
      },
      {
        question: "How does Pin support crypto and DeFi hiring?",
        answer:
          "Crypto and DeFi talent is identifiable mostly through open-source contributions, GitHub activity, and public publications rather than traditional LinkedIn profiles. Pin surfaces smart contract auditors, protocol designers, and DeFi engineers from that contribution history.",
      },
      {
        question: "How does Pin compare to a fintech-specialist recruiting agency?",
        answer:
          "Fintech-specialist agencies charge 25-30% of first-year comp per hire. Pin is a monthly subscription regardless of volume. For fintech teams making 5+ hires per year, bringing the work in-house on Pin is dramatically cheaper and keeps knowledge of your stack and compliance posture in-house.",
      },
      {
        question: "Does Pin integrate with Greenhouse, Ashby, Workday, and other ATS platforms?",
        answer:
          "Yes. Pin integrates natively with 120+ ATS platforms including Greenhouse, Ashby, Lever, Workday, SmartRecruiters, and iCIMS. Candidates sync bidirectionally so your compliance audit trail stays intact across systems.",
      },
      {
        question: "How much does Pin cost for a fintech team?",
        answer:
          "Plans start at $99/mo with a free trial. There are no per-hire fees or percentage-of-salary charges. See the pricing page for current tiers.",
      },
      {
        question: "What is the average time-to-fill for fintech roles on Pin?",
        answer:
          "14 days on average across all Pin customers per the Pin 2026 user survey. Fintech roles with heavy compliance diligence may run slightly longer, but typically still fall inside 3 weeks.",
      },
      {
        question: "How does Pin handle GDPR for UK and EU fintech hiring?",
        answer:
          "Pin is GDPR-aligned with candidate right-to-delete workflows, documented subprocessors (listed at trust.pin.com), configurable data retention, and EU-compliant data handling across candidate records and outreach logs.",
      },
    ],
  },
  related: {
    title: "Related fintech recruiting resources",
    items: [
      { label: "Best AI recruiting tools for enterprise", href: "/blog/best-ai-recruiting-tools-enterprise/", description: "How enterprise and fintech buyers evaluate AI recruiting tools on compliance, integrations, and ROI." },
      { label: "AI recruiting guide 2026", href: "/blog/ai-recruiting-guide-2026/", description: "Models, workflows, and measurement for regulated-industry buyers." },
      { label: "LinkedIn Recruiter alternatives 2026", href: "/blog/linkedin-recruiter-alternatives-2026/", description: "Why fintech teams are moving off LinkedIn Recruiter." },
      { label: "Talent analytics guide", href: "/blog/talent-analytics-guide/", description: "Measuring sourcing funnel health, time-to-fill, and diversity pipeline metrics." },
    ],
  },
  siblings: {
    title: "Also built for",
    items: [
      { label: "Pin for tech companies", href: "/built-for/tech-companies/", description: "Engineering-heavy hiring with skills-based matching." },
      { label: "Pin for cybersecurity", href: "/built-for/cybersecurity/", description: "Security and infosec hiring with the same audit trail." },
      { label: "Pin for recruiting teams", href: "/built-for/recruiting-teams/", description: "In-house teams running Pin across multiple business units." },
    ],
  },
  cta: {
    title: "Hire fintech talent without the agency fee.",
    body: "Bring an open engineering, risk or compliance role to a 20-minute walkthrough. We'll show the sourcing, outreach and audit trail live.",
  },
};
