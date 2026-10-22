// Site navigation, shared by Header and Footer.
import { Search, Workflow, Send, CalendarCheck, Users, Plug, Briefcase, UserCheck, Rocket, Cpu, HeartPulse, ShieldCheck, Landmark } from "@lucide/astro";

export type NavLink = { label: string; href: string; desc?: string; external?: boolean; icon?: typeof Search; badge?: string; group?: string };

export const product: NavLink[] = [
  { label: "AI Sourcing", icon: Search, href: "/features/ai-sourcing/", desc: "Find the right people in 850M+ profiles" },
  { label: "AI Recruiting Agent", icon: Workflow, href: "/features/ai-recruiting-agent/", desc: "Job title in, booked interviews out" },
  { label: "Automated Outreach", icon: Send, href: "/features/automated-outreach/", desc: "Personal sequences sent from your inbox" },
  { label: "AI Interview Scheduling", icon: CalendarCheck, href: "/features/ai-interview-scheduling/", desc: "Replies sorted, calls booked" },
  { label: "Recruiting CRM", icon: Users, href: "/features/crm/", badge: "New", desc: "Every candidate and conversation in one place" },
  { label: "Pin MCP Server", icon: Plug, href: "/mcp/", badge: "New", desc: "Use Pin from Claude and other AI tools" },
];

export const builtFor: NavLink[] = [
  { label: "Hiring Managers", icon: UserCheck, href: "/built-for/hiring-managers/", desc: "Source without leaving Slack", group: "Built for" },
  { label: "Founders", icon: Rocket, href: "/built-for/founders/", desc: "Hire your first 20 people", group: "Built for" },
  { label: "Recruiting Teams", icon: Users, href: "/built-for/recruiting-teams/", desc: "Full-desk orchestration", group: "Built for" },
  { label: "Agencies", icon: Briefcase, href: "/built-for/agencies/", desc: "Multi-client workspaces", group: "Built for" },
  { label: "Tech Companies", icon: Cpu, href: "/built-for/tech-companies/", desc: "ML, infra, full-stack", group: "Industries" },
  { label: "Healthcare", icon: HeartPulse, href: "/built-for/healthcare/", desc: "Clinicians, RNs, allied", group: "Industries" },
  { label: "Cybersecurity", icon: ShieldCheck, href: "/built-for/cybersecurity/", desc: "Cleared & specialized talent", group: "Industries" },
  { label: "FinTech", icon: Landmark, href: "/built-for/fintech/", desc: "Quant, risk, compliance", group: "Industries" },
];

export const compare: NavLink[] = [
  { label: "Pin vs LinkedIn Recruiter", href: "/compare/pin-vs-linkedin-recruiter/" },
  { label: "Pin vs Juicebox", href: "/compare/pin-vs-juicebox/" },
  { label: "Pin vs GoPerfect", href: "/compare/pin-vs-goperfect/" },
  { label: "Pin vs Noon AI", href: "/compare/pin-vs-noon-ai/" },
  { label: "Pin vs Humanly", href: "/compare/pin-vs-humanly/" },
];

export const company: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Customers", href: "/customers/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/" },
  { label: "Docs & Guides", href: "https://docs.pin.com", external: true },
  { label: "Trust Center", href: "https://trust.pin.com", external: true },
];

export const legal: NavLink[] = [
  { label: "Terms of Service", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Candidate Privacy", href: "/candidate-privacy/" },
];
