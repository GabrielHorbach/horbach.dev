import { t } from "@/constants/translations";
import { Locale } from "@/config/languages";
import { Globe } from "lucide-react";
import Image from "next/image";

interface AboutSectionProps {
  lang: Locale;
}

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                alt="Team working together"
                className="w-full h-auto object-cover"
                width={1350}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-horbach-900/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-horbach-500 rounded-2xl -z-10"></div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-horbach-100 rounded-full text-horbach-800 font-medium mb-2">
              Horbach Dev
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">
              {t("about.title", lang)}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("about.description", lang)}
            </p>

            <div className="flex items-center gap-4 mt-8 p-4 bg-horbach-50 border border-horbach-100 rounded-lg">
              <div className="bg-white p-3 rounded-full shadow-md">
                <Globe className="h-6 w-6 text-horbach-600" />
              </div>
              <p className="font-medium text-gray-800">
                {t("about.international", lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
