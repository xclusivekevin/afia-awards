# BRIEF: AFIA 2026 site, v2 (the poster build)

John, 19 November 2026. Supersedes the 18 November brief, which is kept in git history.
Design system: **`Web Design/Design Guides/afia/afia-2026-design-system.md` v2.0**, built
tonight from AFN's own fourteen category posts.

## Why a second pass

Kevin, 19 November: the site "can be better than what it is", the nominee images must be
bigger, and the build should use real component libraries and carry motion. The first 2026
build was correct but plain: flat black, one gold, 64px circular avatars, one rhythm for
14,000px. Meanwhile AFN's own campaign, already in front of the audience on Instagram, is a
much richer thing. The site was the only AFIA surface not speaking that language.

## The captures each page is rebuilt from

Opened and looked at tonight, not read about.

| Page | Capture | What is taken |
|---|---|---|
| Home hero | `height/awwwards-les-francouvertes` | the phase headline at poster scale with staggered line indents; the date that types itself out |
| `/nominees` grid | AFN's own 14 category posts | the taped card grid, three up, name and country under each |
| `/nominees` rail | `height/awwwards-offfforum` `/lineup` + `/schedule` | the sticky numbered category rail beside the content |
| Past editions | `height/awwwards-dick-clark-productions` | show logo over a real photograph, card per edition |
| Partner wall | `height/awwwards-les-francouvertes` | the logo grid at the foot |

Nothing from a studied site ships. No asset, no copy, no code.

## Components, and the section each serves

Each is rebuilt in this site's own code. No library code ships.

| Component (source idea) | Section it serves |
|---|---|
| **React Bits "Decrypted Text"** | `TypedDate`: the ceremony date types itself in the hero. The text treatment that is not a fade (hard rule 15) |
| **Aceternity "Spotlight"** | the hero glow, drifting at a different depth from the content |
| **Aceternity "Tracing Beam"** | the sticky category rail on `/nominees`, with the beam marking the live section |
| **React Bits "Spotlight Card"** | `TapedCard`: lift and straighten on hover |
| **Magic UI "Shine Border"** | the travelling highlight on the gold rule and on the trophy |
| **Magic UI "Number Ticker"** | the stat band, counting up when it enters the viewport |
| **21st.dev "Bento Grid"** | the four tracks on the home page, unequal cells rather than four identical cards |
| **shadcn `Badge`** | the country tag and the phase chip |
| **HyperUI "Description List"** | the ceremony facts table on `/2026-awards` |
| **Drawn in code (no library)** | `Ankara`, the SVG border band, and `Trophy`, which draws its own outline |

## Hard rules this build is held to

- Tier 0: two eyebrows a page maximum, no horizontal tickers. **Les Francouvertes uses a
  ticker rail between every section and we do not copy it.**
- Motion animates transform and opacity only on things that are decorative; nothing that
  carries words hides itself. `prefers-reduced-motion` leaves a complete page.
- The ribbon orange carries large text only; it is 3.4:1 with white.
- Every nominee name and country exactly as Joy's approved list spells it.
- Images: 57 of 66 nominees now have a real photograph. The nine without keep the marked
  placeholder, and it must still read as deliberate at card size.
