import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import Door from "@/components/Door";
import Ankara from "@/components/Ankara";
import { AFIA } from "@/lib/event";

export const metadata: Metadata = { title: "Winners Archive", description: "A permanent record of every AFIA honouree, edition by edition." };

export default function Winners() {
  return (
    <>
      <Breadcrumbs trail={[["Winners archive", "/winners"]]} />
      <PageHero
        title="The winners archive"
        sub="A permanent record of leadership in African food culture, built edition by edition."
        image="/img/About-AFIA.png"
      />

      {/* Two doors, same object as the homepage wall. The old page put the same
          tiny favicon on two white plates and asked people to "click to view". */}
      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <h2 className="sr-only">Editions</h2>
          <div className="door-wall">
            <Door
              title="AFIA 2025"
              line="The inaugural class: every honouree of the first edition, with what each was recognised for."
              href="/winners/2025-winners"
              photo="/img/AFIA.png"
              alt="An AFIA trophy being handed to a winner on stage"
              wide
              priority
            />
            <Door
              title="AFIA 2025 nominees"
              line="The full first-edition slate, award by award."
              href="/2025-nominees"
              photo="/img/Chef-Neo-Nontso.webp"
              alt="Chef Neo Nontso, an AFIA 2025 winner"
            />
          </div>

          {/* this edition is not an archive entry yet, so it is stated as a line
              rather than dressed up as a third door that leads nowhere */}
          <dl className="ruled mt-12">
            <div className="ruled-row">
              <dt className="ruled-row__k">AFIA {new Date(AFIA.startISO).getFullYear()}</dt>
              <dd className="ruled-row__v">
                The {AFIA.edition.toLowerCase()}. Winners are read out on {AFIA.dateLong} and join the archive the same night.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
