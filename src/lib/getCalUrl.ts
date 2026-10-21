export type TeamSize = '1-2' | '3-10' | '10+'

// Cal.com calLink slugs (e.g. 'forms/uuid' or 'username/event-type')
// These are inlined into the BookADemoForm component at build time.
export const CAL_LINKS: Record<TeamSize, string> = {
  '1-2':  'team/pin/demo',
  '3-10': 'team/pin/demo2',
  '10+':  'team/pin/demo3',
}
