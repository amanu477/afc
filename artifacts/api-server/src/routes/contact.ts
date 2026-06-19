import { Router, type IRouter } from "express";
import { z } from "zod";

const router: IRouter = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set");
    res.status(503).json({ error: "Email service is not configured" });
    return;
  }

  const { name, email, message } = parsed.data;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `New Contact Form Message from ${name}`,
        from_name: "Adulis Food Complex Website",
      }),
    });

    const data = await response.json() as { success: boolean; message?: string };

    if (!data.success) {
      console.error("Web3Forms error:", data.message);
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
