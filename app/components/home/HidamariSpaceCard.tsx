"use client";

import Image from "next/image";
import { useLanguage } from "@/app/components/shared/LanguageProvider";

const HIDAMARI_SPACE_PHOTOS = [
  "/landingPhotos/hidamariSpace/IMG_3253.JPG",
  "/landingPhotos/hidamariSpace/IMG_3260.JPG",
  "/landingPhotos/hidamariSpace/IMG_3263.JPG",
  "/landingPhotos/hidamariSpace/IMG_3265.JPG",
  "/landingPhotos/hidamariSpace/IMG_3285.JPG",
  "/landingPhotos/hidamariSpace/IMG_3287.JPG",
  "/landingPhotos/hidamariSpace/IMG_3294.JPG",
  "/landingPhotos/hidamariSpace/IMG_3306.JPG",
] as const;

const BUBBLE_LAYOUT: { position: string; size: number }[] = [
  { position: "top-[5%] left-[6%]", size: 88 },
  { position: "top-[2%] right-[10%]", size: 112 },
  { position: "top-[36%] left-[24%]", size: 96 },
  { position: "top-[20%] left-[50%]", size: 72 },
  { position: "bottom-[30%] left-[2%]", size: 80 },
  { position: "bottom-[6%] right-[8%]", size: 124 },
  { position: "bottom-[34%] right-[30%]", size: 90 },
  { position: "top-[54%] right-[4%]", size: 68 },
];

export function HidamariSpaceCard() {
  const { t, messages } = useLanguage();

  return (
    <div className="md:col-span-2 relative overflow-hidden rounded-xl sunlit-shadow bg-surface-container min-h-[420px] md:min-h-0">
      <div className="flex flex-col md:flex-row h-full">
        <div className="p-8 md:p-10 flex flex-col justify-center space-y-4 md:w-[44%] shrink-0 z-10 relative bg-surface-container">
          <span className="text-tertiary font-label-md text-label-md uppercase tracking-widest">
            {t("hidamariSpace.atmosphere")}
          </span>
          <h3 className="text-primary font-headline-lg leading-tight" style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
            {t("hidamariSpace.title")}
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            {t("hidamariSpace.body")}
          </p>
        </div>

        <div className="relative flex-1 min-h-[300px] md:min-h-full bg-surface-container-low/50">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, var(--color-secondary-container) 0%, transparent 70%)",
              }}
            />
          </div>

          {HIDAMARI_SPACE_PHOTOS.map((src, index) => {
            const layout = BUBBLE_LAYOUT[index];
            return (
              <div
                key={src}
                className={`absolute ${layout.position} rounded-full overflow-hidden sunlit-shadow border-[3px] border-paper-white transition-transform duration-500 hover:scale-105 hover:z-30`}
                style={{
                  width: layout.size,
                  height: layout.size,
                  zIndex: 10 + index,
                }}
              >
                <Image
                  src={src}
                  alt={messages.hidamariSpace.alts[index]}
                  fill
                  sizes={`${layout.size}px`}
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
