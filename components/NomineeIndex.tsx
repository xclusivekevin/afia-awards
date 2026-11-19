"use client";
import { useEffect, useState } from "react";
import TapedCard from "./TapedCard";
import Ribbon from "./Ribbon";
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
 * The nominee index, v2.
 *
 * The page is AFN's own category post, unrolled: ankara down the edges, the award name at
 * poster scale, the orange ribbon under it, and the nominees as taped cards. The sticky
 * numbered rail beside it is kept from awwwards-offfforum, because fourteen sections and
 * sixty-six people still need a way to navigate.
 *
 * The rail is navigation only. It hides nothing, and every card is in the server HTML, so
 * the page is complete with JavaScript switched off.
 */
export default function NomineeIndex() {
  const [active, setActive] = useState(slug(CATEGORIES_2026[0].name));

  useEffect(() => {
    const els = CATEGORIES_2026
      .map((c) => document.getElementById(slug(c.name)))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // NO scrollIntoView here, ever. scrollIntoView walks EVERY scrollable ancestor,
  // including the document, so a scrollspy that calls it drags the reader back up
  // the page each time the active section changes. Measured on the live site:
  // 7,200px of wheel input moved the page 1,812px, with five backward jumps, and
  // categories 3 to 14 could not be reached. The rail now shows all fourteen items
  // without scrolling, so there is nothing to bring into view.

  let lastTrack = "";

  return (
    <div className="container grid gap-12 lg:grid-cols-[232px_1fr] lg:gap-14">
      {/* ── the rail. Aceternity "Tracing Beam", rebuilt: the beam marks the live award ── */}
      <nav aria-label="Award categories" className="lg:sticky lg:top-[104px] lg:self-start">
        <p className="display text-[12px] uppercase tracking-[0.14em] text-[color:var(--afia-gold-200)]">
          The fourteen awards
        </p>
        <ol className="rail mt-4">
          {CATEGORIES_2026.map((c) => {
            const id = slug(c.name);
            const on = active === id;
            const newTrack = c.track !== lastTrack;
            lastTrack = c.track;
            return (
              <li key={id} data-for={id}>
                {newTrack && (
                  <p className="mt-4 pb-0.5 text-[11px] uppercase tracking-[0.12em] text-white/60 first:mt-0">
                    {TRACK_NAME[c.track]}
                  </p>
                )}
                <a
                  href={`#${id}`}
                  aria-current={on ? "true" : undefined}
                  className={`rail__item ${on ? "rail__item--on" : ""}`}
                >
                  <span className="display w-5 shrink-0 tabular-nums">{String(c.n).padStart(2, "0")}</span>
                  <span>{c.name}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── the fourteen posts ─────────────────────────────────────────────── */}
      <div className="min-w-0 [&>div+div]:mt-24">
        {CATEGORIES_2026.map((c, ci) => {
          const id = slug(c.name);
          const opensTrack = ci > 0 && CATEGORIES_2026[ci - 1].track !== c.track;
          return (
            <div key={id}>
            {/* the track changes four times in fourteen awards: break the rhythm there,
                so the page is not one block repeated to the bottom */}
            {opensTrack && (
              <div className="track-break" role="separator" aria-label={`Track: ${TRACK_NAME[c.track]}`}>
                <span className="track-break__rule" aria-hidden />
                <span className="track-break__name">{TRACK_NAME[c.track]}</span>
                <span className="track-break__rule" aria-hidden />
              </div>
            )}
            <section id={id} className="cat scroll-mt-[104px] [&+section]:mt-24">
              <p className="display text-[12px] uppercase tracking-[0.16em] text-[color:var(--afia-gold-400)]">
                {String(c.n).padStart(2, "0")} · {TRACK_NAME[c.track]}
              </p>
              <h2 className="poster mt-3">{c.name}</h2>
              <div className="mt-5"><Ribbon>{c.nominees.length} nominees</Ribbon></div>
              <p className="mt-6 max-w-[54ch] text-[16px] leading-relaxed text-white/75">{c.line}</p>

              {/* flex, not grid: categories hold 4, 5 or 6 nominees and a 3-column grid leaves
                   holes on every one of them. A centred last row has none. */}
              <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-12 sm:gap-x-8">
                {c.nominees.map((nm, i) => (
                  <li
                    key={nm.name}
                    /* one-up on a phone: two-up put the bios in ~165px columns, about 22
                       characters a line, which is not readable */
                    className={`reveal w-full max-w-[330px] sm:w-[calc(50%-1rem)] ${
                      c.nominees.length === 4 ? "md:w-[calc(50%-1rem)]" : "md:w-[calc(33.333%-1.34rem)]"
                    }`}
                  >
                    <TapedCard
                      name={nm.name}
                      photo={nm.photo}
                      brand={nm.brand}
                      caption={nm.country}
                      i={i}
                      priority={ci === 0 && i < 3}
                    />
                    <p className="mt-4 text-[13px] leading-relaxed text-white/65">{nm.bio}</p>
                  </li>
                ))}
              </ul>
            </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
