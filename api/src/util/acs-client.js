/**
 * lib/acs-client.js
 *
 * Singleton ACS EmailClient instance shared across all function files.
 * Initialised once at process startup — reused on every warm invocation,
 * avoiding repeated credential lookups and TCP connection overhead.
 */

"use strict";

const { EmailClient }            = require("@azure/communication-email");
const { DefaultAzureCredential } = require("@azure/identity");

const EMAIL_ENDPOINT = process.env.EMAIL_ENDPOINT;
const SENDER_ADDRESS = process.env.EMAIL_SENDER_ADDRESS;

if (!EMAIL_ENDPOINT) throw new Error("Missing env var: EMAIL_ENDPOINT");
if (!SENDER_ADDRESS) throw new Error("Missing env var: EMAIL_SENDER_ADDRESS");

const acsClient = new EmailClient(EMAIL_ENDPOINT, new DefaultAzureCredential());

/**
 * Sends a single email via Azure Communication Services.
 *
 * @param {{ address: string, displayName?: string }} to
 * @param {{ subject: string, html: string, plainText: string }} template
 * @param {{ name: string, contentInBase64: string, contentType: string }[]} [attachments]
 * @returns {Promise<string>} ACS message ID
 * @throws On ACS failure — caller maps to HTTP error response
 */
async function sendEmail(to, template, attachments = []) {
  const message = {
    senderAddress: SENDER_ADDRESS,
    content: {
      subject:   template.subject,
      html:      template.html,
      plainText: template.plainText,
    },
    recipients: {
      to: [{ address: to.address, displayName: to.displayName ?? "" }],
    },
    // ACS rejects an empty attachments array — only include the key when needed
    ...(attachments.length > 0 && { attachments }),
  };

  const poller = await acsClient.beginSend(message);
  const result = await poller.pollUntilDone();
  return result.id;
}

module.exports = { sendEmail };