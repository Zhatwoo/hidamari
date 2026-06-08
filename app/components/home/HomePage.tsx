"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection, HeroServiceNotice } from "@/app/components/home/HeroSection";
import { HidamariSpaceCard } from "@/app/components/home/HidamariSpaceCard";
import { HIDAMARI_GOOGLE_MAPS_URL, HIDAMARI_PHONE_DISPLAY, HIDAMARI_PHONE_TEL } from "@/app/lib/site-links";
import { ContactIcon } from "@/app/components/shared/icons/ContactIcons";
import { BentoIcon } from "@/app/components/shared/icons/SideNavIcons";
import { GoogleMapEmbed } from "@/app/components/shared/GoogleMapEmbed";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

export function HomePage() {
  const { t, messages } = useLanguage();
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add("shadow-md");
        header.classList.remove("shadow-sm");
      } else {
        header.classList.add("shadow-sm");
        header.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <SiteHeader active="home" />

      <main className="pt-20 bg-background text-on-background overflow-x-hidden">

        <HeroSection />

        <div className="relative z-10 bg-background">
        <HeroServiceNotice />
        {/* ══════════════════════════════════════════
            PHILOSOPHY
        ══════════════════════════════════════════ */}
        <section className="py-section-gap bg-surface-container-low" id="about">
          <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
            <div className="grid md:grid-cols-12 gap-12 items-center">

              <div className="md:col-span-7">
                <div className="relative h-[400px] rounded-xl overflow-hidden sunlit-shadow">
                  <Image
                    src="/landingPhotos/IMG_2986.JPG"
                    alt={messages.home.alts.philosophy}
                    fill
                    className="object-cover transition-all duration-700"
                    style={{ filter: "grayscale(20%)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(20%)")}
                  />
                </div>
              </div>

              <div className="md:col-span-5 space-y-6">
                <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase">
                  {t("home.philosophyLabel")}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                  {t("home.philosophyTitle")}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {t("home.philosophyBody")}
                </p>
                <div className="pt-4 flex gap-8">
                  {[
                    { num: "65", label: t("home.capacity") },
                    { num: "4", label: t("home.floorsUp") },
                    { num: "3", label: t("home.seatingTypes") },
                  ].map(({ num, label }) => (
                    <div key={label} className="text-center">
                      <div className="font-headline-lg text-headline-lg text-primary">{num}</div>
                      <p className="font-caption text-caption text-on-surface-variant uppercase tracking-tighter">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CULINARY HIGHLIGHTS
        ══════════════════════════════════════════ */}
        <section className="py-section-gap px-6 md:px-margin-desktop" id="lunch">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                {t("home.culinaryLabel")}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
                {t("home.culinaryTitle")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">

              {/* Large – Weekend Lunch */}
              <div className="md:col-span-2 md:row-span-2 relative min-h-[320px] group overflow-hidden rounded-xl sunlit-shadow bg-ink-black">
                <Image
                  src="/landingPhotos/IMG_3238.JPG"
                  alt={messages.home.alts.weekendLunch}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-secondary-fixed-dim font-label-md text-label-md uppercase tracking-widest mb-2">
                    {t("home.artisanalBento")}
                  </span>
                  <h3 className="text-paper-white font-headline-lg text-headline-lg">
                    {t("home.weekendLunch")}
                  </h3>
                  <p className="text-paper-white/80 font-body-md text-body-md mt-2">
                    {t("home.weekendLunchTime")}
                  </p>
                </div>
              </div>

              <HidamariSpaceCard />

              {/* Sake & Drafts */}
              <div className="relative min-h-[240px] group overflow-hidden rounded-xl sunlit-shadow bg-primary">
                <Image
                  src="/landingPhotos/IMG_3038.JPG"
                  alt={messages.home.alts.premiumSake}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-paper-white font-headline-lg text-2xl">
                    {t("home.premiumSake")}
                  </h4>
                </div>
              </div>

              {/* Evening Dining */}
              <div
                id="dinner"
                className="relative min-h-[240px] group overflow-hidden rounded-xl sunlit-shadow"
                style={{ backgroundColor: "#BD3F32" }}
              >
                <Image
                  src="/landingPhotos/IMG_3224.JPG"
                  alt={messages.home.alts.eveningDining}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-paper-white font-headline-lg text-2xl">{t("home.eveningDining")}</h4>
                  <p className="text-paper-white/80 font-caption text-caption uppercase mt-1">
                    {t("home.eveningDiningTime")}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            BENTO
        ══════════════════════════════════════════ */}
        <section className="py-section-gap bg-surface-container-low" id="bento">
          <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
            <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden sunlit-shadow bg-paper-white border border-primary/5">
              <div className="relative min-h-[280px] md:min-h-full">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo005.png/screen.png"
                  alt={messages.home.alts.bento}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-ink-black/10" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <BentoIcon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-[0.2em]">
                    {t("home.bentoLabel")}
                  </span>
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-3">
                  {t("home.bentoTitle")}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  {t("home.bentoBody")}
                </p>
                <p className="inline-flex items-center gap-2 self-start rounded-full bg-secondary-container/30 border border-secondary/20 px-4 py-2 font-label-md text-label-md text-primary mb-6">
                  <span className="material-symbols-outlined text-base text-secondary">info</span>
                  {t("home.bentoMinOrder")}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-surface-container-low rounded-xl p-4">
                    <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                      {t("home.bentoOrderTime")}
                    </span>
                    <p className="font-body-md text-body-md text-primary font-semibold">10:00 – 13:30</p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-4">
                    <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                      {t("home.bentoPickUpTime")}
                    </span>
                    <p className="font-body-md text-body-md text-primary font-semibold">11:30 – 14:00</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/menu#bento"
                    className="inline-flex items-center justify-center bg-secondary text-paper-white px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-secondary/90 active:scale-95 transition-all"
                  >
                    {t("home.bentoViewMenu")}
                  </Link>
                  <a
                    href={HIDAMARI_PHONE_TEL}
                    className="inline-flex items-center justify-center border border-primary/25 text-primary px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container-low active:scale-95 transition-all"
                  >
                    {t("home.bentoCallUs")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ACCESS
        ══════════════════════════════════════════ */}
        <section className="py-section-gap bg-surface-container" id="access">
          <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase">
                  {t("home.findUs")}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {t("home.inMakati")}
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: "location" as const,
                      label: t("common.address"),
                      body: messages.common.addressLines.join(" "),
                    },
                    {
                      icon: "schedule" as const,
                      label: t("home.openingHours"),
                      body: `${t("home.openingHoursWeekdays")}\n${t("home.openingHoursWeekends")}`,
                    },
                    { icon: "call" as const, label: t("common.phone"), body: HIDAMARI_PHONE_DISPLAY },
                  ].map(({ icon, label, body }) => (
                    <div key={label} className="flex gap-4">
                      <ContactIcon type={icon} className="w-6 h-6 shrink-0 text-primary mt-0.5" />
                      <div>
                        <p className="font-body-md font-bold text-primary">{label}</p>
                        {body.split("\n").map((line) => (
                          <p key={line} className="font-body-md text-body-md text-on-surface-variant">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={HIDAMARI_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-primary text-paper-white px-8 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
              >
                {t("home.getDirections")}
              </a>
            </div>

            <GoogleMapEmbed className="w-full" />

          </div>
        </section>

        </div>

      </main>

      <SiteFooter />

    </>
  );
}
