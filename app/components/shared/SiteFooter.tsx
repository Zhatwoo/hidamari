"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container w-full py-section-gap border-t border-primary/10">

      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-margin-desktop max-w-7xl mx-auto gap-10">

        {/* Brand */}
        <div className="max-w-xs">
          <div className="font-headline-lg text-headline-lg text-primary mb-4">Hidamari</div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Experience a comforting space where people can relax amidst their busy
            lives, in the heart of Makati City.
          </p>
        </div>

        {/* 3-column nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-8 md:mt-0">

          <div className="flex flex-col gap-2">
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              Explore
            </h5>
            {[
              { label: "Home", href: "/" },
              { label: "Lunch", href: "/lunch" },
              { label: "Dinner", href: "/dinner" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              Shop Info
            </h5>
            {[
              { label: "Access", href: "/access" },
              { label: "Bento Orders", href: "/access" },
              { label: "Membership Bar", href: "/access" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">
              Legal
            </h5>
            {["Privacy Policy", "Terms of Service", "Careers"].map((item) => (
              <span
                key={item}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop mt-12 pt-8 border-t border-primary/5">
        <p className="font-caption text-caption text-on-surface-variant opacity-70">
          © 2024 Hidamari Japanese Restaurant. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
