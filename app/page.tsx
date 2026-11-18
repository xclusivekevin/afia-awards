import Image from "next/image";
import { Btn, Eyebrow, WINNERS_HOME } from "@/components/ui";
import Form from "@/components/Form";
import Countdown from "@/components/Countdown";
import Portrait from "@/components/Portrait";
import { AFIA } from "@/lib/event";
import { TRACKS } from "@/lib/data";
import { CATEGORIES_2026, TOTAL_NOMINEES, TOTAL_COUNTRIES } from "@/lib/nominees";

function TrackIcon({ k }: { k: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, width: 22, height: 22, viewBox: "0 0 24 24" };
  const d = k === "culinary" ? <path d="M7 3v8M5 3v5a2 2 0 004 0V3M17 3c-2 0-3 2-3 5v13M17 3v18" /> : k === "media" ? <><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></> : k === "brands" ? <><path d="M3 9l9-5 9 5-9 5-9-5z" /><path d="M3 9v6l9 5 9-5V9" /></> : <path d="M12 21c0-6 3-9 9-9-1 5-4 8-9 9zM12 21c0-6-3-9-9-9 1 5 4 8 9 9zM12 3v18" />;
  return <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(187,123,35,0.3)] text-[color:var(--afia-gold-500)]"><svg {...p}>{d}</svg></span>;
}

/** A taste of the index: the first nominee of six different categories, to pull people to /nominees. */
const TASTER = [1, 4, 5, 8, 12, 14].map((n) => {
  const c = CATEGORIES_2026.find((x) => x.n === n)!;
  return { category: c.name, ...c.nominees[0] };
});

export default function Home() {
  return (
    <>
      {/* ── Hero: the phase, the date, the action ───────────────────────── */}
      <section className="dark relative flex min-h-[720px] items-center pt-[88px] text-center" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(/img/Active-Hero-2026.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container py-20">
          <Eyebrow>{AFIA.phaseLine} · {TOTAL_NOMINEES} nominees</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-5xl text-balance text-[length:var(--text-hero)]">Honouring Excellence.<br />Building<br /><span className="gold">Africa&apos;s Food Future.</span></h1>
          <p className="display mt-6 text-[16px] font-medium text-white md:text-[24px]">{AFIA.dateLong} · {AFIA.time} · Online</p>
          <p className="lede mx-auto mt-4 max-w-2xl text-white/85">The second edition of the African Food Influencers Awards. {TOTAL_NOMINEES} nominees from {TOTAL_COUNTRIES} countries, {AFIA.awards} awards, decided by an independent jury.</p>
          <Countdown to={AFIA.startISO} passed="The AFIA 2026 winners are in." />
          <div className="mt-8 flex flex-wrap justify-center gap-5"><Btn href="/nominees">See the nominees</Btn><Btn href="/2026-awards" variant="outline">How to watch</Btn></div>
        </div>
      </section>

      {/* ── The slate, in numbers, straight under the hero ──────────────── */}
      <section className="dark border-y border-[color:var(--color-card-border)] py-10">
        <div className="container grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {([[String(TOTAL_NOMINEES), "Nominees"], [String(AFIA.awards), "Awards"], [String(TOTAL_COUNTRIES), "Countries represented"], [String(AFIA.tracks), "Tracks"]] as [string, string][]).map(([v, l]) => (
            <div key={l}>
              <p className="display text-[36px] font-semibold leading-none text-[color:var(--afia-gold-500)] md:text-[44px]">{v}</p>
              <p className="display mt-2 text-[12px] uppercase tracking-[0.1em] text-white/60">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What AFIA is ────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src="/img/About-AFIA-2026.png" alt="Speaker at the AFIA lectern" width={800} height={600} className="img-frame" />
          <div><h2 className="text-[length:var(--text-h2)]">What is AFIA?</h2><p className="measure mt-5">The African Food Influencers Awards is Africa&rsquo;s definitive recognition platform for excellence in food, culinary arts, and food industry leadership.</p><p className="mt-4">Organised annually by African Food Network, AFIA honours the individuals and brands making a measurable, lasting contribution to Africa&rsquo;s food ecosystem, across culinary arts, entrepreneurship, media storytelling, and cultural preservation.</p><p className="mt-4">The awards are built on three principles that do not change: impact over popularity, an independent jury, and zero pay-to-play.</p><h3 className="mt-6 text-[18px] text-[color:var(--afia-gold-ink)]">AFIA 2026</h3><p className="mt-2">The {AFIA.edition.toLowerCase()} is decided by an independent jury scoring every nominee on impact, excellence and contribution to African food. There is no public vote.</p><div className="mt-6"><Btn href="/governance" variant="outline-light">How winners are chosen</Btn></div></div>
        </div>
      </section>

      {/* ── The awards ──────────────────────────────────────────────────── */}
      <section className="dark section relative text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url(/img/Active-2026-Hero.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <h2 className="display gold text-[22px] font-semibold md:text-[32px]">AFIA 2026: The Awards</h2>
          <p className="display mt-6 text-[36px] font-bold leading-[1.1] text-white md:text-[56px]">Fourteen awards.<br />Four tracks.<br /><span className="gold">One independent jury.</span></p>
          <p className="display mt-6 text-[16px] text-white md:text-[22px]">Winners announced {AFIA.dateLong}</p>
          <p className="lede mx-auto mt-4 max-w-3xl text-white/85">Nominated by the industry, judged on impact rather than popularity. Open to individuals and brands from across the African continent and the African diaspora. Nomination is free, and winning cannot be bought.</p>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">{TRACKS.map((t) => <div key={t.key} className="card-dark reveal"><TrackIcon k={t.key} /><h3 className="mt-6 flex min-h-[3rem] items-start text-[18px] leading-[1.25] text-white">{t.name}</h3><p className="mt-2 text-[14px] text-white/85">{t.blurb}</p></div>)}</div>
          <div className="mt-10"><Btn href="/award-categories">View all fourteen categories</Btn></div>
        </div>
      </section>

      {/* ── The nominees: six rows, then the door to all 66 ─────────────── */}
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-[length:var(--text-h1)]">The 2026 nominees</h2>
              <p className="measure mt-4">{TOTAL_NOMINEES} names across {TOTAL_COUNTRIES} countries, announced on {AFIA.nomineesAnnounced}. Six of them, one from six different awards.</p>
            </div>
            <Btn href="/nominees">All {TOTAL_NOMINEES} nominees</Btn>
          </div>
          <ul className="mt-10 grid gap-x-10 md:grid-cols-2">
            {TASTER.map((n) => (
              <li key={n.name} className="reveal flex items-center gap-5 border-t border-[color:var(--afia-grey-300)] py-5">
                <Portrait name={n.name} photo={n.photo} brand={n.brand} size={56} />
                <div className="min-w-0">
                  <h3 className="text-[18px] normal-case tracking-normal text-black">{n.name}</h3>
                  <p className="display mt-1 text-[12px] uppercase tracking-[0.07em] text-[color:var(--afia-gold-ink)]">{n.category} &middot; {n.country}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2025, the first class ───────────────────────────────────────── */}
      <section className="dark section text-center">
        <div className="container">
          <Eyebrow>From the inaugural edition</Eyebrow>
          <h2 className="mt-5 text-[length:var(--text-h1)]"><span className="gold">AFIA 2025</span>: The First Class</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">In 2025 the African Food Influencers Awards held its inaugural edition, bringing together the first class of honourees recognised for their contribution to Africa&apos;s food ecosystem.</p>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">{WINNERS_HOME.map(([img, n, a, c, d]) => <div key={n} className="reveal"><Image src={`/img/${img}`} alt={n} width={400} height={500} className="aspect-[4/5] w-full rounded-xl object-cover object-top" /><h3 className="mt-4 text-[18px] text-white">{n}</h3><p className="display text-[15px] font-medium normal-case tracking-normal text-[color:var(--afia-gold-500)]">{a}</p><p className="display mt-1 text-[13px] text-white/70">{c}</p><p className="mt-2 text-[14px] text-white/80">{d}</p></div>)}</div>
          <div className="mt-10"><Btn href="/winners/2025-winners">See all AFIA 2025 winners</Btn></div>
        </div>
      </section>

      {/* ── Watch ───────────────────────────────────────────────────────── */}
      <section className="section text-center">
        <div className="container">
          <h2 className="text-[length:var(--text-h1)]">Watch the winners being read</h2>
          <p className="measure mx-auto mt-5">{AFIA.watchHow}</p>
          <p className="display mt-6 text-[15px] text-[color:var(--afia-gold-ink)]">{AFIA.timeZones}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-5"><Btn href="/2026-awards">Ceremony details</Btn><Btn href="/partners" variant="outline-light">Partner with AFIA</Btn></div>
        </div>
      </section>

      {/* ── Stay connected ──────────────────────────────────────────────── */}
      <section className="dark section text-center">
        <div className="container">
          <h2 className="gold text-[length:var(--text-h1)]">Stay connected to AFIA</h2>
          <p className="mt-4 text-white/85">Be first to get the ceremony link, the jury announcement and the winners.</p>
          <div className="mx-auto mt-8 max-w-[550px]"><Form name="Stay connected (home)" submit="Keep me updated" thanks="You are on the list."><label className="sr-only" htmlFor="home-email">Email</label><input id="home-email" className="input h-[52px]" name="email" type="email" placeholder="Your Email" required /></Form><p className="mt-4 text-[13px] text-white/70">No spam. Unsubscribe at any time.</p></div>
        </div>
      </section>
    </>
  );
}
