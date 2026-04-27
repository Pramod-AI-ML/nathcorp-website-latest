# AI Fix Notes

Session: seq-1777292609852-7nzshoumk
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: AZURE_CLIENT_SECRET is exposed as a required environment variable in a checked-in example file. Even though it is empty here, this is a high-risk secret-handling surface. Ensure the app never reads secrets from committed files in production and add explicit instructions to source credentials from Azure Key Vault or another secret manager.
- [2] (critical) components/contact-form-modal.tsx: Client-side email handling via emailjs and a public API endpoint can expose the form to abuse/spam and makes it difficult to enforce robust server-side validation, rate limiting, and authentication. Move email sending to a server-side API route or backend function, validate/sanitize all inputs server-side, and add anti-spam controls (rate limiting, CAPTCHA, honeypot).
- [3] (high) .env.example: AZURE_SUBSCRIPTION_ID and AZURE_TENANT_ID are listed without guidance on whether they must remain empty in local environments or be injected via a secret manager. Add explicit comments/documentation to prevent accidental commit of real credentials and to clarify secure secret handling.
- [4] (high) api/src/util/email-helpers.js: The HTML escape helper `esc` only escapes `& < > "` but not single quotes. If any escaped values are later placed into single-quoted HTML attributes or inline contexts, this can leave room for injection bugs. Use a context-aware escaping strategy or ensure all HTML is constructed in safe text contexts only.
- [5] (high) api/src/util/email-helpers.js: The module builds raw HTML strings for email content. This is a common XSS/vector risk if any untrusted fields are interpolated without strict escaping. Review all call sites to ensure every user-supplied field passes through `esc` before insertion.

# AI Fix Notes

Session: seq-1776662340982-xxqdol8x5
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: The example environment file contains real-looking operational values, including EMAIL_ENDPOINT and TEAM_INBOX_ADDRESS, and duplicated AZURE_TENANT_ID entries. Secrets and production identifiers should not be embedded in shared examples; replace them with clearly fake placeholders and document required variables separately.
- [2] (high) .env.example: AZURE_CLIENT_SECRET is represented in the example env file and should be treated as sensitive. Even in examples, ensure no real secret values are ever committed and add guidance to load secrets from a secure secret manager rather than checked-in files.
- [3] (high) api/src/index.js: The Azure Functions host is explicitly enabling HTTP streaming without any visible auth, input validation, or request hardening in this entrypoint. Ensure downstream HTTP functions enforce authentication/authorization and validate payloads, especially if stream handling is exposed to public endpoints.
- [4] (high) api/src/templates/template-2.js: This email template processes user-submitted fields (`name`, `phone`, `company`, `service`, `office`, `subject`, `message`) and relies on escaping helpers. This is a common XSS/email-injection risk area. Confirm that `esc` safely encodes HTML, attributes, and text contexts, and that `detailRow` does not interpolate raw input into HTML or headers. Also sanitize line breaks in fields used in email headers/body to prevent header injection.
- [5] (high) app/careers/page.tsx: "use client" at the page level makes the entire careers page a client-rendered bundle, which can increase JS payload, slow first paint, and reduce SEO/SSR benefits. Prefer a server component page with a small client-only form subcomponent.

