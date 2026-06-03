"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { SiteFooter } from "@/app/components/shared/SiteFooter";

const assetBase = "/stitch_hidamari_inspired_portfolio";

const images = {
  dinner:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_dinner_btn.png/screen.png`,
  drink:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png`,
  interior:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_photo003.png/screen.png`,
  table:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png`,
  logo:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_toplogo.png/screen.png`,
};

const drinkTags = ["Sapporo", "Kirin", "Draft"];

export function DinnerPage() {
  const archLeftRef = useRef<HTMLDivElement>(null);
  const archRightRef = useRef<HTMLDivElement>(null);
  const drinkBgRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const tick = () => {
      const y = window.scrollY;

      // Left arch drifts down slowly
      if (archLeftRef.current) {
        archLeftRef.current.style.transform = `translateY(${y * 0.09}px)`;
      }
      // Right arch drifts up slightly (counter-movement)
      if (archRightRef.current) {
        archRightRef.current.style.transform = `translateY(${y * -0.06}px)`;
      }
      // Drink section bg subtle drift
      if (drinkBgRef.current) {
        const rect = drinkBgRef.current.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top - rect.height / 2);
        drinkBgRef.current.style.backgroundPositionY = `${50 + offset * 0.03}%`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(tick);
        ticking = true;
      }
    };

    // Scroll-reveal for data-reveal elements
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-8");
          }
        }),
      { threshold: 0.08 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-8");
      io.observe(el);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <SiteHeader active="dinner" />

      {/* ── Fixed right sidebar ── */}
      <aside className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-4 p-4 z-40 bg-surface-container-low rounded-l-xl"
        style={{ boxShadow: "4px 20px 20px rgba(166,124,65,0.08)" }}
      >
        <div className="flex flex-col items-center mb-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-paper-white mb-1">
            <i className="fi fi-sr-utensils text-[18px]" aria-hidden="true" />
          </div>
          <p className="font-label-md text-primary uppercase tracking-widest" style={{ fontSize: "9px" }}>
            Reservations
          </p>
        </div>
        <Link
          href="/access"
          className="flex flex-col items-center gap-1 p-3 bg-secondary-container/30 text-secondary rounded-lg hover:-translate-x-1 transition-transform"
        >
          <i className="fi fi-tr-calendar-day text-[22px]" aria-hidden="true" />
          <span className="font-label-md" style={{ fontSize: "9px" }}>Book a Table</span>
        </Link>
        <Link
          href="/access"
          className="flex flex-col items-center gap-1 p-3 text-on-surface-variant hover:bg-primary/5 hover:-translate-x-1 transition-transform rounded-lg"
        >
          <i className="fi fi-sr-clock text-[21px]" aria-hidden="true" />
          <span className="font-label-md" style={{ fontSize: "9px" }}>Lunch Hours</span>
        </Link>
      </aside>

      <main className="pt-20 bg-surface overflow-x-hidden">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="relative px-6 md:px-margin-desktop py-section-gap max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">

            {/* Left – text */}
            <div className="w-full md:w-1/2 text-center md:text-left z-10" data-reveal>
              <span className="inline-block px-3 py-1 mb-4 bg-tertiary/10 text-tertiary font-label-md text-caption uppercase tracking-[1px] rounded-full">
                Evening Experience
              </span>
              <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
                Dinner at Hidamari
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8 mx-auto md:mx-0">
                Experience a warm, cozy evening atmosphere where time slows down.
                Indulge in our artisanal Japanese dishes under the soft glow of dusk.
              </p>
              <div className="flex items-center gap-2 text-primary justify-center md:justify-start">
                <i className="fi fi-rr-clock-three text-[20px]" aria-hidden="true" />
                <span className="font-body-md text-body-md">17:00 – 24:00 Daily</span>
              </div>
            </div>

            {/* Right – arched image pair with parallax */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">

              {/* Left arch – offset down, drifts down on scroll */}
              <div
                ref={archLeftRef}
                className="space-y-4 pt-12 will-change-transform"
              >
                <div
                  className="relative overflow-hidden sunlit-shadow group cursor-pointer transition-transform hover:-translate-y-2 duration-500"
                  style={{ borderRadius: "200px 200px 12px 12px", height: "320px" }}
                >
                  <Image
                    src="/dinner/IMG_4055.JPG"
                    alt="Dinner"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 to-ink-black/10 flex flex-col items-center justify-end pb-8">
                    <span className="font-headline-lg text-headline-lg text-paper-white tracking-widest">
                      DINNER
                    </span>
                    
                  </div>
                </div>
              </div>

              {/* Right arch – taller, drifts up on scroll */}
              <div
                ref={archRightRef}
                className="space-y-4 will-change-transform"
              >
                <div
                  className="relative overflow-hidden sunlit-shadow group cursor-pointer transition-transform hover:-translate-y-2 duration-500"
                  style={{ borderRadius: "200px 200px 12px 12px", height: "384px" }}
                >
                  <Image
                    src="/dinner/IMG_3036.JPG"
                    alt="Drinks"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 to-ink-black/10 flex flex-col items-center justify-end pb-8">
                    <span className="font-headline-lg text-headline-lg text-paper-white tracking-widest">
                      DRINK
                    </span>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            EXTENSIVE DRINK SELECTION
        ══════════════════════════════════════════ */}
        <section
          ref={drinkBgRef}
          className="bg-surface-container-low py-section-gap"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">

            <div className="text-center mb-16" data-reveal>
              <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
                Extensive Drink Selection
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                From Japanese draft beers to curated sake, our beverage menu is designed
                to complement your evening meal perfectly.
              </p>
            </div>

            {/* 12-column auto-rows grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
              style={{ gridAutoRows: "280px" }}
            >

              {/* Draft Beer – col-span-8, split image+text */}
              <div
                className="md:col-span-8 relative rounded-xl overflow-hidden sunlit-shadow bg-paper-white flex flex-col md:flex-row group transition-all duration-300"
                data-reveal
              >
                <div className="relative w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                  <Image
                    src="/dinner/IMG_3036.JPG"
                    alt="Draft Beer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                    Japanese Draft
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Experience the crisp taste of Sapporo Premium, Kuro, and Kirin
                    Ichiban Shibori, poured to perfection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Sapporo", "Kirin", "Draft"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary-container/20 text-on-secondary-container rounded font-label-md uppercase"
                        style={{ fontSize: "10px", letterSpacing: "0.06em" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sake & Shochu – col-span-4, dark card */}
              <div
                className="md:col-span-4 rounded-xl overflow-hidden sunlit-shadow bg-primary-container text-paper-white p-8 flex flex-col justify-end group transition-all duration-300 hover:bg-primary cursor-pointer"
                data-reveal
              >
                <i className="fi fi-rs-martini-glass-citrus text-4xl mb-6 opacity-90" aria-hidden="true" />
                <h3 className="font-headline-lg text-headline-lg mb-2">
                  Sake &amp; Shochu
                </h3>
                <p className="font-body-md text-body-md opacity-90">
                  A curated collection of regional favorites from across Japan,
                  available by the glass or bottle.
                </p>
              </div>

              {/* Whiskey – col-span-4, white card */}
              <div
                className="md:col-span-4 rounded-xl overflow-hidden sunlit-shadow bg-paper-white p-8 flex flex-col group transition-all duration-300 cursor-pointer"
                data-reveal
              >
                <div className="mb-auto">
                  <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                    Whiskey
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Suntory Hibiki, Yamazaki, and more. Bottle keeping services
                    available for our regulars.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="font-body-md text-primary font-bold">
                    Explore Premium Labels
                  </span>
                  <i className="fi fi-rr-arrow-small-right text-primary text-[24px] group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </div>
              </div>

              {/* A Space for 65 Guests - col-span-8, photo card */}
              <div
                className="md:col-span-8 relative h-[280px] rounded-xl overflow-hidden sunlit-shadow group cursor-pointer transition-all duration-300"
                data-reveal
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ink-black/75 via-ink-black/35 to-ink-black/10 z-10" />
                <Image
                  src="/dinner/IMG_2977.JPG"
                  alt="Restaurant Interior"
                  fill
                  className="object-cover object-[center_38%] group-hover:scale-[1.02] transition-transform duration-1000"
                />
                <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 text-paper-white">
                  <h3 className="font-headline-lg text-headline-lg mb-2">
                    A Space for 65 Guests
                  </h3>
                  <p className="font-body-md text-body-md opacity-90 max-w-md">
                    Private rooms for 8–18 guests and a lively bar counter for
                    solo diners.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            VISIT US
        ══════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 md:px-margin-desktop py-section-gap">
          <div className="flex flex-col md:flex-row gap-20">

            {/* Info */}
            <div className="w-full md:w-1/2" data-reveal>
              <h2 className="font-headline-xl text-headline-xl text-primary mb-8">
                Visit Us
              </h2>
              <div className="space-y-8">

                <div className="flex gap-4">
                  <i className="fi fi-sr-marker text-primary mt-1 shrink-0 text-[22px]" aria-hidden="true" />
                  <div>
                    <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-2">
                      Location
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      4th Floor, Penthouse, Creekside Building, Amorsolo corner
                      V.A. Rufino Sts., Legaspi Village, Makati City
                    </p>
                    <p className="font-caption text-caption text-primary mt-2 italic">
                      3-minute walk from Little Tokyo and Cinema Square
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <i className="fi fi-sr-phone-call text-primary shrink-0 text-[22px]" aria-hidden="true" />
                  <div>
                    <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-2">
                      Phone
                    </h4>
                    <p className="font-headline-lg text-headline-lg text-primary">
                      02-8659-6120
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <i className="fi fi-sr-credit-card text-primary shrink-0 text-[22px]" aria-hidden="true" />
                  <div>
                    <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-2">
                      Payments
                    </h4>
                    <Image
                      src="/dinner/Visa-Mastercard-Amex-JCB.png"
                      alt="Accepted payments: Visa, Mastercard, American Express, JCB"
                      width={260}
                      height={42}
                      className="h-auto w-full max-w-[260px]"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden sunlit-shadow h-[400px]" data-reveal>
              <div className="relative w-full h-full bg-surface-container flex items-center justify-center">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png"
                  alt="Map area"
                  fill
                  className="object-cover grayscale opacity-30"
                />
                <div className="relative z-10 text-center p-8 bg-paper-white/90 backdrop-blur-sm rounded-xl sunlit-shadow max-w-xs">
                  <i className="fi fi-sr-utensils text-primary mb-3 block text-[40px]" aria-hidden="true" />
                  <h5 className="font-body-md font-bold text-primary mb-1">
                    Hidamari Japanese Restaurant
                  </h5>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Creekside Building Penthouse
                  </p>
                  <button className="mt-4 font-body-md text-primary font-bold border-b border-primary pb-1 hover:opacity-70 transition-opacity">
                    Open in Maps
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
