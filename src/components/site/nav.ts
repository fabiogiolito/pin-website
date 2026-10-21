// Site navigation, shared by Header and Footer.
import { Search, Workflow, Send, CalendarCheck, Users, Plug } from "@lucide/astro";

export type NavLink = { label: string; href: string; desc?: string; external?: boolean; icon?: typeof Search };

export const product: NavLink[] = [
  { label: "AI Sourcing", icon: Search, href: "/features/ai-sourcing/", desc: "Find the right people in 850M+ profiles" },
  { label: "AI Recruiting Agent", icon: Workflow, href: "/features/ai-recruiting-agent/", desc: "Job title in, booked interviews out" },
  { label: "Automated Outreach", icon: Send, href: "/features/automated-outreach/", desc: "Personal sequences sent from your inbox" },
  { label: "AI Interview Scheduling", icon: CalendarCheck, href: "/features/ai-interview-scheduling/", desc: "Replies sorted, calls booked" },
  { label: "Recruiting CRM", icon: Users, href: "/features/crm/", desc: "Every candidate and conversation in one place" },
  { label: "Pin MCP Server", icon: Plug, href: "/mcp/", desc: "Use Pin from Claude and other AI tools" },
];

export const builtFor: NavLink[] = [
  { label: "Recruiting Teams", href: "/built-for/recruiting-teams/" },
  { label: "Agencies", href: "/built-for/agencies/" },
  { label: "Hiring Managers", href: "/built-for/hiring-managers/" },
  { label: "Founders", href: "/built-for/founders/" },
  { label: "Tech Companies", href: "/built-for/tech-companies/" },
  { label: "Healthcare", href: "/built-for/healthcare/" },
  { label: "Cybersecurity", href: "/built-for/cybersecurity/" },
  { label: "FinTech", href: "/built-for/fintech/" },
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
