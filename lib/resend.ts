import { Resend } from "resend";
export const resend = () => new Resend(process.env.RESEND_API_KEY);
export const FROM = process.env.FORMS_FROM_EMAIL || "African Food Influencers Awards <awards@afrifoodnetwork.com>";
export const INBOX = process.env.FORMS_INBOX || "hello@afrifoodnetwork.com"; // awards@ and info@ bounce (550 No Such User) as of 21 Sep 2026; hello@ exists
