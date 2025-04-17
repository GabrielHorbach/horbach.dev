"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { t } from "@/constants/translations";
import { Locale } from "@/config/languages";
import Link from "next/link";

interface NavbarProps {
  lang: Locale;
}

export function Navbar({ lang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center">
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-horbach-800 to-horbach-500 bg-clip-text text-transparent">
                Horbach Dev
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}#home`}
              className="font-medium text-gray-700 hover:text-horbach-700 transition-colors"
            >
              {t("nav.home", lang)}
            </Link>
            <Link
              href={`/${lang}#about`}
              className="font-medium text-gray-700 hover:text-horbach-700 transition-colors"
            >
              {t("nav.about", lang)}
            </Link>
            <Link
              href={`/${lang}#services`}
              className="font-medium text-gray-700 hover:text-horbach-700 transition-colors"
            >
              {t("nav.services", lang)}
            </Link>
            <Link
              href={`/${lang}#projects`}
              className="font-medium text-gray-700 hover:text-horbach-700 transition-colors"
            >
              {t("nav.projects", lang)}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="font-medium text-gray-700 hover:text-horbach-700 transition-colors"
            >
              {t("nav.contact", lang)}
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                // onClick={() => setLanguage("pt")}
                className={`px-2 py-1 text-sm rounded-md ${
                  lang === "pt"
                    ? "bg-horbach-100 text-horbach-800 font-medium"
                    : "text-gray-600 hover:bg-gray-100 bg-transparent"
                }`}
              >
                PT
              </Button>
              <Button
                // onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-sm rounded-md ${
                  lang === "en"
                    ? "bg-horbach-100 text-horbach-800 font-medium"
                    : "text-gray-600 hover:bg-gray-100 bg-transparent"
                }`}
              >
                EN
              </Button>
            </div>
          </div>

          {/* Mobile menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-horbach-700 focus:outline-none bg-transparent hover:bg-transparent"
            >
              {mobileMenuOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} className="bg-transparent" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href={`/${lang}#home`}
              className="block font-medium text-gray-700 hover:text-horbach-700 py-2"
            >
              {t("nav.home", lang)}
            </Link>
            <Link
              href={`/${lang}#about`}
              className="block font-medium text-gray-700 hover:text-horbach-700 py-2"
            >
              {t("nav.about", lang)}
            </Link>
            <Link
              href={`/${lang}#services`}
              className="block font-medium text-gray-700 hover:text-horbach-700 py-2"
            >
              {t("nav.services", lang)}
            </Link>
            <Link
              href={`/${lang}#projects`}
              className="block font-medium text-gray-700 hover:text-horbach-700 py-2"
            >
              {t("nav.projects", lang)}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="block font-medium text-gray-700 hover:text-horbach-700 py-2"
            >
              {t("nav.contact", lang)}
            </Link>

            {/* Language Toggle for Mobile */}
            <div className="flex items-center space-x-2 pt-2">
              <Button
                // onClick={() => setLanguage("pt")}
                className={`px-3 py-1 text-sm rounded-md ${
                  lang === "pt"
                    ? "bg-horbach-100 text-horbach-800 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                PT
              </Button>
              <Button
                // onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-sm rounded-md ${
                  lang === "en"
                    ? "bg-horbach-100 text-horbach-800 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                EN
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
