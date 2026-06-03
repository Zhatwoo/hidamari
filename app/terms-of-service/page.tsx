import type { Metadata } from "next";
import { LegalPageLayout } from "@/app/components/shared/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Hidamari Japanese Restaurant",
  description: "Terms of service for Hidamari Japanese Restaurant, Makati.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p>
        By visiting Hidamari Japanese Restaurant or using our website, you agree
        to follow our house rules and applicable local laws. Menu items, prices,
        and hours may change without notice.
      </p>
      <p>
        Reservations and bento orders are subject to availability. Last-order
        times apply as posted on our Lunch, Dinner, and Access pages. We reserve
        the right to refuse service when necessary for the safety and comfort of
        all guests.
      </p>
      <p>
        Content on this site is provided for general information. For the most
        current details, please call the restaurant or visit us in person.
      </p>
      <p>Last updated: June 2024.</p>
    </LegalPageLayout>
  );
}
