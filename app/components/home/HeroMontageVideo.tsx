"use client";

import { HIDAMARI_MONTAGE_VIDEO } from "@/app/lib/site-links";

/** 25% slower than normal speed */
const PLAYBACK_RATE = 0.75;

type HeroMontageVideoProps = {
  className?: string;
  "aria-label"?: string;
};

export function HeroMontageVideo({ className, "aria-label": ariaLabel }: HeroMontageVideoProps) {
  const applyPlaybackRate = (video: HTMLVideoElement) => {
    video.playbackRate = PLAYBACK_RATE;
  };

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
      onLoadedMetadata={(e) => applyPlaybackRate(e.currentTarget)}
      onPlay={(e) => applyPlaybackRate(e.currentTarget)}
    >
      <source src={HIDAMARI_MONTAGE_VIDEO} type="video/mp4" />
    </video>
  );
}
