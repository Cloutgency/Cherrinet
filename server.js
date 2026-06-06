import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ override: true });

const app = express();
const port = Number(process.env.MAIL_SERVER_PORT || 3000);

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json());

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
if (missingVars.length > 0) {
  console.error(
    `Missing SMTP configuration: ${missingVars.join(", ")}. Please set the missing values in your environment or .env file.`
  );
}

console.log("Loaded SMTP config:", {
  smtpHost,
  smtpPort,
  smtpSecure,
  smtpUser,
  mailFrom,
  defaultRecipient,
});

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.post("/api/send-mail", async (req, res) => {
  const { to, subject, body, replyTo } = req.body;

  if (!subject || !body) {
    return res.status(400).json({ error: "Missing required fields: subject and body." });
  }

  const recipient = to || defaultRecipient;
  if (!recipient) {
    return res.status(500).json({ error: "No recipient configured." });
  }

  try {
    console.log("Sending mail", { recipient, subject, replyTo });
    const info = await transporter.sendMail({
      from: `"Cherrinet Website" <${mailFrom}>`,
      to: recipient,
      subject,
      text: body,
      html: body.replace(/\n/g, '<br>'),
      replyTo: replyTo || undefined,
    });

    console.log("Mail sent:", {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    res.json({
      success: true,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });
  } catch (error) {
    console.error("Mail send failed:", error);
    const message = error instanceof Error ? error.message : "Failed to send email.";
    res.status(500).json({ error: message });
  }
});

app.listen(port, () => {
  console.log(`Mail backend running on http://localhost:${port}`);
});
