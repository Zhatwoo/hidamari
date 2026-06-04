import type { Locale } from "@/app/lib/i18n/types";
import { translations } from "@/app/lib/i18n/translations";

export function getTranslation(locale: Locale, path: string): string {
  const keys = path.split(".");
  let value: unknown = translations[locale];

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof value === "string" ? value : path;
}
