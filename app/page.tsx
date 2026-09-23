import Image from "next/image";
import { Btn, Eyebrow, WINNERS_HOME } from "@/components/ui";
import Form from "@/components/Form";

const TRACKS = [["culinary", "Culinary Excellence", "Recognising chefs, restaurateurs, and culinary professionals at the forefront of African cuisine."], ["media", "Media and Influence", "Recognising creators, journalists, and digital voices reshaping how the world understands African food."], ["brands", "Brands and Innovation", "Recognising the food brands, agrifood ventures, and hospitality concepts driving Africa's food economy forward."], ["legacy", "Future and Legacy", "Recognising the educators, advocates, and cultural custodians building the long-term foundations of African food culture."]];
function TrackIcon({ k }: { k: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, width: 22, height: 22, viewBox: "0 0 24 24" };
  const d = k === "culinary" ? <path d="M7 3v8M5 3v5a2 2 0 004 0V3M17 3c-2 0-3 2-3 5v13M17 3v18" /> : k === "media" ? <><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></> : k === "brands" ? <><path d="M3 9l9-5 9 5-9 5-9-5z" /><path d="M3 9v6l9 5 9-5V9" /></> : <path d="M12 21c0-6 3-9 9-9-1 5-4 8-9 9zM12 21c0-6-3-9-9-9 1 5 4 8 9 9zM12 3v18" />;
  return <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(187,123,35,0.3)] text-[color:var(--afia-gold-500)]"><svg {...p}>{d}</svg></span>;
}

export default function Home() {
  return (
    <>
      <section className="dark relative flex min-h-[720px] items-center pt-[88px] text-center" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(/img/Active-Hero-2026.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container py-20">
          <Eyebrow>Nominations Now Open — AFIA 2026</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-5xl text-[length:var(--text-hero)]">Honouring Excellence.<br />Building<br /><span className="gold">Africa&apos;s Food Future.</span></h1>
          <p className="display mt-6 text-[16px] font-medium text-white md:text-[24px]">AFIA 2026 — In Partnership with CAPA — November 2026</p>
          <p className="lede mx-auto mt-4 max-w-2xl text-white/85">The African Food Influencers Awards recognises the individuals and brands shaping Africa&apos;s culinary identity — on the continent and across the world.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-5"><Btn href="/nominate">Submit a Nomination</Btn><Btn href="/award-categories" variant="outline">Explore Categories</Btn></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src="/img/About-AFIA-2026.png" alt="Speaker at the AFIA lectern" width={800} height={600} className="img-frame" />
          <div><h2 className="text-[length:var(--text-h2)]">What is AFIA?</h2><p className="measure mt-5">The African Food Influencers Awards is Africa’s definitive recognition platform for excellence in food, culinary arts, and food industry leadership.</p><p className="mt-4">Organised annually, AFIA honours the individuals and brands making a measurable, lasting contribution to Africa’s food ecosystem — across culinary arts, entrepreneurship, media storytelling, and cultural preservation.</p><p className="mt-4">The awards are built on three principles that do not change: impact over popularity, independent jury, and zero pay-to-play.</p><h3 className="mt-6 text-[18px] text-[color:var(--afia-gold-600)]">AFIA 2026</h3><p className="mt-2">AFIA 2026 is convened by African Food Network in partnership with CAPA — Culinary Art Practitioners Association of Nigeria — as National Host and Chef Network Partner.</p></div>
        </div>
      </section>

      <section className="dark section relative text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url(/img/Active-2026-Hero.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <h2 className="display gold text-[22px] font-semibold md:text-[32px]">AFIA 2026 — The Awards</h2>
          <p className="display mt-6 text-[36px] font-bold leading-[1.1] text-white md:text-[56px]">Thirteen awards.<br />Four tracks.<br /><span className="gold">One independent jury.</span></p>
          <p className="display mt-6 text-[16px] text-white md:text-[22px]">Ceremony: November 2026 | In Partnership with CAPA</p>
          <p className="lede mx-auto mt-4 max-w-3xl text-white/85">Nominated by the industry, judged on impact rather than popularity. Open to individuals and brands from across the African continent and the African diaspora. Nomination is free, and winning cannot be bought.</p>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">{TRACKS.map(([k, t, d]) => <div key={k} className="card-dark"><TrackIcon k={k} /><h3 className="mt-6 flex min-h-[3rem] items-start text-[18px] leading-[1.25] text-white">{t}</h3><p className="mt-2 text-[14px] text-white/85">{d}</p></div>)}</div>
          <div className="mt-10"><Btn href="/award-categories">View All Categories</Btn></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src="/img/Nomination.png" alt="AFIA nominations now open" width={800} height={600} className="img-frame" />
          <div><h2 className="text-[length:var(--text-h2)]">Nominate for AFIA 2026</h2><p className="mt-5">Do you know a chef, entrepreneur, creator, or food industry leader who has made a genuine and measurable contribution to Africa’s food ecosystem?</p><p className="mt-4">AFIA 2026 nominations are now open. Nominations are reviewed by an independent jury. Selection is based on impact, not popularity.</p><div className="mt-6"><Btn href="/nominate">Submit a Nomination</Btn></div><p className="mt-4 text-[13px]">Nominations close [date TBC]. All submissions are treated confidentially.</p></div>
        </div>
      </section>

      <section className="dark section text-center">
        <div className="container">
          <Eyebrow>From the Inaugural Edition</Eyebrow>
          <h2 className="mt-5 text-[length:var(--text-h1)]"><span className="gold">AFIA 2025</span> — The First Class</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">In 2025, the African Food Influencers Awards held its inaugural edition — bringing together the first class of honourees recognised for their contribution to Africa&apos;s food ecosystem.</p>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">{WINNERS_HOME.map(([img, n, a, c, d]) => <div key={n}><Image src={`/img/${img}`} alt={n} width={400} height={500} className="aspect-[4/5] w-full rounded-xl object-cover object-top" /><h3 className="mt-4 text-[18px] text-white">{n}</h3><p className="display text-[15px] font-medium normal-case tracking-normal text-[color:var(--afia-gold-500)]">{a}</p><p className="display mt-1 text-[13px] text-white/70">{c}</p><p className="mt-2 text-[14px] text-white/80">{d}</p></div>)}</div>
          <div className="mt-10"><Btn href="/winners/2025-winners">See All AFIA 2025 Winners</Btn></div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <Eyebrow light>AFIA 2026 Partners</Eyebrow>
          <h2 className="mt-5 text-[length:var(--text-h1)]">Delivered in Partnership</h2>
          <div className="card-light mx-auto mt-10 grid max-w-4xl items-center gap-8 p-8 text-left md:grid-cols-[260px_1fr] md:p-10"><Image src="/img/CAPA.jpeg" alt="CAPA, Culinary Arts Practitioners Association Nigeria" width={260} height={130} className="mx-auto w-[220px] md:w-[260px]" /><div><h3 className="text-[18px] normal-case tracking-normal text-black">National Host and Chef Network Partner — AFIA 2026</h3><p className="mt-3 text-[14px]">AFIA 2026 is convened by African Food Network in partnership with CAPA as National Host and Chef Network Partner.</p><div className="mt-5"><Btn href="/partners" variant="outline-light">Explore Partnerships</Btn></div></div></div>
        </div>
      </section>

      <section className="dark section text-center">
        <div className="container">
          <h2 className="gold text-[length:var(--text-h1)]">Stay Connected to AFIA</h2>
          <p className="mt-4 text-white/85">Be notified when the AFIA 2026 shortlist is announced and when the ceremony date is confirmed.</p>
          <div className="mx-auto mt-8 max-w-[550px]"><Form name="Stay connected (home)" submit="Keep Me Updated" thanks="You are on the list."><label className="sr-only" htmlFor="home-email">Email</label><input id="home-email" className="input h-[52px]" name="email" type="email" placeholder="Your Email" required /></Form><p className="mt-4 text-[13px] text-white/70">No spam. Unsubscribe at any time.</p></div>
        </div>
      </section>
    </>
  );
}
