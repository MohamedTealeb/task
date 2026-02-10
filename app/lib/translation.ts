import ar from "../../translation/ar.json";
import en from "../../translation/en.json";

const translations = {
  ar,
  en,
} as const;

export type Locale = keyof typeof translations;
type Translation = (typeof translations)["en"];

export function getLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLocale = localStorage.getItem("locale");
  if (savedLocale === "ar" || savedLocale === "en") {
    return savedLocale;
  }

  const htmlLang = document.documentElement.lang?.toLowerCase() || "";
  const navLang = navigator.language?.toLowerCase() || "";
  const lang = htmlLang || navLang || "en";

  if (lang.startsWith("ar")) {
    return "ar";
  }

  return "en";
}

export function getTranslations(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
