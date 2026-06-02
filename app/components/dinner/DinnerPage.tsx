import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";

export function DinnerPage() {
  return (
    <>
      <SiteHeader active="dinner" />
      <main className="pt-20 bg-background">

        {/* ── Hero – Dinner at Hidamari ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-margin-desktop py-section-gap grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
              Evening Experience
            </span>
            <h1
              className="font-headline-xl text-primary"
              style={{ fontSize: "48px", lineHeight: "56px" }}
            >
              Dinner at Hidamari
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Experience a calm, cozy evening atmosphere where slow Japanese
              dining takes center stage. Immerse in our artisanal Japanese
              dishes in the soft glow of evening.
            </p>
            <div className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-xl">
                schedule
              </span>
              <span>17:00 – 24:00 (Daily)</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/access"
                className="bg-primary text-paper-white px-6 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
              >
                View Menu
              </Link>
              <Link
                href="/access"
                className="border border-primary/30 text-primary px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all"
              >
                View Drink Menu
              </Link>
            </div>
          </div>

          {/* DINNER & DRINK arched image buttons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[340px] rounded-[2.5rem] overflow-hidden sunlit-shadow group cursor-pointer">
              <Image
                src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_dinner_btn.png/screen.png"
                alt="Dinner menu"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/75 to-transparent" />
              <div className="absolute bottom-6 inset-x-0 text-center text-paper-white">
                <h3 className="font-headline-lg text-headline-lg tracking-widest">
                  DINNER
                </h3>
                <span className="font-label-md text-label-md opacity-70">
                  VIEW MENU
                </span>
              </div>
            </div>
            <div className="relative h-[340px] rounded-[2.5rem] overflow-hidden sunlit-shadow group cursor-pointer">
              <Image
                src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png"
                alt="Drink menu"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/75 to-transparent" />
              <div className="absolute bottom-6 inset-x-0 text-center text-paper-white">
                <h3 className="font-headline-lg text-headline-lg tracking-widest">
                  DRINK
                </h3>
                <span className="font-label-md text-label-md opacity-70">
                  VIEW MENU
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Extensive Drink Selection ── */}
        <section className="bg-surface-container-low py-section-gap px-6 md:px-margin-desktop">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                Drink Category
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary mt-2">
                Extensive Drink Selection
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-xl mx-auto leading-relaxed">
                From Japanese draft beer to sake, whiskey, and cocktails — a
                beverage designed to complement your evening masterfully.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Japanese Draft – photo card */}
              <div className="relative h-[280px] rounded-2xl overflow-hidden sunlit-shadow group">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png"
                  alt="Japanese Draft Beer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/65 to-transparent" />
                <div className="absolute bottom-4 left-4 text-paper-white">
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile">
                    Japanese Draft
                  </h3>
                  <p className="font-body-md opacity-80 text-sm mt-0.5">
                    Sapporo · Kirin
                  </p>
                </div>
              </div>

              {/* Sake & Shochu – dark card */}
              <div className="bg-primary-container rounded-2xl p-6 h-[280px] flex flex-col justify-between text-paper-white">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-widest opacity-60">
                    Premium
                  </span>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile mt-2">
                    Sake &amp; Shochu
                  </h3>
                  <p className="font-body-md opacity-80 mt-3 text-sm leading-relaxed">
                    Curated selection of traditional Japanese sake and premium
                    shochu varieties.
                  </p>
                </div>
              </div>

              {/* Whiskey – photo card */}
              <div className="relative h-[280px] rounded-2xl overflow-hidden sunlit-shadow group">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_dinner_btn.png/screen.png"
                  alt="Whiskey"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/65 to-transparent" />
                <div className="absolute bottom-4 left-4 text-paper-white">
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile">
                    Whiskey
                  </h3>
                  <p className="font-body-md opacity-80 text-sm mt-0.5">
                    Suntory, Nikka &amp; more
                  </p>
                </div>
              </div>

              {/* A Space for 65 Guests – dark card */}
              <div className="bg-secondary rounded-2xl p-6 h-[280px] flex flex-col justify-between text-paper-white">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-widest opacity-60">
                    Private Space
                  </span>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile mt-2">
                    A Space for 65 Guests
                  </h3>
                  <p className="font-body-md opacity-80 mt-3 text-sm leading-relaxed">
                    Reserve our full restaurant or private rooms for events,
                    parties, and celebrations.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/access"
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:underline"
              >
                Explore Premium Labels
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Visit Us ── */}
        <section className="py-section-gap px-6 md:px-margin-desktop">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
                Visit Us
              </span>
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
                    location_on
                  </span>
                  <p>
                    4th Floor, Penthouse, Creekside Building, Amorsolo corner
                    V.A. Rufino Sts., Legaspi Village, Makati City
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0">
                    call
                  </span>
                  <p
                    className="font-headline-lg-mobile text-headline-lg-mobile text-primary"
                  >
                    02-8659-6120
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
                    mail
                  </span>
                  <p>Reservations accepted by phone or in-person</p>
                </div>
              </div>
            </div>

            {/* Map placeholder / logo card */}
            <div className="bg-surface-container rounded-2xl p-8 sunlit-shadow flex flex-col items-center justify-center text-center h-[260px]">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary/10">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_toplogo.png/screen.png"
                  alt="Hidamari logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                Hidamari Japanese Restaurant
              </h3>
              <Link
                href="/access"
                className="mt-4 font-label-md text-label-md text-primary hover:underline"
              >
                Open in Maps →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
