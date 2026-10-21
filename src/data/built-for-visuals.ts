// Per-slug product-UI content for the built-for journey demo (Brief → Match →
// Outreach → Replies → Booked). Same structure on every page; the people,
// roles and messages read like that audience's world. All of it is illustrative.

type Verdict = "Yes" | "Maybe";

export interface SegmentVisual {
  brief: {
    /** What the recruiter types: role and company. */
    input: string;
    question: string;
    options: [string, string];
    /** Pinned criteria chips. */
    pinned: string[];
    /** Deal-breaker chips. */
    banned: string[];
  };
  match: {
    lead: {
      name: string;
      hue: number;
      location: string;
      current: string;
      evals: [string, Verdict, string][];
      criteria: [string, string][];
    };
    others: [string, string][];
    /** Who gets the review link (hiring manager, client, founder…). */
    reviewer: string;
  };
  outreach: {
    from: string;
    subject: string;
    /** Body paragraphs; wrap merge fields in [[ ]]. */
    body: string[];
  };
  replies: {
    declined: [string, string];
    known: { name: string; question: string };
    slack: { question: string; count: number };
  };
  booked: {
    title: string;
    days: { day: string; times: string[]; selected?: number }[];
    note: string;
  };
}

const agencies: SegmentVisual = {
  brief: {
    input: "Staff PM at Cerebras",
    question: "I looked up Cerebras. Is remote OK, or SF and NYC only?",
    options: ["SF or NYC", "Remote OK"],
    pinned: ["B2B SaaS", "8+ yrs", "Shipped 0→1"],
    banned: ["Current FAANG"],
  },
  match: {
    lead: {
      name: "Ayana Brooks", hue: 340, location: "New York, NY", current: "Staff PM at Vanta (ex-Stripe)",
      evals: [["Agent products?", "Yes", "led Vanta's AI copilot from zero to GA."], ["Comp fit?", "Maybe", "likely near the top of the $280–320K band."]],
      criteria: [["B2B SaaS", "9 years across Stripe and Vanta."], ["0→1 shipped", "launched two new product lines."]],
    },
    others: [["Marcos Silva", "Principal PM · Retool"], ["Dina Okafor", "Sr. Staff PM · Linear"]],
    reviewer: "talent@cerebras.ai",
  },
  outreach: {
    from: "sam@yoursearchfirm.com",
    subject: "Staff PM, agent products",
    body: [
      "Hi [[Ayana]],",
      "Your work on [[Vanta's AI copilot]] is exactly what my client is hiring for. [[Cerebras]] is building a PM team around [[0→1 agent products]], reporting to the Head of Product.",
      "Worth a 15-minute chat this week?",
    ],
  },
  replies: {
    declined: ["Toru Nakamura", "Happy at Figma for now, thanks!"],
    known: { name: "Marcos Silva", question: "Is this role hybrid?" },
    slack: { question: "Can you share the client's name before the call?", count: 3 },
  },
  booked: {
    title: "Intro · Ayana × Cerebras",
    days: [
      { day: "Tue", times: ["10:00", "11:30", "3:00"], selected: 1 },
      { day: "Wed", times: ["9:00", "1:00", "4:00"] },
      { day: "Thu", times: ["11:00", "2:00", "4:30"] },
    ],
    note: "Invite sent · client brief attached",
  },
};

const founders: SegmentVisual = {
  brief: {
    input: "Founding Backend Engineer at Tessel",
    question: "Got it. Bay Area only, or is remote in the US OK?",
    options: ["SF preferred", "Remote US"],
    pinned: ["Distributed systems", "3+ yrs", "Shipped 0→1"],
    banned: ["Big-company only"],
  },
  match: {
    lead: {
      name: "Ada Park", hue: 200, location: "San Francisco, CA", current: "Engineer #4 at Zep (ex-Stripe)",
      evals: [["Startup pace?", "Yes", "fourth engineer, shipped the storage layer in a quarter."], ["Equity-heavy offer?", "Maybe", "left Stripe for early-stage, so likely open."]],
      criteria: [["Distributed systems", "built a SQLite-backed graph store."], ["0→1 shipped", "two products from first commit to paying users."]],
    },
    others: [["Emeka Obi", "Senior SWE · Airbnb Infra"], ["Sasha Ivanov", "Staff SWE · Temporal"]],
    reviewer: "cofounder@yourstartup.com",
  },
  outreach: {
    from: "maria@yourstartup.com",
    subject: "Founding engineer, from the founder",
    body: [
      "Hey [[Ada]],",
      "I saw your [[graph store work at Zep]] and had to reach out. We're [[pre-seed with 3 design partners]], and our first engineer will own [[storage end to end]]. No recruiters, just me.",
      "Up for 20 minutes with me this week?",
    ],
  },
  replies: {
    declined: ["Mira Chen", "Not looking right now, but good luck!"],
    known: { name: "Emeka Obi", question: "How much runway do you have?" },
    slack: { question: "What's the equity range for this role?", count: 3 },
  },
  booked: {
    title: "Intro · Ada × founder",
    days: [
      { day: "Thu", times: ["9:00", "11:00", "2:30"], selected: 2 },
      { day: "Fri", times: ["10:00", "1:00", "4:00"] },
      { day: "Mon", times: ["9:30", "12:00", "3:00"] },
    ],
    note: "Invite sent · 1-pager shared ahead",
  },
};

const hiringManagers: SegmentVisual = {
  brief: {
    input: "Senior Product Designer, Growth at Loop",
    question: "Is this an IC role, or will they mentor one or two juniors?",
    options: ["Senior IC", "Mentors juniors"],
    pinned: ["Growth / onboarding", "5+ yrs", "Figma"],
    banned: ["Agency-only"],
  },
  match: {
    lead: {
      name: "Jamie Wu", hue: 25, location: "Brooklyn, NY", current: "Senior Designer at Loom",
      evals: [["Owned activation?", "Yes", "redesigned Loom's onboarding, ran weekly A/B tests."], ["Hybrid NYC?", "Yes", "based in Brooklyn, three days in office works."]],
      criteria: [["Growth / onboarding", "four years on growth teams."], ["B2C funnels", "consumer signup flows at Loom."]],
    },
    others: [["Rohan Desai", "Product Designer · Robinhood"], ["Eliana Cortez", "Senior Designer · Duolingo"]],
    reviewer: "recruiting@loop.com",
  },
  outreach: {
    from: "dana@loop.com",
    subject: "Your Loom onboarding work",
    body: [
      "Hi [[Jamie]],",
      "I lead Growth at [[Loop]] and loved your [[onboarding case study at Loom]]. I'm hiring a senior designer who owns [[activation end to end]].",
      "Have 20 minutes this week to talk about it?",
    ],
  },
  replies: {
    declined: ["Nicolas Laurent", "Just started a new role, thanks though."],
    known: { name: "Rohan Desai", question: "How many days a week in office?" },
    slack: { question: "Who would this role report to?", count: 3 },
  },
  booked: {
    title: "Intro · Jamie × Dana",
    days: [
      { day: "Wed", times: ["11:30", "2:00", "4:00"], selected: 0 },
      { day: "Thu", times: ["9:00", "1:00", "3:30"] },
      { day: "Fri", times: ["10:00", "12:30", "3:00"] },
    ],
    note: "Invite sent · Zoom link added",
  },
};

const recruitingTeams: SegmentVisual = {
  brief: {
    input: "Senior Backend Engineer, Payments at Ledgerly",
    question: "Remote in the US, or do they need to be near SF?",
    options: ["Remote US", "SF hybrid"],
    pinned: ["Go", "Postgres", "5+ yrs"],
    banned: ["No high-scale systems"],
  },
  match: {
    lead: {
      name: "Leo Tanaka", hue: 160, location: "Austin, TX", current: "Senior SWE at Plaid (ex-Stripe)",
      evals: [["Payments depth?", "Yes", "five years on money movement at Stripe and Plaid."], ["Team lead?", "Maybe", "mentors two engineers, no formal lead role."]],
      criteria: [["Go", "Go in production every day."], ["High-throughput", "owns a service at 30k req/s."]],
    },
    others: [["Asha Menon", "Staff SWE · Square"], ["Kai Johansson", "Senior SWE · Affirm"]],
    reviewer: "sami.k@ledgerly.com",
  },
  outreach: {
    from: "priya@ledgerly.com",
    subject: "Senior Backend, Payments",
    body: [
      "Hi [[Leo]],",
      "I'm on the talent team at [[Ledgerly]]. Sami, who leads Payments, flagged your [[money-movement work at Plaid]]. We're scaling [[a Go and Postgres payments core]].",
      "Open to a 20-minute chat?",
    ],
  },
  replies: {
    declined: ["Bianca Romero", "Not the right time for me."],
    known: { name: "Asha Menon", question: "Is the role fully remote?" },
    slack: { question: "What does the interview loop look like?", count: 3 },
  },
  booked: {
    title: "Screen · Leo × Priya",
    days: [
      { day: "Tue", times: ["10:00", "12:00", "2:30"], selected: 1 },
      { day: "Wed", times: ["9:30", "1:30", "4:00"] },
      { day: "Thu", times: ["10:30", "2:00", "3:30"] },
    ],
    note: "Invite sent · synced to your ATS",
  },
};

const techCompanies: SegmentVisual = {
  brief: {
    input: "Staff SWE, Distributed Systems at Northwind",
    question: "Does this role code every day, or is it mostly design?",
    options: ["Hands-on", "Design-heavy"],
    pinned: ["Raft / Paxos", "7+ yrs", "Multi-region prod"],
    banned: ["Frontend-only"],
  },
  match: {
    lead: {
      name: "Jialin Zhou", hue: 260, location: "San Francisco, CA", current: "Staff SWE at CockroachDB",
      evals: [["Consensus depth?", "Yes", "maintains part of CockroachDB's Raft layer."], ["Hands-on?", "Yes", "top committer on the change-feed service."]],
      criteria: [["Multi-region prod", "ran multi-region rollouts for 3 years."], ["7+ yrs", "9 years in infrastructure."]],
    },
    others: [["Rafael Núñez", "Principal SWE · MongoDB"], ["Hana Takeshita", "Staff SWE · Snowflake"]],
    reviewer: "platform-lead@northwind.dev",
  },
  outreach: {
    from: "alex@northwind.dev",
    subject: "Your change-feed post",
    body: [
      "Hi [[Jialin]],",
      "I read your [[CockroachDB change-feed post]] twice. [[Northwind]] is building a [[multi-region control plane]], and I'd love your take on the design.",
      "20 minutes next week?",
    ],
  },
  replies: {
    declined: ["Oskar Wagner", "Not looking, but thanks for the note."],
    known: { name: "Rafael Núñez", question: "Is there an on-call rotation?" },
    slack: { question: "What's the equity refresh policy?", count: 3 },
  },
  booked: {
    title: "Screen · Jialin × Platform lead",
    days: [
      { day: "Wed", times: ["10:00", "11:30", "3:00"], selected: 2 },
      { day: "Thu", times: ["9:00", "1:00", "4:00"] },
      { day: "Fri", times: ["11:00", "2:00", "4:30"] },
    ],
    note: "Invite sent · system doc attached",
  },
};

const cybersecurity: SegmentVisual = {
  brief: {
    input: "Senior Detection Engineer at Bastion",
    question: "Is an active clearance needed on day one, or can it be in process?",
    options: ["Active TS/SCI", "Ability to clear"],
    pinned: ["SIEM detections", "5+ yrs", "IR rotation"],
    banned: ["No hands-on IR"],
  },
  match: {
    lead: {
      name: "Priya Kumar", hue: 300, location: "Arlington, VA", current: "Senior Detection Engineer at CrowdStrike",
      evals: [["Production detections?", "Yes", "writes and tunes Sigma rules for a 24/7 SOC."], ["Clearance?", "Yes", "lists an active TS/SCI."]],
      criteria: [["SIEM detections", "six years across Splunk and Sentinel."], ["IR rotation", "on the incident response rotation."]],
    },
    others: [["Darius Webb", "Security Engineer · Palo Alto"], ["Aisha Rahman", "Senior IR Analyst · Mandiant"]],
    reviewer: "detection-lead@bastion.io",
  },
  outreach: {
    from: "morgan@bastion.io",
    subject: "Detection engineering at Bastion",
    body: [
      "Hi [[Priya]],",
      "I came across your [[Sigma rule contributions]]. [[Bastion]] is standing up a [[detection team in a cleared environment]], and your background fits.",
      "Open to 15 minutes this week?",
    ],
  },
  replies: {
    declined: ["Luca Romano", "Not interested in cleared work, thanks."],
    known: { name: "Darius Webb", question: "Is the role on-site?" },
    slack: { question: "Do you sponsor clearance upgrades?", count: 3 },
  },
  booked: {
    title: "Screen · Priya × Detection lead",
    days: [
      { day: "Tue", times: ["9:00", "11:30", "2:00"], selected: 1 },
      { day: "Wed", times: ["10:00", "1:00", "4:00"] },
      { day: "Thu", times: ["9:30", "2:30", "4:00"] },
    ],
    note: "Invite sent · no documents shared",
  },
};

const healthcare: SegmentVisual = {
  brief: {
    input: "ICU Registered Nurse, Nights at Mercy Main",
    question: "Are travel nurses OK, or direct hire only?",
    options: ["Direct hire", "Travel OK"],
    pinned: ["BSN", "2+ yrs ICU", "Active OH license"],
    banned: ["Days only"],
  },
  match: {
    lead: {
      name: "Elena Fischer", hue: 15, location: "Cincinnati, OH", current: "ICU RN at Cleveland Clinic",
      evals: [["ICU experience?", "Yes", "three years in a medical ICU."], ["Night shift?", "Yes", "currently on 3×12 nights."]],
      criteria: [["Active OH license", "RN license current through 2027."], ["ACLS · PALS", "both current."]],
    },
    others: [["Marcus Reed", "Critical Care RN · Kettering"], ["Brianna Lopez", "ICU RN · UK Healthcare"]],
    reviewer: "nurse.manager@mercy.org",
  },
  outreach: {
    from: "jordan@mercy.org",
    subject: "ICU nights at Mercy Main",
    body: [
      "Hi [[Elena]],",
      "[[Mercy Main]] is opening four [[ICU night]] seats, and your [[MICU background]] is a strong fit.",
      "Do you have 15 minutes to hear about the unit?",
    ],
  },
  replies: {
    declined: ["Tony Ramirez", "Committed to my current contract, thanks."],
    known: { name: "Marcus Reed", question: "What's the night differential?" },
    slack: { question: "Is there a sign-on bonus?", count: 3 },
  },
  booked: {
    title: "Unit tour · Elena × Nurse manager",
    days: [
      { day: "Wed", times: ["2:00", "4:00", "6:00"], selected: 0 },
      { day: "Thu", times: ["10:00", "1:00", "5:00"] },
      { day: "Fri", times: ["9:00", "11:00", "3:00"] },
    ],
    note: "Invite sent · after her shift",
  },
};

const fintech: SegmentVisual = {
  brief: {
    input: "Senior Credit Risk Analyst at Fairway",
    question: "Does this role need prior SOX-controlled experience?",
    options: ["Yes, required", "Nice to have"],
    pinned: ["PD / LGD models", "SQL · Python", "4+ yrs"],
    banned: ["No lending exposure"],
  },
  match: {
    lead: {
      name: "Natalia Ivanov", hue: 120, location: "New York, NY", current: "Senior Risk Analyst at JPMorgan",
      evals: [["SMB lending models?", "Yes", "owns PD/LGD models for small-business credit."], ["CFA?", "Maybe", "passed Level II."]],
      criteria: [["SQL · Python", "builds model pipelines in Python daily."], ["4+ yrs", "six years in credit risk."]],
    },
    others: [["Omar El-Sayed", "Credit Risk · Goldman Sachs"], ["Charlotte Ibe", "Risk Analyst · Amex"]],
    reviewer: "risk.director@fairway.com",
  },
  outreach: {
    from: "nina@fairway.com",
    subject: "Senior Credit Risk at Fairway",
    body: [
      "Hi [[Natalia]],",
      "Your [[SMB credit risk work at JPMorgan]] matches what we're building at [[Fairway]]. The role owns our [[PD/LGD models]], remote in the US.",
      "Open to 20 minutes?",
    ],
  },
  replies: {
    declined: ["Paulo Moreira", "Staying put this year, thanks."],
    known: { name: "Omar El-Sayed", question: "Is the role remote?" },
    slack: { question: "What's the bonus target?", count: 3 },
  },
  booked: {
    title: "First round · Natalia × Risk director",
    days: [
      { day: "Tue", times: ["10:00", "12:30", "3:00"], selected: 1 },
      { day: "Wed", times: ["9:30", "1:00", "4:00"] },
      { day: "Thu", times: ["11:00", "2:00", "4:30"] },
    ],
    note: "Invite sent · role scope attached",
  },
};

export const segmentVisuals: Record<string, SegmentVisual> = {
  agencies,
  founders,
  "hiring-managers": hiringManagers,
  "recruiting-teams": recruitingTeams,
  "tech-companies": techCompanies,
  cybersecurity,
  healthcare,
  fintech,
};
