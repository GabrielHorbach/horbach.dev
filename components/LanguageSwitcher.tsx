"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, Locale } from "@/config/languages";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current language from path
  const currentLang = pathname.split("/")[1] as Locale;

  const handleLanguageChange = (newLocale: Locale) => {
    // Replace the current locale in the path with the new one
    const newPath = pathname.replace(`/${currentLang}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      {locales.map((locale) => (
        <Button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`px-2 py-1 text-sm rounded-md ${
            locale === currentLang
              ? "bg-horbach-100 text-horbach-800 font-medium"
              : "text-gray-600 hover:bg-gray-100 bg-transparent"
          }`}
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
