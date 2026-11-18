"use client";
import { useEffect, useRef, useState } from "react";
import Portrait from "./Portrait";
import { CATEGORIES_2026 } from "@/lib/nominees";

const TRACK_NAME: Record<string, string> = {
  culinary: "Culinary Excellence",
  media: "Media and Influence",
  brands: "Brands and Innovation",
  legacy: "Future and Legacy",
};

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * Direction A, "The Index". Skeleton rebuilt from awwwards-offfforum /lineup and /schedule:
 * a corner label block, a sticky index of what is on, and ruled rows that each hang a small
 * portrait off their right edge. Weight alternates line by line, as OFFF's lineup does.
 *
 * The rail is navigation only. It never hides content, and the page is complete with
 * JavaScript switched off: every category and every nominee is in the server HTML.
 */
export default function NomineeIndex() {
  const [active, setActive] = useState(slug(CATEGORIES_2026[0].name));
  const railRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const els = CATEGORIES_2026.map((c) => document.getElementById(slug(c.name))).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-88px 0px -62% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // keep the active rail item in view on tall lists
  useEffect(() => {
    const el = railRef.current?.querySelector<HTMLElement>(`[data-for="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  let lastTrack = "";

  return (
    <div className="container grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
      {/* ── the index rail ─────────────────────────────────────────────── */}
      <nav aria-label="Award categories" className="lg:sticky lg:top-[104px] lg:self-start">
        <p className="display text-[12px] uppercase tracking-[0.14em] text-[color:var(--afia-gold-500)]">The fourteen awards</p>
        <ol ref={railRef} className="mt-4 lg:max-h-[66vh] lg:overflow-y-auto">
          {CATEGORIES_2026.map((c) => {
            const id = slug(c.name);
            const on = active === id;
            const newTrack = c.track !== lastTrack;
            lastTrack = c.track;
            return (
              <li key={id} data-for={id}>
                {newTrack && <p className="mt-5 pb-1 text-[11px] uppercase tracking-[0.12em] text-white/60 first:mt-0">{TRACK_NAME[c.track]}</p>}
                <a
                  href={`#${id}`}
                  aria-current={on ? "true" : undefined}
                  className={`flex gap-3 border-l-2 py-1.5 pl-3 text-[14px] leading-snug transition-colors ${
                    on ? "border-[color:var(--afia-gold-500)] text-white" : "border-white/15 text-white/60 hover:border-white/40 hover:text-white/90"
                  }`}
                >
                  <span className="display w-5 shrink-0 tabular-nums text-[color:var(--afia-gold-500)]">{String(c.n).padStart(2, "0")}</span>
                  <span>{c.name}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── the index itself ───────────────────────────────────────────── */}
      <div className="min-w-0">
        {CATEGORIES_2026.map((c) => {
          const id = slug(c.name);
          return (
            <section key={id} id={id} className="scroll-mt-[104px] border-t border-[color:var(--color-card-border)] pt-8 first:border-t-0 first:pt-0 [&+section]:mt-16">
              <p className="display text-[12px] uppercase tracking-[0.14em] text-[color:var(--afia-gold-500)]">
                {String(c.n).padStart(2, "0")} · {TRACK_NAME[c.track]}
              </p>
              <h2 className="mt-2 text-[length:var(--text-h2)] text-white">{c.name}</h2>
              <p className="mt-2 max-w-[56ch] text-[15px] text-white/70">{c.line}</p>
              <p className="display mt-3 text-[12px] uppercase tracking-[0.1em] text-white/65">
                {c.nominees.length} nominees
              </p>

              <ul className="mt-6">
                {c.nominees.map((nm) => (
                  <li key={nm.name} className="nominee-row reveal">
                    <Portrait name={nm.name} photo={nm.photo} brand={nm.brand} size={64} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[19px] font-semibold leading-tight text-white md:text-[22px]">
                        {nm.name}
                      </h3>
                      <p className="mt-1.5 max-w-[62ch] text-[14px] leading-relaxed text-white/70">{nm.bio}</p>
                    </div>
                    <span className="nominee-tag">{nm.country}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
