"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/app/components/shared/LanguageSwitcher";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

type SiteHeaderProps = {
  active: "home" | "lunch" | "dinner" | "menu" | "access";
};

const navKeys = [
  { key: "home", href: "/" },
  { key: "lunch", href: "/lunch" },
  { key: "dinner", href: "/dinner" },
  { key: "menu", href: "/menu" },
  { key: "access", href: "/access" },
] as const;

export function SiteHeader({ active }: SiteHeaderProps) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-paper-white/85 backdrop-blur-md shadow-sm">
      <nav className="relative flex justify-between items-center px-6 md:px-margin-desktop h-16 md:h-20 max-w-7xl mx-auto w-full gap-4">
        <Link href="/" className="flex items-center shrink-0 min-w-0">
          <Image
            src="/logo_hidamari-removebg-preview.png"
            alt={t("common.logoAlt")}
            width={250}
            height={250}
            className="object-contain object-left h-12 md:h-20 w-auto max-h-20 shrink-0"
            priority
          />
          <span className="hidden md:inline-block font-headline-lg text-headline-lg text-primary tracking-tight -ml-3">
            Hidamari
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navKeys.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                item.key === active
                  ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
                  : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
              }
            >
              {t(`common.nav.${item.key}`)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-primary/20 bg-paper-white w-11 h-11 text-primary shadow-sm hover:bg-primary/5 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="flex h-4 w-4 flex-col justify-between">
              <span className="block h-[2px] w-full rounded-full bg-primary" />
              <span className="block h-[2px] w-full rounded-full bg-primary" />
              <span className="block h-[2px] w-full rounded-full bg-primary" />
            </span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute right-6 top-20 w-[calc(100vw-2rem)] max-w-xs rounded-3xl border border-primary/10 bg-paper-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-3">
              {navKeys.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    item.key === active
                      ? "block rounded-2xl bg-primary/5 px-4 py-3 text-primary font-semibold"
                      : "block rounded-2xl px-4 py-3 text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-colors"
                  }
                >
                  {t(`common.nav.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
