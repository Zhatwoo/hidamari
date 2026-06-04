"use client";

import Link from "next/link";
import { LegalPageLayout } from "@/app/components/shared/LegalPageLayout";
import { useLanguage } from "@/app/components/shared/LanguageProvider";
import { HIDAMARI_PHONE_DISPLAY, HIDAMARI_PHONE_TEL } from "@/app/lib/site-links";

type LegalDoc = "privacy" | "terms" | "careers";

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const { messages } = useLanguage();
  const content = messages.legal[doc];

  if (doc === "careers") {
    const careers = messages.legal.careers;
    return (
      <LegalPageLayout title={careers.title}>
        <p>{careers.p1}</p>
        <p>{careers.p2}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={HIDAMARI_PHONE_TEL}
            className="inline-flex bg-primary text-paper-white px-8 py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all"
          >
            {careers.call}
          </a>
          <Link
            href="/access#private-dining"
            className="inline-flex border border-primary/25 text-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-all"
          >
            {careers.privateEventsInfo}
          </Link>
        </div>
      </LegalPageLayout>
    );
  }

  if (doc === "privacy") {
    const privacy = messages.legal.privacy;
    return (
      <LegalPageLayout title={privacy.title}>
        <p>{privacy.p1}</p>
        <p>{privacy.p2}</p>
        <p>{privacy.p3}</p>
      </LegalPageLayout>
    );
  }

  const terms = messages.legal.terms;
  return (
    <LegalPageLayout title={terms.title}>
      <p>{terms.p1}</p>
      <p>{terms.p2}</p>
      <p>{terms.p3}</p>
      <p>{terms.p4}</p>
    </LegalPageLayout>
  );
}
