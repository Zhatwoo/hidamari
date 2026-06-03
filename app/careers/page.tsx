import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/app/components/shared/LegalPageLayout";
import { HIDAMARI_PHONE_DISPLAY, HIDAMARI_PHONE_TEL } from "@/app/lib/site-links";

export const metadata: Metadata = {
  title: "Careers | Hidamari Japanese Restaurant",
  description: "Career opportunities at Hidamari Japanese Restaurant, Makati.",
};

export default function CareersPage() {
  return (
    <LegalPageLayout title="Careers">
      <p>
        Hidamari is always interested in meeting people who share our commitment
        to warm hospitality and thoughtful Japanese dining. Open roles vary by
        season; we hire for kitchen, service, and support positions when needed.
      </p>
      <p>
        To inquire about current opportunities, please call the restaurant or visit
        us during operating hours. You may also ask our team about the Membership
        Hidamari BAR, our affiliated members-only bar with counter seating and
        private karaoke rooms.
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href={HIDAMARI_PHONE_TEL}
          className="inline-flex bg-primary text-paper-white px-8 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all"
        >
          Call {HIDAMARI_PHONE_DISPLAY}
        </a>
        <Link
          href="/access#membership-bar"
          className="inline-flex border border-primary/25 text-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all"
        >
          Membership Bar Info
        </Link>
      </div>
    </LegalPageLayout>
  );
}
