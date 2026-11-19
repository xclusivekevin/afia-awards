import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import Ankara from "@/components/Ankara";
import Form from "@/components/Form";
import Trophy from "@/components/Trophy";
import { AFIA } from "@/lib/event";

export const metadata: Metadata = { title: "Contact", description: "How to reach the African Food Influencers Awards team." };

/** Each enquiry goes to the page that already answers it, so most people never
    need the form at all. Set out full width under the form rather than squeezed
    into a narrow column beside it. */
const ROUTES: [string, string, string][] = [
  ["Partnerships and sponsorship", "What a partnership includes, and the tiers.", "/partners"],
  ["Press and media", "Accreditation, interviews and the press kit.", "/press"],
  ["Nominating someone", "Who can be nominated, and when the next window opens.", "/nominate"],
  ["How winners are chosen", "The jury, the scoring and the independence rules.", "/governance"],
];

export default function Contact() {
  return (
    <>
      <Breadcrumbs trail={[["Contact", "/contact"]]} />
      <PageHero title="Contact AFIA" sub="For anything about the awards, the ceremony or the archive." />

      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="poster !text-[clamp(26px,3.2vw,42px)]">Write to us</h2>
              <p className="mt-6 text-[clamp(18px,2.2vw,26px)]">
                <a href={`mailto:${AFIA.email}`} className="ink-gold underline underline-offset-4">{AFIA.email}</a>
              </p>
              <p className="mt-5 max-w-[46ch] text-white/75">
                Everything reaches the same desk. Say which part of the awards you are
                writing about and it goes to the right person the same day.
              </p>
              {/* the column earns its height: the mark drawn in code, which draws
                  its own lines and catches a travelling sheen */}
              <div className="mt-10 hidden lg:block" aria-hidden>
                <Trophy className="h-[260px] w-auto opacity-90" />
              </div>
            </div>

            <div className="card-light p-8">
              <h2 className="text-[length:var(--text-h2)]">Send a message</h2>
              <Form name="Contact form" submit="Send message" className="mt-6 grid gap-4">
                <label className="label">Full name *<input className="input" name="name" required /></label>
                <label className="label">Email *<input className="input" name="email" type="email" required /></label>
                <label className="label">Subject<input className="input" name="subject" /></label>
                <label className="label">Message<textarea className="input min-h-[150px]" name="message" /></label>
              </Form>
            </div>
          </div>

          {/* full width, two up, so nothing is crushed into a third of a column */}
          <h2 className="mt-20 text-[15px] tracking-[0.16em] text-[color:var(--afia-gold-200)]">Or go straight there</h2>
          <ul className="ruled mt-6 md:grid md:grid-cols-2 md:gap-x-12">
            {ROUTES.map(([t, b, h]) => (
              <li key={t} className="ruled-link">
                <Link href={h} className="ruled-link__a">
                  <span>
                    <span className="ruled-link__t">{t}</span>
                    <span className="ruled-link__b">{b}</span>
                  </span>
                  <svg width="19" height="9" viewBox="0 0 19 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M0 4.5h16M13 1l3.5 3.5L13 8" /></svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
