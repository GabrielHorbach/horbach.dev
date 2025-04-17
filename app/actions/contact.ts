"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(_: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const { error } = await resend.emails.send({
    from: "Horbach Dev <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: `Contato da Horbach Dev - ${name}`,
    html: `
      <h2>Contato da Horbach Dev</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return false;
  }

  return true;
}
