import type { Metadata } from "next";
import { LegalPageLayout } from "@/app/components/shared/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Hidamari Japanese Restaurant",
  description: "Privacy policy for Hidamari Japanese Restaurant, Makati.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        Hidamari Japanese Restaurant respects your privacy. We collect only the
        information needed to handle reservations, bento orders, and inquiries made
        by phone or in person at our restaurant.
      </p>
      <p>
        We do not sell personal data. Information shared with us may be used to
        confirm bookings, respond to questions, and improve our service. If you
        have questions about how your data is handled, please contact us at the
        restaurant during business hours.
      </p>
      <p>Last updated: June 2024.</p>
    </LegalPageLayout>
  );
}
