import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Form from "@/components/Form";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <>
      <PageHero title="Contact AFIA" sub="For general enquiries about the African Food Influencers Awards:" />
      <section className="section"><div className="container grid gap-10 lg:grid-cols-2">
        <div><h2 className="text-[length:var(--text-h2)]">Email</h2><p className="mt-3 text-[20px]"><a href="mailto:awards@afrifoodnetwork.com" className="text-[color:var(--afia-gold-600)] underline">awards@afrifoodnetwork.com</a></p><p className="mt-6">For partnership enquiries, visit the <Link href="/partners" className="text-[color:var(--afia-gold-600)] underline">Partners</Link> page.</p><p className="mt-2">For press and media enquiries, visit the <Link href="/press" className="text-[color:var(--afia-gold-600)] underline">Press and Media</Link> page.</p></div>
        <div className="card-light p-8"><Form name="Contact form" submit="Send Message" className="grid gap-4"><label className="label">Full Name *<input className="input" name="name" required /></label><label className="label">Email *<input className="input" name="email" type="email" required /></label><label className="label">Subject<input className="input" name="subject" /></label><label className="label">Message<textarea className="input min-h-[140px]" name="message" /></label></Form></div>
      </div></section>
    </>
  );
}
