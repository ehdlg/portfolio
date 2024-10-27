import en from "@i18n/locales/en/_export";
import es from "@i18n/locales/es/_export";

export const languages: Record<keyof typeof ui, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
};
export const defaultLang = "es";
export const ui = {
  es,
  en,
};
