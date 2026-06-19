import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const router: IRouter = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const RECIPIENT = "adulis@adulisfoodcomplex.com";

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, message } = parsed.data;
  const transporter = createTransporter();

  if (!transporter) {
    console.error("Email not configured: SMTP_HOST, SMTP_USER, or SMTP_PASS is missing");
    res.status(503).json({ error: "Email service is not configured" });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Adulis Food Complex Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#c26321;">New Message — Adulis Food Complex</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:bold;width:80px;">Name:</td>
              <td style="padding:8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;">Email:</td>
              <td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <hr style="border:1px solid #eee;margin:16px 0;" />
          <h4 style="color:#333;margin-bottom:8px;">Message:</h4>
          <p style="background:#f9f9f9;padding:16px;border-radius:8px;white-space:pre-wrap;">${message}</p>
          <p style="color:#999;font-size:12px;margin-top:24px;">
            This message was sent via the contact form on adulisfoodcomplex.com
          </p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
