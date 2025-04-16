import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { t } from "@/constants/translations";

export function HeroSection() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-white to-horbach-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-horbach-900 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="pt-4">
              <Button
                className="bg-horbach-700 hover:bg-horbach-800 text-white rounded-lg py-6 px-8 font-medium text-lg shadow-lg shadow-horbach-500/20 hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <div className="aspect-video bg-gradient-to-br from-horbach-600 to-horbach-800 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-horbach-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-100"></div>
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-horbach-100 rounded-full blur-3xl opacity-70 -z-10"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-horbach-200 rounded-full blur-2xl opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
