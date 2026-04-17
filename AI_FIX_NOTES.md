# AI Fix Notes

Session: seq-1776410718236-ysal9695d
Repository: Pramod-AI-ML/nathcorp-website-latest

- [1] (critical) .env.example: Hard-coded real-looking email and organization addresses are exposed in an example env file. This increases phishing, spam, and information disclosure risk. Replace with clearly synthetic placeholders and document required values separately.
- [2] (high) .env.example: AZURE_CLIENT_SECRET is included in the example configuration format and should be treated as highly sensitive. Ensure secrets are never committed in any environment file that could be copied into production, and add clear guidance to load them only from secure secret storage.
- [3] (high) api/src/templates/template-2.js: Email template rendering uses interpolated user-supplied fields and depends on helper escaping (`esc`). This is a high-risk area for HTML injection if any field bypasses escaping or if helper behavior changes. Ensure every dynamic value is escaped for both HTML and plain-text outputs, and add tests for XSS-safe rendering.
- [4] (high) app/careers/page.tsx: Marks the entire careers page as a client component with 'use client'. This forces all nested UI, data handling, and rendering to ship to the browser, increasing bundle size and reducing SSR/SEO benefits. Consider splitting into a server component page plus a smaller client form subcomponent.
- [5] (high) app/services/active-directory/page.tsx: This page is marked as a client component while also importing `Metadata` from Next.js. In the App Router, metadata should be defined in a server component or separate metadata file. Mixing page content, SEO, and client-only animations reduces clarity and can cause framework misuse.

