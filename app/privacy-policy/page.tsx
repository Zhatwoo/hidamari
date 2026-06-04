import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | Hidamari Japanese Restaurant",
  description: "Privacy policy for Hidamari Japanese Restaurant, Makati.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument doc="privacy" />;
}
