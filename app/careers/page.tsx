import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Careers | Hidamari Japanese Restaurant",
  description: "Career opportunities at Hidamari Japanese Restaurant, Makati.",
};

export default function CareersPage() {
  return <LegalDocument doc="careers" />;
}
