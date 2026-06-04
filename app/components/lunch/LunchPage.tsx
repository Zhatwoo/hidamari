"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

const LUNCH_SLIDE_IMAGES = [
  "/lunch/IMG_3891.JPG",
  "/lunch/IMG_4106.JPG",
  "/lunch/IMG_4118.JPG",
  "/lunch/IMG_4124.JPG",
  "/lunch/IMG_4125.JPG",
  "/lunch/IMG_4126.JPG",
  "/lunch/IMG_4127.JPG",
  "/lunch/IMG_4128.JPG",
  "/lunch/IMG_4129.JPG",
  "/lunch/IMG_4136.JPG",
  "/lunch/IMG_4138.JPG",
] as const;

const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds

export function LunchPage() {
  const { t, messages } = useLanguage();
  const lunchHighlights = LUNCH_SLIDE_IMAGES.map((src, index) => ({
    src,
    ...messages.lunch.highlights[index],
  }));

  const [activeHighlight, setActiveHighlight] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentHighlight = lunchHighlights[activeHighlight];

  const goToNext = useCallback(() => {
    setActiveHighlight((current) =>
      current === lunchHighlights.length - 1 ? 0 : current + 1
    );
  }, []);

  const goToPrev = useCallback(() => {
    setActiveHighlight((current) =>
      current === 0 ? lunchHighlights.length - 1 : current - 1
    );
  }, []);

  // Start / restart the auto-slide timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToNext();
    }, AUTO_SLIDE_INTERVAL);
  }, [goToNext]);

  // Auto-slide effect
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // When user manually navigates, restart the timer so it doesn't fire immediately after
  const handleManualNav = useCallback(
    (action: () => void) => {
      action();
      startTimer();
    },
    [startTimer]
  );

  useEffect(() => {
    // Nav shadow on scroll
    const nav = document.querySelector("nav");
    const onScroll = () => {
      nav?.classList.toggle("shadow-md", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Section scroll-reveal
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-8");
          }
        }),
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-8");
      io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <SiteHeader active="lunch" />

      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
          <Image
            src="/lunch/IMG_4106.JPG"
            alt={t("lunch.heroImageAlt")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-6">
            <h1 className="font-headline-xl text-primary mb-2" style={{ fontSize: "48px", lineHeight: "56px" }}>
              {t("lunch.heroTitle")}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              {t("lunch.heroTagline")}
            </p>
          </div>
        </section>

        {/* ── Status Banner (overlaps hero) ── */}
        <section className="max-w-2xl mx-auto px-6 -mt-12 relative z-10" data-reveal>
          <div className="bg-primary-container text-paper-white sunlit-shadow rounded-xl p-8 border border-paper-white/10 text-center">
            {/* Red pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-paper-white/15 text-paper-white rounded-full font-label-md text-label-md uppercase mb-4">
              <i className="fi fi-rr-info flex text-[17px]" aria-hidden="true" />
              {t("lunch.serviceUpdate")}
            </div>
            <h2 className="font-headline-lg text-headline-lg text-paper-white mb-4">
              {t("lunch.weekdaySuspended")}
            </h2>
            <p className="font-body-md text-body-md text-paper-white/90 leading-relaxed">
              {t("lunch.weekdaySuspendedBody")}
            </p>
            <div className="mt-6 flex justify-center border-t border-paper-white/20 pt-6">
              <div className="flex flex-col items-center">
                <span className="font-label-md text-label-md text-paper-white font-bold">
                  {t("lunch.weekendsHolidays")}
                </span>
                <span className="font-body-md text-body-md text-paper-white/85">
                  {t("lunch.weekendHours")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Popular Choices ── */}
        <section
          className="max-w-7xl mx-auto px-6 md:px-margin-desktop py-section-gap"
          data-reveal
        >
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">{t("lunch.popularChoices")}</h2>
            <div className="w-16 mx-auto mt-1" style={{ height: "2px", backgroundColor: "currentColor", color: "inherit", opacity: 0.7 }} />
          </div>

          {/* 12-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* Large Carousel – col-span-8 */}
            <div className="md:col-span-8">
              <div className="relative overflow-hidden rounded-xl sunlit-shadow h-[500px]">
                {lunchHighlights.map((item, index) => (
                  <Image
                    key={item.src}
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className={`object-cover transition-opacity duration-[1400ms] ease-in-out ${
                      activeHighlight === index ? "opacity-100" : "opacity-0"
                    }`}
                    loading="eager"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 via-ink-black/20 to-transparent" />

                {/* Top bar: label + nav buttons */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full bg-paper-white/90 px-3 py-1.5 text-primary">
                    <i className="fi fi-sr-utensils text-[15px]" aria-hidden="true" />
                    <span className="font-label-md text-[11px] uppercase tracking-[0.18em]">
                      {currentHighlight.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleManualNav(goToPrev)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-paper-white/90 text-primary transition hover:bg-paper-white active:scale-95"
                      aria-label={t("lunch.prevSlide")}
                    >
                      <i className="fi fi-rr-angle-left text-[18px]" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleManualNav(goToNext)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-paper-white/90 text-primary transition hover:bg-paper-white active:scale-95"
                      aria-label={t("lunch.nextSlide")}
                    >
                      <i className="fi fi-rr-angle-right text-[18px]" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 pb-20 sm:p-8 sm:pb-20">
                  <div className="max-w-xl">
                    <span className="text-paper-white/80 font-label-md text-label-md uppercase tracking-[0.2em] mb-2 block">
                      {currentHighlight.label}
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-paper-white mb-4">
                      {currentHighlight.title}
                    </h3>
                    <p className="font-body-md text-body-md text-paper-white/90 max-w-md">
                      {currentHighlight.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-paper-white/15 px-3 py-1.5 text-paper-white backdrop-blur-sm">
                      <i className="fi fi-rr-info text-[14px]" aria-hidden="true" />
                      <span className="font-label-md text-[12px] uppercase tracking-[0.12em]">
                        {currentHighlight.detail}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-7 z-20 flex justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-ink-black/20 px-3 py-2 backdrop-blur-sm">
                    {lunchHighlights.map((item, index) => (
                      <button
                        type="button"
                        key={item.title}
                        onClick={() => handleManualNav(() => setActiveHighlight(index))}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeHighlight === index
                            ? "w-8 bg-paper-white"
                            : "w-2.5 bg-paper-white/45 hover:bg-paper-white/75"
                        }`}
                        aria-label={`${t("lunch.showSlide")} ${item.title}`}
                        aria-current={activeHighlight === index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch details card - col-span-4 */}
            <div className="md:col-span-4 flex flex-col">
              <div className="bg-primary-container text-paper-white px-8 py-10 sm:px-10 md:h-[500px] md:px-10 md:py-12 rounded-xl sunlit-shadow flex flex-col justify-center">
                <i className="fi fi-sr-utensils mb-8 text-[40px]" aria-hidden="true" />
                <h3 className="font-headline-lg mb-5 text-[32px] leading-[38px] font-semibold">
                  {currentHighlight.title}
                </h3>
                <p className="font-body-md mb-8 max-w-[360px] text-[16px] leading-[28px] opacity-90">
                  {currentHighlight.description}
                </p>
                <div className="border-t border-paper-white/20 pt-6">
                  <p className="font-label-md mb-3 text-[14px] font-bold uppercase tracking-[0.04em]">
                    {t("lunch.lunchHoursCard")}
                  </p>
                  <p className="font-body-md text-[16px] leading-[24px] opacity-80">
                    {currentHighlight.detail}
                  </p>
                  <p className="font-body-md mt-4 text-[16px] leading-[24px] opacity-80">
                    {t("lunch.weekendHours")}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Atmospheric Quote ── */}
        <section className="bg-surface-container-low py-section-gap" data-reveal>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <span className="font-headline-lg text-primary block mb-6 italic">
              {t("lunch.quote")}
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {t("lunch.quoteBody")}
            </p>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
