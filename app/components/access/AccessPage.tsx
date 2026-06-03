import Image from "next/image";
import { HIDAMARI_PHONE_DISPLAY, HIDAMARI_PHONE_TEL } from "@/app/lib/site-links";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import {
  LocationIcon,
  ScheduleIcon,
} from "@/app/components/shared/icons/ContactIcons";
import { GoogleMapEmbed } from "@/app/components/shared/GoogleMapEmbed";
import { SiteHeader } from "@/app/components/shared/SiteHeader";

export function AccessPage() {
  return (
    <>
      <SiteHeader active="access" />
      <main className="pt-28 pb-section-gap bg-background">

        {/* ── Header ── */}
        <header className="text-center px-6 mb-12 animate-fade-in">
          <span className="font-label-md text-label-md text-tertiary tracking-[0.2em] uppercase">
            Contact
          </span>
          <h1 className="font-headline-xl text-headline-xl text-primary mt-2">
            Shop Info &amp; Access
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            A sun-filled location in the heart of Makati City, reminiscent of
            returning home.
          </p>
        </header>

        {/* ── Interior hero photo ── */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="relative h-[340px] md:h-[440px] rounded-2xl overflow-hidden sunlit-shadow">
            <Image
              src="/landingPhotos/IMG_2957.JPG"
              alt="Hidamari Restaurant sign on warm wood interior wall with greenery and lights"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover object-[55%_center]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-black/35 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-paper-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="font-label-md text-label-md text-primary">
                Hidamari Restaurant
              </span>
            </div>
          </div>
        </div>

        {/* ── Location + Opening Hours ── */}
        <div className="max-w-6xl mx-auto px-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location */}
          <div className="bg-paper-white rounded-2xl sunlit-shadow p-8 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <LocationIcon className="w-6 h-6 text-primary" />
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                Location
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              4th Floor, Penthouse, Creekside Building,<br />
              Amorsolo corner V.A. Rufino Sts.,<br />
              Legaspi Village, Makati City
            </p>
            <div className="pt-2 border-t border-surface-variant">
              <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                Phone
              </span>
              <a
                href={HIDAMARI_PHONE_TEL}
                className="font-headline-lg-mobile text-headline-lg-mobile text-primary hover:underline"
              >
                {HIDAMARI_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-paper-white rounded-2xl sunlit-shadow p-8 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ScheduleIcon className="w-6 h-6 text-primary" />
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                Opening Hours
              </h2>
            </div>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <div>
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  Weekdays
                </span>
                <p>Dinner: 17:00 – 24:00 (Last Order: 23:00)</p>
                <p className="text-warm-accent text-sm mt-0.5">
                  *Weekday lunch suspended from May 16
                </p>
              </div>
              <div>
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  Weekends &amp; Holidays
                </span>
                <p>Open: 11:30 – 24:00</p>
                <p className="text-sm opacity-70 mt-0.5">
                  Lunch Last Order: 14:00 · Dinner Last Order: 23:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── How to Find Us ── */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-8">
            How to Find Us
          </h2>

          <GoogleMapEmbed
            className="mb-8 border-0"
            heightClassName="h-[300px]"
          />

          {/* Directions */}
          <ul className="space-y-4">
            {[
              "Take the Amorsolo Skyway exit and turn left — the building on the left is Creekside.",
              "Located in the Creekside building on the 4th-floor penthouse; take the elevator from the main lobby.",
              "A 3-minute walk from Little Tokyo and Cinema Square — positioned along the main Amorsolo avenue.",
            ].map((dir, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-secondary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {dir}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Lunch hours */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-surface-container-low rounded-2xl p-8 sunlit-shadow">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2">
              Lunch Hours
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Lunch service is currently available on weekends and public holidays.
              Please check the schedule before visiting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-paper-white rounded-xl p-5 sunlit-shadow">
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  Lunch Service
                </span>
                <p className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  11:30 - 14:00
                </p>
              </div>
              <div className="bg-paper-white rounded-xl p-5 sunlit-shadow">
                <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1">
                  Available Days
                </span>
                <p className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                  Weekends & Holidays
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
      <SiteFooter />
    </>
  );
}
