# AFIA Awards site

Next.js 15 rebuild of awards.afrifoodnetwork.com (review build, faithful to the September 2026 live site).

- Design system: `Web Design/Design Guides/afia/afia-design-system.md`; tokens in `app/tokens.css`; Clash Display self-hosted in `public/fonts`.
- Forms (nominate, partners, press, contact, stay-connected) relay to `FORMS_INBOX` via Resend.
- Dev: `pnpm install && pnpm dev -p 3103`
