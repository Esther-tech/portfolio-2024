"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

const validInput = (value: unknown) => value && typeof value === "string";

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("sender");
  const message = formData.get("message");

  if (!validInput(message) || !validInput(sender)) {
    return {
      error: "Invalid input",
    };
  }

  const { data, error } = await resend.emails.send({
    from: "Portfolio contact <onboarding@resend.dev>",
    to: "esthersiebert94@gmail.com",
    reply_to: sender as string,
    subject: "Contact form",
    html: `<div><h1>A new message from the portfolio contact form</h1><p>Message: ${message}</p><p>Sender email: ${sender}</p></div>`,
  });

  return { data, error: error && error.message };
};
