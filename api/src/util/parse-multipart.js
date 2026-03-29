/**
 * lib/parse-multipart.js
 *
 * RFC 2046-compliant multipart/form-data parser for Azure Functions v4.
 *
 * Azure Functions v4 HttpRequest has no native formData() method, so we
 * parse the raw binary body manually using the boundary from Content-Type.
 *
 * Returns:
 *   fields — { [name]: string }          — all text fields
 *   files  — { [name]: FileEntry }       — all file parts
 *
 * @typedef {{ filename: string, contentType: string, buffer: Buffer }} FileEntry
 */

"use strict";

/**
 * @param {import("@azure/functions").HttpRequest} request
 * @returns {Promise<{ fields: Record<string, string>, files: Record<string, FileEntry> }>}
 * @throws {Error} when Content-Type boundary is missing or body cannot be parsed
 */
async function parseMultipart(request) {
  const contentType   = request.headers.get("content-type") ?? "";
  const boundaryMatch = contentType.match(/boundary=(.+)$/i);

  if (!boundaryMatch) {
    throw new Error("Missing multipart boundary in Content-Type header.");
  }

  const boundary      = boundaryMatch[1].trim();
  const rawBuffer     = Buffer.from(await request.arrayBuffer());
  const delimiter     = Buffer.from(`\r\n--${boundary}`);
  const firstBoundary = `--${boundary}`;

  const fields = {};
  const files  = {};

  // Advance past the opening boundary line
  let pos = rawBuffer.indexOf(firstBoundary) + firstBoundary.length;
  if (rawBuffer.slice(pos, pos + 2).toString() === "\r\n") pos += 2;

  while (pos < rawBuffer.length) {
    // Locate the end of this part (next delimiter)
    const partEnd = rawBuffer.indexOf(delimiter, pos);
    if (partEnd === -1) break;

    const part      = rawBuffer.slice(pos, partEnd);
    const headerEnd = part.indexOf("\r\n\r\n");

    // Skip malformed parts
    if (headerEnd === -1) {
      pos = partEnd + delimiter.length + 2;
      continue;
    }

    const headers    = part.slice(0, headerEnd).toString("utf8");
    const bodyBuffer = part.slice(headerEnd + 4); // skip the blank line

    // Every part must have Content-Disposition with a name attribute
    const nameMatch = headers.match(/Content-Disposition:[^\r\n]*;\s*name="([^"]+)"/i);
    if (!nameMatch) {
      pos = partEnd + delimiter.length + 2;
      continue;
    }

    const fieldName     = nameMatch[1];
    const filenameMatch = headers.match(/;\s*filename="([^"]+)"/i);
    const ctMatch       = headers.match(/Content-Type:\s*([^\r\n]+)/i);

    if (filenameMatch) {
      // File part — keep as raw Buffer for later base64 encoding
      files[fieldName] = {
        filename:    filenameMatch[1],
        contentType: ctMatch ? ctMatch[1].trim() : "application/octet-stream",
        buffer:      bodyBuffer,
      };
    } else {
      // Text field — strip the trailing \r\n that multipart appends
      fields[fieldName] = bodyBuffer.toString("utf8").replace(/\r\n$/, "");
    }

    // Move past this delimiter
    pos = partEnd + delimiter.length;

    // "--" immediately after the delimiter = closing boundary, we're done
    if (rawBuffer.slice(pos, pos + 2).toString() === "--") break;
    pos += 2; // skip \r\n between parts
  }

  return { fields, files };
}

module.exports = { parseMultipart };