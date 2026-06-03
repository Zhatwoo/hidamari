"use client";

import { useEffect } from "react";
import Image from "next/image";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";

export function HomePage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => io.observe(el));

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

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <SiteHeader active="home" />

      {/* Side NavBar desktop widget */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col gap-4 p-4 z-40 bg-surface-container-low rounded-l-xl sunlit-shadow border border-primary/5">
        <div className="flex flex-col items-center gap-1 mb-2">
          <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
          <span className="font-label-md text-primary uppercase tracking-widest" style={{ fontSize: "10px" }}>Book</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-surface-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-primary/5 cursor-pointer transition-colors">
            <span className="material-symbols-outlined">restaurant</span>
          </div>
          <span className="font-label-md text-on-surface-variant uppercase tracking-widest" style={{ fontSize: "10px" }}>Bento</span>
        </div>
      </div>

      <main className="bg-background text-on-background overflow-x-hidden">

        {/* ══════════════════════════════════════════
            HERO – full-screen centered glassmorphism card
        ══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

          {/* Full-width background image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_lunch_btn.png/screen.png"
              alt="Signature Dish"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Centered glassmorphism card */}
          <div className="relative z-20 max-w-2xl mx-6 w-full">
            <div
              className="p-10 md:p-16 rounded-3xl text-center flex flex-col items-center space-y-8 shadow-2xl border border-white/20"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Logo */}
              <Image
                src="/logo_hidamari-removebg-preview.png"
                alt="Hidamari Logo"
                width={160}
                height={160}
                className="h-32 md:h-40 w-auto object-contain"
              />

              {/* Content */}
              <div className="space-y-4">
                <h1
                  className="font-headline-xl text-paper-white leading-tight"
                  style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: "1.15" }}
                >
                  Rediscover{" "}
                  <span className="italic text-primary-fixed">Tranquility</span>{" "}
                  in Every Bite
                </h1>
                <p className="font-body-lg text-paper-white/90 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                  A sunlit sanctuary in the heart of Makati, where artisanal
                  Japanese cuisine meets the warmth of home.
                </p>
              </div>

              {/* CTA */}
              <button className="px-12 py-5 bg-primary-container text-paper-white rounded-xl font-label-md text-lg uppercase tracking-widest hover:bg-primary transition-all hover:scale-105 shadow-xl shadow-black/20">
                Book a Table
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ANNOUNCEMENT BANNER
        ══════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 -mt-10 md:-mt-20 relative z-30 mb-section-gap reveal-on-scroll">
          <div className="relative overflow-hidden p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md" style={{ background: "rgba(94,62,5,0.95)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-paper-white border border-white/30"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}
              >
                <span className="material-symbols-outlined text-3xl animate-bounce">campaign</span>
              </div>
              <div className="flex-1 text-paper-white text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="font-label-md text-xs uppercase tracking-widest text-secondary-fixed-dim">
                    Service Notice
                  </span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-paper-white/30" />
                  <h3 className="font-bold text-lg">Important Update</h3>
                </div>
                <p className="font-body-md text-paper-white/90 leading-relaxed max-w-2xl">
                  Starting May 16, we will temporarily{" "}
                  <span className="font-bold text-white underline decoration-secondary-fixed-dim">
                    suspend weekday lunch service
                  </span>
                  . We remain open continuously on weekends and public holidays
                  from 11:30 AM to 12:00 AM.
                </p>
              </div>
              <button className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-paper-white font-label-md transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PHILOSOPHY
        ══════════════════════════════════════════ */}
        <section className="py-section-gap bg-surface-container-low" id="about">
          <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
            <div className="grid md:grid-cols-12 gap-12 items-center">

              <div className="md:col-span-7 reveal-on-scroll">
                <div className="relative h-[400px] rounded-xl overflow-hidden sunlit-shadow">
                  <Image
                    src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png"
                    alt="Sunlit restaurant interior"
                    fill
                    className="object-cover transition-all duration-700"
                    style={{ filter: "grayscale(20%)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(20%)")}
                  />
                </div>
              </div>

              <div className="md:col-span-5 space-y-6 reveal-on-scroll reveal-delay-2">
                <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase">
                  The Philosophy
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                  Comfort amidst the busy urban life of Makati.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Hidamari Restaurant is located on the 4th floor of Creekside,
                  just a 3-minute walk from Little Tokyo. I chose the name
                  Hidamari with great care, as I wanted it to be a comforting
                  space where people can relax amidst their busy lives, and to
                  create a warm atmosphere reminiscent of returning to one's
                  parents' home.
                </p>
                <div className="pt-4 flex gap-8">
                  {[
                    { num: "65", label: "Capacity" },
                    { num: "4", label: "Floors Up" },
                    { num: "3", label: "Seating Types" },
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
            <div className="text-center mb-16 reveal-on-scroll">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                Culinary Highlights
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
                Lunch &amp; Dinner Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">

              {/* Large – Weekend Lunch */}
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl sunlit-shadow bg-ink-black reveal-on-scroll">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo005.png/screen.png"
                  alt="Artisanal bento"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/90 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-secondary-fixed-dim font-label-md text-label-md uppercase tracking-widest mb-2">
                    Artisanal Bento
                  </span>
                  <h3 className="text-paper-white font-headline-lg text-headline-lg">
                    Weekend Lunch Service
                  </h3>
                  <p className="text-paper-white/80 font-body-md text-body-md mt-2">
                    11:30 AM - 2:00 PM (L.O.)
                  </p>
                </div>
              </div>

              {/* Atmosphere – split */}
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl sunlit-shadow bg-surface-container reveal-on-scroll reveal-delay-1">
                <div className="grid grid-cols-2 h-full">
                  <div className="p-8 flex flex-col justify-center space-y-4">
                    <span className="text-tertiary font-label-md text-label-md uppercase tracking-widest">
                      Atmosphere
                    </span>
                    <h3 className="text-primary font-headline-lg text-headline-lg">
                      Hidamari SPACE
                    </h3>
                    <p className="text-on-surface-variant font-body-md text-body-md">
                      Spacious dining and private rooms for up to 65 guests.
                    </p>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo003.png/screen.png"
                      alt="Restaurant ambiance"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Sake & Drafts */}
              <div className="relative group overflow-hidden rounded-xl sunlit-shadow bg-primary reveal-on-scroll reveal-delay-2">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png"
                  alt="Premium sake and drafts"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-paper-white font-headline-lg text-2xl">
                    Premium Sake &amp; Drafts
                  </h4>
                </div>
              </div>

              {/* Evening Dining */}
              <div
                id="dinner"
                className="relative group overflow-hidden rounded-xl sunlit-shadow reveal-on-scroll reveal-delay-3"
                style={{ backgroundColor: "#BD3F32" }}
              >
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_dinner_btn.png/screen.png"
                  alt="Evening dining"
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-paper-white font-headline-lg text-2xl">Evening Dining</h4>
                  <p className="text-paper-white/80 font-caption text-caption uppercase mt-1">
                    Daily from 5:00 PM
                  </p>
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

            <div className="space-y-8 reveal-on-scroll">
              <div className="space-y-4">
                <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase">
                  Find Us
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  In the heart of Makati
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: "location_on",
                      label: "Address",
                      body: "4th Floor, Penthouse, Creekside Building, Amorsolo corner V.A. Rufino Sts., Legaspi Village, Makati City",
                    },
                    {
                      icon: "schedule",
                      label: "Opening Hours",
                      body: "Weekdays: 17:00 - 24:00 (Dinner Only)\nWeekends: 11:30 - 24:00",
                    },
                    { icon: "call", label: "Phone", body: "02-8659-6120" },
                  ].map(({ icon, label, body }) => (
                    <div key={label} className="flex gap-4">
                      <span className="material-symbols-outlined text-primary">{icon}</span>
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
              <button className="bg-primary text-paper-white px-8 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">
                Get Directions
              </button>
            </div>

            {/* Stylised map */}
            <div
              className="h-[450px] bg-surface-dim rounded-xl overflow-hidden sunlit-shadow relative border-[8px] border-paper-white reveal-on-scroll reveal-delay-2"
              style={{ filter: "grayscale(30%)" }}
            >
              <Image
                src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png"
                alt="Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink-black/70" />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,220,80,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,220,80,0.35) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="rounded-full"
                  style={{
                    width: 120,
                    height: 120,
                    background: "radial-gradient(circle, rgba(189,63,50,0.45) 0%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-paper-white p-4 rounded-full sunlit-shadow animate-bounce">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <SiteFooter />

      {/* FAB mobile */}
      <div className="fixed bottom-8 right-8 z-50 md:hidden">
        <button className="bg-primary text-paper-white w-14 h-14 rounded-full sunlit-shadow flex items-center justify-center active:scale-90 transition-transform">
          <span className="material-symbols-outlined">calendar_month</span>
        </button>
      </div>
    </>
  );
}
