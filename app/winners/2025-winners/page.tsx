import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { WINNERS_2025 } from "@/lib/data";
/* ASSET GAP: nur.png, Zoe-Adjonyoh.jpg and Beke-Igwe.jpeg are 222-300px source files
   displayed at 345px. AFN needs higher-resolution originals; quality is raised meanwhile. */
export const metadata: Metadata = { title: "AFIA 2025 Winners" };
export default function Winners2025() {
  return (
    <>
      <PageHero title="AFIA Winners" sub="The inaugural class, 2025" image="/img/Active-2026-Hero.png" />
      <section className="dark section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">{WINNERS_2025.map((w) => (
          <article key={w.name} className="card-dark reveal flex flex-col">
            <p className="display text-[13px] text-[color:var(--afia-gold-500)]">{w.category}</p>
            {w.kind === "brand" ? (
              <div className="mt-4 flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-[rgba(187,123,35,0.12)] p-8">
                {w.image ? <Image src={`/img/${w.image}`} alt={`${w.name} logo`} width={320} height={200} sizes="320px" quality={90} className="max-h-full w-auto object-contain" /> : <Image src="/img/Awards-Favicon.png" alt="" width={72} height={72} />}
              </div>
            ) : w.image ? (
              <Image src={`/img/${w.image}`} alt={w.name} width={600} height={750} sizes="(max-width:768px) 100vw, 360px" quality={90} className="mt-4 aspect-[4/5] w-full rounded-xl object-cover object-top" />
            ) : (
              <div className="mt-4 flex aspect-[4/5] w-full items-center justify-center rounded-xl bg-[rgba(187,123,35,0.15)]"><Image src="/img/Awards-Favicon.png" alt="" width={96} height={96} /></div>
            )}
            <h2 className="mt-4 text-[20px] text-white">{w.name}</h2>
            <p className="mt-2 flex-1 text-[14px] text-white/85">{w.bio}</p>
            <p className="display mt-4 inline-flex items-center gap-2 text-[12px] text-white/70"><Image src="/img/Awards-Favicon.png" alt="" width={20} height={20} />2025 Winner</p>
          </article>
        ))}</div>
      </section>
    </>
  );
}
