import Image from "next/image";
import type { Metadata } from "next";
import { Btn, PageHero } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import Ankara from "@/components/Ankara";
import { AFIA } from "@/lib/event";

export const metadata: Metadata = { title: "About", description: "The African Food Influencers Awards is Africa's definitive recognition platform for excellence in food, culinary arts, and food industry leadership." };

/** The three principles. A row of three fills the row, so there is no grid hole. */
const PRINCIPLES: [string, string][] = [
  ["Impact over popularity", "The jury weighs what a nominee has built, changed or contributed. Not how many people follow them."],
  ["An independent jury", "Chosen for their standing in the industry, declaring every conflict, with no editorial steer from the organiser."],
  ["Zero pay-to-play", "Nomination is open and free. A place on the list cannot be bought, and neither can a win."],
];

export default function About() {
  return (
    <>
      <Breadcrumbs trail={[["About", "/about"]]} />
      <PageHero title="About the African Food Influencers Awards" />

      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2] grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* sticky, so the picture holds its side of the page instead of ending
              halfway and leaving a dead column under it */}
          <div className="stick">
            <Image src="/img/About-AFIA.png" alt="Guests arriving on the AFIA red carpet" width={800} height={1000} className="img-frame" />
          </div>
          <div className="prose">
            <h2>What is AFIA?</h2>
            <p>The African Food Influencers Awards, or AFIA, is Africa&rsquo;s definitive recognition platform for excellence in food, culinary arts, and food industry leadership. Established by African Food Network, AFIA exists to honour the individuals and brands making a genuine, measurable contribution to Africa&rsquo;s food ecosystem.</p>
            <h2>What AFIA recognises</h2>
            <p>AFIA covers the full breadth of Africa&rsquo;s food ecosystem. The awards are presented every year across tracks that run from the kitchen to the food system: Culinary Excellence, Media and Influence, Brands and Innovation, and Future and Legacy. Nominees may come from anywhere on the African continent or from the African diaspora.</p>
            <h2>Why it matters</h2>
            <p>Africa&rsquo;s food culture is among the richest and most diverse in the world, and it has been consistently underrepresented in global industry recognition. Most African dishes still have no recipe written down anywhere online. AFIA exists to correct that. Every edition builds a growing archive of the people and brands shaping Africa&rsquo;s food story, at home and abroad.</p>
            <h2>Where it came from</h2>
            <p>AFIA was inaugurated in 2025 as an initiative of African Food Network, Africa&rsquo;s pan-African food media, events and ecosystem platform, founded in 2019 and recognised with back-to-back World Culinary Awards for Africa&rsquo;s Best Culinary Festival.</p>
          </div>
        </div>
      </section>

      {/* The principles, as a row that fills itself */}
      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <h2 className="poster !text-[clamp(28px,3.6vw,48px)]">Recognition is earned, never purchased</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map(([h, b]) => (
              <div key={h} className="cat-card reveal">
                <h3 className="text-[18px] leading-[1.22] text-white">{h}</h3>
                <p className="mt-3 text-[14.5px] text-white/80">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This edition, as ruled rows rather than a card grid that leaves a hole */}
      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <h2 className="poster !text-[clamp(28px,3.6vw,48px)]">This edition</h2>
          <dl className="ruled mt-9">
            <div className="ruled-row"><dt className="ruled-row__k">The night</dt><dd className="ruled-row__v">{AFIA.dateLong}, {AFIA.time}. Online, and free to watch.</dd></div>
            <div className="ruled-row"><dt className="ruled-row__k">Who decides</dt><dd className="ruled-row__v">An independent jury, scoring every nominee on impact, excellence and contribution to African food. There is no public vote.</dd></div>
            <div className="ruled-row"><dt className="ruled-row__k">The slate</dt><dd className="ruled-row__v">Announced on {AFIA.nomineesAnnounced}, drawn from across the continent and the diaspora.</dd></div>
            <div className="ruled-row"><dt className="ruled-row__k">Where to watch</dt><dd className="ruled-row__v">{AFIA.watchHow}</dd></div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-5">
            <Btn href="/nominees">Meet the nominees</Btn>
            <Btn href="/governance" variant="outline">How winners are chosen</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
