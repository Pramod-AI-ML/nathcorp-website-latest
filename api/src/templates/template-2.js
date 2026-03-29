/**
 * templates/template-2.js
 *
 * Template 2 — Customer acknowledgement
 * Triggered by: Contact Us form submission
 * Recipient:    The person who submitted the form
 *
 * Confirms receipt and summarises what was submitted.
 *
 * @param {object} data
 * @param {string} data.name
 * @param {string} [data.phone]
 * @param {string} [data.company]
 * @param {string} [data.service]
 * @param {string} [data.office]
 * @param {string} [data.subject]
 * @param {string} [data.message]
 * @returns {{ subject: string, html: string, plainText: string }}
 */

const { esc, detailRow } = require("../util/email-helpers");

function templateContactAcknowledgement({ name, phone = "", company = "", service = "", office = "", subject = "", message = "" }) {
  const safeName        = esc(name);
  const safePhone       = esc(phone);
  const safeCompany     = esc(company);
  const safeService     = esc(service);
  const safeOffice      = esc(office);
  const safeSubject     = esc(subject);
  const safeMessage     = esc(message);
  const safeMessageHtml = safeMessage.replace(/\n/g, "<br />");
  const year            = new Date().getFullYear();

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <title>We received your message</title>
  <!--[if mso]>
  <xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  <![endif]-->
  <style type="text/css">
    body, table, td, p, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; border-collapse:collapse; }
    img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  </style>
</head>
<!--[if mso]><body style="margin:0;padding:0;background-color:#f5f6fa;"><![endif]-->
<!--[if !mso]><!-->
<body style="margin:0;padding:0;background-color:#f5f6fa;font-family:Arial,sans-serif;">
<!--<![endif]-->

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background-color:#f5f6fa;margin:0;padding:0;">
  <tr>
    <td align="center"
        style="padding-top:40px;padding-bottom:40px;padding-left:16px;padding-right:16px;">

      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
             style="max-width:600px;width:100%;background-color:#ffffff;">

        <!-- HEADER -->
        <tr>
          <td bgcolor="#3b82f6"
              style="background-color:#3b82f6;padding-top:32px;padding-bottom:32px;
                     padding-left:40px;padding-right:40px;">
            <!--[if mso]>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td>
            <![endif]-->
            <h1 style="margin:0;font-family:Arial,sans-serif;font-size:22px;font-weight:bold;
                        color:#ffffff;line-height:1.3;">
              Thank you for reaching out
            </h1>
            <p style="margin-top:8px;margin-bottom:0;font-family:Arial,sans-serif;
                      font-size:14px;color:#bfdbfe;line-height:1.5;">
              We&#8217;ve received your message and will get back to you shortly.
            </p>
            <!--[if mso]></td></tr></table><![endif]-->
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding-top:32px;padding-bottom:32px;
                     padding-left:40px;padding-right:40px;">

            <p style="margin-top:0;margin-bottom:20px;font-family:Arial,sans-serif;
                      font-size:16px;color:#111827;line-height:1.5;">
              Hi ${safeName},
            </p>

            <p style="margin-top:0;margin-bottom:28px;font-family:Arial,sans-serif;
                      font-size:14px;color:#4b5563;line-height:1.6;">
              Thanks for contacting us. Here&#8217;s a summary of the information you submitted.
              A member of our team will review your enquiry and follow up as soon as possible.
            </p>

            <!-- Submission summary -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#f9fafb;border:1px solid #e5e7eb;margin-bottom:28px;">
              <tr>
                <td style="padding-top:16px;padding-bottom:4px;
                           padding-left:24px;padding-right:24px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;
                             color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
                    Submission Details
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:8px;padding-bottom:16px;
                           padding-left:24px;padding-right:24px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    ${detailRow("Phone",            safePhone)}
                    ${detailRow("Company",          safeCompany)}
                    ${detailRow("Service",          safeService)}
                    ${detailRow("Preferred Office", safeOffice)}
                    ${detailRow("Subject",          safeSubject)}
                  </table>
                </td>
              </tr>
            </table>

            <!-- Message -->
            ${safeMessage ? `
            <p style="margin-top:0;margin-bottom:8px;font-family:Arial,sans-serif;
                      font-size:13px;font-weight:bold;color:#374151;">
              Your Message
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="margin-bottom:28px;">
              <tr>
                <td width="3" bgcolor="#3b82f6"
                    style="background-color:#3b82f6;width:3px;">&nbsp;</td>
                <td style="background-color:#f9fafb;padding-top:14px;padding-bottom:14px;
                           padding-left:18px;padding-right:18px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;
                            color:#374151;line-height:1.6;">
                    ${safeMessageHtml}
                  </p>
                </td>
              </tr>
            </table>
            ` : ""}

            <p style="margin-top:0;margin-bottom:0;font-family:Arial,sans-serif;
                      font-size:13px;color:#6b7280;line-height:1.6;">
              If you didn&#8217;t submit this form or believe this email was sent in error,
              please disregard it or contact our support team.
            </p>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f9fafb"
              style="background-color:#f9fafb;border-top:1px solid #e5e7eb;
                     padding-top:20px;padding-bottom:20px;
                     padding-left:40px;padding-right:40px;
                     text-align:center;font-family:Arial,sans-serif;
                     font-size:12px;color:#9ca3af;line-height:1.5;">
            &copy; ${year} Your Company Name. All rights reserved.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>

</body>
</html>`;

  const plainText = [
    `Hi ${name},`,
    ``,
    `Thank you for contacting us. We've received your message and will be in touch shortly.`,
    ``,
    `── Submission Details ──────────────────`,
    phone    ? `Phone:            ${phone}`    : null,
    company  ? `Company:          ${company}`  : null,
    service  ? `Service:          ${service}`  : null,
    office   ? `Preferred Office: ${office}`   : null,
    subject  ? `Subject:          ${subject}`  : null,
    `────────────────────────────────────────`,
    message  ? `\nYour Message:\n${message}\n` : null,
    `If you didn't submit this form, please disregard this email.`,
    ``,
    `© ${year} Your Company Name`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return {
    subject:   "We've received your message",
    html,
    plainText,
  };
}

module.exports = { templateContactAcknowledgement };