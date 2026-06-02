import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";

export function HomePage() {
  return (
    <>
      <SiteHeader active="home" />
      <main className="pt-20 bg-background text-on-background">

        {/* ── Hero ── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 md:px-margin-desktop py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/20 via-transparent to-primary/5 -z-10" />
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

            <div className="space-y-8 animate-fade-in">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.25em] uppercase">
                Japanese Artisanal Dining
              </span>
              <h1
                className="font-headline-xl text-primary leading-tight"
                style={{ fontSize: "52px", lineHeight: "60px" }}
              >
                A <em>Sunlit Spot</em> to<br />
                Rediscover Tranquility
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md leading-relaxed">
                Welcome to a comforting place in the heart of Makati where
                people can unwind amidst the busy lives, inspired by the warmth
                of a traditional home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/lunch"
                  className="bg-primary text-paper-white px-8 py-4 rounded-xl font-label-md text-label-md shadow-md hover:opacity-90 transition-all active:scale-95"
                >
                  Explore Menu
                </Link>
                <Link
                  href="/dinner"
                  className="border border-primary/30 text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Right – decorative Japanese text + floating images */}
            <div className="relative flex items-center justify-center h-[500px]">
              <div className="absolute inset-0 bg-secondary-container/20 rounded-[3rem] blur-3xl -z-10" />
              {/* Watermark Japanese text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 select-none pointer-events-none opacity-10">
                <span
                  className="font-headline-xl text-primary"
                  style={{ fontSize: "80px", lineHeight: 1, fontFamily: "serif" }}
                >
                  ごはん処
                </span>
                <span
                  className="font-headline-xl text-primary"
                  style={{ fontSize: "80px", lineHeight: 1, fontFamily: "serif" }}
                >
                  ひだまり
                </span>
                <span
                  className="text-secondary"
                  style={{ fontSize: "44px", lineHeight: 1.2, fontFamily: "serif" }}
                >
                  "Hidamari"
                </span>
              </div>
              {/* Main circular image */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-paper-white sunlit-shadow animate-float z-20">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_lunch_btn.png/screen.png"
                  alt="Japanese cuisine"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Small circle bottom-left */}
              <div className="absolute bottom-8 left-4 w-40 h-40 rounded-full overflow-hidden border-4 border-paper-white sunlit-shadow z-20">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo003.png/screen.png"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Announcement Banner ── */}
        <section className="px-6 md:px-margin-desktop mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary-container rounded-xl p-6 flex items-start gap-4">
              <span className="material-symbols-outlined text-paper-white text-2xl mt-0.5 shrink-0">
                campaign
              </span>
              <div className="text-paper-white">
                <span className="font-label-md text-label-md uppercase tracking-widest opacity-70 block mb-1">
                  Important Update · 2026.5.16
                </span>
                <p className="font-body-md text-body-md leading-relaxed">
                  Starting May 16, weekday lunch service is temporarily
                  suspended. Weekend and holiday service continues from 11:30 AM
                  through midnight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Philosophy ── */}
        <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png"
              alt="Sunlit restaurant interior"
              width={800}
              height={600}
              className="w-full h-[420px] object-cover rounded-2xl sunlit-shadow"
            />
            <div className="space-y-6">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                The Philosophy
              </span>
              <h2
                className="font-headline-xl text-primary leading-snug"
                style={{ fontSize: "36px", lineHeight: "44px" }}
              >
                Comfort amidst the busy urban life of Makati
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Hidamari Restaurant is located on the 4th floor of Creekside,
                just a 3-minute walk from Little Tokyo and Makati Square.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                I chose the name Hidamari with great care, as I wanted it to be
                a comforting space where people can relax amidst their busy
                lives, and to create a warm atmosphere reminiscent of returning
                to one's parents' home.
              </p>
              <div className="flex gap-6 pt-2 font-caption text-caption text-on-surface-variant/60 tracking-widest uppercase">
                <span>About</span>
                <span>Facebook</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Culinary Soul Food / Menu Feature ── */}
        <section className="py-section-gap px-6 md:px-margin-desktop">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                Culinary Soul Food
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary mt-2">
                Lunch &amp; Dinner Experience
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hidamari SPACE */}
              <div className="relative h-[360px] rounded-2xl overflow-hidden sunlit-shadow group cursor-pointer">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo003.png/screen.png"
                  alt="Hidamari SPACE"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 via-ink-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-paper-white">
                  <span className="font-label-md text-label-md uppercase tracking-widest opacity-60">
                    Dine Category
                  </span>
                  <h3 className="font-headline-lg text-headline-lg mt-1">
                    Hidamari SPACE
                  </h3>
                  <p className="font-body-md text-body-md opacity-80 mt-1">
                    Spacious dining for up to 65 guests
                  </p>
                </div>
              </div>
              {/* Food photo */}
              <Image
                src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo005.png/screen.png"
                alt="Seasonal cuisine"
                width={800}
                height={800}
                className="w-full h-[360px] object-cover rounded-2xl sunlit-shadow"
              />
              {/* Weekend Lunch Service */}
              <div className="relative h-[360px] rounded-2xl overflow-hidden sunlit-shadow group cursor-pointer">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_dinner_btn.png/screen.png"
                  alt="Weekend Lunch Service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 via-ink-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-paper-white">
                  <span className="font-label-md text-label-md uppercase tracking-widest opacity-60">
                    Opening Hours
                  </span>
                  <h3 className="font-headline-lg text-headline-lg mt-1">
                    Weekend Lunch Service
                  </h3>
                  <p className="font-body-md text-body-md opacity-80 mt-1">
                    Saturday / Sunday · Holiday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Finding Us ── */}
        <section className="py-section-gap px-6 md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                Finding Us
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary">
                In the heart of Makati
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
                    location_on
                  </span>
                  <p className="font-body-md text-on-surface-variant">
                    4th Floor, Penthouse, Creekside Building, Amorsolo corner
                    V.A. Rufino Sts., Legaspi Village, Makati City
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
                    schedule
                  </span>
                  <div className="font-body-md text-on-surface-variant space-y-1">
                    <p>
                      <strong>Weekdays:</strong> Dinner 17:00 – 24:00
                    </p>
                    <p>
                      <strong>Weekends / Holidays:</strong> 11:30 – 24:00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0">
                    call
                  </span>
                  <p className="font-body-md text-on-surface-variant">
                    02-8659-6120
                  </p>
                </div>
              </div>
              <Link
                href="/access"
                className="inline-block bg-primary text-paper-white px-8 py-4 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
              >
                Get Directions
              </Link>
            </div>

            {/* Map card */}
            <div className="relative h-[320px] bg-surface-container rounded-2xl overflow-hidden sunlit-shadow flex items-center justify-center">
              <Image
                src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png"
                alt="Restaurant ambiance"
                fill
                className="object-cover opacity-30"
              />
              <div className="relative z-10 text-center p-8 bg-paper-white/90 rounded-2xl sunlit-shadow">
                <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-3">
                  <Image
                    src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_toplogo.png/screen.png"
                    alt="Hidamari logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  Hidamari
                </div>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Japanese Restaurant
                </p>
                <Link
                  href="/access"
                  className="mt-3 inline-block font-label-md text-label-md text-primary hover:underline"
                >
                  Open in Maps →
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
