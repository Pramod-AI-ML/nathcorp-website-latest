/**
 * handleEmail.js
 *
 * Azure Function — POST /api/handleEmail
 * Handles Contact Us form submissions.
 *
 * Sends TWO emails in parallel:
 *   Template 1 → Support team inbox   (full enquiry details)
 *   Template 2 → Customer             (acknowledgement + submission summary)
 *
 * Accepts: application/json
 * Body:
 * {
 *   name     : string  (required)
 *   email    : string  (required)
 *   phone?   : string
 *   company? : string
 *   service? : string
 *   office?  : string
 *   subject? : string
 *   message? : string
 * }
 */

"use strict";

const { app } = require("@azure/functions");

const { sendEmail }                      = require("../util/acs-client");
const { isValidEmail, respond,
        handleAcsError }                 = require("../util/email-helpers");
const { templateInternalNotification }   = require("../templates/template-1");
const { templateContactAcknowledgement } = require("../templates/template-2");

// ─── Config ───────────────────────────────────────────────────────────────────

const TEAM_INBOX = process.env.TEAM_INBOX_ADDRESS;
if (!TEAM_INBOX) throw new Error("Missing env var: TEAM_INBOX_ADDRESS");

// ─── Function registration ────────────────────────────────────────────────────

app.http("handleEmail", {
  methods:   ["POST"],
  authLevel: "anonymous",
  route:     "handleEmail",
  handler: async (request, context) => {
    const id = context.invocationId;
    context.log(`[${id}] POST /handleEmail`);

    // 1. Parse ────────────────────────────────────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      context.warn(`[${id}] Invalid JSON body`);
      return respond(400, { error: "Request body must be valid JSON." });
    }

    // 2. Validate ─────────────────────────────────────────────────────────────
    const {
      name    = "",
      email   = "",
      phone   = "",
      company = "",
      service = "",
      office  = "",
      subject = "",
      message = "",
    } = body;

    if (!name.trim())         return respond(400, { error: "Field 'name' is required." });
    if (!isValidEmail(email)) return respond(400, { error: "Field 'email' is missing or invalid." });

    const fields = {
      name:    name.trim(),
      email:   email.trim(),
      phone, company, service, office, subject, message,
    };

    context.log(`[${id}] Dispatching to team inbox + ${fields.email}`);

    // 3. Send T1 (team) + T2 (customer) in parallel ───────────────────────────
    try {
      const [internalId, customerId] = await Promise.all([
        sendEmail(
          { address: TEAM_INBOX, displayName: "Support Team" },
          templateInternalNotification(fields)
        ),
        sendEmail(
          { address: fields.email, displayName: fields.name },
          templateContactAcknowledgement(fields)
        ),
      ]);

      context.log(`[${id}] Done — internal:${internalId}  customer:${customerId}`);

      return respond(200, {
        success:    true,
        message:    "Emails sent successfully.",
        messageIds: { internal: internalId, customer: customerId },
      });

    } catch (err) {
      return handleAcsError(err, context, id, "handleEmail");
    }
  },
});