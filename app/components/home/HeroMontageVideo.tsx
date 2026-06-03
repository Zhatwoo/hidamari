"use client";

import { HIDAMARI_MONTAGE_VIDEO } from "@/app/lib/site-links";

type HeroMontageVideoProps = {
  className?: string;
  "aria-label"?: string;
};

export function HeroMontageVideo({ className, "aria-label": ariaLabel }: HeroMontageVideoProps) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
    >
      <source src={HIDAMARI_MONTAGE_VIDEO} type="video/mp4" />
    </video>
  );
}
