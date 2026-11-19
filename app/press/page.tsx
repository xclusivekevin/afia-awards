import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import Ankara from "@/components/Ankara";
import Form from "@/components/Form";
import { AFIA } from "@/lib/event";

export const metadata: Metadata = { title: "Press & Media", description: "Press kit, accreditation and media enquiries for the African Food Influencers Awards." };

const KIT: [string, string][] = [
  ["Logo files", "The AFIA mark and wordmark, in the formats print and broadcast need."],
  ["Key facts sheet", "The dates, the tracks, the jury process and the numbers, on one page."],
  ["AFIA boilerplate", "The standing paragraph about the awards, for the foot of a story."],
  ["AFN boilerplate", "The standing paragraph about African Food Network."],
];

export default function Press() {
  return (
    <>
      <Breadcrumbs trail={[["Press and media", "/press"]]} />
      <PageHero
        title="Press and media"
        sub="Accreditation, interviews, the press kit and everything an editor needs to cover the awards."
        image="/img/About-AFIA.png"
      />

      {/* ── The kit ─────────────────────────────────────────────────────── */}
      <section id="press-kit" className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <h2 className="poster !text-[clamp(26px,3.2vw,44px)]">The press kit</h2>
          <p className="measure mt-5 text-white/80">
            Everything below is sent the same day it is asked for. Say which pieces you need
            and which outlet you are writing for.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KIT.map(([t, b]) => (
              <a
                key={t}
                href={`mailto:${AFIA.email}?subject=AFIA%20press%20kit%3A%20${encodeURIComponent(t)}`}
                className="cat-card reveal block"
              >
                <h3 className="text-[17px] leading-[1.22] text-white">{t}</h3>
                <p className="mt-3 text-[14px] text-white/75">{b}</p>
                <span className="display mt-5 inline-flex items-center gap-2 text-[13px] tracking-[0.1em] text-[color:var(--afia-gold-200)]">
                  Request it
                  <svg width="17" height="8" viewBox="0 0 17 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M0 4h14M11 1l3 3-3 3" /></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiries. The old page had a third section promising coverage
             "will be listed here", which is an empty section pretending to be
             content. It is folded into this one until there is coverage. ──── */}
      <section id="media-enquiries" className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2] grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="poster !text-[clamp(26px,3.2vw,44px)]">Media enquiries</h2>
            <dl className="ruled mt-9">
              <div className="ruled-row"><dt className="ruled-row__k">Email</dt><dd className="ruled-row__v"><a href={`mailto:${AFIA.email}`} className="ink-gold underline">{AFIA.email}</a></dd></div>
              <div className="ruled-row"><dt className="ruled-row__k">Subject line</dt><dd className="ruled-row__v">AFIA media enquiry, then your publication&rsquo;s name.</dd></div>
              <div className="ruled-row"><dt className="ruled-row__k">Reply time</dt><dd className="ruled-row__v">Within three working days for accredited press.</dd></div>
              <div className="ruled-row"><dt className="ruled-row__k">Interviews</dt><dd className="ruled-row__v">The founder and the jury chair are available for interview in the run-up to the ceremony and on the night itself. Say your deadline in the first line.</dd></div>
              <div className="ruled-row"><dt className="ruled-row__k">Images</dt><dd className="ruled-row__v">Photographs from the ceremony, nominee portraits and the trophy are cleared for editorial use with a credit to African Food Network.</dd></div>
              <div className="ruled-row"><dt className="ruled-row__k" id="media-coverage">Coverage</dt><dd className="ruled-row__v">Published coverage of the awards is listed here as it appears. If you have run a piece, send the link and it goes up.</dd></div>
            </dl>
          </div>

          <div className="card-light self-start p-8">
            <h2 className="text-[length:var(--text-h2)]">Send an enquiry</h2>
            <Form name="Media enquiry" submit="Submit media enquiry" thanks="Thank you. Accredited press receive a response within three working days." className="mt-6 grid gap-4">
              <label className="label">Full name *<input className="input" name="name" required /></label>
              <label className="label">Publication or outlet<input className="input" name="outlet" /></label>
              <label className="label">Email address *<input className="input" name="email" type="email" required /></label>
              <label className="label">Nature of enquiry *<select className="input" name="nature" required defaultValue=""><option value="" disabled>Choose one</option><option>Interview request</option><option>Press accreditation</option><option>Photography</option><option>General</option></select></label>
              <label className="label">Brief description<textarea className="input min-h-[120px]" name="description" /></label>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
