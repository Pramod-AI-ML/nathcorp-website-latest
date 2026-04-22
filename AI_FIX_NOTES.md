# AI Fix Notes

Session: seq-1776834258783-63z7ws3h6
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: A secret value appears to be committed with trailing whitespace in `AZURE_CLIENT_SECRET=` and the file also contains multiple environment variables that look like production credentials/endpoints. Ensure no real secrets are stored in the repo, rotate any exposed credentials, and keep only placeholder values in example env files.
- [2] (high) .env.example: Sensitive infrastructure and email configuration values are hardcoded in the example env file (`EMAIL_ENDPOINT`, `EMAIL_SENDER_ADDRESS`, `TEAM_INBOX_ADDRESS`). While example files can contain placeholders, these appear like real internal values and may expose operational details. Replace with sanitized placeholders and document required formats instead.
- [3] (high) api/package.json: The Azure Functions package entry point `main: "src/{index.js,functions/*.js}"` is broad and may load unintended files if the function app grows. Narrow the entry pattern and ensure only intended handlers are exported to reduce accidental exposure and improve operational safety.
- [4] (high) api/src/templates/template-2.js: This email template processes user-submitted fields (name, phone, company, service, office, subject, message) and escapes them via helpers, which is good, but the implementation must ensure strict HTML escaping in both HTML and plain-text outputs. Any helper weakness here could lead to stored email/HTML injection.
- [5] (high) app/careers/page.tsx: Entire page is marked as a client component (`"use client"`), which pulls the whole careers page into the client bundle. For a mostly content/form page in Next.js, this increases JS payload and reduces SSR/streaming benefits. Split interactive parts (form, toast, upload) into smaller client components and keep the page server-rendered where possible.

