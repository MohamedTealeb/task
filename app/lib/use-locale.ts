import { useState, useEffect } from "react";
import { getLocale, type Locale } from "./translation";

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(getLocale());

  const setLocale = (newLocale: Locale) => {
    // Update localStorage
    localStorage.setItem("locale", newLocale);
    
    // Update document language and direction
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    
    // Update state
    setLocaleState(newLocale);
    
    // Reload page to apply changes
    window.location.reload();
  };

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    setLocale(newLocale);
  };

  useEffect(() => {
    // Initialize from localStorage if available
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "ar" || savedLocale === "en")) {
      if (savedLocale !== locale) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  return { locale, setLocale, toggleLocale };
}
