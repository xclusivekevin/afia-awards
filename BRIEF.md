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


---

# v3, 19 November: the hero (Kevin scored v2 6/10)

## What was wrong with the v2 hero
Five lines of type in the left 60% of the screen, 40% empty brown beside a trophy, and a
headline that said what the awards are called rather than showing what they are. It filled
no frame and it used none of what AFIA actually has.

## The captures this hero is rebuilt from

Opened and looked at, 19 November.

| Capture | What is taken |
|---|---|
| `height/video-paragon` `live/frame_00.jpg` | **Type as a window.** The wordmark is cut out of the film; the footage plays through the letters and continues full-bleed below the cut line. |
| `height/awwwards-champions-for-good` `sections/01.jpg` | **Edge-to-edge display scale with tiny connector words** tucked into the gaps ("YOUR", "OF"), so the headline fills the frame instead of sitting in a column. |

## The idea: The Wall of 67

AFIA has one thing no other awards site has: **sixty-seven faces**. The hero headline is cut
out of a slowly drifting mosaic of every single nominee. The letters are the window. Below
the cut line the same wall continues full-bleed and fades into the field.

It is the substance of the awards used as the material of the page, it fills the frame at
every width, and it is drawn in code from a mosaic generated out of the nominee folder, so
it updates itself when the nominees do.

## Three directions, checked against the Design Register

| | Direction | Verdict |
|---|---|---|
| A | **The Wall of 67.** Headline knocked out of a drifting mosaic of every nominee. | **Chosen.** Nothing in the register uses type as a window onto imagery. It is the only one that uses AFIA's own substance. |
| B | **The Envelope.** A giant gold envelope opens on scroll to reveal the date. | Rejected: one gag, seen once, and it delays the facts. |
| C | **The Countdown Slab.** Champions-scale type with the countdown as the hero object. | Rejected: the countdown already lives lower, and a number band is the ladder's named mediocre tell. |

## Components

| Component (source idea) | Section |
|---|---|
| **React Bits "Image Trail" / Paragon window** | the mosaic behind the knocked-out headline |
| **Aceternity "Spotlight"** | the glow, at a second depth |
| **Magic UI "Number Ticker"** | the countdown |
| drawn in code | `Ankara`, the generated `nominee-wall.webp` mosaic |

## Rules
- The headline must be real text, selectable and readable by a crawler. The mosaic is a
  background fill, never an image of words.
- The wall must work with no JavaScript and under `prefers-reduced-motion`: it simply stops
  drifting.
- Fills the frame at 375 as well as 1440. The v2 hero did not.

---

# v4, 19 November: footer, menu, and the white sections

## The problem
An independent reviewer counted the site's signature card on 3 pages of 14, found four home
sections and the whole footer still on the previous build's white, and found the ankara band
hidden below 1024px. Half-converted reads as two sites.

## Captures

| Capture | What is taken |
|---|---|
| `height/awwwards-palomino` `sections/10.jpg` | **The footer.** Four small label columns across the top, then a giant wordmark bleeding edge to edge with imagery showing through it. Opened and looked at. |
| `height/video-paragon` `live/frame_00.jpg` | the same type-as-window idea, already used in the hero, now closing the page so the site opens and shuts on the same device |

## Footer: "The last word"
Four columns (The awards / Nominees and jury / African Food Network / Talk to us), then
**AFIA** set enormous and filled with the nominee wall, bleeding off both edges. The page
opens on the faces and closes on them.

## Menu
The header was a plain transparent bar with a gold underline. It now carries the campaign:
a warm smoked panel that only appears once you scroll, ankara-cream hairline beneath it, the
ribbon orange marking the live page, and a full-bleed dark overlay on phone with the awards
numbered down it.

## Components

| Component (source idea) | Section |
|---|---|
| **React Bits "Gradient Text" / "Shiny Text"** | the giant AFIA wordmark filled with the nominee wall |
| **React Bits "Dock" hover lift** | the social row in the footer |
| **Aceternity "Floating Navbar"** | the header that appears on scroll rather than sitting there from the first pixel |
| **Magic UI "Shine Border"** | the hairline under the header |
| drawn in code | `Ankara`, the wall, the long arrow on every button |

## Also in this pass
- Every white section on the home page moves onto the warm field, so the ankara runs
  unbroken from hero to footer.
- Social links move from African Food Network's accounts to the awards' own.
- Ankara shows on phone, where it was hidden entirely.
