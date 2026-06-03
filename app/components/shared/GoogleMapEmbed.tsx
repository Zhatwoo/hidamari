import Link from "next/link";
import {
  HIDAMARI_GOOGLE_MAPS_EMBED_URL,
  HIDAMARI_GOOGLE_MAPS_URL,
} from "@/app/lib/site-links";

type GoogleMapEmbedProps = {
  className?: string;
  heightClassName?: string;
};

export function GoogleMapEmbed({
  className = "",
  heightClassName = "h-[450px]",
}: GoogleMapEmbedProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl sunlit-shadow border-[8px] border-paper-white ${heightClassName} ${className}`}
    >
      <iframe
        title="Hidamari Japanese Restaurant on Google Maps"
        src={HIDAMARI_GOOGLE_MAPS_EMBED_URL}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <Link
        href={HIDAMARI_GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-10 rounded-xl bg-primary px-4 py-2 font-label-md text-label-md text-paper-white shadow-lg hover:opacity-90 transition-opacity"
      >
        Open in Google Maps
      </Link>
    </div>
  );
}
