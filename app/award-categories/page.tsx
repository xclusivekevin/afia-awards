import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
import { TRACKS } from "@/lib/data";
export const metadata: Metadata = { title: "Award Categories", description: "Thirteen AFIA awards across four tracks: Culinary Excellence, Media and Influence, Brands and Innovation, Future and Legacy." };

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
      <PageHero title="Award Categories" sub="Thirteen awards across four tracks. Recognised by an independent jury, nominated by the industry, and open to individuals and brands from across the African continent and the diaspora." image="/img/Active-2026-Hero.png" />
      <section className="dark section">
        <div className="container space-y-14">
          {TRACKS.map((t) => (
            <div key={t.key} className="grid gap-8 lg:grid-cols-[320px_1fr]">
              <div className="reveal">
                <TrackIcon k={t.key} />
                <h2 className="mt-5 text-[26px] text-white">{t.name}</h2>
                <p className="mt-3 text-[14px] text-white/80">{t.blurb}</p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {t.categories.map((c) => {
                  n += 1;
                  return (
                    <li key={c} className="card-dark reveal flex items-start gap-4 !p-6">
                      <span className="display text-[24px] font-semibold leading-none text-[color:var(--afia-gold-500)]">{String(n).padStart(2, "0")}</span>
                      <h3 className="text-[17px] leading-[1.3] text-white">{c}</h3>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div className="pt-4 text-center"><Btn href="/nominate">Submit a Nomination</Btn></div>
        </div>
      </section>
    </>
  );
}
