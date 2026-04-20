# AI Fix Notes

Session: seq-1776662340982-xxqdol8x5
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: The example environment file contains real-looking operational values, including EMAIL_ENDPOINT and TEAM_INBOX_ADDRESS, and duplicated AZURE_TENANT_ID entries. Secrets and production identifiers should not be embedded in shared examples; replace them with clearly fake placeholders and document required variables separately.
- [2] (high) .env.example: AZURE_CLIENT_SECRET is represented in the example env file and should be treated as sensitive. Even in examples, ensure no real secret values are ever committed and add guidance to load secrets from a secure secret manager rather than checked-in files.
- [3] (high) api/src/index.js: The Azure Functions host is explicitly enabling HTTP streaming without any visible auth, input validation, or request hardening in this entrypoint. Ensure downstream HTTP functions enforce authentication/authorization and validate payloads, especially if stream handling is exposed to public endpoints.
- [4] (high) api/src/templates/template-2.js: This email template processes user-submitted fields (`name`, `phone`, `company`, `service`, `office`, `subject`, `message`) and relies on escaping helpers. This is a common XSS/email-injection risk area. Confirm that `esc` safely encodes HTML, attributes, and text contexts, and that `detailRow` does not interpolate raw input into HTML or headers. Also sanitize line breaks in fields used in email headers/body to prevent header injection.
- [5] (high) app/careers/page.tsx: "use client" at the page level makes the entire careers page a client-rendered bundle, which can increase JS payload, slow first paint, and reduce SEO/SSR benefits. Prefer a server component page with a small client-only form subcomponent.

