import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Press & Media" };
const KIT = [["AFIA logo files", "Download Logo Files"], ["AFIA 2026 key facts sheet", "Download Facts Sheet"], ["AFIA boilerplate text", "Download Boilerplate"], ["African Food Network boilerplate", "Download AFN Boilerplate"]];
export default function Press() {
  return (
    <>
      <PageHero title="Press & Media" sub="AFIA welcomes press coverage, media partnerships, and editorial interest in Africa's food industry recognition. Contact details, press kit assets, and available coverage from past editions are listed below." />
      <section id="press-kit" className="section"><div className="container"><h2 className="text-[length:var(--text-h2)]">Press Kit — AFIA 2026</h2><p className="mt-2">Available for download:</p><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{KIT.map(([t, l]) => <div key={t} className="card-light p-6"><h3 className="text-[15px] normal-case tracking-normal text-black">{t}</h3><a href="mailto:awards@afrifoodnetwork.com?subject=AFIA%20Press%20Kit%20request" className="mt-4 inline-block text-[14px] text-[color:var(--afia-gold-600)] underline">{l}</a></div>)}</div></div></section>
      <section id="media-coverage" className="dark section"><div className="container"><h2 className="text-[length:var(--text-h2)]">Media Coverage</h2><p className="mt-4 text-white/85">Press coverage of AFIA 2025 and AFIA 2026 will be listed here as it is published.</p></div></section>
      <section id="media-enquiries" className="section"><div className="container grid gap-10 lg:grid-cols-2">
        <div><h2 className="text-[length:var(--text-h2)]">Media Enquiries</h2><p className="mt-4">For press accreditation, interview requests, and editorial enquiries:</p><ul className="list-gold mt-4 space-y-2"><li><strong>Email:</strong> awards@afrifoodnetwork.com</li><li><strong>Subject line:</strong> AFIA Media Enquiry — [Publication Name]</li><li><strong>Response time:</strong> within three working days for accredited press.</li></ul></div>
        <div className="card-light p-8"><Form name="Media enquiry" submit="Submit Media Enquiry" thanks="Thank you. Accredited press receive a response within three working days." className="grid gap-4"><label className="label">Full name *<input className="input" name="name" required /></label><label className="label">Publication or outlet<input className="input" name="outlet" /></label><label className="label">Email address *<input className="input" name="email" type="email" required /></label><label className="label">Nature of enquiry *<select className="input" name="nature" required defaultValue=""><option value="" disabled>--- Select Choice ---</option><option>Interview Request</option><option>Press Accreditation</option><option>Photography</option><option>General</option></select></label><label className="label">Brief description of enquiry<textarea className="input min-h-[120px]" name="description" /></label></Form></div>
      </div></section>
    </>
  );
}
