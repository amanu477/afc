import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function useContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;
      if (!accessKey) throw new Error("Contact form is not configured");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `New Contact Form Message from ${data.name}`,
          from_name: "Adulis Food Complex Website",
        }),
      });
      const json = await res.json() as { success: boolean; message?: string };
      if (!json.success) throw new Error(json.message ?? "Failed to send message");
      return json;
    },
  });
}
