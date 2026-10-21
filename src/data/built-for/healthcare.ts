import type { BuiltForPage } from "./index";

export const healthcarePage: BuiltForPage = {
  slug: "healthcare",
  meta: {
    title: "Healthcare Recruiting Platform: AI Hiring for Hospitals | Pin",
    description:
      "The AI healthcare recruiting platform for nurses, allied health and clinicians: licensure-aware sourcing, email and text outreach, replies and scheduling handled. HIPAA-aligned, SOC 2 Type 2. From $99/mo.",
  },
  hero: {
    eyebrow: "Pin for health systems and healthcare staffing",
    title: 'The AI <span class="text-green">healthcare recruiting</span> platform',
    description:
      "Nurses and clinicians don't sit at a desk reading email. Pin finds licensed candidates across 850M+ profiles, reaches them by email and text between shifts, answers their questions about pay and schedules, and books the unit tour.",
    badges: ["SOC 2 Type 2 certified", "Built for high-volume hiring", "4.8/5 on G2"],
    stamps: ["SOC 2 Type 2", "HIPAA-aligned", "EEOC-aligned"],
  },
  stats: {
    title: "Healthcare hiring at hospital-system scale",
    items: [
      { value: "14 days", label: "Average time-to-fill" },
      { value: "5x", label: "Higher reply rate on outreach" },
      { value: "100%", label: "North America candidate coverage" },
      { value: "4.8 / 5", label: "Rating on G2" },
    ],
  },
  journey: {
    title: "From an open req to a booked unit tour",
    sub: "Pin runs sourcing, outreach, replies and scheduling, even across dozens of open reqs. Your recruiters talk to clinicians who are ready to move.",
    steps: [
      {
        title: "Open the req",
        description:
          "Give Pin the role and facility. It drafts criteria (license state, years in specialty, certifications, shift) and asks what matters, like travel or direct hire.",
      },
      {
        title: "Licensed matches, explained",
        description:
          "Pin searches 850M+ profiles and explains why each clinician fits: specialty experience, license state, certifications. Send the nurse manager a review link. No account needed.",
      },
      {
        title: "Email and text, between shifts",
        description:
          "Pin writes a personal sequence and sends it from your inbox, with text messages for clinicians who live on their phones. Edit anything, or take over any thread.",
      },
      {
        title: "Pay and shift questions, handled",
        description:
          "Pin answers what it knows, like night differential, and archives the not-interested with a thank-you. New questions, like sign-on bonuses, come to you on Slack once.",
      },
      {
        title: "Tours and interviews booked",
        description:
          "Pin offers times that work around shift schedules, handles the back-and-forth and sends the invite.",
      },
    ],
  },
  regulations: {
    title: "Healthcare compliance & data handling",
    description:
      "Healthcare buyers need visible compliance detail before shortlisting vendors. Pin is SOC 2 Type 2 certified and its workflow is HIPAA-aligned — Pin processes recruitment data (candidate PII), not patient PHI. Full documentation at trust.pin.com.",
    items: [
      {
        heading: "HIPAA-aligned recruitment workflow",
        body: "Pin processes recruitment data — resumes, contact information, work history, credential details — not Protected Health Information. Pin's data handling aligns with HIPAA administrative safeguards where recruiting workflows intersect with protected pipelines, and Pin is ready to plug into a HIPAA-compliant downstream hiring environment without processing PHI itself.",
      },
      {
        heading: "SOC 2 Type 2 certified",
        body: "Independent third-party auditor attestation on security, availability, and confidentiality controls, refreshed annually. Covers encryption at rest and in transit, access controls, network security, authentication, and incident response — the baseline hospital-system security teams require before vendor approval.",
      },
      {
        heading: "Credential verification support",
        body: "Pin captures RN/LPN/CNA license state and expiration, BSN/ASN education, specialty certifications, CEU completion dates, and NPI where applicable as structured custom fields on each candidate. Verification handoff to HR or a dedicated credentialing vendor is clean because credential data never leaves the record.",
      },
      {
        heading: "State licensure & multi-state practice tracking",
        body: "Healthcare hiring crosses state lines — Nurse Licensure Compact (NLC) membership, compact-state licensure, and multi-state travel nurse status all track on the candidate pipeline. Filters support state-by-state sourcing so multi-facility health systems can target the right licensed clinicians per location.",
      },
      {
        heading: "EEOC-aligned bias controls",
        body: "Pin's AI ranking model never sees names, race, age, gender, or other protected demographic attributes, aligned with EEOC guidance on AI hiring tools and Joint Commission cultural-competency expectations. Users see 6x more diverse pipelines, and audit logs preserve the decision trail for fair-hiring review.",
      },
      {
        heading: "Full audit log & candidate data rights",
        body: "Every outreach message, status change, and hiring decision is logged for compliance review. Candidate right-to-delete workflows align with GDPR and CCPA, giving healthcare employers a defensible answer to data-subject requests even in states with evolving privacy regimes.",
      },
    ],
  },
  useCases: {
    title: "Use cases for the healthcare recruiting platform",
    items: [
      {
        heading: "Hiring 50 nurses in 30 days for an expansion",
        description:
          "High-volume RN hiring is where manual sourcing breaks down. Pin sources, reaches out by email and text, answers questions and books interviews for every req at once, so no requisition gets dropped.",
        outcome: "14-day average time-to-fill with 5x higher reply rates.",
      },
      {
        heading: "Replacing travel nurse agency fees with direct sourcing",
        description:
          "Travel nurse agencies charge 30-50% markups on placements. Pin lets health systems source travel nurses directly and run outreach and scheduling in-house.",
        outcome: "~90% reduction in external recruiting spend for teams replacing agency workflows.",
      },
      {
        heading: "Filling niche allied health roles (MRI tech, CRNA, PA)",
        description:
          "Credentialed specialist roles are low-volume and high-urgency. Pin's multi-source search surfaces credentialed clinicians from professional association records, publications, and licensure data, not just LinkedIn.",
        outcome: "Surface 3-5x more qualified specialists per search than LinkedIn-only tools.",
      },
      {
        heading: "Hiring in rural or hard-to-fill markets",
        description:
          "LinkedIn coverage is thin outside metros. Pin's multi-source data with 100% North America coverage surfaces clinicians LinkedIn-only tools miss.",
        outcome: "Open pipelines in markets where LinkedIn-only sourcing returns zero candidates.",
      },
    ],
  },
  comparison: {
    title: "Pin vs. the typical healthcare recruiting stack",
    alternativeLabel: "Typical healthcare staffing stack",
    criteria: [
      { label: "Multi-source sourcing (publications, associations, licensure)", pin: "yes", alternative: "partial", note: "Typical stacks lean on LinkedIn plus one job board; specialist coverage suffers." },
      { label: "SMS outreach for clinician response", pin: "yes", alternative: "no", note: "SMS is usually a separate standalone tool in traditional stacks." },
      { label: "Credential tracking as pipeline custom fields", pin: "yes", alternative: "partial", note: "Often captured in disconnected spreadsheets or after-the-fact in the ATS." },
      { label: "SOC 2 Type 2 certification", pin: "yes", alternative: "partial", note: "Varies by vendor; many niche healthcare tools rely on parent-company attestation." },
      { label: "High-volume hiring (50+ concurrent reqs)", pin: "yes", alternative: "partial", note: "Legacy sourcing tools frequently degrade at hospital-system scale." },
      { label: "AI scheduling tuned for shift work", pin: "yes", alternative: "no" },
      { label: "Bias controls aligned with EEOC AI guidance", pin: "yes", alternative: "partial" },
      { label: "Starting price", pin: "$99/mo", alternative: "$10K+/yr", note: "Specialist healthcare ATSs commonly price in the five-figure annual range." },
      { label: "G2 rating", pin: "4.8 / 5", alternative: "partial", note: "Varies; many healthcare-niche tools have limited independent review coverage." },
    ],
  },
  testimonial: {
    quote:
      '"Pin is an absolute money maker for recruiters… in 6 months I can directly attribute over $250k in revenue to Pin."',
    name: "Rich Rosen",
    role: "Founder, Cornerstone Search Associates",
    avatar: "/images/advisors/richrosen.webp",
    paragraphs: [
      "Healthcare recruiting runs on high volume, urgent timelines and compliance overhead. Hospital systems hiring 50 nurses in 30 days can't afford boolean searches, email-only outreach and scheduling by hand.",
      "Pin brings sourcing, email and text outreach, reply handling and clinician-friendly scheduling into one SOC 2 Type 2 certified platform, for inpatient, outpatient, travel nursing and allied health hiring.",
    ],
  },
  integrations: {
    title: "Works with healthcare ATS and staffing systems",
    items: [
      { name: "iCIMS", category: "ATS" },
      { name: "Workday Recruiting", category: "ATS" },
      { name: "Greenhouse", category: "ATS" },
      { name: "Lever", category: "ATS" },
      { name: "SmartRecruiters", category: "ATS" },
      { name: "Bullhorn", category: "ATS / staffing CRM" },
      { name: "JobDiva", category: "Staffing CRM" },
      { name: "Google Calendar", category: "Scheduling" },
      { name: "Microsoft Outlook", category: "Scheduling" },
      { name: "Zoom", category: "Video interviews" },
      { name: "Microsoft Teams", category: "Video interviews" },
      { name: "Slack", category: "Collaboration" },
    ],
  },
  faq: {
    title: "Healthcare recruiting questions",
    items: [
      {
        question: "What is the best AI recruiting platform for healthcare?",
        answer:
          "Pin is the highest-rated AI recruiting platform on G2 (4.8/5) and is built for high-volume healthcare hiring. Pin sources nurses, allied health professionals, physicians, and medical technicians from 850M+ profiles, runs email and text outreach, handles replies and scheduling, and supports credential tracking as custom fields in the candidate pipeline.",
      },
      {
        question: "Can Pin handle high-volume nurse hiring at hospital-system scale?",
        answer:
          "Yes. Health systems running 50+ concurrent reqs use Pin's shared pipeline, multi-channel outreach, and AI scheduling to keep every role moving. Average time-to-fill is 14 days, and teams report 5x better response rates than email-only workflows.",
      },
      {
        question: "Is Pin HIPAA compliant?",
        answer:
          "Pin processes recruitment data (resumes, contact details, work history), not Protected Health Information (PHI). Pin's workflow is HIPAA-aligned: SOC 2 Type 2 certified with encryption at rest and in transit, strict access controls, and annual third-party audits. Full compliance documentation is at trust.pin.com.",
      },
      {
        question: "How does Pin help with nurse credential tracking?",
        answer:
          "Pin supports custom fields on every candidate: RN license state, expiration, BSN/ASN status, specialty certifications, and CEU status. Credentials stay visible throughout the hiring pipeline so recruiters hand off to HR for full verification without starting over.",
      },
      {
        question: "Can Pin reach clinicians via SMS?",
        answer:
          "Yes. Pin sequences combine email from your inbox with text messages, which matters in healthcare because clinicians are often on their phones between shifts rather than checking email at a desk. Teams using multi-channel outreach report 5x better response rates for nurse and allied health roles.",
      },
      {
        question: "How does Pin help replace travel nurse agency fees?",
        answer:
          "Travel nurse agencies typically charge 30-50% markups. Pin lets health systems source travel nurse candidates directly from the 850M+ profile database and run outreach and scheduling internally. Teams replacing agency workflows report roughly 90% reductions in external recruiting spend.",
      },
      {
        question: "Can Pin source for rural or hard-to-fill healthcare markets?",
        answer:
          "Yes. Pin covers 100% of North America with multi-source data: professional association records, publications, licensure signals, and LinkedIn. Rural and underserved markets that fail on LinkedIn-only searches often succeed with Pin.",
      },
      {
        question: "Does Pin integrate with healthcare ATS platforms like iCIMS and Workday?",
        answer:
          "Yes. Pin has native bidirectional integrations with iCIMS, Workday Recruiting, Greenhouse, Lever, SmartRecruiters, and 120+ other ATS platforms common in hospital systems and staffing firms, plus Google and Outlook calendars for clinician-friendly scheduling.",
      },
      {
        question: "How does Pin ensure unbiased hiring for healthcare roles?",
        answer:
          "Pin's AI ranking model never sees names, race, or protected demographic characteristics. Users report 6x more diverse candidate pipelines, an important signal for healthcare systems subject to EEOC oversight and Joint Commission cultural-competency standards.",
      },
      {
        question: "Can Pin support allied health and physician recruiting in addition to nursing?",
        answer:
          "Yes. Pin sources across every healthcare role: RNs, LPNs, CNAs, PAs, CRNAs, MRI/CT techs, lab technicians, therapists, physicians, and administrators, all from the same pipeline.",
      },
      {
        question: "How much does Pin's healthcare recruiting platform cost?",
        answer:
          "Plans start at $99/mo with a free trial, and scale to enterprise plans for hospital systems running 50+ concurrent reqs. See the pricing page for full plan details.",
      },
      {
        question: "Is Pin better than LinkedIn Recruiter for healthcare hiring?",
        answer:
          "Pin goes further than LinkedIn Recruiter for healthcare hiring on three axes: 850M+ multi-source profiles vs. LinkedIn-only coverage (better for specialist and rural roles), text outreach (critical for clinicians), and native credential custom fields. 91% of Pin users report reducing or eliminating LinkedIn Recruiter spend.",
      },
    ],
  },
  related: {
    title: "Related reading for healthcare talent teams",
    items: [
      { label: "AI recruiting guide 2026", href: "/blog/ai-recruiting-guide-2026/", description: "How AI recruiting works end to end, with a section on high-volume nurse hiring." },
      { label: "Best staffing agencies 2026", href: "/blog/best-staffing-agencies-2026/", description: "How top staffing firms, including healthcare-focused agencies, structure sourcing and credentialing." },
      { label: "LinkedIn Recruiter alternatives 2026", href: "/blog/linkedin-recruiter-alternatives-2026/", description: "Where LinkedIn Recruiter falls short for healthcare specialists." },
      { label: "Recruitment funnel benchmarks", href: "/blog/recruitment-funnel-benchmarks/", description: "Time-to-fill, response-rate, and offer-accept benchmarks, including nursing and allied health." },
    ],
  },
  siblings: {
    title: "Also built for",
    items: [
      { label: "Staffing agencies", href: "/built-for/agencies/", description: "Healthcare staffing firms and travel nurse agencies run Pin as their sourcing engine." },
      { label: "In-house recruiting teams", href: "/built-for/recruiting-teams/", description: "Hospital-system talent teams running concurrent reqs on a shared pipeline." },
      { label: "Fintech", href: "/built-for/fintech/", description: "How Pin handles compliance-heavy hiring in another regulated industry." },
    ],
  },
  cta: {
    title: "Spend your day with clinicians, not chasing them.",
    body: "Bring your hardest-to-fill req to a 20-minute walkthrough and watch Pin find licensed candidates and draft the outreach live.",
  },
};
