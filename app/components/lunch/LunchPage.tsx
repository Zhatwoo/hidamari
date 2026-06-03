"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { SiteFooter } from "@/app/components/shared/SiteFooter";

export function LunchPage() {
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
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 p-4 bg-surface-container-low rounded-l-xl sunlit-shadow border-l border-y border-primary/5">
        <div className="flex flex-col items-center gap-1 mb-1">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
              restaurant
            </span>
          </div>
          <span
            className="font-label-md text-primary uppercase tracking-widest"
            style={{ fontSize: "9px" }}
          >
            Reserve
          </span>
        </div>
        <button
          className="p-3 text-secondary hover:bg-primary/5 rounded-lg transition-all"
          title="Book a Table"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            calendar_today
          </span>
        </button>
        <button
          className="p-3 text-secondary bg-secondary-container/30 rounded-lg transition-all"
          title="Bento Orders"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            restaurant
          </span>
        </button>
      </aside>

      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
          <Image
            src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_lunch_btn.png/screen.png"
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
          <div className="bg-paper-white sunlit-shadow rounded-xl p-8 border border-primary/5 text-center">
            {/* Red pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-warm-accent/10 text-warm-accent rounded-full font-label-md text-label-md uppercase mb-4">
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                info
              </span>
              Service Update
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Weekday Lunch Suspended
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Starting May 16, we will temporarily suspend weekday lunch service.
              We remain open continuously on weekends and public holidays.
            </p>
            <div className="mt-6 flex justify-center border-t border-primary/10 pt-6">
              <div className="flex flex-col items-center">
                <span className="font-label-md text-label-md text-primary font-bold">
                  WEEKENDS &amp; HOLIDAYS
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
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
            <div className="w-12 h-0.5 bg-tertiary-container mx-auto mt-4" />
          </div>

          {/* 12-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* Large Omurice – col-span-8 */}
            <div className="md:col-span-8 group">
              <div className="relative overflow-hidden rounded-xl sunlit-shadow h-[500px]">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_lunch_btn.png/screen.png"
                  alt="Classic Omurice"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 to-transparent flex flex-col justify-end p-8">
                  <span className="text-paper-white/80 font-label-md text-label-md uppercase tracking-[0.2em] mb-2">
                    Signature Dish
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-paper-white mb-4">
                    Classic Omurice
                  </h3>
                  <p className="font-body-md text-body-md text-paper-white/90 max-w-md">
                    Our signature fluffy omelet over savory rice, a comforting favorite
                    reminiscent of a home-cooked meal.
                  </p>
                </div>
              </div>
            </div>

            {/* Bento info card – col-span-4 */}
            <div className="md:col-span-4 flex flex-col">
              <div className="bg-primary text-paper-white p-8 rounded-xl sunlit-shadow h-full flex flex-col justify-center">
                <span
                  className="material-symbols-outlined mb-4"
                  style={{ fontSize: "40px", fontVariationSettings: "'FILL' 1" }}
                >
                  inventory_2
                </span>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-4">
                  Bento Box Selection
                </h3>
                <p className="font-body-md text-body-md opacity-90 mb-6">
                  Hand-crafted boxes filled with a balanced variety of seasonal
                  ingredients, perfect for a mindful lunch.
                </p>
                <div className="border-t border-paper-white/20 pt-6">
                  <p className="font-label-md text-label-md font-bold uppercase mb-2">
                    Order Hours
                  </p>
                  <p className="font-body-md text-body-md opacity-80">
                    10:00 – 13:30 (Daily for Pick-up)
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
              "Hidamari" — A sunny spot.
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Hidamari Restaurant is located on the 4th floor of Creekside, just a
              3-minute walk from Little Tokyo. The name evokes a comforting space where
              people can relax amidst their busy lives, creating a warm atmosphere
              reminiscent of returning to one's home.
            </p>
          </div>
        </section>

        {/* ── Bento Order ── */}
        <section
          className="max-w-7xl mx-auto px-6 md:px-margin-desktop py-section-gap"
          data-reveal
        >
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo005.png/screen.png"
                  alt="Bento box detail"
                  width={600}
                  height={480}
                  className="rounded-xl sunlit-shadow relative z-10 w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-headline-xl text-headline-xl text-primary">
                Hand-Packed Warmth
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our Bento orders are prepared with the same care as our dine-in meals.
                Each box is a complete experience of Japanese culinary balance.
              </p>
              <ul className="space-y-4">
                {[
                  "Daily Seasonal Variety",
                  "Premium Koshihikari Rice",
                  "Japanese Standard Packaging",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-secondary text-paper-white px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:translate-x-1 transition-transform active:scale-95">
                Order Bento Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
