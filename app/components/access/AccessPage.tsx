"use client";

import Image from "next/image";
import Link from "next/link";
import { HIDAMARI_PHONE_DISPLAY, HIDAMARI_PHONE_TEL } from "@/app/lib/site-links";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import {
  LocationIcon,
  ScheduleIcon,
} from "@/app/components/shared/icons/ContactIcons";
import { GoogleMapEmbed } from "@/app/components/shared/GoogleMapEmbed";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

export function AccessPage() {
  const { t, messages } = useLanguage();

  return (
    <>
      <SiteHeader active="access" />
      <main className="pt-28 pb-section-gap bg-background">

        <header className="text-center px-6 mb-12 animate-fade-in">
          <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
            {t("access.contact")}
          </span>
          <h1 className="font-headline-xl text-headline-xl text-primary mt-2">
            {t("access.title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            {t("access.tagline")}
          </p>
        </header>

        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="relative h-[340px] md:h-[440px] rounded-2xl overflow-hidden sunlit-shadow">
            <Image
              src="/landingPhotos/IMG_2957.JPG"
              alt={t("access.alt")}
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover object-[55%_center]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-black/35 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-paper-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="font-label-md text-label-md text-primary">
                {t("access.restaurantBadge")}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-paper-white rounded-2xl sunlit-shadow p-8 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <LocationIcon className="w-6 h-6 text-primary" />
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                {t("access.location")}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {messages.common.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < messages.common.addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="pt-2 border-t border-surface-variant">
              <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                {t("common.phone")}
              </span>
              <a
                href={HIDAMARI_PHONE_TEL}
                className="font-headline-lg-mobile text-headline-lg-mobile text-primary hover:underline"
              >
                {HIDAMARI_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="bg-paper-white rounded-2xl sunlit-shadow p-8 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ScheduleIcon className="w-6 h-6 text-primary" />
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                {t("access.openingHours")}
              </h2>
            </div>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <div>
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  {t("common.weekdays")}
                </span>
                <p>{t("common.dinnerHours")}</p>
                <p className="text-warm-accent text-sm mt-0.5">
                  {t("common.weekdayLunchNote")}
                </p>
              </div>
              <div>
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  {t("common.weekends")}
                </span>
                <p>{t("common.lunchHours")}</p>
                <p className="text-sm opacity-70 mt-0.5">
                  {t("common.lastOrderLunch")} · {t("common.lastOrderDinner")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-8">
            {t("access.howToFind")}
          </h2>

          <GoogleMapEmbed className="mb-8 border-0" heightClassName="h-[300px]" />

          <ul className="space-y-4">
            {messages.common.directions.map((dir, i) => (
              <li key={dir} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-secondary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {dir}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div id="bento" className="max-w-6xl mx-auto px-6 mb-12 scroll-mt-28">
          <div className="bg-surface-container-low rounded-2xl p-8 sunlit-shadow">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2">
              {t("access.bentoTitle")}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              {t("access.bentoBody")}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-paper-white rounded-xl p-5 sunlit-shadow">
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  {t("access.orderTime")}
                </span>
                <p className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  10:00 – 13:30
                </p>
              </div>
              <div className="bg-paper-white rounded-xl p-5 sunlit-shadow">
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  {t("access.pickUpTime")}
                </span>
                <p className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  11:30 – 14:00
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu#bento"
                className="inline-flex bg-primary text-paper-white px-8 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
              >
                {t("access.viewBentoMenu")}
              </Link>
              <Link
                href="/menu#bento"
                className="inline-flex border border-primary/25 text-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-paper-white transition-all"
              >
                {t("access.viewBentoMenu")}
              </Link>
            </div>
          </div>
        </div>

        <div id="membership-bar" className="max-w-6xl mx-auto px-6 scroll-mt-28">
          <div className="bg-paper-white rounded-2xl p-8 sunlit-shadow space-y-4">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
              {t("access.membershipTitle")}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {t("access.membershipBody")}
            </p>
            <Link
              href="/menu"
              className="inline-flex bg-primary text-paper-white px-8 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
            >
              {t("common.nav.menu")}
            </Link>
          </div>
        </div>

      </main>
      <SiteFooter />
    </>
  );
}
