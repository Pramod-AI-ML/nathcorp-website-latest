/**
 * templates/template-3.js
 *
 * Template 3 — Career application acknowledgement
 * Triggered by: Submit Your Resume form (career page)
 * Recipient:    The job applicant
 *
 * Confirms receipt of their resume and sets next-step expectations.
 *
 * @param {object} data
 * @param {string} data.firstName
 * @param {string} data.lastName
 * @param {string} [data.linkedIn]
 * @param {string} [data.portfolio]
 * @param {string} [data.coverLetter]
 * @param {string} [data.resumeFileName]
 * @returns {{ subject: string, html: string, plainText: string }}
 */

const { esc, detailRow } = require("../util/email-helpers");

function templateCareerAcknowledgement({ firstName, lastName, linkedIn = "", portfolio = "", coverLetter = "", resumeFileName = "" }) {
  const safeFirst       = esc(firstName);
  const safeLast        = esc(lastName);
  const safeLinkedIn    = esc(linkedIn);
  const safePortfolio   = esc(portfolio);
  const safeCover       = esc(coverLetter);
  const safeResume      = esc(resumeFileName);
  const safeCoverHtml   = safeCover.replace(/\n/g, "<br />");
  const fullName        = `${safeFirst} ${safeLast}`.trim();
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
  <title>Application Received</title>
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
          <td bgcolor="#1d4ed8"
              style="background-color:#1d4ed8;padding-top:32px;padding-bottom:32px;
                     padding-left:40px;padding-right:40px;">
            <!--[if mso]>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td>
            <![endif]-->
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;
                      color:#93c5fd;text-transform:uppercase;letter-spacing:0.08em;">
              Application Received
            </p>
            <h1 style="margin-top:6px;margin-bottom:0;font-family:Arial,sans-serif;font-size:22px;
                        font-weight:bold;color:#ffffff;line-height:1.3;">
              Thanks for applying, ${safeFirst}!
            </h1>
            <p style="margin-top:8px;margin-bottom:0;font-family:Arial,sans-serif;
                      font-size:14px;color:#bfdbfe;line-height:1.5;">
              We&#8217;ve received your resume and will be in touch soon.
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
              Hi ${safeFirst},
            </p>

            <p style="margin-top:0;margin-bottom:28px;font-family:Arial,sans-serif;
                      font-size:14px;color:#4b5563;line-height:1.6;">
              Thank you for your interest in joining our team. We&#8217;ve successfully received
              your application and our recruitment team will review it carefully.
              If your profile matches an open opportunity, we&#8217;ll be in touch to discuss next steps.
            </p>

            <!-- Application summary -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#f9fafb;border:1px solid #e5e7eb;margin-bottom:28px;">
              <tr>
                <td style="padding-top:16px;padding-bottom:4px;
                           padding-left:24px;padding-right:24px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;
                             color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">
                    Application Summary
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding-top:8px;padding-bottom:16px;
                           padding-left:24px;padding-right:24px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    ${detailRow("Full Name",  fullName)}
                    ${detailRow("Resume",     safeResume)}
                    ${detailRow("LinkedIn",   safeLinkedIn)}
                    ${detailRow("Portfolio",  safePortfolio)}
                  </table>
                </td>
              </tr>
            </table>

            <!-- Cover letter -->
            ${safeCover ? `
            <p style="margin-top:0;margin-bottom:8px;font-family:Arial,sans-serif;
                      font-size:13px;font-weight:bold;color:#374151;">
              Your Cover Letter
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="margin-bottom:28px;">
              <tr>
                <td width="3" bgcolor="#1d4ed8"
                    style="background-color:#1d4ed8;width:3px;">&nbsp;</td>
                <td style="background-color:#f9fafb;padding-top:14px;padding-bottom:14px;
                           padding-left:18px;padding-right:18px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;
                            color:#374151;line-height:1.6;">
                    ${safeCoverHtml}
                  </p>
                </td>
              </tr>
            </table>
            ` : ""}

            <!-- What happens next -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#eff6ff;border:1px solid #bfdbfe;margin-bottom:28px;">
              <tr>
                <td style="padding-top:16px;padding-bottom:16px;
                           padding-left:24px;padding-right:24px;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;
                             color:#1e40af;margin-bottom:10px;">
                    What happens next?
                  </p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;
                             color:#374151;line-height:1.7;">
                    1. Our team reviews all applications within <strong>5&#8211;7 business days</strong>.<br />
                    2. If shortlisted, a recruiter will reach out to schedule an initial call.<br />
                    3. We keep your details on file for future openings that match your profile.
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin-top:0;margin-bottom:0;font-family:Arial,sans-serif;
                      font-size:13px;color:#6b7280;line-height:1.6;">
              If you did not submit this application or believe this email was sent in error,
              please disregard it.
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
    `Hi ${firstName},`,
    ``,
    `Thank you for applying! We've received your resume and our recruitment team will review it shortly.`,
    ``,
    `── Application Summary ─────────────────`,
    `Full Name:  ${firstName} ${lastName}`,
    resumeFileName ? `Resume:     ${resumeFileName}` : null,
    linkedIn       ? `LinkedIn:   ${linkedIn}`        : null,
    portfolio      ? `Portfolio:  ${portfolio}`        : null,
    `────────────────────────────────────────`,
    coverLetter    ? `\nYour Cover Letter:\n${coverLetter}\n` : null,
    `What happens next?`,
    `1. Our team reviews all applications within 5-7 business days.`,
    `2. If shortlisted, a recruiter will reach out to schedule a call.`,
    `3. We keep your details on file for future matching openings.`,
    ``,
    `© ${year} Your Company Name`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return {
    subject:   `We've received your application, ${firstName}!`,
    html,
    plainText,
  };
}

module.exports = { templateCareerAcknowledgement };