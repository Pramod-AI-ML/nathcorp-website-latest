/**
 * submitResume.js
 *
 * Azure Function — POST /api/submitResume
 * Handles career page resume submissions.
 *
 * Sends TWO emails in parallel:
 *   Template 3 → Candidate   (clean acknowledgement, no attachment)
 *   Template 4 → HR inbox    (full applicant details + resume attached)
 *
 * Accepts: multipart/form-data
 * Fields:
 * {
 *   firstName    : string  (required)
 *   lastName     : string  (required)
 *   email        : string  (required)
 *   phone?       : string
 *   coverLetter? : string
 *   linkedIn?    : string
 *   portfolio?   : string
 *   resume       : File    (required — PDF, DOC or DOCX, max 10 MB)
 * }
 */

"use strict";

const { app } = require("@azure/functions");
const path    = require("path");

const { sendEmail }                    = require("../util/acs-client");
const { parseMultipart }               = require("../util/parse-multipart");
const { isValidEmail, respond,
        handleAcsError }               = require("../util/email-helpers");
const { templateCareerAcknowledgement } = require("../templates/template-3");
const { templateHRNotification }        = require("../templates/template-4");

// ─── Config ───────────────────────────────────────────────────────────────────

const HR_INBOX = process.env.HR_INBOX_ADDRESS;
if (!HR_INBOX) throw new Error("Missing env var: HR_INBOX_ADDRESS");

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

// Keyed by lowercase extension — validate by extension, not browser MIME type
// (browser-supplied MIME types are untrustworthy and inconsistent across OS)
const ALLOWED_MIME_TYPES = {
  ".pdf":  "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".doc":  "application/msword",
};

// ─── Function registration ────────────────────────────────────────────────────

app.http("submitResume", {
  methods:   ["POST"],
  authLevel: "anonymous",
  route:     "submitResume",
  handler: async (request, context) => {
    const id = context.invocationId;
    context.log(`[${id}] POST /submitResume`);

    // 1. Parse multipart/form-data ────────────────────────────────────────────
    let fields, files;
    try {
      ({ fields, files } = await parseMultipart(request));
    } catch (err) {
      context.warn(`[${id}] Multipart parse error: ${err.message}`);
      return respond(400, { error: `Could not parse form data: ${err.message}` });
    }

    // 2. Extract and trim all text fields ─────────────────────────────────────
    const firstName   = (fields.firstName   ?? "").trim();
    const lastName    = (fields.lastName    ?? "").trim();
    const email       = (fields.email       ?? "").trim();
    const phone       = (fields.phone       ?? "").trim();
    const coverLetter = (fields.coverLetter ?? "").trim();
    const linkedIn    = (fields.linkedIn    ?? "").trim();
    const portfolio   = (fields.portfolio   ?? "").trim();
    const resumeFile  = files.resume; // { filename, contentType, buffer } | undefined

    // 3. Validate ─────────────────────────────────────────────────────────────
    if (!firstName)           return respond(400, { error: "Field 'firstName' is required." });
    if (!lastName)            return respond(400, { error: "Field 'lastName' is required." });
    if (!isValidEmail(email)) return respond(400, { error: "Field 'email' is missing or invalid." });
    if (!resumeFile)          return respond(400, { error: "A resume file is required." });

    const ext      = path.extname(resumeFile.filename).toLowerCase();
    const mimeType = ALLOWED_MIME_TYPES[ext];

    if (!mimeType) {
      return respond(400, { error: "Resume must be a PDF, DOC, or DOCX file." });
    }
    if (resumeFile.buffer.length > MAX_FILE_SIZE_BYTES) {
      return respond(400, { error: "Resume file must not exceed 10 MB." });
    }

    context.log(`[${id}] Resume: "${resumeFile.filename}" (${resumeFile.buffer.length} bytes) — ack → ${email}, HR copy → ${HR_INBOX}`);

    // 4. Build ACS attachment ─────────────────────────────────────────────────
    // ACS requires base64-encoded content. Buffer.toString("base64") is zero-copy
    // on Node.js — no intermediate file write or stream needed.
    const attachment = {
      name:            resumeFile.filename,
      contentType:     mimeType,
      contentInBase64: resumeFile.buffer.toString("base64"),
    };

    const applicantFields = {
      firstName, lastName, email, phone,
      linkedIn, portfolio, coverLetter,
      resumeFileName: resumeFile.filename,
    };

    // 5. Send T3 (candidate) + T4 (HR + attachment) in parallel ───────────────
    try {
      const [candidateId, hrId] = await Promise.all([
        // Template 3 — candidate receives a clean acknowledgement only
        sendEmail(
          { address: email, displayName: `${firstName} ${lastName}` },
          templateCareerAcknowledgement(applicantFields)
        ),
        // Template 4 — HR receives full details with the resume attached
        sendEmail(
          { address: HR_INBOX, displayName: "HR Team" },
          templateHRNotification(applicantFields),
          [attachment]
        ),
      ]);

      context.log(`[${id}] Done — candidate:${candidateId}  hr:${hrId}`);

      return respond(200, {
        success:    true,
        message:    "Application received. A confirmation email has been sent.",
        messageIds: { candidate: candidateId, hr: hrId },
      });

    } catch (err) {
      return handleAcsError(err, context, id, "submitResume");
    }
  },
});