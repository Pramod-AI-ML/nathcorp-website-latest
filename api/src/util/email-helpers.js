/**
 * lib/email-helpers.js
 *
 * Shared utilities — no external dependencies, pure functions only.
 * Used by templates, function handlers, and the send layer.
 */

"use strict";

/**
 * Escapes user-supplied strings before HTML injection.
 * Prevents XSS in email bodies rendered by web clients.
 * @param {unknown} str
 * @returns {string}
 */
const esc = (str) =>
  String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;");

/**
 * Reusable Outlook/Word-engine-safe detail row.
 * Returns an empty string when value is falsy — row is omitted entirely.
 * @param {string} label
 * @param {string} value
 * @returns {string}
 */
const detailRow = (label, value) =>
  value
    ? `<tr>
        <td width="160" valign="top"
            style="padding-top:8px;padding-bottom:8px;padding-left:0;padding-right:12px;
                   border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;
                   font-size:13px;font-weight:bold;color:#374151;white-space:nowrap;">
          ${label}
        </td>
        <td valign="top"
            style="padding-top:8px;padding-bottom:8px;padding-left:0;padding-right:0;
                   border-bottom:1px solid #e5e7eb;font-family:Arial,sans-serif;
                   font-size:13px;color:#4b5563;word-break:break-word;">
          ${value}
        </td>
      </tr>`
    : "";

/**
 * Basic email format validation.
 * @param {unknown} email
 * @returns {boolean}
 */
const isValidEmail = (email) =>
  typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

/**
 * Structured JSON response — matches Azure Functions v4 response shape.
 * @param {number} status
 * @param {object} body
 */
const respond = (status, body) => ({
  status,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

/**
 * Centralised ACS error handler.
 * Maps known ACS error codes to appropriate HTTP responses.
 * Call inside every catch block after a sendEmail() call.
 *
 * @param {unknown} err          - The caught error
 * @param {object}  context      - Azure Functions context for logging
 * @param {string}  invocationId
 * @param {string}  [label]      - Short label for the log line e.g. "handleEmail"
 * @returns {object} Azure Functions HTTP response
 */
const handleAcsError = (err, context, invocationId, label = "fn") => {
  context.error(`[${invocationId}] [${label}] ACS send failed:`, err);
  if (err?.statusCode === 429) {
    return respond(429, { error: "Email service rate limit reached. Please retry shortly." });
  }
  return respond(502, { error: "Failed to send email. Please try again later." });
};

module.exports = { esc, detailRow, isValidEmail, respond, handleAcsError };