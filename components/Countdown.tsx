"use client";
import { useEffect, useState } from "react";

/**
 * Countdown to a real date.
 *
 * vert-events rule 31 / PDOS LAW-03: a countdown must stop or change state once the date
 * passes. It must never loop, and it must never be pointed at a date already gone. When it
 * reaches zero this switches to the `passed` message instead of sitting on 00:00:00:00.
 */
export default function Countdown({ to, passed = "The winners are in.", align = "center" }: { to: string; passed?: string; align?: "center" | "start" }) {
  const [t, setT] = useState<number | null>(null);

  useEffect(() => {
    const f = () => setT(Math.max(0, new Date(to).getTime() - Date.now()));
    f();
    const i = setInterval(f, 30000);
    return () => clearInterval(i);
  }, [to]);

  // Reserve the space so nothing jumps while hydrating.
  if (t === null) return <div className="mt-8 h-[72px]" aria-hidden />;

  if (t <= 0) {
    return (
      <p className="display mt-8 text-[22px] font-semibold text-[color:var(--afia-gold-500)] md:text-[28px]">{passed}</p>
    );
  }

  const d = Math.floor(t / 864e5), h = Math.floor(t / 36e5) % 24, m = Math.floor(t / 6e4) % 60;
  const parts = [d && `${d}d`, `${String(h).padStart(2, "0")}h`, `${String(m).padStart(2, "0")}m`].filter(Boolean);
  return (
    <p className={`display mt-6 flex items-center gap-3 text-[15px] tracking-[0.1em] text-white/75 ${align === "start" ? "justify-start" : "justify-center"}`}>
      <span className="live-dot" aria-hidden />
      <span>Live in {parts.join(" ")}</span>
    </p>
  );
}
