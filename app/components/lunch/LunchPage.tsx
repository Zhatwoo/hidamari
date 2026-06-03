"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { SiteFooter } from "@/app/components/shared/SiteFooter";

const lunchHighlights = [
  {
    src: "/lunch/IMG_3891.JPG",
    label: "Signature Dish",
    title: "Classic Omurice",
    description:
      "Our signature fluffy omelet over savory rice, a comforting favorite reminiscent of a home-cooked meal.",
    detail: "Weekend lunch favorite",
  },
  {
    src: "/lunch/IMG_4106.JPG",
    label: "Seasonal Plate",
    title: "Hidamari Lunch Set",
    description:
      "A balanced lunch plate prepared with warm rice, bright sides, and the easy pace of a sunlit meal.",
    detail: "Served weekends and holidays",
  },
  {
    src: "/lunch/IMG_4118.JPG",
    label: "Lunch Plate",
    title: "Freshly Prepared Lunch",
    description:
      "A close-up look at the kind of warm, generous plate served during Hidamari lunch hours.",
    detail: "Prepared during lunch service",
  },
  {
    src: "/lunch/IMG_4124.JPG",
    label: "Pasta Selection",
    title: "Mentaiko Pasta",
    description:
      "Creamy Japanese-style pasta with a savory finish, plated simply for a relaxed midday meal.",
    detail: "Lunch pasta option",
  },
  {
    src: "/lunch/IMG_4125.JPG",
    label: "Pasta Selection",
    title: "Herb Pasta",
    description:
      "Lightly seasoned pasta with herbs, made for guests who want something gentle and satisfying.",
    detail: "Balanced lunch choice",
  },
  {
    src: "/lunch/IMG_4126.JPG",
    label: "Rice Bowl",
    title: "Egg Rice Bowl",
    description:
      "Soft egg over rice with savory toppings, a comforting bowl for a slow lunch break.",
    detail: "Rice bowl favorite",
  },
  {
    src: "/lunch/IMG_4127.JPG",
    label: "Lunch Plate",
    title: "Seasonal Lunch Dish",
    description:
      "A rotating lunch plate prepared with the day's ingredients and Hidamari's warm service.",
    detail: "Seasonal availability",
  },
  {
    src: "/lunch/IMG_4128.JPG",
    label: "Lunch Plate",
    title: "House Lunch Dish",
    description:
      "A hearty plate for guests looking for a filling lunch with familiar Japanese flavors.",
    detail: "House recommendation",
  },
  {
    src: "/lunch/IMG_4129.JPG",
    label: "Lunch Plate",
    title: "Midday Special",
    description:
      "One of our weekday-style lunch inspirations, served when lunch service is available.",
    detail: "Ask staff for details",
  },
  {
    src: "/lunch/IMG_4136.JPG",
    label: "Lunch Detail",
    title: "Freshly Plated",
    description:
      "Small details from the lunch table, captured just before service.",
    detail: "Lunch gallery",
  },
  {
    src: "/lunch/IMG_4138.JPG",
    label: "Lunch Detail",
    title: "Tabletop Warmth",
    description:
      "The calm, casual feeling of a Hidamari lunch, from plate to table.",
    detail: "Lunch gallery",
  },
];

const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds

export function LunchPage() {
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

      {/* ── Fixed right sidebar ── */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex w-24 flex-col items-center gap-8 rounded-l-2xl border-l border-y border-primary/5 bg-surface-container-low px-4 py-7 sunlit-shadow">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant/70 text-primary">
            <i className="fi fi-sr-utensils text-[24px]" aria-hidden="true" />
          </div>
          <span
            className="font-label-md text-primary uppercase tracking-[0.18em]"
            style={{ fontSize: "11px", lineHeight: "14px" }}
          >
            Reserve
          </span>
        </div>
        <button
          className="flex h-14 w-14 items-center justify-center rounded-xl text-secondary transition-all hover:bg-primary/5"
          title="Book a Table"
        >
          <i className="fi fi-tr-calendar-day text-[28px]" aria-hidden="true" />
        </button>
        
      </aside>

      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
          <Image
            src="/lunch/IMG_4106.JPG"
            alt="Hidamari Lunch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-6">
            <h1 className="font-headline-xl text-primary mb-2" style={{ fontSize: "48px", lineHeight: "56px" }}>
              LUNCH
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Experience Tactile Minimalism and Authentic Flavors
            </p>
          </div>
        </section>

        {/* ── Status Banner (overlaps hero) ── */}
        <section className="max-w-2xl mx-auto px-6 -mt-12 relative z-10" data-reveal>
          <div className="bg-primary-container text-paper-white sunlit-shadow rounded-xl p-8 border border-paper-white/10 text-center">
            {/* Red pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-paper-white/15 text-paper-white rounded-full font-label-md text-label-md uppercase mb-4">
              <i className="fi fi-rr-info flex text-[17px]" aria-hidden="true" />
              Service Update
            </div>
            <h2 className="font-headline-lg text-headline-lg text-paper-white mb-4">
              Weekday Lunch Suspended
            </h2>
            <p className="font-body-md text-body-md text-paper-white/90 leading-relaxed">
              Starting May 16, we will temporarily suspend weekday lunch service.
              We remain open continuously on weekends and public holidays.
            </p>
            <div className="mt-6 flex justify-center border-t border-paper-white/20 pt-6">
              <div className="flex flex-col items-center">
                <span className="font-label-md text-label-md text-paper-white font-bold">
                  WEEKENDS &amp; HOLIDAYS
                </span>
                <span className="font-body-md text-body-md text-paper-white/85">
                  11:30 AM – 2:00 PM (L.O.)
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
            <h2 className="font-headline-lg text-headline-lg text-primary">Popular Choices</h2>
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
                      aria-label="Previous lunch highlight"
                    >
                      <i className="fi fi-rr-angle-left text-[18px]" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleManualNav(goToNext)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-paper-white/90 text-primary transition hover:bg-paper-white active:scale-95"
                      aria-label="Next lunch highlight"
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
                        aria-label={`Show ${item.title}`}
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
                    Lunch Detail
                  </p>
                  <p className="font-body-md text-[16px] leading-[24px] opacity-80">
                    {currentHighlight.detail}
                  </p>
                  <p className="font-body-md mt-4 text-[16px] leading-[24px] opacity-80">
                    Weekend and holiday lunch: 11:30 AM - 2:00 PM (L.O.)
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
              &quot;Hidamari&quot; — A sunny spot.
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Hidamari Restaurant is located on the 4th floor of Creekside, just a
              3-minute walk from Little Tokyo. The name evokes a comforting space where
              people can relax amidst their busy lives, creating a warm atmosphere
              reminiscent of returning to one&apos;s home.
            </p>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
