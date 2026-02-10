import { useState, useEffect } from "react";
import { getLocale, type Locale } from "./translation";

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(getLocale());

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem("locale", newLocale);
    
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    
    setLocaleState(newLocale);
    
    window.location.reload();
  };

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    setLocale(newLocale);
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "ar" || savedLocale === "en")) {
      if (savedLocale !== locale) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  return { locale, setLocale, toggleLocale };
}
