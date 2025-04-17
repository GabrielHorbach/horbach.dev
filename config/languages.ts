export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];

export const defaultLocale: Locale = "pt";

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

// Map of language codes to our supported locales
export const languageCodeToLocale: Record<string, Locale> = {
  pt: "pt",
  "pt-BR": "pt",
  en: "en",
  "en-US": "en",
  "en-GB": "en",
};
