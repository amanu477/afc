import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { z } from "zod";

const router: IRouter = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const RECIPIENT = "adulis@adulisfoodcomplex.com";

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    res.status(503).json({ error: "Email service is not configured" });
    return;
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Adulis Food Complex <adulis@adulisfoodcomplex.com>",
      to: RECIPIENT,
      reply_to: email,
      subject: `New Contact Form Message from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, ``, `Message:`, message].join("\n"),
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
            Sent via the contact form on adulisfoodcomplex.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(500).json({ error: "Failed to send email. Please try again." });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
