import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { WINNERS_2025 } from "@/lib/data";
export const metadata: Metadata = { title: "AFIA 2025 Winners" };
export default function Winners2025() {
  return (
    <>
      <PageHero title="AFIA Winners" sub="The inaugural class, 2025" image="/img/Active-2026-Hero.png" />
      <section className="dark section"><div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">{WINNERS_2025.map((w) => <article key={w.name} className="card-dark flex flex-col"><p className="display text-[13px] text-[color:var(--afia-gold-500)]">{w.category}</p>{w.image ? <Image src={`/img/${w.image}`} alt={w.name} width={400} height={400} className={`mt-4 aspect-square w-full rounded-xl bg-white ${/nur|AACE|savanna/i.test(w.image) ? "object-contain p-6" : "object-cover object-top"}`} /> : <div className="mt-4 flex aspect-square w-full items-center justify-center rounded-xl bg-[rgba(187,123,35,0.15)]"><Image src="/img/Awards-Favicon.png" alt="" width={96} height={96} /></div>}<h2 className="mt-4 text-[20px] text-white">{w.name}</h2><p className="mt-2 flex-1 text-[14px] text-white/85">{w.bio}</p><p className="display mt-4 inline-flex items-center gap-2 text-[12px] text-white/70"><Image src="/img/Awards-Favicon.png" alt="" width={20} height={20} />2025 Winner</p></article>)}</div></section>
    </>
  );
}
