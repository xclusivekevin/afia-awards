import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
import Ribbon from "@/components/Ribbon";
import { AFIA } from "@/lib/event";
import { TRACKS } from "@/lib/data";
import { CATEGORIES_2026, TOTAL_NOMINEES, TOTAL_COUNTRIES } from "@/lib/nominees";

export const metadata: Metadata = {
  title: "AFIA 2026",
  description: `The African Food Influencers Awards 2026: ${AFIA.awards} awards across four tracks, ${TOTAL_NOMINEES} nominees, decided by an independent jury. Online on ${AFIA.dateLong}.`,
  alternates: { canonical: `${AFIA.url}/2026-awards` },
  openGraph: { url: `${AFIA.url}/2026-awards`, type: "website" },
};

const TIMELINE: [string, string, boolean][] = [
  ["Nominees announced", AFIA.nomineesAnnounced, true],
  ["Jury scoring opens", "16 November 2026", true],
  ["Jury announced", AFIA.juryAnnounced, false],
  ["Scoring closes", AFIA.scoringCloses, false],
  ["Ceremony and winners", `${AFIA.dateShort}, ${AFIA.time}`, false],
];

export default function Awards2026() {
  return (
    <>
      <PageHero
        eyebrow={`${AFIA.edition} · ${AFIA.dateLong}`}
        title={<>Africa and the<br />future of food.</>}
        sub={
          <>
            <p className="display text-white">Honouring Excellence. Building Africa&apos;s Food Future.</p>
            <p className="mt-2">Nominated by the industry · Decided by an independent jury · Free to watch</p>
          </>
        }
      >
        <Btn href="/nominees">See the nominees</Btn>
        <Btn href="/governance" variant="outline">How winners are chosen</Btn>
      </PageHero>

      {/* ── How to watch. The audience action this page exists for. ─────── */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-[length:var(--text-h1)]">How to watch</h2>
            <p className="measure mt-5">
              AFIA 2026 is online and free. {AFIA.watchHow}
            </p>
            <p className="mt-4">
              The winners of all {AFIA.awards} awards are read in one sitting, each with a nominee reel and a
              message from the winner. The AFN 100 follows the next day, on {AFIA.afn100Published}.
            </p>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-[16px] border border-[color:var(--color-card-border)] bg-[color:var(--color-card-border)] sm:grid-cols-2">
            {([["Date", AFIA.dateLong], ["Time", AFIA.time], ["Where", `${AFIA.format} · ${AFIA.venueName}`], ["Price", AFIA.price]] as [string, string][]).map(([k, v]) => (
              <div key={k} className="bg-white p-6">
                <dt className="display text-[12px] uppercase tracking-[0.1em] text-[color:var(--afia-gold-ink)]">{k}</dt>
                <dd className="mt-2 text-[17px] text-black">{v}</dd>
              </div>
            ))}
            <div className="bg-white p-6 sm:col-span-2">
              <dt className="display text-[12px] uppercase tracking-[0.1em] text-[color:var(--afia-gold-ink)]">Around the world</dt>
              <dd className="mt-2 text-[15px]">{AFIA.timeZones}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── Eligibility ─────────────────────────────────────────────────── */}
      <section className="section pt-0">
        <div className="container max-w-4xl">
          <h2 className="text-[length:var(--text-h2)]">Who is eligible</h2>
          <p className="mt-4">
            AFIA 2026 is open to anyone of African descent, anywhere in the world, whose work promotes African
            food and culture. Work may be based outside the continent provided its impact is demonstrably
            connected to African food culture, African food industries, or the African diaspora food community.
            A chain of African restaurants outside Africa counts. An African food brand on foreign shelves counts.
          </p>
          <p className="mt-4">Nomination is free and open. Winning cannot be bought.</p>
        </div>
      </section>

      {/* ── The fourteen, by track ──────────────────────────────────────── */}
      <section className="dark section">
        <div className="container">
          <div className="text-center"><h2 className="poster mx-auto !text-[clamp(30px,4vw,58px)]">The awards</h2><div className="mt-5 flex justify-center"><Ribbon>Four tracks</Ribbon></div></div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRACKS.map((t) => (
              <div key={t.key} className="card-dark">
                <h3 className="flex min-h-[3rem] items-start text-[18px] leading-[1.25] text-white">{t.name}</h3>
                <ul className="list-gold mt-4 space-y-2 text-[14px] text-white/85">
                  {t.categories.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-center text-[length:var(--text-h2)] text-white">The 2026 timetable</h3>
            <ol className="mx-auto mt-8 max-w-3xl border-t border-[color:var(--color-card-border)]">
              {TIMELINE.map(([k, v, done]) => (
                <li key={k} className="ruled-row flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-[color:var(--color-card-border)] py-4">
                  <span className={`display w-[22px] shrink-0 text-[15px] ${done ? "text-[color:var(--afia-gold-500)]" : "text-white/30"}`} aria-hidden>{done ? "✓" : "·"}</span>
                  <span className="display min-w-[200px] flex-1 text-[17px] text-white">{k}</span>
                  <span className="text-[15px] text-white/75">{v}</span>
                  <span className="sr-only">{done ? "Completed" : "Upcoming"}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Btn href="/nominees">See who is nominated</Btn>
            <Btn href="/award-categories" variant="outline">What each award honours</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
