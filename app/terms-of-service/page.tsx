import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service | Hidamari Japanese Restaurant",
  description: "Terms of service for Hidamari Japanese Restaurant, Makati.",
};

export default function TermsOfServicePage() {
  return <LegalDocument doc="terms" />;
}
