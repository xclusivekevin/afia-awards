import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import NominationForm from "@/components/NominationForm";
export const metadata: Metadata = { title: "Nominate", description: "Nominate an individual or brand for the African Food Influencers Awards 2026." };
export default function Nominate() {
  return (
    <>
      <PageHero title="Nominate for AFIA 2026" image="/img/Active-2026-Hero.png" />
      <section className="section"><div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div><Image src="/img/Nominate.png" alt="AFIA nominations" width={800} height={600} className="img-frame" /><div className="prose mt-8"><p>The African Food Influencers Awards is Africa’s definitive recognition platform for excellence in food, culinary arts, and food industry leadership.</p><p>Organised annually, AFIA honours the individuals and brands making a measurable, lasting contribution to Africa’s food ecosystem — across culinary arts, entrepreneurship, media storytelling, and cultural preservation.</p><p>The awards are built on three principles that do not change: impact over popularity, independent jury, and zero pay-to-play.</p><h3>Important Notes Before Submitting</h3><ul><li>Nominations are free and open to anyone.</li><li>You may nominate individuals or brands.</li><li>Self-nomination is permitted.</li><li>All submissions are treated confidentially.</li><li>Submission does not guarantee shortlisting. The jury selects from all eligible nominations.</li><li>Nominations close [date TBC].</li></ul></div></div>
        <div className="card-light p-8"><NominationForm /></div>
      </div></section>
    </>
  );
}
