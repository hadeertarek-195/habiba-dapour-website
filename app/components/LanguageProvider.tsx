"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

import type { Language } from "../content/siteContent";

type LanguageContextValue = {
  isArabic: boolean;
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage: Language }) {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    const isArabic = language === "ar";

    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.dataset.language = language;
    window.localStorage.setItem("habiba-language", language);
    document.cookie = `habiba-language=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language]);

  const value = useMemo(
    () => ({
      isArabic: language === "ar",
      language,
      toggleLanguage: () => {
        const next = language === "en" ? "ar" : "en";
        document.cookie = `habiba-language=${next}; path=/; max-age=31536000; SameSite=Lax`;
        setLanguage(next);
        startTransition(() => router.refresh());
      },
    }),
    [language, router],
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
