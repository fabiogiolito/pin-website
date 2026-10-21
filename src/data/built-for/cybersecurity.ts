import type { BuiltForPage } from "./index";

export const cybersecurityPage: BuiltForPage = {
  slug: "cybersecurity",
  meta: {
    title: "Cybersecurity Recruiting Platform: AI for Infosec Hiring | Pin",
    description:
      "The cybersecurity recruiting platform that goes from req to booked screens: AI sourcing for CISSP, OSCP and SOC talent across 850M+ profiles, outreach from your inbox, scheduling handled. SOC 2 Type 2.",
  },
  hero: {
    eyebrow: "Pin for cybersecurity",
    title: 'The AI <span class="text-green">cybersecurity recruiting</span> platform',
    description:
      "Security engineers, SOC analysts and pentesters ignore generic outreach. Pin finds them by the evidence of their work, writes to them about it from your inbox, answers their questions and books the screen, on a SOC 2 Type 2 certified platform.",
    badges: ["SOC 2 Type 2 certified", "Multi-source security data", "4.8/5 on G2"],
    stamps: ["SOC 2 Type 2", "Clearance-aware", "GDPR & CCPA"],
  },
  stats: {
    title: "Cybersecurity hiring on Pin",
    items: [
      { value: "850M+", label: "Profiles, plus GitHub, CVE records and publications" },
      { value: "14 days", label: "Average time-to-fill for security roles" },
      { value: "5x", label: "Higher reply rate on outreach" },
      { value: "35%", label: "Fewer interviews per hire" },
    ],
  },
  journey: {
    title: "From an open security req to a booked technical screen",
    sub: "Pin handles sourcing, outreach, replies and scheduling. Your team spends its time evaluating people who want the job.",
    steps: [
      {
        title: "Brief Pin on the role",
        description:
          "Give Pin the role and your company. It drafts criteria (detections, IR, certs) and asks the questions that matter for security hiring, like whether clearance is required on day one.",
      },
      {
        title: "Matches on evidence, not keywords",
        description:
          "Pin searches 850M+ profiles plus GitHub, CVE disclosures and publications, and explains why each person fits. Send the hiring lead a review link. No account needed.",
      },
      {
        title: "Outreach that respects the audience",
        description:
          "Pin writes about the candidate's actual work and sends it from your Gmail or Outlook, with LinkedIn and text steps. Edit anything, or take over any thread.",
      },
      {
        title: "Questions answered, once",
        description:
          "Pin answers what it knows, like on-site requirements, and archives the not-interested politely. Questions it hasn't seen, like clearance sponsorship, come to you on Slack once.",
      },
      {
        title: "Screens booked",
        description:
          "Pin offers times you're free, handles the back-and-forth and sends the invite. Nothing to chase.",
      },
    ],
  },
  regulations: {
    title: "Compliance and security for cybersecurity recruiting",
    description:
      "Cybersecurity buyers scrutinize vendor security more than any other segment. Pin is built for the posture infosec teams expect from their own tooling.",
    items: [
      {
        heading: "SOC 2 Type 2 certified",
        body: "Pin holds an active SOC 2 Type 2 attestation from an independent auditor covering security, availability, and confidentiality. Full documentation, subprocessor lists, and the latest report summary live at trust.pin.com for vendor risk review.",
      },
      {
        heading: "Encryption and access controls",
        body: "Candidate data is encrypted at rest and in transit using industry-standard ciphers. Role-based access controls, SSO via Okta and Google Workspace, and least-privilege defaults keep access scoped to the recruiters and hiring managers who need it.",
      },
      {
        heading: "Audit log on every candidate interaction",
        body: "Every search, outreach message, status change, and data export is captured in an immutable audit log. Security teams can review activity during vendor assessments, internal investigations, or EEOC-aligned hiring audits.",
      },
      {
        heading: "Clearance-adjacent data handling",
        body: "Pin supports tracking self-reported clearance status as a candidate field so recruiters can filter for cleared talent, but Pin does not store, process, or verify classified information. Clearance verification remains with the hiring employer or a cleared-facility partner — Pin is the sourcing and workflow layer, not a classified system.",
      },
      {
        heading: "GDPR and CCPA alignment",
        body: "Pin honors candidate data subject requests, including right-to-delete and data export. Retention is configurable per workspace and candidate consent is tracked in the audit log — important for cybersecurity firms operating in regulated jurisdictions.",
      },
      {
        heading: "Bias controls aligned with EEOC guidance",
        body: "Pin's AI never sees names, gender, photos, or protected demographic attributes when ranking candidates. Users report 6x more diverse pipelines, which matters for a cybersecurity industry with well-documented underrepresentation.",
      },
    ],
  },
  useCases: {
    title: "When cybersecurity teams choose Pin",
    items: [
      {
        heading: "Hiring security engineers with a public research footprint",
        description:
          "The best security engineers have a track record: CVE disclosures, research, GitHub tools, conference talks. Pin reads those signals so credentialed specialists stop getting buried under generic 'Security Engineer' titles.",
        outcome: "35% fewer interviews per hire.",
      },
      {
        heading: "Scaling a SOC from 5 to 20 analysts",
        description:
          "High-volume SOC hiring breaks down on LinkedIn. Pin runs personal outreach to every approved candidate in parallel and books the screens, so headcount pressure doesn't turn into weeks of chasing.",
        outcome: "14-day average time-to-fill.",
      },
      {
        heading: "Finding credentialed specialists (CISSP, CEH, OSCP, CCSP)",
        description:
          "Certified security professionals are a small, identifiable pool. Pin surfaces candidates with credential signals and verified work history that boolean queries miss.",
        outcome: "Surface 3-5x more credentialed candidates per search.",
      },
      {
        heading: "Staffing an incident-response or 24x7 SOC function",
        description:
          "Breach-response hiring is urgent. Pin reaches 50-100 qualified candidates in parallel, compressing sourcing from weeks to days so you aren't settling for the first available person.",
        outcome: "Weeks of sourcing compressed into days.",
      },
    ],
  },
  comparison: {
    title: "Pin vs. the typical cybersecurity recruiting stack",
    alternativeLabel: "Typical cybersecurity recruiting stack",
    criteria: [
      { label: "Multi-source sourcing (GitHub + CVE + publications + LinkedIn)", pin: "yes", alternative: "partial", note: "Generalist tools are usually LinkedIn-only." },
      { label: "Credential-aware ranking (CISSP, OSCP, CEH, CCSP)", pin: "yes", alternative: "no", note: "Keyword-only search without credential weighting." },
      { label: "SOC 2 Type 2 certification on the recruiting tool itself", pin: "yes", alternative: "partial", note: "Often missing on budget sourcing tools." },
      { label: "Multi-channel sequences", pin: "yes", alternative: "partial", note: "Most alternatives are email-only or LinkedIn-only." },
      { label: "Audit log on every candidate interaction", pin: "yes", alternative: "partial", note: "Coverage varies and rarely integrates with ATS sync." },
      { label: "Bias-controlled ranking (no names or demographics into AI)", pin: "yes", alternative: "no", note: "Most tools pass full resumes into ranking." },
      { label: "Starting price", pin: "$99/mo with a free trial", alternative: "$10K+/year enterprise contracts" },
      { label: "Public G2 rating", pin: "4.8 / 5", alternative: "Varies; often no public rating" },
    ],
  },
  testimonial: {
    quote:
      '"Pin is the AI sourcing tool I reach for when I need credentialed security talent fast. It surfaces candidates resume databases miss."',
    name: "Colleen Riccinto",
    role: "Founder, Cyber Talent Search",
    avatar: "/images/testimonials/colleen_photo.png",
    paragraphs: [
      "Cybersecurity recruiting is harder than generalist technical hiring. The best candidates are visible through CVE disclosures, security research, open-source tools and conference talks, but hidden behind generic titles on LinkedIn.",
      "Pin reads the full evidence trail, then handles outreach and scheduling on a SOC 2 Type 2 certified platform. Infosec teams use it to hire SOC analysts, pentesters and security engineers in 14 days on average.",
    ],
  },
  integrations: {
    title: "Works with your ATS, identity provider and calendar",
    items: [
      { name: "Greenhouse", category: "ATS" },
      { name: "Ashby", category: "ATS" },
      { name: "Lever", category: "ATS" },
      { name: "Workday", category: "ATS / HRIS" },
      { name: "SmartRecruiters", category: "ATS" },
      { name: "iCIMS", category: "ATS" },
      { name: "Google Workspace", category: "Identity & calendar" },
      { name: "Microsoft 365", category: "Identity & calendar" },
      { name: "Okta", category: "SSO / identity" },
      { name: "Slack", category: "Collaboration" },
    ],
  },
  faq: {
    title: "Cybersecurity recruiting FAQ",
    items: [
      {
        question: "What is the best AI recruiting platform for cybersecurity?",
        answer:
          "Pin is the highest-rated AI recruiting platform on G2 (4.8/5) and is built for infosec hiring. Pin indexes GitHub contributions, CVE disclosures, security publications, and credential signals, giving cybersecurity teams signal on talent that resume-based tools miss. It's SOC 2 Type 2 certified, with a free trial and plans from $99/mo.",
      },
      {
        question: "How does Pin help hire CISSP, OSCP, or CEH certified professionals?",
        answer:
          "Pin ranks candidates by demonstrated credential signals and verified professional history. A query like 'senior security engineer, CISSP, cloud security' returns candidates matched on credential and work evidence, not just resume keywords. Pin surfaces CISSP, CISM, CEH, OSCP, CCSP, GIAC, and CompTIA Security+ holders across the 850M+ profile base.",
      },
      {
        question: "Is Pin SOC 2 compliant?",
        answer:
          "Yes. Pin is SOC 2 Type 2 certified with encryption at rest and in transit, strict role-based access controls, network security protocols, and full audit logging on every candidate interaction. Full compliance documentation is available at trust.pin.com.",
      },
      {
        question: "How does Pin handle security clearance information?",
        answer:
          "Pin lets recruiters track self-reported clearance status as a candidate field so you can filter and prioritize cleared talent, but Pin does not process classified data or verify clearance eligibility. Candidate clearance verification stays with the hiring employer or a cleared-facility partner — Pin provides the sourcing and workflow layer, not a classified system.",
      },
      {
        question: "Can Pin source security engineers who have published research or disclosed CVEs?",
        answer:
          "Yes. Pin indexes GitHub repositories, security publications, and vulnerability disclosure records, surfacing candidates with demonstrated offensive and defensive security work instead of keyword matches on LinkedIn.",
      },
      {
        question: "How does Pin help scale a SOC from 5 to 20 analysts?",
        answer:
          "Pin handles high-volume sourcing, outreach, replies and scheduling in parallel. Personal outreach from your inbox gets 5x higher reply rates, compressing time-to-fill on SOC analyst hiring to 14 days on average.",
      },
      {
        question: "Does Pin support urgent incident-response hiring?",
        answer:
          "Yes. Pin's automated sourcing and outreach run in parallel across dozens of candidates, accelerating breach-response hiring timelines from weeks to days without sacrificing credential or technical validation.",
      },
      {
        question: "How does Pin eliminate bias in cybersecurity hiring?",
        answer:
          "Pin's AI never sees names, gender, or protected demographic characteristics during sourcing and ranking. Users report 6x more diverse candidate pipelines, a meaningful shift for an industry with well-documented underrepresentation across SOC, engineering, and leadership roles.",
      },
      {
        question: "Does Pin integrate with the ATS platforms cybersecurity companies typically use?",
        answer:
          "Yes. Pin has native integrations with 120+ ATS platforms including Greenhouse, Ashby, Lever, Workday, SmartRecruiters, and iCIMS. Pin also connects to Google Workspace, Microsoft 365, and calendar tools for interview scheduling.",
      },
      {
        question: "Can cybersecurity staffing firms use Pin for contingent talent pools?",
        answer:
          "Yes. Pin's pipeline supports pre-qualified talent pools, ideal for cybersecurity staffing firms keeping warm benches of pentesters, GRC consultants, and incident-response specialists ready to deploy on client demand.",
      },
      {
        question: "How is Pin different from LinkedIn Recruiter for cybersecurity hiring?",
        answer:
          "LinkedIn Recruiter is limited to LinkedIn profile data and self-reported skills. Pin layers GitHub contributions, CVE disclosure history, security publications, and credential signals on top, ranking candidates by demonstrated work instead of keywords. Pin also runs the outreach, replies and scheduling at a fraction of a LinkedIn Recruiter seat's cost.",
      },
      {
        question: "How much does Pin cost for cybersecurity recruiting?",
        answer:
          "Plans start at $99/mo and scale to larger security and talent teams. Contact lookup credits for candidate emails and phone numbers are separate add-ons. A free trial is available so cybersecurity recruiters can evaluate Pin before committing.",
      },
    ],
  },
  related: {
    title: "Resources for cybersecurity recruiting",
    items: [
      { label: "LinkedIn Recruiter alternatives for 2026", href: "/blog/linkedin-recruiter-alternatives-2026/", description: "Why infosec teams are moving off LinkedIn Recruiter-only stacks." },
      { label: "AI candidate screening for technical roles", href: "/blog/ai-candidate-screening/", description: "How skills-based AI ranks security candidates on real evidence." },
      { label: "AI candidate sourcing: how it works", href: "/blog/ai-candidate-sourcing/", description: "What changes when you automate credential-heavy sourcing." },
      { label: "Best tech recruiting agencies", href: "/blog/best-tech-recruiting-agencies/", description: "Where cybersecurity staffing firms fit in the broader tech recruiting market." },
    ],
  },
  siblings: {
    title: "Related pages",
    items: [
      { label: "Pin for tech companies", href: "/built-for/tech-companies/", description: "AI recruiting for engineering, data, and infrastructure hiring." },
      { label: "Pin for fintech", href: "/built-for/fintech/", description: "Recruiting for regulated hiring, compliance-heavy roles, and financial services engineering." },
      { label: "Pin for recruiting teams", href: "/built-for/recruiting-teams/", description: "AI recruiting for in-house teams hiring across security, engineering, and GTM." },
    ],
  },
  cta: {
    title: "Hire security talent by the evidence of their work.",
    body: "Bring an open security role to a 20-minute walkthrough. We'll show Pin sourcing, outreach and our SOC 2 posture live.",
  },
};
