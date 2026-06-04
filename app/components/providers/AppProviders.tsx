"use client";

import { LanguageProvider } from "@/app/components/shared/LanguageProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
