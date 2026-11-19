---
venture: afn
type: brief
status: current
up: '[[AFN Hub]]'
tags: [afia, website, john, brainstorm]
---

# AFIA 2026 v3: the brainstorm

**19 November 2026.** Kevin's job, in his words: the four older pages brought into
the new design; the hero line changed to "Celebrating The African Food Influencers
This Year" with "African Food" keeping the mosaic treatment; the home page made
"purely minimalistic and navigational"; a better top mobile menu taken from the
component libraries; an AFN 100 link in the footer; then a whole-site visual
review, a score, and the improvements implemented.

Brand guide wins (`Web Design/Design Guides/afia/afia-2026-design-system.md` v2.0),
so palette and type do not move. What is being chosen here is **layout, menu and
motion**, checked against `01_TASTE/Design_Register.md` rows C01 to C17.

---

## What the captures said

Opened as images, not as notes:

- **`height/awwwards-kluster-collectif`** (overview.jpg and overview_mobile.jpg).
  A collective's homepage as **one screen of doors**: a short manifesto in heavy
  display type, a ruled menu column, then a row of cards, each one word plus one
  real photograph. On phone the same doors become a staggered two-column wall.
  Scored 7/10 in the library. This is the literal answer to "minimalistic and
  navigational" and nothing in the register has used it.
- **`height/gsap-paradigm-festival`** (overview.jpg). A festival home that is only
  three things: poster hero, a justified wall of names, a newsletter line. Proof
  that an events homepage can be short and still feel complete. The date set
  directly above the name is worth taking.
- **`height/awwwards-nameless-festival`** (overview.jpg). The home is a two-panel
  chooser, each panel a full-height door with name, date, place and one button.
  Navigational to the point of having no content at all. Too few doors for AFIA's
  eleven pages, but it proves the door can be the whole page.
- **`height/awwwards-zeroz-brand-site`**. Its lesson card already states Kevin's
  own rule: a long story works as labelled chapters, each with one line and a
  button to its full page.

## What the register said

Rows C16 and C17 are this same site. C17 spent: the taped photo card, the ankara
band, the orange ribbon, the gold gradient poster type, the typed date, the drawn
trophy, the type-as-window hero. Those are the brand now and they stay.

Never used anywhere in the register: **the door wall**, and menu entry **2 Card
Nav**. Used and therefore closed: 1 Pill Nav, 4 Staggered Menu, 8 mega panel,
12 Dynamic Island, 15 and 16 bottom bar and sheet, 17 transport bar, 18 Line
Sidebar, 23 Bubble Menu.

---

## Three directions

### Direction A: "The door wall"  ← CHOSEN

Rebuilt from `awwwards-kluster-collectif`. The homepage is the hero and then one
wall of doors, nothing else. Each door is the existing taped card language opened
out to a full card: a real photograph, the destination as one word set large, one
short line saying what is behind it. Desktop is a three-column wall whose first
door spans two columns, so there is never a hole. Phone is the capture's staggered
two-column wall.

- **Why it wins:** it is exactly what Kevin asked for, it comes from a studied
  capture rather than my own head, it gives the eleven real pages somewhere to be
  reached from, and it reuses the site's own card language so it does not read as
  a bolted-on section.
- **Risk:** doors with weak photographs look like a stock grid. Mitigated by
  opening every image first.

### Direction B: "The chooser"

From `awwwards-nameless-festival`. The homepage is two full-height halves, 2026
and 2025, each with its date and one button. Everything else lives behind the
menu.

- **Rejected:** two doors cannot carry eleven pages, and it hides the nominees,
  which are the reason anyone is on the site this month. It also makes the menu
  the only navigation, which pushes the whole job onto the one component Kevin
  has just said is not good enough.

### Direction C: "The poster and the wall"

From `gsap-paradigm-festival`. Hero poster, then the full justified wall of all
sixty-seven nominee names across the width, then the sign-up line. Three
sections, no cards at all.

- **Rejected:** it is the most beautiful of the three and the least navigational.
  It duplicates `/nominees` on the homepage and still leaves the awards, the jury,
  the ceremony and the archive unreachable except through the menu. Kevin asked
  for navigational first, minimal second.

---

## The menu

**Entry 2, Card Nav** (React Bits, MIT with Commons Clause; rebuilt in our own
code, no library code ships). A bar button drops a panel of three cards, each a
group title with its links. Chosen because:

- It is a **top** menu, which is what Kevin asked for.
- It turns eleven flat links into three groups a thumb can read.
- The card is already this site's native object, so the menu stops being template
  chrome and joins the poster.
- It obeys the 23 October ruling: plain, links only, set large, no photographs
  behind the words and no numbers beside them. The mark at the top is larger than
  the bar's.
- Never used in any build in the register.

Rejected: entry 13 Liquid Morph (too small a panel for eleven links), entry 6
Resizable Navbar (a desktop pattern, and the bar already hides over the hero),
entry 3 Gooey (playful, wrong for an awards jury page).

---

## Motion

Already standard on this build and kept: ankara drift on scroll-timeline, the hero
glow at a second depth, the typed date, the drawn trophy. Added for the doors:
each door's photograph scales slowly behind a fixed frame as the wall enters, and
the door's rule wipes across on hover. Reduced motion stops all of it and leaves
every door complete and readable.
