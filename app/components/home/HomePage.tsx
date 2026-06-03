"use client";

import { useEffect } from "react";
import Image from "next/image";
import { HeroSection, HeroServiceNotice } from "@/app/components/home/HeroSection";
import { HidamariSpaceCard } from "@/app/components/home/HidamariSpaceCard";
import { HIDAMARI_GOOGLE_MAPS_URL } from "@/app/lib/site-links";
import { ContactIcon } from "@/app/components/shared/icons/ContactIcons";
import { GoogleMapEmbed } from "@/app/components/shared/GoogleMapEmbed";
import { SideQuickNav } from "@/app/components/shared/SideQuickNav";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";

export function HomePage() {
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

      <SideQuickNav />

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
                    alt="Hidamari dining room with warm orange walls and wooden tables"
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
                  create a warm atmosphere reminiscent of returning to one&apos;s
                  parents&apos; home.
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
            <div className="text-center mb-16">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                Culinary Highlights
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-2">
                Lunch &amp; Dinner Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">

              {/* Large – Weekend Lunch */}
              <div className="md:col-span-2 md:row-span-2 relative min-h-[320px] group overflow-hidden rounded-xl sunlit-shadow bg-ink-black">
                <Image
                  src="/landingPhotos/IMG_3238.JPG"
                  alt="Japanese small plates and weekend lunch dishes at Hidamari"
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

              <HidamariSpaceCard />

              {/* Sake & Drafts */}
              <div className="relative min-h-[240px] group overflow-hidden rounded-xl sunlit-shadow bg-primary">
                <Image
                  src="/landingPhotos/IMG_3038.JPG"
                  alt="Premium Japanese sake, shochu, and whisky bottles at Hidamari"
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
                className="relative min-h-[240px] group overflow-hidden rounded-xl sunlit-shadow"
                style={{ backgroundColor: "#BD3F32" }}
              >
                <Image
                  src="/landingPhotos/IMG_3224.JPG"
                  alt="Evening dining with chicken nanban and tartar sauce at Hidamari"
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

            <div className="space-y-8">
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
                      icon: "location" as const,
                      label: "Address",
                      body: "4th Floor, Penthouse, Creekside Building, Amorsolo corner V.A. Rufino Sts., Legaspi Village, Makati City",
                    },
                    {
                      icon: "schedule" as const,
                      label: "Opening Hours",
                      body: "Weekdays: 17:00 - 24:00 (Dinner Only)\nWeekends: 11:30 - 24:00",
                    },
                    { icon: "call" as const, label: "Phone", body: "02-8659-6120" },
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
                Get Directions
              </a>
            </div>

            <GoogleMapEmbed className="w-full" />

          </div>
        </section>

        </div>

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
