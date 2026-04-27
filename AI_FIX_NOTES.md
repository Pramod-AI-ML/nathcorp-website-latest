# AI Fix Notes

Session: seq-1777292319872-nfjk3yvny
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) components/contact-form-modal.tsx: Client-side contact form appears to use EmailJS and a direct API endpoint from the browser. If credentials, service IDs, or any secrets are embedded in the component or shipped to the client, they can be exposed. Ensure all sensitive email-sending logic is moved server-side, with secrets stored only in environment variables and validated on the backend.
- [2] (high) .env.example: Sensitive Azure credential variables are included in a checked-in example file, and the file duplicates AZURE_TENANT_ID while also containing AZURE_CLIENT_SECRET. Even as placeholders, this encourages secret management by file and increases the risk of accidental real-secret commits. Recommend documenting secret storage via environment injection or a secret manager, and ensure no real values are ever committed.
- [3] (high) api/package.json: The API package has no real test command; 'npm test' only echoes 'No tests yet...'. Given the repository's known testing risk, this is a significant quality gap for an Azure Functions backend handling email/identity flows. Add unit tests for function handlers and integration tests for email request validation and error handling.
- [4] (high) api/src/util/email-helpers.js: The esc() helper escapes only a subset of HTML special characters and is only safe for HTML body content, not for attributes, URLs, or JavaScript contexts. If reused broadly, it can create a false sense of safety. Use context-specific encoding helpers and document strict usage boundaries.
- [5] (high) app/careers/page.tsx: Marks the entire careers page as a client component with "use client", which increases bundle size and shifts rendering work to the browser. If most of the page is static or SEO-relevant, prefer a server component and isolate only the interactive form/upload parts into a smaller client component.

# AI Fix Notes

Session: seq-1776662340982-xxqdol8x5
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: The example environment file contains real-looking operational values, including EMAIL_ENDPOINT and TEAM_INBOX_ADDRESS, and duplicated AZURE_TENANT_ID entries. Secrets and production identifiers should not be embedded in shared examples; replace them with clearly fake placeholders and document required variables separately.
- [2] (high) .env.example: AZURE_CLIENT_SECRET is represented in the example env file and should be treated as sensitive. Even in examples, ensure no real secret values are ever committed and add guidance to load secrets from a secure secret manager rather than checked-in files.
- [3] (high) api/src/index.js: The Azure Functions host is explicitly enabling HTTP streaming without any visible auth, input validation, or request hardening in this entrypoint. Ensure downstream HTTP functions enforce authentication/authorization and validate payloads, especially if stream handling is exposed to public endpoints.
- [4] (high) api/src/templates/template-2.js: This email template processes user-submitted fields (`name`, `phone`, `company`, `service`, `office`, `subject`, `message`) and relies on escaping helpers. This is a common XSS/email-injection risk area. Confirm that `esc` safely encodes HTML, attributes, and text contexts, and that `detailRow` does not interpolate raw input into HTML or headers. Also sanitize line breaks in fields used in email headers/body to prevent header injection.
- [5] (high) app/careers/page.tsx: "use client" at the page level makes the entire careers page a client-rendered bundle, which can increase JS payload, slow first paint, and reduce SEO/SSR benefits. Prefer a server component page with a small client-only form subcomponent.

