import { t, language } from "@/constants/translations";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-horbach-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 bg-gradient-to-r from-horbach-300 to-horbach-500 bg-clip-text text-transparent">
              Horbach Dev
            </h3>
            <p className="text-horbach-200 mb-4">
              {language === "pt"
                ? "Transformando ideias em experiências digitais excepcionais."
                : "Transforming ideas into exceptional digital experiences."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-horbach-100">
              {language === "pt" ? "Links Rápidos" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-horbach-300 hover:text-white transition-colors"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-horbach-300 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-horbach-300 hover:text-white transition-colors"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-horbach-300 hover:text-white transition-colors"
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-horbach-300 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-lg mb-4 text-horbach-100">
              {language === "pt" ? "Contato" : "Contact"}
            </h4>
            <div className="space-y-3">
              <p className="text-horbach-300">
                <span className="block text-horbach-100">Email:</span>
                gabrielhorbachmachado@outlook.com
              </p>
              <p className="text-horbach-300">
                <span className="block text-horbach-100">WhatsApp:</span>
                +55 (51) 98357-8751
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-horbach-800 mt-8 pt-8 text-center text-horbach-400">
          <p>
            © {currentYear} Horbach Dev. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
