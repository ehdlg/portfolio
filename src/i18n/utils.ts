export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui: Record<keyof typeof languages, Record<string, string>> = {
  es: {},
  en: {},
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
