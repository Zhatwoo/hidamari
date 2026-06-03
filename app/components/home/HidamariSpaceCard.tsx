import Image from "next/image";

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

const BUBBLE_LAYOUT: { position: string; size: number; alt: string }[] = [
  { position: "top-[5%] left-[6%]", size: 88, alt: "Private dining room" },
  { position: "top-[2%] right-[10%]", size: 112, alt: "Restaurant interior" },
  { position: "top-[36%] left-[24%]", size: 96, alt: "Table setting" },
  { position: "top-[20%] left-[50%]", size: 72, alt: "Dining detail" },
  { position: "bottom-[30%] left-[2%]", size: 80, alt: "Warm ambiance" },
  { position: "bottom-[6%] right-[8%]", size: 124, alt: "Hidamari space overview" },
  { position: "bottom-[34%] right-[30%]", size: 90, alt: "Seating area" },
  { position: "top-[54%] right-[4%]", size: 68, alt: "Restaurant atmosphere" },
];

export function HidamariSpaceCard() {
  return (
    <div className="md:col-span-2 relative overflow-hidden rounded-xl sunlit-shadow bg-surface-container min-h-[420px] md:min-h-0">
      <div className="flex flex-col md:flex-row h-full">
        <div className="p-8 md:p-10 flex flex-col justify-center space-y-4 md:w-[44%] shrink-0 z-10 relative bg-surface-container">
          <span className="text-tertiary font-label-md text-label-md uppercase tracking-widest">
            Atmosphere
          </span>
          <h3 className="text-primary font-headline-lg text-headline-lg leading-tight">
            Hidamari SPACE
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Spacious dining and private rooms for up to 65 guests.
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
                  alt={layout.alt}
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
