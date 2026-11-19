/**
 * The AFIA trophy, drawn in code.
 *
 * John hard rule 15 asks every build for something drawn in code that moves. This is the
 * AFIA mark as a line drawing: the stem draws itself in, then a highlight travels across
 * the gold. It is decorative, so it is aria-hidden, and it holds still and fully drawn
 * under prefers-reduced-motion.
 */
export default function Trophy({ className = "" }: { className?: string }) {
  return (
    <svg className={`trophy ${className}`} viewBox="0 0 120 150" fill="none" aria-hidden role="presentation">
      <defs>
        <linearGradient id="trophy-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--afia-gold-hi)" />
          <stop offset="45%" stopColor="var(--afia-gold-200)" />
          <stop offset="100%" stopColor="#C8923A" />
        </linearGradient>
        <linearGradient id="trophy-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="trophy-clip">
          <path d="M60 6c20 16 32 36 32 56 0 20-10 34-22 42l-10 6-10-6c-12-8-22-22-22-42 0-20 12-40 32-56z" />
        </clipPath>
      </defs>
      {/* the bowl: three leaves of the AFIA mark */}
      {/* the fanned bowl */}
      <path className="trophy__bowl" d="M60 6c20 16 32 36 32 56 0 20-10 34-22 42l-10 6-10-6c-12-8-22-22-22-42 0-20 12-40 32-56z" fill="url(#trophy-gold)" />
      {/* handles, which is what makes it read as a trophy rather than a leaf */}
      <path d="M30 40c-12 2-18 12-16 24 2 12 11 19 22 20" stroke="url(#trophy-gold)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M90 40c12 2 18 12 16 24-2 12-11 19-22 20" stroke="url(#trophy-gold)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <g clipPath="url(#trophy-clip)">
        <rect className="trophy__sheen" x="-60" y="0" width="56" height="150" fill="url(#trophy-sheen)" />
      </g>
      {/* drawn lines */}
      <path className="trophy__line" d="M60 16v86" stroke="#1A100C" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
      <path className="trophy__line" d="M45 30c5 24 7 48 5 68" stroke="#1A100C" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path className="trophy__line" d="M75 30c-5 24-7 48-5 68" stroke="#1A100C" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* stem and base */}
      <path d="M54 110h12v12H54z" fill="url(#trophy-gold)" />
      <ellipse cx="60" cy="124" rx="26" ry="6" fill="url(#trophy-gold)" />
      <path d="M34 124h52v10a4 4 0 01-4 4H38a4 4 0 01-4-4z" fill="#241A10" />
      <ellipse cx="60" cy="138" rx="30" ry="7" fill="url(#trophy-gold)" />
    </svg>
  );
}
