"use client";
import { useEffect, useState } from "react";
export default function Countdown({ to }: { to: string }) {
  const [t, setT] = useState<number | null>(null);
  useEffect(() => { const f = () => setT(Math.max(0, new Date(to).getTime() - Date.now())); f(); const i = setInterval(f, 1000); return () => clearInterval(i); }, [to]);
  if (t === null) return <div className="mt-8 h-[72px]" aria-hidden />;
  const d = Math.floor(t / 864e5), h = Math.floor(t / 36e5) % 24, m = Math.floor(t / 6e4) % 60, s = Math.floor(t / 1e3) % 60;
  return <div className="mt-8 flex justify-center gap-6 md:gap-10" aria-label="Countdown to AFIA 2026">{[[d, "Days"], [h, "Hours"], [m, "Minutes"], [s, "Seconds"]].map(([v, l]) => <div key={l as string}><p className="display text-[36px] font-semibold leading-none text-[color:var(--afia-gold-500)] md:text-[48px]">{String(v).padStart(2, "0")}</p><p className="display mt-1 text-[12px] text-white/70">{l}</p></div>)}</div>;
}
