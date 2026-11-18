# BRIEF: AFIA 2026 site update

John, 18 November 2026. Direction **A, "The Index"** (see `BRAINSTORM.md`).
Brand guide: `Web Design/Design Guides/afia/` v1.0, which outranks John's taste and PDOS style.

## The capture whose skeleton is being rebuilt

**`02_LIBRARY/sites/height/awwwards-offfforum/`**, the `lineup` and `schedule` pages. Images opened and looked at on 18 November 2026.

What is being taken: the label block set hard into the top-left corner; the big typographic list that alternates weight line by line; the right-hand index column; and, from `schedule`, the ruled row that carries a small thumbnail at its right edge. What is not being taken: OFFF's fonts, its black-on-white, its wordmark, any asset.

Second capture, for the long name-and-tag list and for the jury portraits: **`02_LIBRARY/sites/height/awwwards-thessaloniki-sto-piato/`** ("Hosts" section, "Stories + Interviews" section).

## Components, and the section each one serves

Every one is rebuilt in this site's own code. No library code ships.

| Component (source idea) | Section it serves |
|---|---|
| **shadcn `Tabs`** (anchor-link variant, no JS library) | `/nominees`: the four track filters above the index |
| **Aceternity "Sticky Scroll Reveal"** | `/nominees`: the sticky 14-category rail, active item marked as you scroll |
| **React Bits "Animated List"** | `/nominees`: staggered row reveal, transform only, never opacity |
| **HyperUI "Description List"** | `/nominees`: the name / country-tag row pairing |
| **shadcn `Avatar` fallback** | `/nominees` and `/governance`: the placeholder portrait, nominee initials on a gold-brown plate, until Kevin sends photographs |
| **Magic UI "Number Ticker"** | Home: the countdown to 12 December, 7pm WAT (the existing `Countdown.tsx`, retargeted) |
| **shadcn `Badge`** | The phase chip and the country tags |

## Pages

| Page | What happens |
|---|---|
| `/nominees` | **New.** 66 nominees, 14 categories, four tracks. Placeholder portraits. Name, country, one short line each. No contact details, no social handles, no sources (Kevin, 18 Nov). |
| `/governance` | **Rebuilt** as the jury page: how winners are chosen, the three scoring dimensions, independence and conflict rules, the 2026 timeline, the 2026 roster behind `JURY_PUBLISHED`, the 2025 jury as an archive block. |
| `/` | Phase corrected: nominees announced, countdown to 12 December, fourteen awards, no CAPA, "Watch on 12 December" as the audience action. |
| `/2026-awards` | The real fourteen categories and the real timeline. Every `[TBC]` removed. |
| `/award-categories` | Fourteen, with Plant-Based Influencer of the Year added. |
| `/about`, `/partners`, `/nominate`, `/winners`, header | Thirteen to fourteen; CAPA removed; nominations shown as closed; nominees added to the nav. |
| `llms.txt`, JSON-LD, sitemap | GEO and SEO layer. `Event` schema is now allowed: the date is real and public. |

## Rules this build is held to

- Tier 0: **two eyebrows per page maximum**, no horizontal tickers.
- Motion animates **transform only**; nothing hides itself; `prefers-reduced-motion` leaves a complete page (John hard rule 15, and the AFSE lesson of 24 September).
- Countdown must be a real future date and must change state once it passes (`vert-events` rule 31, PDOS LAW-03).
- Every nominee name is published exactly as Joy's approved list spells it. No invented facts, no invented dates.
- Placeholders are **marked as placeholders** (John hard rule 6).
