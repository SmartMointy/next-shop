import { locales } from "@/i18n";

export default function generateAlternates(path: string) {
  const hrefLang = {} as any;

  locales.forEach((locale) => {
    hrefLang[locale] = locale + path;
  });

  return {
    canonical: path,
    languages: hrefLang,
  };
}
