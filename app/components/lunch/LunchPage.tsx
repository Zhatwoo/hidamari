import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";

export function LunchPage() {
  return (
    <>
      <SiteHeader active="lunch" />
      <main className="pt-20 bg-background">

        {/* ── Hero ── */}
        <section className="relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center">
          <Image
            src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_lunch_btn.png/screen.png"
            alt="Lunch hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-ink-black/40 to-ink-black/20" />
          <div className="relative z-10 text-center space-y-4 px-6">
            <h1
              className="font-headline-xl text-paper-white tracking-widest"
              style={{ fontSize: "88px", lineHeight: 1 }}
            >
              LUNCH
            </h1>
            <p className="font-body-lg text-body-lg text-paper-white/90">
              Experience Sunlit Flavours · Weekend &amp; Holiday service
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Link
                href="/access"
                className="bg-paper-white text-primary px-6 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
              >
                Explore Lunch
              </Link>
              <Link
                href="/dinner"
                className="border border-paper-white text-paper-white px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-paper-white/10 transition-all"
              >
                View Dinner
              </Link>
            </div>
          </div>
        </section>

        {/* ── Suspended Notice (overlaps hero) ── */}
        <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-section-gap">
          <div className="bg-primary text-paper-white rounded-2xl p-8 sunlit-shadow">
            <span className="font-label-md text-label-md uppercase tracking-widest opacity-60 block mb-2">
              Service Update
            </span>
            <h2 className="font-headline-lg text-headline-lg mb-3">
              Weekday Lunch Suspended
            </h2>
            <p className="font-body-md text-body-md opacity-90 leading-relaxed">
              Starting May 16, we will temporarily suspend weekday lunch
              service. We will remain open on weekends and public holidays from
              11:30 AM to 12:00 AM, and we would be delighted if you could
              visit us.
            </p>
            <p className="font-caption text-caption opacity-50 mt-4 tracking-widest uppercase">
              Appetizer &amp; Mains · ¥ 1,200 – ¥ 2,800
            </p>
          </div>
        </section>

        {/* ── Popular Choices ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-margin-desktop pb-section-gap">
          <h2 className="font-headline-xl text-headline-xl text-primary text-center mb-10">
            Popular Choices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Omurice photo card */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden sunlit-shadow group">
              <Image
                src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_lunch_btn.png/screen.png"
                alt="Japanese Omurice"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-paper-white">
                <h3 className="font-headline-lg text-headline-lg">
                  Japanese Omurice
                </h3>
                <p className="font-body-md opacity-80 mt-1">
                  Egg-wrapped fried rice with rich demi-glace sauce
                </p>
              </div>
            </div>

            {/* Bento Box Selection dark card */}
            <div className="bg-primary-container rounded-2xl p-8 text-paper-white flex flex-col justify-between h-[400px]">
              <div className="space-y-4">
                <span className="font-label-md text-label-md uppercase tracking-widest opacity-60">
                  Featured
                </span>
                <h3
                  className="font-headline-xl text-primary-container"
                  style={{ fontSize: "32px", lineHeight: "40px", color: "#fff" }}
                >
                  Bento Box Selection
                </h3>
                <p className="font-body-md text-body-md opacity-80 leading-relaxed">
                  A curated lunch box with rotating seasonal ingredients sourced
                  fresh each morning, reflecting true Japanese home-cooking.
                </p>
                <ul className="space-y-2 font-body-md text-body-md opacity-80">
                  {[
                    "Daily freshly made",
                    "Premium-quality ingredients",
                    "Japanese fine dining packaging",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/access"
                className="self-start bg-paper-white text-primary px-6 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all mt-4"
              >
                Order Bento Now →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Hand-Packed Warmth ── */}
        <section className="bg-surface-container-low py-section-gap px-6 md:px-margin-desktop">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <Image
              src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo005.png/screen.png"
              alt="Bento box close-up"
              width={800}
              height={600}
              className="w-full h-[420px] object-cover rounded-2xl sunlit-shadow"
            />
            <div className="space-y-6">
              <h2 className="font-headline-xl text-headline-xl text-primary">
                Hand-Packed Warmth
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Our bento boxes are prepared with the same care and precision as
                our restaurant dishes. Each box is a miniature Japanese dining
                experience you can take anywhere.
              </p>
              <ul className="space-y-3">
                {[
                  "Daily freshly made",
                  "Premium-quality ingredients",
                  "Japanese fine dining packaging",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 font-body-md text-body-md text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-primary text-lg">
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-surface-container rounded-xl p-4">
                <p className="font-label-md text-label-md text-primary mb-1">
                  Bento Orders
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Order: 10:00 – 13:30 · Pick-up: 11:30 – 14:00
                </p>
              </div>
              <Link
                href="/access"
                className="inline-block bg-primary text-paper-white px-8 py-4 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all active:scale-95"
              >
                Order Bento Now
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
