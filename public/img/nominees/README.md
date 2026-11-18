# Nominee photographs

Drop the files here, named exactly as `Events/awards/2026/AFIA_2026_Nominee_Photos_Needed.md`
lists them, then run from the site folder:

    node scripts/sync-photos.mjs

Anything with no photograph keeps the marked placeholder, so the page is never broken
and never half-finished looking. A file whose name matches nothing is reported, not ignored.

- People: portrait, head and shoulders, 800px wide or more. Cropped to a circle.
- Brands and restaurants: logo, transparent PNG preferred. Sits on a white plate.
