import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
export const metadata: Metadata = { title: "Award Categories" };
const CATS = ["Chef of the Year", "Restaurant of the Year", "Street Food Champion", "Food Influencer of the Year", "Culinary Storyteller Award", "African Food Brand of the Year", "African Drinks Brand of the Year", "Food Innovation & Entrepreneurship Award", "Sustainability Champion Award", "Community Impact Award", "African Diaspora Food Voice", "Rising Star in Food & Drinks", "Lifetime Achievement Award"];
export default function Categories() {
  return (
    <>
      <PageHero title="Award Categories" sub="Thirteen awards across four tracks, recognised by an independent jury." image="/img/Active-2026-Hero.png" />
      <section className="dark section"><div className="container">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{CATS.map((c, i) => <div key={c} className="card-dark flex items-start gap-4"><span className="display text-[28px] font-semibold leading-none text-[color:var(--afia-gold-500)]">{String(i + 1).padStart(2, "0")}</span><h2 className="text-[20px] text-white">{c}</h2></div>)}</div>
        <div className="mt-10 text-center"><Btn href="/nominate">Submit a Nomination</Btn></div>
      </div></section>
    </>
  );
}
