/**
 * The ankara border band.
 *
 * Redrawn as SVG from the motif on AFN's own category posts: cream triangles, chevrons and
 * pierced squares. Studied, not lifted; no pixel of the artwork ships.
 *
 * It is painted as a REPEATING background at its true 24x120 tile, not an <svg> stretched to
 * the section height. Stretching it scaled one tile to 1,287px and turned a fine band into
 * giant white wedges.
 *
 * Decorative, so aria-hidden. It drifts with scroll for the second depth, and holds still
 * under prefers-reduced-motion.
 */
const TILE = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="120" viewBox="0 0 24 120">` +
    `<g fill="#EFE3CE">` +
      `<path d="M3 4h18v12H3z"/><path d="M9 8h6v4H9z" fill="#1A100C"/>` +
      `<path d="M2 22l10 9 10-9v6l-10 9-10-9z"/>` +
      `<path d="M2 42l10 9 10-9v6l-10 9-10-9z"/>` +
      `<path d="M2 62l20 10-20 10z"/>` +
      `<path d="M22 86L2 96l20 10z"/>` +
      `<path d="M3 108h18v10H3z"/><path d="M10 111h4v4h-4z" fill="#1A100C"/>` +
    `</g></svg>`,
);

export default function Ankara({ side = "left" }: { side?: "left" | "right" }) {
  return (
    <div
      aria-hidden
      className={`ankara pointer-events-none absolute inset-y-0 ${side === "left" ? "left-0" : "right-0"} w-[10px] lg:w-[18px]`}
      style={{ backgroundImage: `url("data:image/svg+xml,${TILE}")` }}
    />
  );
}
