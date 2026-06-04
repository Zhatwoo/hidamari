"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/shared/LanguageProvider";


const footerLinkClass =
  "font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors";

export function SiteFooter() {
  const { t } = useLanguage();

  const exploreLinks = [
    { label: t("common.nav.home"), href: "/" },
    { label: t("common.nav.menu"), href: "/menu" },
    { label: t("common.nav.lunch"), href: "/lunch" },
    { label: t("common.nav.dinner"), href: "/dinner" },
  ] as const;

  const shopInfoLinks = [
    { label: t("common.nav.access"), href: "/access" },
    { label: t("common.footer.bentoOrders"), href: "/access#bento" },
    { label: t("common.footer.privateEvents"), href: "/access#private-dining" },
  ] as const;

  const legalLinks = [
    { label: t("common.footer.privacyPolicy"), href: "/privacy-policy" },
    { label: t("common.footer.termsOfService"), href: "/terms-of-service" },
    { label: t("common.footer.careers"), href: "/careers" },
  ] as const;

  return (
    <footer className="bg-surface-container w-full py-section-gap border-t border-primary/10">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-margin-desktop max-w-7xl mx-auto gap-10">
        <div className="max-w-xs">
          <Link
            href="/"
            className="font-headline-lg text-headline-lg text-primary mb-4 block hover:opacity-80 transition-opacity"
          >
            Hidamari
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {t("common.footerTagline")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-8 md:mt-0">
          <div className="flex flex-col gap-2">
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              {t("common.explore")}
            </h5>
            {exploreLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={footerLinkClass}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              {t("common.shopInfo")}
            </h5>
            {shopInfoLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={footerLinkClass}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              {t("common.legal")}
            </h5>
            {legalLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={footerLinkClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop mt-12 pt-8 border-t border-primary/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-caption text-caption text-on-surface-variant opacity-70">
          {t("common.copyright")}
        </p>
        <Link href="/menu" className={`${footerLinkClass} font-caption text-caption`}>
          {t("common.nav.menu")}
        </Link>
      </div>
    </footer>
  );
}
