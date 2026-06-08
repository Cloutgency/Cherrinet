import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ override: true });

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === "true";
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const mailFrom = process.env.MAIL_FROM || smtpUser;
const defaultRecipient = process.env.MAIL_TO;

const missingVars = [];
if (!smtpHost) missingVars.push("SMTP_HOST");
if (!smtpUser) missingVars.push("SMTP_USER");
if (!smtpPass) missingVars.push("SMTP_PASS");
if (!defaultRecipient) missingVars.push("MAIL_TO");

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
      headers: {
        "Allow": "POST",
      },
    };
  }

  if (missingVars.length > 0) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Missing SMTP configuration: ${missingVars.join(", ")}` }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON payload." }),
    };
  }

  const { to, subject, body, replyTo } = payload;

  if (!subject || !body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields: subject and body." }),
    };
  }

  const recipient = to || defaultRecipient;
  if (!recipient) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "No recipient configured." }),
    };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Cherrinet Website" <${mailFrom}>`,
      to: recipient,
      subject,
      text: body,
      html: body.replace(/\n/g, "<br>"),
      replyTo: replyTo || undefined,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
      }),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send email.";
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
}
