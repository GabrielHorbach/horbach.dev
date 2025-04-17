"use client";

import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/WhatsApp";
import { Loader, Mail, Send } from "lucide-react";
import { t } from "@/constants/translations";
import { Locale } from "@/config/languages";
import { sendEmail } from "@/app/actions/contact";
import { useActionState } from "react";
interface ContactSectionProps {
  lang: Locale;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [sent, formAction, isPending] = useActionState(sendEmail, null);

  const whatsappNumber = "+5551983578751";
  const whatsappMessage =
    lang === "pt"
      ? "Olá! Gostaria de saber mais sobre os serviços da Horbach Dev."
      : "Hello! I would like to know more about Horbach Dev services.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-horbach-900 to-horbach-800 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            {t("contact.title", lang)}
          </h2>
          <p className="text-lg text-horbach-100">
            {t("contact.description", lang)}
          </p>
          <div className="w-20 h-1 bg-horbach-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
            <form id="contact-form" action={formAction} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-horbach-100 mb-1"
                >
                  {t("contact.form.name", lang)}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-horbach-300/20 rounded-lg focus:ring-2 focus:ring-horbach-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-horbach-100 mb-1"
                >
                  {t("contact.form.email", lang)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-horbach-300/20 rounded-lg focus:ring-2 focus:ring-horbach-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-horbach-100 mb-1"
                >
                  {t("contact.form.message", lang)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-horbach-300/20 rounded-lg focus:ring-2 focus:ring-horbach-500 text-white"
                ></textarea>
              </div>

              {!isPending && sent !== null && (
                <div
                  className={`p-4 rounded-lg ${
                    sent
                      ? "bg-green-500/20 text-green-200"
                      : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {sent
                    ? lang === "pt"
                      ? "Mensagem enviada com sucesso!"
                      : "Message sent successfully!"
                    : lang === "pt"
                      ? "Erro ao enviar mensagem. Por favor, tente novamente."
                      : "Error sending message. Please try again."}
                </div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-horbach-500 hover:bg-horbach-600 text-white py-6 disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    {lang === "pt" ? "Enviando..." : "Sending..."}
                    <Loader className="ml-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    {t("contact.form.submit", lang)}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col justify-center space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-green-600 rounded-xl p-6 flex flex-col items-center text-center hover:bg-green-700 transition-colors shadow-lg">
              <WhatsappIcon className="h-16 w-16 mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-2">
                {t("contact.whatsapp", lang)}
              </h3>
              <p className="text-green-100 mb-4">
                {lang === "pt"
                  ? "Resposta instantânea para suas dúvidas"
                  : "Instant response to your inquiries"}
              </p>
              <Button
                className="bg-white text-green-600 hover:bg-green-50"
                asChild
              >
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Email Option */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center border border-white/20">
              <div className="bg-horbach-500/30 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">
                {t("contact.email", lang)}
              </h3>
              <a
                href="mailto:gabrielhorbachmachado@outlook.com"
                className="text-horbach-200 hover:text-white transition-colors"
              >
                gabrielhorbachmachado@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
