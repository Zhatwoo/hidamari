"use client";

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

  return (
    <header className="fixed top-0 w-full z-50 bg-paper-white/85 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop h-20 max-w-7xl mx-auto w-full gap-4">
        <Link href="/" className="flex items-center shrink-0 min-w-0">
          <Image
            src="/logo_hidamari-removebg-preview.png"
            alt={t("common.logoAlt")}
            width={250}
            height={250}
            className="object-contain object-left h-20 w-auto max-h-20 shrink-0"
            priority
          />
          <span className="font-headline-lg text-headline-lg text-primary tracking-tight -ml-3">
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
        </div>
      </nav>
    </header>
  );
}
