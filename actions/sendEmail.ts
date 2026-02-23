"use server";

import { validateString, getErrorMessage } from "@/lib/utils";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "RESEND_API_KEY is not configured",
    };
  }

  const safeSenderEmail = senderEmail.toString();
  const safeMessage = escapeHtml(message.toString());

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: "aniketmandloi900@gmail.com",
        subject: "Message from contact form",
        reply_to: safeSenderEmail,
        html: `<p>${safeMessage.replace(/\n/g, "<br />")}</p>`,
      }),
    });

    if (!response.ok) {
      const result = await response.text();
      return {
        error: `Email failed: ${result}`,
      };
    }

    const data = await response.json();
    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
