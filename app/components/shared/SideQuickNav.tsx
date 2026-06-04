"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

import { BentoIcon, CalendarIcon } from "@/app/components/shared/icons/SideNavIcons";

export function SideQuickNav() {
  const { t } = useLanguage();

  return (
    <aside
      className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 p-3 rounded-l-2xl sunlit-shadow border-l-4 border-secondary-container bg-primary shadow-xl"
      aria-label={t("common.quickActions")}
    >
      <Link
        href="/menu"
        className="group flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl hover:bg-paper-white/10 transition-colors"
        title={t("common.nav.menu")}
      >
        <div className="w-11 h-11 rounded-full bg-secondary-container/35 flex items-center justify-center text-primary group-hover:bg-secondary-container transition-colors">
          <CalendarIcon className="w-5 h-5" />
        </div>
        <span className="font-label-md text-paper-white uppercase tracking-widest text-[10px]">
          {t("common.nav.menu")}
        </span>
      </Link>

      <Link
        href="/menu#bento"
        className="group flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl hover:bg-paper-white/10 transition-colors"
        title={t("common.bento")}
      >
        <div className="w-11 h-11 rounded-full bg-paper-white/12 flex items-center justify-center text-paper-white group-hover:bg-paper-white/20 transition-colors">
          <BentoIcon className="w-5 h-5" />
        </div>
        <span className="font-label-md text-paper-white/85 uppercase tracking-widest text-[10px]">
          {t("common.bento")}
        </span>
      </Link>
    </aside>
  );
}
