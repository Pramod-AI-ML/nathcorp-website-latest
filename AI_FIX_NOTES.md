# AI Fix Notes

Session: seq-1777357399790-r45aqvzug
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: AZURE_CLIENT_SECRET is shown as an empty placeholder in a checked-in example file, which is acceptable only if it remains non-sensitive. However, the presence of duplicate AZURE_TENANT_ID entries and a TODO comment referencing secret handling suggests incomplete secret management guidance. Add explicit instructions to use a secrets manager and ensure no real credentials are ever committed.
- [2] (critical) components/contact-form-modal.tsx: Client-side email sending via EmailJS is a high-risk pattern unless strictly validated and rate-limited server-side. It can expose abuse vectors (spam, automated submission) and may leak service configuration. Prefer a server-side API route/function with input validation, authentication/anti-abuse controls, and secrets kept only on the server.
- [3] (critical) components/contact-form.tsx: Client-side email submission using EmailJS/API endpoint indicates potential exposure of email workflow details in the browser. If credentials, service IDs, or public endpoints are embedded or weakly controlled, this can be abused for spam or email-bombing. Ensure no secret keys are shipped to the client, add server-side validation, rate limiting, CAPTCHA, and abuse throttling.
- [4] (critical) components/ContactServiceModal.tsx: This modal appears to handle direct email/contact submission from the client. Any client-triggered email flow is high risk for abuse unless the backend strictly validates input and enforces authentication/rate limits. Verify that only public-safe configuration is used on the client and that server-side protections exist.
- [5] (high) api/package.json: The `test` script is a placeholder (`echo "No tests yet..."`), indicating no automated test coverage for the API. This is a major maintainability and regression-risk issue, especially for email/identity-related functionality.

# AI Fix Notes

Session: seq-1776662340982-xxqdol8x5
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: The example environment file contains real-looking operational values, including EMAIL_ENDPOINT and TEAM_INBOX_ADDRESS, and duplicated AZURE_TENANT_ID entries. Secrets and production identifiers should not be embedded in shared examples; replace them with clearly fake placeholders and document required variables separately.
- [2] (high) .env.example: AZURE_CLIENT_SECRET is represented in the example env file and should be treated as sensitive. Even in examples, ensure no real secret values are ever committed and add guidance to load secrets from a secure secret manager rather than checked-in files.
- [3] (high) api/src/index.js: The Azure Functions host is explicitly enabling HTTP streaming without any visible auth, input validation, or request hardening in this entrypoint. Ensure downstream HTTP functions enforce authentication/authorization and validate payloads, especially if stream handling is exposed to public endpoints.
- [4] (high) api/src/templates/template-2.js: This email template processes user-submitted fields (`name`, `phone`, `company`, `service`, `office`, `subject`, `message`) and relies on escaping helpers. This is a common XSS/email-injection risk area. Confirm that `esc` safely encodes HTML, attributes, and text contexts, and that `detailRow` does not interpolate raw input into HTML or headers. Also sanitize line breaks in fields used in email headers/body to prevent header injection.
- [5] (high) app/careers/page.tsx: "use client" at the page level makes the entire careers page a client-rendered bundle, which can increase JS payload, slow first paint, and reduce SEO/SSR benefits. Prefer a server component page with a small client-only form subcomponent.

