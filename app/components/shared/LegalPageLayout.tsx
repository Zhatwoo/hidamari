"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader active="access" />
      <main className="pt-28 pb-section-gap bg-background">
        <article className="max-w-3xl mx-auto px-6 md:px-margin-desktop">
          <Link
            href="/"
            className="font-label-md text-label-md text-tertiary hover:text-primary transition-colors"
          >
            ← {t("common.backHome")}
          </Link>
          <h1 className="font-headline-xl text-headline-xl text-primary mt-6 mb-8">{title}</h1>
          <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
