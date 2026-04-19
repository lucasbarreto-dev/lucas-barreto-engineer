import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { translations, type Lang, type Dictionary } from "./translations";

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T = string>(path: string) => T;
  dict: Dictionary;
}

const STORAGE_KEY = "site-lang";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const detectInitialLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === "en" || stored === "pt-BR") return stored;
  const nav = window.navigator.language || "";
  return nav.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const dict = translations[lang];

  const t = useCallback(
    <T = string,>(path: string): T => {
      const parts = path.split(".");
      let cur: unknown = dict;
      for (const p of parts) {
        if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
          cur = (cur as Record<string, unknown>)[p];
        } else {
          return path as unknown as T;
        }
      }
      return cur as T;
    },
    [dict]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
};
