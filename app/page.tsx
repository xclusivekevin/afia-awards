import Image from "next/image";
import { Btn, WINNERS_HOME } from "@/components/ui";
import Form from "@/components/Form";
import Countdown from "@/components/Countdown";
import TapedCard from "@/components/TapedCard";
import Ribbon from "@/components/Ribbon";
import Ankara from "@/components/Ankara";
import TypedDate from "@/components/TypedDate";
import { AFIA } from "@/lib/event";
import { TRACKS } from "@/lib/data";
import { CATEGORIES_2026 } from "@/lib/nominees";

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
      {/* ── Hero: "The Wall of 67".
             Type as a window onto a drifting mosaic of every nominee, from
             height/video-paragon. Edge-to-edge display scale with small connector
             words, from height/awwwards-champions-for-good. ──────────────── */}
      <section className="dark hero relative flex min-h-[86svh] flex-col justify-center overflow-hidden pt-[96px] pb-14">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="hero__glow" aria-hidden />

        <div className="container relative z-[2] py-8">
          <h1 className="wall-type">
            <span className="wall-type__small">The people who moved</span>
            <span className="wall-type__big wall-type__big--wide">African food</span>
            <span className="wall-type__small">this year</span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Ribbon>Nominees</Ribbon>
            <p className="display text-[17px] font-medium text-white md:text-[21px]">
              <TypedDate text={`${AFIA.dateLong} · ${AFIA.time} · Online`} />
            </p>
          </div>

          <p className="lede mt-4 max-w-[62ch] text-white/80">
            The {AFIA.edition.toLowerCase()} of the African Food Influencers Awards.
            Nominated by the industry, from across the continent and the diaspora, and
            decided by an independent jury with no public vote.
          </p>

          <Countdown to={AFIA.startISO} passed="The AFIA 2026 winners are in." align="start" />

          <div className="mt-7 flex flex-wrap gap-5">
            <Btn href="/nominees">Meet the nominees</Btn>
            <Btn href="/2026-awards" variant="outline">Watch it live</Btn>
          </div>
        </div>

        {/* the wall continues below the cut line and fades out, as Paragon does */}
        <div className="wall-bleed" aria-hidden />
      </section>

      {/* ── What AFIA is ────────────────────────────────────────────────── */}
      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src="/img/About-AFIA-2026.png" alt="Speaker at the AFIA lectern" width={800} height={600} className="img-frame" />
          <div><h2 className="poster !text-[clamp(28px,3.4vw,46px)]">What is AFIA?</h2><p className="measure mt-5 text-white/80">The African Food Influencers Awards is Africa&rsquo;s definitive recognition platform for excellence in food, culinary arts, and food industry leadership.</p><p className="mt-4 text-white/75">Organised annually by African Food Network, AFIA honours the individuals and brands making a measurable, lasting contribution to Africa&rsquo;s food ecosystem, across culinary arts, entrepreneurship, media storytelling, and cultural preservation.</p><p className="mt-4 text-white/75">The awards are built on three principles that do not change: impact over popularity, an independent jury, and zero pay-to-play.</p><h3 className="mt-6 text-[18px] text-[color:var(--afia-gold-200)]">AFIA 2026</h3><p className="mt-2 text-white/75">The {AFIA.edition.toLowerCase()} is decided by an independent jury scoring every nominee on impact, excellence and contribution to African food. There is no public vote.</p><div className="mt-6"><Btn href="/governance" variant="outline">How winners are chosen</Btn></div></div>
        </div>
      </section>

      {/* ── The awards ──────────────────────────────────────────────────── */}
      <section className="dark section relative text-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url(/img/Active-2026-Hero.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <h2 className="display gold text-[22px] font-semibold md:text-[32px]">AFIA 2026: The Awards</h2>
          <p className="display mt-6 text-[36px] font-bold leading-[1.1] text-white md:text-[56px]">Nominated by the industry.<br />Judged on impact.<br /><span className="gold">Never bought.</span></p>
          <p className="display mt-6 text-[16px] text-white md:text-[22px]">Winners announced {AFIA.dateLong}</p>
          <p className="lede mx-auto mt-4 max-w-3xl text-white/85">Nominated by the industry, judged on impact rather than popularity. Open to individuals and brands from across the African continent and the African diaspora. Nomination is free, and winning cannot be bought.</p>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">{TRACKS.map((t) => <div key={t.key} className="card-dark reveal"><TrackIcon k={t.key} /><h3 className="mt-6 flex min-h-[3rem] items-start text-[18px] leading-[1.25] text-white">{t.name}</h3><p className="mt-2 text-[14px] text-white/85">{t.blurb}</p></div>)}</div>
          <div className="mt-10"><Btn href="/award-categories">Every award, explained</Btn></div>
        </div>
      </section>

      {/* ── The nominees: six rows, then the door to all 66 ─────────────── */}
      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="poster !text-[clamp(30px,4vw,56px)]">The 2026 nominees</h2>
              <p className="measure mt-4 text-white/75">Announced on {AFIA.nomineesAnnounced}, from across the continent and the diaspora. A few of them, one from each of six awards.</p>
            </div>
            <Btn href="/nominees">See who is nominated</Btn>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-12">
            {TASTER.map((n, i) => (
              <li key={n.name} className="reveal w-[calc(50%-1rem)] max-w-[260px] md:w-[calc(33.333%-1.34rem)]">
                <TapedCard name={n.name} photo={n.photo} brand={n.brand} caption={n.country} i={i} />
                <p className="mt-3 text-center text-[12px] uppercase tracking-[0.08em] text-[color:var(--afia-gold-200)]">
                  {n.category}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2025, the first class ───────────────────────────────────────── */}
      <section className="dark section text-center">
        <div className="container">
          <h2 className="mt-5 text-[length:var(--text-h1)]"><span className="gold">AFIA 2025</span>: The First Class</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">In 2025 the African Food Influencers Awards held its inaugural edition, bringing together the first class of honourees recognised for their contribution to Africa&apos;s food ecosystem.</p>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">{WINNERS_HOME.map(([img, n, a, c, d]) => <div key={n} className="reveal"><Image src={`/img/${img}`} alt={n} width={400} height={500} className="aspect-[4/5] w-full rounded-xl object-cover object-top" /><h3 className="mt-4 text-[18px] text-white">{n}</h3><p className="display text-[15px] font-medium normal-case tracking-normal text-[color:var(--afia-gold-500)]">{a}</p><p className="display mt-1 text-[13px] text-white/70">{c}</p><p className="mt-2 text-[14px] text-white/80">{d}</p></div>)}</div>
          <div className="mt-10"><Btn href="/winners/2025-winners">See all AFIA 2025 winners</Btn></div>
        </div>
      </section>

      {/* ── Watch ───────────────────────────────────────────────────────── */}
      <section className="dark section relative overflow-hidden text-center">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container">
          <h2 className="poster mx-auto !text-[clamp(30px,4vw,56px)]">Watch the winners being read</h2>
          <p className="measure mx-auto mt-5 text-white/80">{AFIA.watchHow}</p>
          <p className="display mt-6 text-[15px] text-[color:var(--afia-gold-200)]">{AFIA.timeZones}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-5"><Btn href="/2026-awards">How to watch</Btn><Btn href="/partners" variant="outline">Partner with AFIA</Btn></div>
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
