import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/WhatsApp";
import { Mail, Send } from "lucide-react";
import { t, language } from "@/constants/translations";

export function ContactSection() {
  const whatsappNumber =
    language === "pt" ? "(51) 98357-8751" : "+5551983578751";
  const whatsappMessage =
    language === "pt"
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
            {t("contact.title")}
          </h2>
          <p className="text-lg text-horbach-100">{t("contact.description")}</p>
          <div className="w-20 h-1 bg-horbach-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-horbach-100 mb-1"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-horbach-300/20 rounded-lg focus:ring-2 focus:ring-horbach-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-horbach-100 mb-1"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-horbach-300/20 rounded-lg focus:ring-2 focus:ring-horbach-500 text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-horbach-100 mb-1"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-horbach-300/20 rounded-lg focus:ring-2 focus:ring-horbach-500 text-white"
                ></textarea>
              </div>

              <Button className="w-full bg-horbach-500 hover:bg-horbach-600 text-white py-6">
                {t("contact.form.submit")}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col justify-center space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-green-600 rounded-xl p-6 flex flex-col items-center text-center hover:bg-green-700 transition-colors shadow-lg">
              <WhatsappIcon className="h-16 w-16 mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-2">
                {t("contact.whatsapp")}
              </h3>
              <p className="text-green-100 mb-4">
                {/* Instantaneous response message */}
                {language === "pt"
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
                {t("contact.email")}
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
