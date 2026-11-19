/**
 * AFIA 2026: the single source of truth for event facts.
 * Never retype any of these into a page. Change them here only.
 *
 * Sources, all Kevin-approved:
 *  - AFIA 2026 Rollout Plan v3 (1 Nov 2026), decisions Kevin made on 31 Oct 2026
 *  - AFIA 2026 Virtual Ceremony Production and Execution Plan
 *  - AFIA 2026 Jury Guidelines and Category Criteria (Joy Gabriel, 16 Nov 2026)
 */
export const AFIA = {
  name: "African Food Influencers Awards 2026",
  short: "AFIA 2026",
  edition: "Second edition",

  /** Saturday 12 December 2026. Online. The start time is NOT published:
   *  Kevin, 19 Nov 2026, "stick with only the date". `time` and `timeZones`
   *  are deleted rather than left unused, so anything that reaches for them
   *  fails the typecheck instead of quietly putting an hour back on the site. */
  dateLong: "Saturday 12 December 2026",
  dateShort: "12 December 2026",
  /** The countdown needs an instant. It is never rendered as a clock time,
   *  and the Event schema publishes the DATE only. */
  startISO: "2026-12-12T19:00:00+01:00",
  startDateOnly: "2026-12-12",
  endISO: "2026-12-12T20:30:00+01:00",

  format: "Online",
  venueName: "YouTube",
  watchHow: "Streamed free on African Food Network's YouTube channel. No sign-in needed to watch.",

  awards: 14,
  tracks: 4,
  price: "Free to watch",

  /**
   * The phase the site is in. Everything date-sensitive reads this.
   * "nominations" | "nominees" | "jury" | "ceremony" | "winners"
   */
  phase: "nominees" as const,
  phaseLine: "Nominees announced",

  /** Nominations for 2026 closed before the nominee announcement. */
  nominationsOpen: false,

  nomineesAnnounced: "12 November 2026",
  juryAnnounced: "26 November 2026",
  scoringCloses: "27 November 2026",
  winnersAnnounced: "12 December 2026",
  afn100Published: "13 December 2026",

  organiser: "African Food Network",
  organiserUrl: "https://afrifoodnetwork.com/",
  email: "awards@afrifoodnetwork.com",
  url: "https://awards.afrifoodnetwork.com",
} as const;

/**
 * The three dimensions every juror scores, 1 to 10, for every nominee.
 * From the AFIA 2026 Jury Guidelines, section 4.
 */
export const SCORING = [
  { n: 1, name: "Impact in 2025 and 2026", what: "The difference the nominee's work made during the assessment period.", q: "What changed because of their work?" },
  { n: 2, name: "Excellence", what: "The quality, consistency, originality and execution of the work itself.", q: "How good is the work itself?" },
  { n: 3, name: "Contribution to African food", what: "How the work helps people see, taste, understand, access or value African food and culture.", q: "Does it help the world see, taste or value African food more?" },
] as const;

/**
 * The jury roster. Kevin authorised publishing on 19 November 2026.
 *
 * Only acceptances that exist in writing in AFN's own mailbox are listed. Of the fourteen
 * invitations Joy sent on 12 November, three replies accepting are on record, one declined
 * (Maryam Almansur, 16 Nov) and the rest have not come back through kevin@. The remaining
 * replies may sit in awards@, which is a separate mailbox.
 *
 * So the section says "confirmed so far" and points at the 26 November announcement. Add a
 * juror here and they appear; nothing else needs touching. Never add a name without a
 * written acceptance.
 */
export const JURY_PUBLISHED = true;

/** True while the panel is still being announced. Flip to false once it is complete. */
export const JURY_ROLLING = true;

export type Juror = { name: string; role: string; country: string; photo?: string };

export const JURY_2026: Juror[] = [
  { name: "Ameyaw Debrah", role: "Founder, Ameyaw Debrah Media", country: "Ghana", photo: "ameyaw-debrah.webp" },
  { name: "Duchess Nena", role: "Vegan chef and plant-based nutritionist", country: "Nigeria", photo: "duchess-nena.webp" },
  { name: "Tshegofatso Stone", role: "Chef", country: "South Africa", photo: "tshegofatso-stone.webp" },
  { name: "Dr Robert Fungo", role: "Makerere University", country: "Uganda", photo: "robert-fungo.webp" },
];

/** The inaugural jury. Historical record, safe to show. */
export const JURY_2025: Juror[] = [
  { name: "Ruth Egbe", role: "Operations Manager, APC", country: "Nigeria" },
  { name: "Ireoluwa Soetan", role: "Founder, A+ Agency", country: "Nigeria" },
  { name: "Kachi Nwachukwu", role: "Programs Manager, APC", country: "Nigeria" },
  { name: "Dr. Maryam Habib", role: "MBBS, MSC PH, CMC, FIMC, AMT", country: "Nigeria" },
  { name: "Duchess Nena", role: "Vegan chef and plant-based nutritionist", country: "Nigeria" },
];
