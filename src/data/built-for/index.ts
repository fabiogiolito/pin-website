import { foundersPage } from "./founders";
import { hiringManagersPage } from "./hiring-managers";
import { recruitingTeamsPage } from "./recruiting-teams";
import { agenciesPage } from "./agencies";
import { techCompaniesPage } from "./tech-companies";
import { cybersecurityPage } from "./cybersecurity";
import { healthcarePage } from "./healthcare";
import { fintechPage } from "./fintech";

export interface LinkItem {
  label: string;
  href: string;
  description?: string;
}

export interface BuiltForPage {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    /** HTML allowed; wrap the segment keyword in <span class="text-green">. */
    title: string;
    description: string;
    badges: string[];
    /** Compliance stamps shown under the hero on regulated-industry pages. */
    stamps?: string[];
  };
  stats: { title: string; items: { value: string; label: string }[] };
  /** Five steps, in order: Brief, Match, Outreach, Replies, Booked. */
  journey: { title: string; sub: string; steps: { title: string; description: string }[] };
  useCases: { title: string; items: { heading: string; description: string; outcome: string }[] };
  regulations?: { title: string; description: string; items: { heading: string; body: string }[] };
  comparison?: {
    title: string;
    alternativeLabel: string;
    criteria: { label: string; pin: string; alternative: string; note?: string }[];
  };
  testimonial: { quote: string; name: string; role: string; avatar?: string; paragraphs: string[] };
  integrations: { title: string; items: { name: string; category: string }[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  related?: { title: string; items: LinkItem[] };
  siblings: { title: string; items: LinkItem[] };
  cta: { title: string; body: string };
}

export const builtForPages: BuiltForPage[] = [
  foundersPage,
  hiringManagersPage,
  recruitingTeamsPage,
  agenciesPage,
  techCompaniesPage,
  cybersecurityPage,
  healthcarePage,
  fintechPage,
];
