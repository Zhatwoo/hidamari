"use client";

import { useLanguage } from "@/app/components/shared/LanguageProvider";
import type { Locale } from "@/app/lib/i18n/types";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  const btn = (lang: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(lang)}
      className={
        locale === lang
          ? "px-2.5 py-1 rounded-md bg-primary text-paper-white font-label-md text-[11px] tracking-wide"
          : "px-2.5 py-1 rounded-md text-on-surface-variant hover:text-primary font-label-md text-[11px] tracking-wide transition-colors"
      }
      aria-pressed={locale === lang}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-0.5 p-0.5 rounded-lg border border-primary/15 bg-surface-container-low ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn("en", "EN")}
      {btn("ja", "JP")}
    </div>
  );
}
