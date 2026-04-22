# AI Fix Notes

Session: seq-1776840341725-f6u09bcdo
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: Secrets and operational email endpoints are defined in a repo-tracked example file without clear separation of public vs private values. This increases the risk of accidental credential leakage and configuration confusion. Recommendation: keep only non-sensitive placeholders in .env.example, never real hostnames/emails if they reveal internal infrastructure, and ensure actual secrets are only in local/CI secret stores.
- [2] (critical) .env.example: AZURE_CLIENT_SECRET is present with a trailing space after the assignment, which can lead to subtle deployment/runtime misconfiguration and accidental exposure in copy-pasted environment files. Recommendation: remove whitespace, audit all environment variable handling, and validate env parsing at startup with fail-fast checks.
- [3] (critical) components/contact-form-modal.tsx: Client-side email handling is present via emailjs import and API endpoint usage. This is a common security and abuse-risk area: if credentials, service IDs, or public keys are embedded in the client bundle or validation/rate limiting is weak on the backing API, attackers can spam the endpoint, harvest usage, or trigger unwanted emails. Move sensitive email sending logic to a server-side route/function, enforce server-side validation, CAPTCHA/rate limiting, and ensure no secrets are exposed in the browser bundle.
- [4] (critical) Dockerfile: The production image copies the entire node_modules directory from the build stage without pruning devDependencies. This increases attack surface and image size. Recommendation: install production-only dependencies in the final image or use a multi-stage build that prunes dev packages before release.
- [5] (high) api/package.json: The API package lacks any real test command and therefore provides no automated verification for security-sensitive email/identity code. Given the repository's security risk profile, this is a major gap. Recommendation: add unit/integration tests for auth, email dispatch, and input validation; fail CI on test coverage regressions.

