import { t } from "@/constants/translations";
import { Locale } from "@/config/languages";
import { Code, ShoppingCart, LayoutDashboard, Hammer } from "lucide-react";

interface ServicesSectionProps {
  lang: Locale;
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const services = [
    {
      icon: (
        <Code className="h-8 w-8 text-horbach-600 group-hover:text-white transition-colors" />
      ),
      title: t("service.web.title", lang),
      description: t("service.web.description", lang),
    },
    {
      icon: (
        <LayoutDashboard className="h-8 w-8 text-horbach-600 group-hover:text-white transition-colors" />
      ),
      title: t("service.app.title", lang),
      description: t("service.app.description", lang),
    },
    {
      icon: (
        <ShoppingCart className="h-8 w-8 text-horbach-600 group-hover:text-white transition-colors" />
      ),
      title: t("service.ecommerce.title", lang),
      description: t("service.ecommerce.description", lang),
    },
    {
      icon: (
        <Hammer className="h-8 w-8 text-horbach-600 group-hover:text-white transition-colors" />
      ),
      title: t("service.maintenance.title", lang),
      description: t("service.maintenance.description", lang),
    },
  ];

  return (
    <section id="services" className="py-20 bg-horbach-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            {t("services.title", lang)}
          </h2>
          <div className="w-20 h-1 bg-horbach-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg shadow-horbach-200/20 hover:shadow-xl transition-shadow group"
            >
              <div className="bg-horbach-100 p-4 rounded-lg inline-flex mb-6 group-hover:bg-horbach-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
