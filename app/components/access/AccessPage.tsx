"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HIDAMARI_PHONE_DISPLAY, HIDAMARI_PHONE_TEL } from "@/app/lib/site-links";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import {
  CallIcon,
  EmailIcon,
  LocationIcon,
  ScheduleIcon,
} from "@/app/components/shared/icons/ContactIcons";
import { BentoIcon } from "@/app/components/shared/icons/SideNavIcons";
import { GoogleMapEmbed } from "@/app/components/shared/GoogleMapEmbed";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

const GALLERY_PHOTOS = [
  "IMG_2952.JPG",
  "IMG_2957.JPG",
  "IMG_2970.JPG",
  "IMG_2978.JPG",
  "IMG_2979.JPG",
  "IMG_2987.JPG",
  "IMG_3018.JPG",
  "IMG_3037.JPG",
  "IMG_3038.JPG",
  "IMG_3393.JPG",
  "IMG_3485.JPG",
  "IMG_3491.JPG",
  "IMG_3506.JPG",
  "IMG_3511.JPG",
];

function GalleryLightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
  photoAltLabel,
}: {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  photoAltLabel: string;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-ink-black/90 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-paper-white/80 hover:text-paper-white text-3xl font-thin leading-none"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-paper-white/70 hover:text-paper-white text-4xl px-3 py-2"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-paper-white/70 hover:text-paper-white text-4xl px-3 py-2"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        ›
      </button>
      <div
        className="relative w-[90vw] max-w-4xl h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={`/access&info/${photos[index]}`}
          alt={`${photoAltLabel} ${index + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-paper-white/60 font-label-md text-label-md">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}

export function AccessPage() {
  const { t, messages } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length));
  const nextPhoto = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_PHOTOS.length));

  const galleryAlt = (n: number) => `${t("access.galleryPhotoAlt")} ${n}`;

  return (
    <>
      <SiteHeader active="access" />

      {lightboxIndex !== null && (
        <GalleryLightbox
          photos={GALLERY_PHOTOS}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
          photoAltLabel={t("access.galleryPhotoAlt")}
        />
      )}

      <main className="pt-20 bg-background">

        {/* ── Hero ── */}
        <section className="relative h-[540px] min-h-[400px] overflow-hidden">
          <div className="absolute -inset-[1%]">
            <Image
              src="/access&info/IMG_3379.JPG"
              alt={t("access.alt")}
              fill
              sizes="100vw"
              className="object-cover object-[center_42%]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 via-ink-black/40 to-ink-black/25 z-10" />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 bg-tertiary/10 text-paper-white/90 rounded-full font-label-md text-label-md mb-6 uppercase tracking-[0.2em]">
                {t("access.contact")}
              </span>
              <h1 className="font-headline-xl text-headline-xl text-paper-white mb-4">
                {t("access.title")}
              </h1>
              <p className="font-body-lg text-body-lg text-paper-white/90 max-w-lg mx-auto">
                {t("access.tagline")}
              </p>
            </div>
          </div>
        </section>

        {/* ── Info Grid ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-margin-desktop py-section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* Location */}
            <div className="bg-paper-white rounded-2xl sunlit-shadow p-8 border border-primary/5 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <LocationIcon className="w-6 h-6 text-primary" />
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  {t("access.location")}
                </h2>
              </div>
              <address className="not-italic font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-1 mb-4">
                {messages.common.addressLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </address>
              <div className="h-44 rounded-xl overflow-hidden relative border border-outline-variant/30 mt-auto">
                <GoogleMapEmbed className="border-0 w-full h-full" heightClassName="h-full" />
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-paper-white rounded-2xl sunlit-shadow p-8 border border-primary/5 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <ScheduleIcon className="w-6 h-6 text-primary" />
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  {t("access.openingHours")}
                </h2>
              </div>
              <div className="space-y-6 font-body-md text-body-md text-on-surface-variant flex-1">
                <div className="pb-5 border-b border-primary/10">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest block mb-2">
                    {t("common.weekdays")}
                  </span>
                  <p className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                    {t("common.dinnerHours")}
                  </p>
                  <p className="text-sm text-warm-accent mt-1 italic">
                    {t("common.weekdayLunchNote")}
                  </p>
                </div>
                <div>
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest block mb-2">
                    {t("common.weekends")}
                  </span>
                  <p className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                    {t("common.lunchHours")}
                  </p>
                  <p className="text-sm opacity-70 mt-1">
                    {t("common.lastOrderLunch")} · {t("common.lastOrderDinner")}
                  </p>
                </div>
              </div>
            </div>

            {/* Bento Orders */}
            <div
              id="bento"
              className="bg-paper-white rounded-2xl sunlit-shadow p-8 border border-primary/5 flex flex-col h-full scroll-mt-28"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <BentoIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  {t("access.bentoTitle")}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5">
                {t("access.bentoBody")}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-surface-container-low rounded-xl p-4">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                    {t("access.orderTime")}
                  </span>
                  <p className="font-body-md text-body-md text-primary font-semibold">
                    10:00 – 13:30
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                    {t("access.pickUpTime")}
                  </span>
                  <p className="font-body-md text-body-md text-primary font-semibold">
                    11:30 – 14:00
                  </p>
                </div>
              </div>
              <Link
                href="/menu#bento"
                className="w-full text-center bg-secondary text-paper-white py-3 rounded-xl font-label-md text-label-md hover:bg-secondary/90 active:scale-95 transition-all mt-auto"
              >
                {t("access.viewBentoMenu")}
              </Link>
            </div>

            {/* Contact Us */}
            <div className="bg-paper-white rounded-2xl sunlit-shadow p-8 border border-primary/5 flex flex-col h-full">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-5">
                {t("access.contactUs")}
              </h3>
              <div className="flex flex-col gap-4 flex-1 justify-center">
                <a
                  href={HIDAMARI_PHONE_TEL}
                  className="flex items-center gap-4 rounded-xl bg-surface-container-low p-5 hover:bg-surface-container transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <CallIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                      {t("common.phone")}
                    </span>
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary group-hover:underline">
                      {HIDAMARI_PHONE_DISPLAY}
                    </span>
                  </div>
                </a>
                <a
                  href="mailto:welcome@hidamari.jp"
                  className="flex items-center gap-4 rounded-xl bg-surface-container-low p-5 hover:bg-surface-container transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <EmailIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                      {t("common.email")}
                    </span>
                    <span className="font-body-md text-body-md text-primary font-semibold group-hover:underline break-all">
                      welcome@hidamari.jp
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── How to Find Us ── */}
        <section className="bg-surface-container py-section-gap">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-3">
                {t("access.howToFind")}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {t("access.tagline")}
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {messages.common.directions.map((dir, i) => (
                <li key={i} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-paper-white rounded-full flex items-center justify-center sunlit-shadow mb-5 group-hover:scale-110 transition-transform duration-500">
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {dir}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Bento-style Gallery ── */}
        <section className="py-section-gap bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                {t("access.galleryLabel")}
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary mt-2 mb-3">
                {t("access.galleryTitle")}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
                {t("access.galleryBody")}
              </p>
            </div>

            {/* Bento grid: 4 rows of varied sizes */}
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>

              {/* Row 1: big left (spans 2 cols 2 rows) + two stacked right */}
              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2", height: "400px" }}
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[0]}`}
                  alt={galleryAlt(1)}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "194px" }}
                onClick={() => openLightbox(1)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[1]}`}
                  alt={galleryAlt(2)}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "194px" }}
                onClick={() => openLightbox(2)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[2]}`}
                  alt={galleryAlt(3)}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "194px" }}
                onClick={() => openLightbox(3)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[3]}`}
                  alt={galleryAlt(4)}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "194px" }}
                onClick={() => openLightbox(4)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[4]}`}
                  alt={galleryAlt(5)}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              {/* Row 3: three equal + one wide */}
              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "220px" }}
                onClick={() => openLightbox(5)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[5]}`}
                  alt={galleryAlt(6)}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ height: "220px" }}
                onClick={() => openLightbox(6)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[6]}`}
                  alt={galleryAlt(7)}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ gridColumn: "3 / span 2", height: "220px" }}
                onClick={() => openLightbox(7)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[7]}`}
                  alt={galleryAlt(8)}
                  fill
                  sizes="50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              {/* Row 4: wide left + two right */}
              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ gridColumn: "1 / span 2", height: "220px" }}
                onClick={() => openLightbox(8)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[8]}`}
                  alt={galleryAlt(9)}
                  fill
                  sizes="50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ gridColumn: "3 / span 2", height: "220px" }}
                onClick={() => openLightbox(9)}
              >
                <Image
                  src={`/access&info/${GALLERY_PHOTOS[9]}`}
                  alt={galleryAlt(10)}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
              </div>

              {/* Row 5: four equal */}
              {GALLERY_PHOTOS.slice(10, 14).map((photo, i) => (
                <div
                  key={photo}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                  style={{ height: "200px" }}
                  onClick={() => openLightbox(10 + i)}
                >
                  <Image
                    src={`/access&info/${photo}`}
                    alt={galleryAlt(11 + i)}
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-colors duration-500" />
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ── Private Dining Promo ── */}
        <section id="private-dining" className="max-w-6xl mx-auto px-6 py-section-gap scroll-mt-28">
          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden sunlit-shadow bg-paper-white border border-primary/5">
            <div className="relative min-h-[260px] md:min-h-full">
              <Image
                src="/access&info/IMG_3727.JPG"
                alt={t("access.promoTitle")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-ink-black/10" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="font-label-md text-label-md text-tertiary uppercase tracking-[0.2em] mb-3">
                {t("access.promoLabel")}
              </span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">
                {t("access.promoTitle")}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {t("access.promoBody")}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[t("access.promoStatSmall"), t("access.promoStatMedium"), t("access.promoStatFull")].map(
                  (stat) => (
                    <span
                      key={stat}
                      className="inline-flex px-3 py-1.5 rounded-full bg-surface-container-low font-label-md text-label-md text-primary border border-primary/10"
                    >
                      {stat}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={HIDAMARI_PHONE_TEL}
                  className="inline-flex items-center gap-2 bg-primary text-paper-white px-6 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
                >
                  <CallIcon className="w-4 h-4" />
                  {t("access.promoCtaCall")}
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 border border-primary/25 text-primary px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all active:scale-95"
                >
                  {t("access.promoCtaMenu")}
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
