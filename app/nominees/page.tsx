import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import NomineeIndex from "@/components/NomineeIndex";
import Ankara from "@/components/Ankara";
import { CATEGORIES_2026, TOTAL_NOMINEES, TOTAL_COUNTRIES } from "@/lib/nominees";
import { AFIA } from "@/lib/event";

export const metadata: Metadata = {
  title: "AFIA 2026 Nominees",
  description: `All ${TOTAL_NOMINEES} nominees for the African Food Influencers Awards 2026, across ${AFIA.awards} categories and ${TOTAL_COUNTRIES} countries. Winners announced ${AFIA.dateShort}.`,
  alternates: { canonical: `${AFIA.url}/nominees` },
  openGraph: { url: `${AFIA.url}/nominees`, type: "website", title: "AFIA 2026 Nominees", description: `All ${TOTAL_NOMINEES} nominees across ${AFIA.awards} categories.` },
};


export default function Nominees() {
  // ItemList for search engines and AI answer engines: the full slate, in order.
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "African Food Influencers Awards 2026 nominees",
    description: `The ${TOTAL_NOMINEES} nominees for AFIA 2026, across ${AFIA.awards} award categories.`,
    numberOfItems: TOTAL_NOMINEES,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: CATEGORIES_2026.flatMap((c) =>
      c.nominees.map((n) => ({
        "@type": "ListItem",
        item: {
          "@type": n.brand ? "Organization" : "Person",
          name: n.name,
          description: n.bio,
          award: `Nominee, ${c.name}, African Food Influencers Awards 2026`,
        },
      })),
    ).map((e, i) => ({ ...e, position: i + 1 })),
  };

  return (
    <>
      <Breadcrumbs trail={[["The 2026 nominees", "/nominees"]]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <PageHero
        title={<>The AFIA 2026 nominees</>}
        sub={
          <>
            <p className="text-white">Every name on the AFIA 2026 slate.</p>
            <p className="mt-3 font-[family-name:var(--font-body)] text-[15px]">
              Researched and nominated by the industry, scored by an independent jury.
              Winners are announced online on {AFIA.dateLong}.
            </p>
          </>
        }
        image="/img/Active-2026-Hero.png"
      >
        <Btn href="/governance">How winners are chosen</Btn>
        <Btn href="/award-categories" variant="outline">Every award, explained</Btn>
      </PageHero>

      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <NomineeIndex />
      </section>

      <section className="dark border-t border-[color:var(--color-card-border)] section text-center">
        <div className="container">
          <h2 className="poster mx-auto !text-[clamp(28px,3.6vw,52px)]">The winners are read out on {AFIA.dateShort}</h2>
          <p className="lede mx-auto mt-4 max-w-2xl text-white/85">
            {AFIA.watchHow} {AFIA.timeZones}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-5">
            <Btn href="/2026-awards">Watch it live</Btn>
            <Btn href="/winners/2025-winners" variant="outline">Last year's winners</Btn>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-[13px] text-white/55">
            Nominee photographs are being collected and will replace the initials above as they arrive.
            Nominated and think a detail is wrong? Write to{" "}
            <a href={`mailto:${AFIA.email}`} className="text-[color:var(--afia-gold-500)] underline">{AFIA.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
