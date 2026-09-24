"use client";
import { useState } from "react";

const CATS = ["Chef of the Year", "Restaurateur of the Year", "Food Media Personality of the Year", "Best Food Content Creator", "Food Brand of the Year", "Food Entrepreneur of the Year", "Culinary Heritage Champion", "Emerging Talent of the Year"];
const STEPS = ["The nominee", "The case", "You"];

/** B8: same fields and one submit, but chunked into three steps with a progress bar.
 *  Validation stays native: each step checks its own required fields before advancing. */
export default function NominationForm() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [words, setWords] = useState(0);

  function next(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.closest("form") as HTMLFormElement;
    const panel = form.querySelector<HTMLElement>(`[data-step="${step}"]`);
    const fields = panel ? [...panel.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input,select,textarea")] : [];
    for (const f of fields) if (!f.checkValidity()) { f.reportValidity(); return; }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const fd = new FormData(e.currentTarget); fd.set("_form", "AFIA 2026 nomination");
    const r = await fetch("/api/forms", { method: "POST", body: fd }).catch(() => null);
    setState(r && r.ok ? "done" : "error");
  }

  if (state === "done") return <p className="rounded bg-[#FAF6F1] p-6 text-[16px] font-semibold text-black">Thank you. Your nomination has been received and will be reviewed by the jury.</p>;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <ol className="mb-6 flex gap-2" aria-label="Progress">
        {STEPS.map((label, i) => (
          <li key={label} className="flex-1">
            <div className={`h-1 rounded-full ${i <= step ? "bg-[color:var(--afia-gold-600)]" : "bg-[#E6E0D6]"}`} />
            <p className={`mt-2 text-[12px] ${i === step ? "font-semibold text-black" : "text-[color:var(--afia-grey-600)]"}`}>
              <span className="sr-only">Step {i + 1} of {STEPS.length}: </span>{label}
            </p>
          </li>
        ))}
      </ol>

      <div data-step="0" hidden={step !== 0}>
        <h2 className="text-[18px] text-[color:var(--afia-gold-ink)]">About the nominee</h2>
        <div className="mt-4 grid gap-4">
          <label className="label">Full name of nominee (or brand name) *<input className="input" name="nominee" required /></label>
          <label className="label">Award category *<select className="input" name="category" required defaultValue=""><option value="" disabled>--- Select Choice ---</option>{CATS.map((c) => <option key={c}>{c}</option>)}</select></label>
          <label className="label">Country of work or origin *<input className="input" name="country" required /></label>
          <label className="label">Website or social media profile<input className="input" name="profile" /></label>
        </div>
      </div>

      <div data-step="1" hidden={step !== 1}>
        <h2 className="text-[18px] text-[color:var(--afia-gold-ink)]">Why you are nominating them</h2>
        <label className="label mt-4">Tell us why this person or brand deserves recognition. What have they built, changed, or contributed? Be specific. *
          <textarea className="input min-h-[190px]" name="reason" required maxLength={2400} onChange={(e) => setWords(e.target.value.trim() ? e.target.value.trim().split(/\s+/).length : 0)} />
        </label>
        <p className={`text-[12px] ${words > 300 ? "text-red-600" : "text-[color:var(--afia-grey-600)]"}`} aria-live="polite">{words} of 300 words maximum</p>
      </div>

      <div data-step="2" hidden={step !== 2}>
        <h2 className="text-[18px] text-[color:var(--afia-gold-ink)]">Your details</h2>
        <div className="mt-4 grid gap-4">
          <label className="label">Your name *<input className="input" name="your_name" required /></label>
          <label className="label">Your email address *<input className="input" name="email" type="email" required /></label>
          <label className="label">Your relationship to the nominee<input className="input" name="relationship" /></label>
          <label className="flex items-start gap-3 text-[13px]"><input type="checkbox" name="confirmation" value="yes" required className="mt-1" />I confirm the information provided is accurate to the best of my knowledge. *</label>
        </div>
        {state === "error" && <p className="mt-3 text-[13px] text-red-600">Something went wrong. Please email awards@afrifoodnetwork.com.</p>}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {step > 0 && <button type="button" onClick={() => setStep((s) => s - 1)} className="btn btn--outline-light">Back</button>}
        {step < STEPS.length - 1
          ? <button type="button" onClick={next} className="btn btn--primary">Continue</button>
          : <button type="submit" disabled={state === "sending"} className="btn btn--primary disabled:opacity-60">{state === "sending" ? "Sending…" : "Submit Nomination"}</button>}
      </div>
      <p className="mt-4 text-[12px] text-[color:var(--afia-grey-600)]">Nomination is free. Self-nomination is permitted. All submissions are treated confidentially.</p>
    </form>
  );
}
