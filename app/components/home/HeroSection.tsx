"use client";

import Link from "next/link";
import { HeroMontageVideo } from "@/app/components/home/HeroMontageVideo";
import { useLanguage } from "@/app/components/shared/LanguageProvider";
import { NoticeImportantIcon } from "@/app/components/shared/icons/NoticeImportantIcon";

function ArrowForwardIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
  );
}

export function HeroSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative z-0 h-[calc(100dvh-5rem)] min-h-[480px] overflow-hidden bg-primary">
      <HeroMontageVideo className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/65" aria-hidden />

      <div className="relative z-10 flex h-full flex-col justify-center items-center px-6 py-8 text-center">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <span className="inline-flex h-8 items-center rounded-full border border-paper-white/25 bg-paper-white/15 px-5 font-label-md text-[11px] leading-none tracking-widest text-paper-white uppercase backdrop-blur-sm">
            <span className="leading-none pl-[0.1em]">{t("hero.badge")}</span>
          </span>

          <h1
            className="font-headline-xl text-paper-white leading-tight"
            style={{ fontSize: "clamp(32px,5vw,56px)", lineHeight: "1.15" }}
          >
            {locale === "ja" ? (
              <>
                {t("hero.title")}
                <span className="italic text-primary-fixed">{t("hero.titleItalic")}</span>
                <br />
                {t("hero.titleLine2")}
              </>
            ) : (
              <>
                {t("hero.title")}{" "}
                <span className="italic text-primary-fixed">{t("hero.titleItalic")}</span> to{" "}
                <br />
                {t("hero.titleLine2")}
              </>
            )}
          </h1>

          <p className="font-body-lg text-paper-white/90 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            {t("hero.body")}
          </p>

          <div className="flex justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-primary text-paper-white px-8 py-4 rounded-xl font-label-md text-label-md shadow-lg hover:opacity-90 active:scale-95 transition-all"
            >
              {t("hero.exploreMenu")}
              <ArrowForwardIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroServiceNotice() {
  const { t } = useLanguage();

  return (
    <div className="relative z-20 max-w-5xl mx-auto w-full px-6 -translate-y-1/2 -mb-20 md:-mb-24">
      <div className="bg-primary-container rounded-2xl sunlit-shadow overflow-hidden border-l-[6px] border-warm-accent">
        <div className="flex flex-col gap-5 p-6 md:p-7 md:flex-row md:items-center md:gap-6">
          <div className="flex justify-center md:justify-start shrink-0">
            <div className="w-12 h-12 rounded-xl bg-paper-white/12 flex items-center justify-center text-on-primary-container">
              <NoticeImportantIcon className="w-7 h-7" />
            </div>
          </div>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <p className="font-label-md text-[11px] text-secondary-fixed-dim uppercase tracking-widest mb-1">
              {t("hero.noticeLabel")}{" "}
              <span className="text-on-primary-container font-semibold normal-case tracking-normal text-sm">
                {t("hero.noticeTitle")}
              </span>
            </p>
            <p className="font-body-md text-on-primary-container/90 leading-relaxed">
              {t("hero.noticeBody")}
            </p>
          </div>
          <Link
            href="/lunch"
            className="shrink-0 w-full md:w-auto px-6 py-2.5 rounded-lg border border-on-primary-container/40 text-on-primary-container font-label-md hover:bg-paper-white/10 transition-colors text-center"
          >
            {t("hero.learnMore")}
          </Link>
        </div>
      </div>
    </div>
  );
}
