import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Winners Archive" };
export default function Winners() {
  return (
    <>
      <PageHero title="Winners Archive" sub={<><p className="text-white">A permanent record of excellence in Africa&apos;s food ecosystem.</p><p className="mt-3 font-[family-name:var(--font-body)] text-[15px]">The African Food Influencers Awards archive documents every honouree from every edition of AFIA — building, year by year, the most comprehensive public record of leadership in African food culture.</p></>} />
      <section className="section"><div className="container grid gap-8 md:grid-cols-2">
        <Link href="/winners/2025-winners" className="card-light block p-10 text-center transition hover:shadow-lg"><Image src="/img/Awards-Favicon.png" alt="" width={80} height={80} className="mx-auto" /><h2 className="mt-5 text-[28px]">AFIA 2025</h2><p className="display mt-1 text-[14px] text-[color:var(--afia-gold-600)]">Inaugural Edition</p><p className="mt-4 text-[14px] underline">Click to view</p></Link>
        <div className="card-light p-10 text-center opacity-70"><Image src="/img/Awards-Favicon.png" alt="" width={80} height={80} className="mx-auto" /><h2 className="mt-5 text-[28px]">AFIA 2026</h2><p className="display mt-1 text-[14px] text-[color:var(--afia-gold-600)]">Winners</p><p className="mt-4 text-[14px]">Available after event</p></div>
      </div></section>
    </>
  );
}
