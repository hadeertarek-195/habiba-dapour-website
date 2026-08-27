"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Language } from "../content/siteCopy";

type LanguageContextValue = {
  isArabic: boolean;
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLanguage = window.localStorage.getItem("habiba-language");

    return savedLanguage === "ar" || savedLanguage === "en"
      ? savedLanguage
      : "en";
  });

  useEffect(() => {
    const isArabic = language === "ar";

    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.dataset.language = language;
    window.localStorage.setItem("habiba-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      isArabic: language === "ar",
      language,
      toggleLanguage: () => {
        setLanguage((current) => (current === "en" ? "ar" : "en"));
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
