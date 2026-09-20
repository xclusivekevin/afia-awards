import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
export const metadata: Metadata = { title: "2026 Awards", description: "AFIA 2026 nominations: thirteen awards across four tracks, selected by an independent jury." };
const TRACKS = [["Culinary Excellence", ["Chef of the Year", "Restaurateur of the Year"]], ["Media and Influence", ["Food Media Personality of the Year", "Best Food Content Creator"]], ["Brands and Innovation", ["Food Brand of the Year", "Food Entrepreneur of the Year"]], ["Future and Legacy", ["Culinary Heritage Champion", "Emerging Talent of the Year"]]] as const;
const TIMELINE = [["Nominations Open", "November 2026"], ["Nominations Close", "[Date TBC]"], ["Shortlist Announced", "[Date TBC]"], ["Ceremony", "November 2026"]];
export default function Awards2026() {
  return (
    <>
      <PageHero eyebrow="AFIA 2026 — Nominations Open" title={<>Africa and the<br />future of food.</>} sub={<><p className="display text-white">Honouring Excellence. Building Africa&apos;s Food Future.</p><p className="mt-2">African Food Network in partnership with CAPA — November 2026</p></>} />
      <section className="section"><div className="container max-w-4xl">
        <h2 className="text-[length:var(--text-h1)]">AFIA 2026 Nominations</h2>
        <p className="mt-5">The second edition of the African Food Influencers Awards presents thirteen awards across four tracks, selected by an independent jury from nominations submitted by the industry.</p>
        <p className="mt-4">AFIA 2026 is open to individuals and brands contributing to Africa’s food ecosystem — on the continent and across the diaspora. Nomination is free and open. Winning cannot be bought.</p>
        <h3 className="mt-8 text-[16px] text-[color:var(--afia-gold-600)]">Eligibility Statement</h3><p className="mt-2">Nominees must be individuals or brands whose primary work relates to the African food ecosystem. Work may be based anywhere in the world, provided the impact is demonstrably connected to African food culture, African food industries, or the African diaspora food community.</p>
      </div></section>
      <section className="dark section"><div className="container">
        <h2 className="text-center text-[length:var(--text-h2)]">The 2026 Award Tracks and Categories</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{TRACKS.map(([t, cats]) => <div key={t} className="card-dark"><h3 className="text-[18px] text-white">{t}</h3><ul className="list-gold mt-4 space-y-2 text-[14px] text-white/85">{cats.map((c) => <li key={c}>{c}</li>)}</ul><p className="mt-4 text-[12px] text-white/60">[Additional categories to be confirmed]</p></div>)}</div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{TIMELINE.map(([k, v]) => <div key={k} className="rounded-xl border border-[color:var(--color-card-border)] p-5 text-center"><p className="display text-[13px] text-[color:var(--afia-gold-500)]">{k}</p><p className="mt-1 text-[16px] text-white">{v}</p></div>)}</div>
        <div className="mt-10 flex flex-wrap justify-center gap-5"><Btn href="/nominate">Submit a Nomination</Btn><Btn href="/award-categories" variant="outline">Download Category Guide</Btn></div>
      </div></section>
    </>
  );
}
