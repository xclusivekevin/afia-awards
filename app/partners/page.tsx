import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, Btn } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import Ankara from "@/components/Ankara";
import Form from "@/components/Form";
import { AFIA } from "@/lib/event";

export const metadata: Metadata = { title: "Partners", description: "AFIA 2026 partners and partnership opportunities." };

const TIERS: [string, string, string][] = [
  ["PIP-Partner-Tier.png", "Principal Institutional Partner", "The highest level, and the only one of its kind each edition. Prominent naming rights, association with the opening of the ceremony, brand integration across the event and every digital asset, and a fireside conversation slot on the night."],
  ["CSP-Partner-Tier.png", "Category Support Partner", "Exclusive association with a single award. The category is named in partnership with the brand, and the brand runs through that category's nominations, shortlist announcement and presentation."],
  ["SP-Partner-Tier.png", "Supporting Partner", "Brand presence across the AFIA digital assets and the ceremony, with acknowledgement in the shortlist and winner communications."],
];

/** What a partner is buying, and what they are not. Stated plainly, because the
    first question every sponsor asks about a jury award is whether money moves
    the result. */
const TERMS: [string, string][] = [
  ["The reach", "African Food Network's audience across Nigeria, Ghana, the United Kingdom and the United States, drawn from its email list and the wider AFN community: food professionals, cultural influencers and the diaspora."],
  ["The night", `${AFIA.dateLong}, online and free to watch, so there is no ticket wall between a partner's brand and the audience.`],
  ["What partners do not get", "Any part in selection. Partners see no scores, meet no jurors about nominees, and cannot place a brand into a result. That independence is what the recognition is worth."],
  ["How it starts", "A conversation. Tell us which part of African food your brand is already in, and the right tier usually picks itself."],
];

export default function Partners() {
  return (
    <>
      <Breadcrumbs trail={[["Partners", "/partners"]]} />
      <PageHero title="Partners and sponsors" sub="Back the recognition, not the result." />

      {/* ── What partnering is ──────────────────────────────────────────── */}
      <section id="current-partners" className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <h2 className="poster !text-[clamp(28px,3.6vw,48px)]">Partnership is open for this edition</h2>
          <dl className="ruled mt-10">
            {TERMS.map(([k, v]) => (
              <div key={k} className="ruled-row"><dt className="ruled-row__k">{k}</dt><dd className="ruled-row__v">{v}</dd></div>
            ))}
          </dl>
          <div className="mt-10"><Btn href="#partnership-enquiry">Talk to us about partnering</Btn></div>
        </div>
      </section>

      {/* ── The tiers ───────────────────────────────────────────────────── */}
      <section id="partnership-opportunities" className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <h2 className="poster !text-[clamp(28px,3.6vw,48px)]">The tiers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TIERS.map(([img, t, d]) => (
              <div key={t} className="card-dark reveal flex flex-col">
                <Image src={`/img/${img}`} alt="" width={400} height={300} className="w-full rounded-lg" />
                <h3 className="mt-5 text-[18px] leading-[1.22] text-white">{t}</h3>
                <p className="mt-3 text-[14px] text-white/85">{d}</p>
                <p className="mt-auto pt-5 text-[13px] text-[color:var(--afia-gold-500)]">Investment range on request</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The enquiry, beside the reason to send it ───────────────────── */}
      <section id="partnership-enquiry" className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2] grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="poster !text-[clamp(26px,3.2vw,42px)]">Start a conversation</h2>
            <p className="mt-6 max-w-[46ch] text-white/80">
              Every enquiry is read by the partnerships team. Qualified enquiries get an
              answer within five working days, with the tiers that fit and what each one
              would look like for your brand this edition.
            </p>
            <p className="mt-6 max-w-[46ch] text-white/80">
              If you would rather write directly:{" "}
              <a href={`mailto:${AFIA.email}`} className="ink-gold underline underline-offset-4">{AFIA.email}</a>
            </p>
          </div>
          <div className="card-light p-8">
            <h2 className="text-[length:var(--text-h2)]">Partnership enquiry</h2>
            <Form name="Partnership enquiry" submit="Submit partnership enquiry" thanks="Thank you. Qualified enquiries receive a response within five working days." className="mt-6 grid gap-4">
              <label className="label">Organisation name *<input className="input" name="organisation" required /></label>
              <label className="label">Contact name and title *<input className="input" name="contact" required /></label>
              <label className="label">Email address *<input className="input" name="email" type="email" required /></label>
              <label className="label">Nature of interest *<select className="input" name="tier" required defaultValue=""><option value="" disabled>Choose a tier</option><option>Principal Institutional Partner</option><option>Category Support Partner</option><option>Supporting Partner</option><option>Other</option></select></label>
              <label className="label">Alignment<textarea className="input min-h-[120px]" name="alignment" maxLength={1200} placeholder="A brief note on where your brand already sits in African food" /></label>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
