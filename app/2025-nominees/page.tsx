import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { NOMINEES_2025 } from "@/lib/data";
export const metadata: Metadata = { title: "2025 Nominees" };
export default function Nominees() {
  return (
    <>
      <PageHero title="Awards Nominees" sub="AFIA 2025, the inaugural edition" image="/img/Active-2026-Hero.png" />
      <section className="dark section"><div className="container space-y-12">{NOMINEES_2025.map(([cat, list]) => <div key={cat}><h2 className="gold text-[length:var(--text-h2)]">{cat}</h2><ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{list.map((n) => <li key={n.name} className="card-dark flex items-center gap-4 !p-5">{n.logo && <Image src={`/img/${n.logo}`} alt="" width={64} height={64} className="h-16 w-16 rounded bg-white object-contain p-1" />}<span className="display text-[14px] text-white">{n.name}</span></li>)}</ul></div>)}</div></section>
    </>
  );
}
