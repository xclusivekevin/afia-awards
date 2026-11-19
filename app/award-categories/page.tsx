import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
import Ribbon from "@/components/Ribbon";
import Ankara from "@/components/Ankara";
import { TRACKS } from "@/lib/data";
import { CATEGORIES_2026 } from "@/lib/nominees";
import { AFIA } from "@/lib/event";
export const metadata: Metadata = { title: "Award Categories", description: "The AFIA awards, across four tracks: Culinary Excellence, Media and Influence, Brands and Innovation, Future and Legacy. Decided by an independent jury." };

function TrackIcon({ k }: { k: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, width: 22, height: 22, viewBox: "0 0 24 24" };
  const d = k === "culinary" ? <path d="M7 3v8M5 3v5a2 2 0 004 0V3M17 3c-2 0-3 2-3 5v13M17 3v18" />
    : k === "media" ? <><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></>
    : k === "brands" ? <><path d="M3 9l9-5 9 5-9 5-9-5z" /><path d="M3 9v6l9 5 9-5V9" /></>
    : <path d="M12 21c0-6 3-9 9-9-1 5-4 8-9 9zM12 21c0-6-3-9-9-9 1 5 4 8 9 9zM12 3v18" />;
  return <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(187,123,35,0.3)] text-[color:var(--afia-gold-500)]"><svg {...p}>{d}</svg></span>;
}

export default function Categories() {
  let n = 0;
  return (
    <>
      <PageHero title="Award Categories" sub="Four tracks, from the kitchen to the food system. Recognised by an independent jury, nominated by the industry, and open to individuals and brands from across the African continent and the diaspora." image="/img/Active-2026-Hero.png" />
      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container space-y-20">
          {TRACKS.map((t) => (
            <div key={t.key} className="grid gap-8 lg:grid-cols-[320px_1fr]">
              <div className="reveal lg:sticky lg:top-[112px] lg:self-start">
                <TrackIcon k={t.key} />
                <h2 className="poster mt-5 !text-[clamp(28px,3.4vw,46px)]">{t.name}</h2>
                <div className="mt-4"><Ribbon>The track</Ribbon></div>
                <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-white/75">{t.blurb}</p>
              </div>
              {/* a track with an odd number of awards strands the last card in a
                  2-column grid, so the last card spans the row instead */}
              <ul className="grid gap-4 sm:grid-cols-2 [&>li:last-child:nth-child(odd)]:sm:col-span-2">
                {t.categories.map((c) => {
                  n += 1;
                  return (
                    <li key={c} className="cat-card reveal flex items-start gap-4">
                      <span className="display text-[24px] font-semibold leading-none text-[color:var(--afia-gold-500)]">{String(n).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-[17px] leading-[1.3] text-white">{c}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-white/70">{CATEGORIES_2026.find((x) => x.name === c)?.line}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div className="pt-4 text-center"><Btn href="/nominees">See who is nominated</Btn></div>
        </div>
      </section>
    </>
  );
}
