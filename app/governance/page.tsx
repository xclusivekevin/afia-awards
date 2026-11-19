import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
import TapedCard from "@/components/TapedCard";
import Ribbon from "@/components/Ribbon";
import { AFIA, SCORING, JURY_PUBLISHED, JURY_ROLLING, JURY_2026, JURY_2025 } from "@/lib/event";
import { TOTAL_NOMINEES } from "@/lib/nominees";

export const metadata: Metadata = {
  title: "The Jury and How Winners Are Chosen",
  description:
    "AFIA 2026 is decided by an independent jury, not a public vote. Every nominee is scored 1 to 10 on impact, excellence and contribution to African food. Nomination is free and winning cannot be bought.",
  alternates: { canonical: `${AFIA.url}/governance` },
  openGraph: { url: `${AFIA.url}/governance`, type: "website" },
};

const TIMELINE: [string, string, boolean][] = [
  ["Nominees announced", AFIA.nomineesAnnounced, true],
  ["Jury scoring opens", "16 November 2026", true],
  ["Jury announced", AFIA.juryAnnounced, false],
  ["Scoring closes", AFIA.scoringCloses, false],
  ["Winners announced", `${AFIA.winnersAnnounced}, live online`, false],
];

const RULES = [
  "Every juror signs a conflict of interest declaration before scoring opens.",
  "A juror who has a conflict in a category does not score that category at all, rather than skipping a single nominee.",
  "Jurors do not discuss scores with each other, with nominees or with anyone else.",
  "African Food Network staff do not vote. The jury secretary runs the process and holds no vote.",
  "Sponsors and commercial partners have no say in the result and no sight of the scores.",
  "Nomination is free. Winning cannot be bought, and no nominee pays anything at any stage.",
];

export default function Governance() {
  // FAQ schema: this is the page AI answer engines quote when asked how AFIA picks winners.
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { q: "Is there a public vote for the African Food Influencers Awards?", a: "No. AFIA has no public vote. Every category is decided by an independent jury that scores each nominee against published criteria." },
      { q: "How are AFIA winners chosen?", a: `Each juror scores every nominee in their assigned categories from 1 to 10 on three dimensions: impact in 2025 and 2026, excellence, and contribution to African food. The three scores combine into that juror's nominee score, and the category winner is the nominee with the highest average across the jurors who scored that category.` },
      { q: "Can you pay to win an AFIA award?", a: "No. Nomination is free and AFIA operates a zero pay-to-play policy. Sponsorship confers no advantage in the selection process, and sponsors do not see the scores." },
      { q: "Who can be nominated for AFIA?", a: "Anyone of African descent, anywhere in the world, whose work promotes African food and culture. The work may be based outside Africa provided its impact is demonstrably connected to African food culture, African food industries or the African diaspora food community." },
      { q: "When are the AFIA 2026 winners announced?", a: `${AFIA.dateLong} at ${AFIA.time}, online. ${AFIA.watchHow}` },
    ].map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <PageHero
        eyebrow="Jury only. No public vote."
        title={<>The jury, and how<br />winners are chosen.</>}
        sub={`AFIA is decided by an independent jury scoring every nominee against published criteria. Nomination is free, winning cannot be bought, and no sponsor sees a score.`}
      />

      {/* ── 1. The three dimensions. The heart of the page. ──────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="text-[length:var(--text-h1)]">What every juror is asked</h2>
          <p className="measure mt-5">
            Every juror scores every nominee in their categories from 1 to 10 on each of the three dimensions
            below. Nothing else counts. Follower numbers are not a dimension, and a large audience is not
            treated as proof of impact.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SCORING.map((s) => (
              <div key={s.n} className="reveal rounded-[16px] border border-[color:var(--color-card-border)] p-7">
                <h3 className="text-[20px] normal-case tracking-normal text-black">{s.name}</h3>
                <p className="mt-3 text-[14px]">{s.what}</p>
                <p className="mt-4 border-t border-[color:var(--afia-grey-300)] pt-4 text-[14px] italic text-[color:var(--afia-gold-ink)]">{s.q}</p>
              </div>
            ))}
          </div>
          <p className="measure mt-8 text-[14px]">
            The three scores combine into that juror&apos;s score for the nominee. The winner of each category is
            the nominee with the highest average across the jurors who scored it. A tie goes back to the jurors
            for that category.
          </p>
        </div>
      </section>

      {/* ── 2. The 2026 jury ────────────────────────────────────────────── */}
      <section className="dark section">
        <div className="container">
          <div className="text-center"><h2 className="poster mx-auto">The AFIA 2026 jury</h2><div className="mt-5 flex justify-center"><Ribbon>Independent</Ribbon></div></div>

          {JURY_PUBLISHED && JURY_2026.length > 0 ? (
            <>
              {JURY_ROLLING && (
                <p className="lede mx-auto mt-5 max-w-2xl text-center text-white/85">
                  Confirmed so far. The full panel is announced on{" "}
                  <strong className="text-white">{AFIA.juryAnnounced}</strong>, and scoring is
                  already under way.
                </p>
              )}
              <div className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {JURY_2026.map((j, i) => (
                <div key={j.name} className="reveal">
                  <TapedCard name={j.name} photo={j.photo} caption={j.country} i={i} dir="jury" />
                  <p className="mt-4 text-center text-[13px] leading-relaxed text-white/70">{j.role}</p>
                </div>
              ))}
              </div>
            </>
          ) : (
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="lede text-white/85">
                The AFIA 2026 jury is announced on <strong className="text-white">{AFIA.juryAnnounced}</strong>, with
                each juror&apos;s name, country and field. Scoring is already under way.
              </p>
              <p className="mx-auto mt-5 max-w-[60ch] text-[15px] text-white/70">
                The panel is drawn from across the African food ecosystem: culinary professionals, food media,
                food science and nutrition, agriculture and food systems, and the diaspora. No single sector or
                country holds a majority, and no juror scores a category they have a declared interest in.
              </p>
            </div>
          )}

          {/* Independence rules. These apply whether or not the names are out. */}
          {/* Heading sits over the list rather than beside it: as a narrow column it
              was two lines of type with 400px of empty black under it. */}
          <div className="mt-14">
            <h3 className="text-[length:var(--text-h2)] text-white">How independence is protected</h3>
            <ul className="list-gold mt-8 grid gap-x-12 gap-y-4 text-[15px] text-white/85 md:grid-cols-2">
              {RULES.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. Timeline ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="text-[length:var(--text-h1)]">The 2026 timetable</h2>
          <ol className="mt-10 border-t border-[color:var(--afia-grey-300)]">
            {TIMELINE.map(([k, v, done]) => (
              <li key={k} className="ruled-row flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-[color:var(--afia-grey-300)] py-5">
                <span className={`display w-[22px] shrink-0 text-[15px] ${done ? "text-[color:var(--afia-gold-ink)]" : "text-[color:var(--afia-grey-300)]"}`} aria-hidden>
                  {done ? "✓" : "·"}
                </span>
                <span className="display min-w-[200px] flex-1 text-[18px] normal-case tracking-normal text-black">{k}</span>
                <span className="text-[15px]">{v}</span>
                <span className="sr-only">{done ? "Completed" : "Upcoming"}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4. Eligibility and enquiries ────────────────────────────────── */}
      <section className="section pt-0">
        <div className="container prose max-w-3xl">
          <h2>Who can be nominated</h2>
          <p>
            AFIA is open to anyone of African descent, anywhere in the world, whose work promotes African food
            and culture. Work may be based outside the continent provided its impact is demonstrably connected
            to African food culture, African food industries, or the African diaspora food community. A chain of
            African restaurants outside Africa counts. An African food brand on foreign shelves counts.
          </p>
          <p>
            {TOTAL_NOMINEES} nominees were researched and approved for the {AFIA.awards} categories of the {AFIA.edition.toLowerCase()}.
            Every nominee was contacted before the list was published.
          </p>
          <h3>Enquiries</h3>
          <p>
            Questions about the process may be sent to{" "}
            <a href={`mailto:${AFIA.email}`} className="text-[color:var(--afia-gold-ink)] underline">{AFIA.email}</a>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Btn href="/nominees">See who is nominated</Btn>
            <Btn href="/award-categories" variant="outline-light">Every award, explained</Btn>
          </div>
        </div>
      </section>

      {/* ── 5. The 2025 jury, as a record ───────────────────────────────── */}
      <section className="dark section">
        <div className="container text-center">
          <h2 className="text-[length:var(--text-h2)]">The inaugural jury, AFIA 2025</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            The panel that decided the first edition. Kept here as a public record.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {JURY_2025.map((j) => (
              <div key={j.name} className="card-dark">
                <h3 className="text-[16px] text-white">{j.name}</h3>
                <p className="mt-2 text-[13px] text-white/80">{j.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
