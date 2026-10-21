# Pin homepage: copy and storytelling plan

## 0. Inputs

- **Current site:** `~/Sites/pin/new-www` at HEAD. Astro, Tailwind, Alpine and GSAP.
  - Brand to keep: Rethink Sans, `bg #FCFAF8`, `green #4A7A5A` / `greenAccessible #3D6349`, `text #27272A`, plus the clay, purple and pearl secondaries. Tokens come from `tailwind.config.mjs`.
  - Proof points already on the site:
    - 850M+ profiles
    - 120+ ATS integrations
    - 10,000+ users
    - plans from $99/mo
    - SOC 2 Type 2
    - 5 testimonials and the customer logo row
- **Product UI to recreate:** `~/Sites/pin/frontend`. It uses styled-components, so its tokens get ported into Tailwind as a separate `app.*` palette.
  - App UI uses a system font, 12px dense text, the blue tint `hsl(221 83% 53%)`, AI purple `hsl(256 77% 60%)` and the gradient `#9F34DD→#455FF0`.
  - Each mockup sits inside a "window" frame so the product looks like the product, while the marketing chrome stays on-brand: warm sand and green.
- **Stack:** Astro + Tailwind, the same as new-www, so the work can merge back. Motion is native (IntersectionObserver, CSS sticky and transitions). GSAP turned out to be unnecessary.

## 1. The one-line story

> **From a job title to interested candidates on your calendar, without doing the work in between.**

Every section is one stop on that journey. The page *is* the pipeline:
**Brief → Match → Approve → Outreach → Replies → Booked**.
A slim progress rail stays sticky through the middle of the page and lights up each stage as you scroll. That rail is the thread the reader follows.

## 2. Hero: what, for whom, why, in one screen

Someone who reads only the hero should already know:
- **What** it is: an AI recruiter.
- **For whom:** recruiters.
- **The pain it solves:** sourcing, chasing, inbox triage and scheduling.
- **The outcome:** interviews with people who want to talk.

**Eyebrow:** `AI recruiting agent`

**Headline, options in my order of preference:**
1. **From job title to booked interviews. Pin does everything in between.**
2. Your next hire is already looking for you. Pin finds them, reaches out, and books the call.
3. Recruiting, minus the busywork.

**Subhead:**
> Tell Pin who you're hiring. It searches 850M+ profiles, writes the outreach, sends it from your inbox, answers candidates' questions, and schedules the interviews. You spend your time talking to people who are already interested.

**CTAs:** `Try Pin free` (primary, green) · `Book a demo` (outline)
**Microproof:** `No credit card · 10,000+ recruiters · SOC 2 Type 2`

**Hero visual:** a ~12s autoplay loop of the whole journey in miniature. It runs on load and has no scroll dependency.
1. The composer types "Senior Backend Engineer at ByteLogic" and Pin replies with a clarifying chip.
2. Three candidate cards deal in, fit scores count up (9.2, 8.7, 8.4), and a check stamps "Approved".
3. An email card flies to a "Sent from you@company.com" label.
4. A reply pops in: "Sounds great, Thursday works?"
5. A calendar block drops into Thursday 2:00 PM: "Intro · Maya Chen".

Under the visual, the six pipeline labels animate a fill from left to right in sync with the loop. This previews the rail used later. The loop pauses when hovered or off-screen, and under `prefers-reduced-motion` it shows the final frame only.

## 3. The problem (short, one screen)

**H2:** Recruiting should be about people. Most of the week isn't.

The visual is a recruiter's to-do list. As the section scrolls through, each item gets struck through and tagged `Pin`:
- Write the search string
- Scroll 300 profiles
- Write 40 intro emails
- Follow up, follow up, follow up
- Archive the "no thanks"
- Answer "is it remote?" for the 12th time
- Find a time that works

The last line stays un-struck and turns green: **Talk to great candidates.**
**Line under it:** "Pin takes the repetitive 80% so you can do the part only you can."

The 80% is framing, not a stat. Swap it for a measured number if we have one.

## 4. The journey: five chapters with the sticky rail

Every chapter uses the same layout so the rhythm reads clearly: copy on the left, a live product mockup on the right, alternating sides on desktop.
- The chapter number and rail stage highlight as the chapter enters.
- Each mockup has one focused interaction. It plays itself on enter, and the visitor can also click it.

### Ch. 1: Brief. "Start with a title. Pin fills in the blanks."

> No job description? No problem. Give Pin a role and a company. It researches the company, drafts the profile, and asks the questions a great sourcer would ask: seniority, must-haves, location, deal-breakers. Have a JD? Paste it, or import it from your ATS.

**Mockup:** the sourcing chat.
- Greeting, based on the real copy: "Hi Alex, I can help you build the search for your **Senior Backend Engineer** at **ByteLogic**…"
- Then a stepper card question: "Which seniority? Select all that apply", with checkbox rows.

**Interaction:** the visitor can click options, and the "Search criteria" chips on the side update live, e.g. `5+ yrs` `Go / Kotlin` `NYC or remote` `Fintech`.

### Ch. 2: Match. "850M+ profiles. Only the ones that fit."

> Pin reads every profile the way you would — trajectory, skills, the companies they've built at — and tells you *why* each person matches. Approve the ones you like. Pass on the rest, and Pin learns from every call you make.

**Mockup:** the candidate card.
- Header with avatar and fit-score tile (green when 8 or higher).
- "Why they match" rows, each with a sparkle icon, a bold criterion and an explanation.
- Approve and Reject buttons.

**Interaction:** a swipeable deck, using the arrow keys or the buttons. Approved cards slide right into a counter, "Approved · 12".

**Sub-beat: Review queue.** "Need the hiring manager's eyes? Send a review link. They approve or decline in one click, no login required." Show a small "Request review" dialog chip and avatars voting.

### Ch. 3: Outreach. "Emails that sound like you, because they're from you."

> Pin writes a personalized sequence for every approved candidate and sends it from your own Gmail or Outlook, on schedule, until they reply. Emails, LinkedIn touches and texts all go in one sequence. Edit anything, or don't. Jump in and take over any conversation at any moment.

**Mockup:** the sequence editor sidebar, which draws in on scroll as a vertical timeline. A line grows downward and each step pops in:
- `New Email · Day 0 · Sent automatically`
- `LinkedIn Connection Request · Day 2 · Task`
- `Reply to Email · Day 4`
- `Text Message · Day 7`

Beside it, an email preview personalizes the merge fields with a quick shimmer on each one. The "From: alex@yourcompany.com" line is highlighted with the annotation "Your inbox. Your name. Your conversation."

### Ch. 4: Replies. "Your inbox, pre-sorted. Most of it, already answered."

> "Not interested"? Archived. "Is this remote?" Answered. When Pin doesn't know, it asks you on Slack, saves your answer, and uses it for every candidate who asks next. You only open the conversations that need you.

**Mockup:** this is the signature sequence, pinned on scroll in three beats.
1. **Sort.** About 8 replies land in the inbox. "Not interested" rows slide out to "Archived". The "Interested" filter count ticks up.
2. **Ask.** A candidate asks "What's the equity range?" A Slack message appears: "Pin: Maya asked about equity. How should I answer?" The recruiter types a one-liner.
3. **Learn.** The answer becomes a "Knowledge base" card. Two more candidates ask the same question, and each gets an AI reply card ("Pin Agent scheduled a reply · Sends 3:15 PM") without Slack.

**End stat line:** "8 replies. 1 needs you." (scoped to the demo, so it's not a claim).

### Ch. 5: Booked. "They said yes. It's already on your calendar."

> Pin offers times you're actually free, handles the back-and-forth, and sends the invite. You show up to the call.

**Mockup:**
- An email reply with the time "Thursday at 2pm" highlighted green and the tooltip "You are available".
- Then a week calendar where three intro events drop in, one after another.

**Closing beat:** the sticky rail fills to its last stage, `Booked ✓`, and releases.

## 5. Control: "Autopilot, at whatever speed you're comfortable with"

> Every step is optional. Review every email, or let Pin run the whole thing. Turn on what you trust, and add more when you're ready.

**Interactive:** a toggle panel with these toggles, using the real automation names:
- Daily approvals
- Send sequences automatically
- Archive "Not interested"
- Answer candidate questions
- Schedule meetings

Next to it is the pipeline diagram. Each toggle switches its stage between "You" (a person icon) and "Pin" (a sparkle). With everything on, the caption reads: **"Job description → calendar. Zero busywork."** With everything off: **"You're in charge. Pin's still doing the research."**

This section answers the trust objection directly, so it comes right after the journey.

## 6. Scale: "No role too big or too small"

> Staff ML engineer in SF. ICU nurse in Columbus. 40 warehouse leads across Texas. Pin searches 850M+ profiles across dozens of data sources, so the right people exist for every search.

**Visual:** two slow marquee rows of role pills moving in opposite directions, with a large animated counter "850M+" that counts up once when it enters view.

**Stats row:**
- 850M+ profiles
- 120+ ATS integrations
- 10,000+ recruiters
- SOC 2 Type 2

## 7. Proof

- Logo row, from new-www's `SectionLogos`.
- Testimonials, reusing the existing 5. Lead with Miles Randle, "Pin made it possible for us to focus on the people side of things!", because it is the thesis of the page.
- Tag each quote to a chapter: Ryan Levy goes with Match, Fahad Hassan with speed.

## 8. Fits your stack and security

These sit in one compact band:
- ATS logos (Greenhouse, Lever, Ashby, Bullhorn and others) with "Syncs with 120+ ATS".
- Gmail, Outlook, Slack, Google Calendar.
- SOC 2 badge.

## 9. Pricing teaser, FAQ, final CTA

- **Pricing:** one line, "Plans from $99/mo. Free trial, no credit card", linking to `/pricing`.
- **FAQ:** reuse `homeFaqItems`, trimmed to 6. Add "Do emails really come from me?" and "What if I want to approve everything?"
- **Final CTA:**
  - H2: **Your next interview is one sentence away.**
  - A composer input, "Who are you hiring?", that hands off to app signup with the role prefilled. CTA `Start with Pin`.

## 10. Motion rules: engaging, not noisy

- **One pinned scroll sequence only:** Ch. 4 Replies. Everything else uses in-view reveals: fade plus 12px rise, 400ms, `cubic-bezier(.2,.8,.2,1)`, staggered 60ms.
- **The sticky rail** is the only persistent motion element. It moves on scroll progress with no autoplay.
- **Mockups self-play once** on enter, then wait for interaction. No infinite loops except the hero (paused off-screen) and the role marquee.
- **Numbers count up once.** Use `number-flow`, which is already in the new-www deps.
- **`prefers-reduced-motion`:** reveals become plain fades, pinning is disabled, and mockups render their end state.
- **Mobile:** no pinning. The rail becomes a small top progress bar, and the mockups scale to card width. Ch. 4 becomes three stacked frames.

## 11. Build plan (in this repo)

1. Scaffold Astro + Tailwind.
   - Copy brand tokens from `new-www/tailwind.config.mjs`.
   - Add an `app` color namespace ported from `frontend/src/styles/theme/colors.ts`.
   - Add lucide icons.
2. Build the mockup primitives in Tailwind, mirroring the frontend: `Window`, `AppButton` (raised and fill variants), `Badge`, `Avatar`, `Toggle`, `StepperCard`, `CandidateCard`, `SequenceStep`, `InboxRow`, `SlackMessage`, `CalendarWeek`.
3. Build the sections in page order. Get each one working statically before adding motion.
4. Add a GSAP pass: the rail, the Ch. 4 pin, and in-view reveals. Then the reduced-motion and mobile pass.

## 12. Open questions

- **Headline pick.** Option 1 is recommended.
- **Real numbers.** "The 80%" and "60 replies → 9" are placeholders. Do we have median data for reply auto-handling rate, time to first interview, or hours saved per week?
- ~~LinkedIn~~ Decided: LinkedIn steps are manual reminders ("Connect on LinkedIn", "Message on LinkedIn", subtitle "Reminder for you").
- **Profile count.** The brief says "millions of resumes" and the site says 850M+ profiles. I'm using 850M+.
- **Demo company.** Is "ByteLogic" OK as the example company, or should we use a fictional one?
