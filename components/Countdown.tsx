"use client";
import { useEffect, useState } from "react";

/**
 * Countdown to a real date.
 *
 * vert-events rule 31 / PDOS LAW-03: a countdown must stop or change state once the date
 * passes. It must never loop, and it must never be pointed at a date already gone. When it
 * reaches zero this switches to the `passed` message instead of sitting on 00:00:00:00.
 */
export default function Countdown({ to, passed = "The winners are in." }: { to: string; passed?: string }) {
  const [t, setT] = useState<number | null>(null);

  useEffect(() => {
    const f = () => setT(Math.max(0, new Date(to).getTime() - Date.now()));
    f();
    const i = setInterval(f, 1000);
    return () => clearInterval(i);
  }, [to]);

  // Reserve the space so nothing jumps while hydrating.
  if (t === null) return <div className="mt-8 h-[72px]" aria-hidden />;

  if (t <= 0) {
    return (
      <p className="display mt-8 text-[22px] font-semibold text-[color:var(--afia-gold-500)] md:text-[28px]">{passed}</p>
    );
  }

  const d = Math.floor(t / 864e5), h = Math.floor(t / 36e5) % 24, m = Math.floor(t / 6e4) % 60, s = Math.floor(t / 1e3) % 60;
  return (
    <div className="mt-8 flex justify-center gap-6 md:gap-10" aria-label="Countdown to the AFIA 2026 ceremony">
      {([[d, "Days"], [h, "Hours"], [m, "Minutes"], [s, "Seconds"]] as [number, string][]).map(([v, l]) => (
        <div key={l}>
          <p className="display text-[36px] font-semibold leading-none text-[color:var(--afia-gold-500)] md:text-[48px]">{String(v).padStart(2, "0")}</p>
          <p className="display mt-1 text-[12px] text-white/70">{l}</p>
        </div>
      ))}
    </div>
  );
}
