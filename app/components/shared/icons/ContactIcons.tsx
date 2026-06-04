type IconProps = {
  className?: string;
};

export function LocationIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

export function ScheduleIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4v-2h-3V7h-2v6z" />
    </svg>
  );
}

export function CallIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M6.54 10.24l2.2 2.2c1.56 1.56 3.4 2.79 5.46 3.63l2.2-2.2c.28-.28.67-.36 1.02-.24 1.12.37 2.32.57 3.56.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.2 21 3 14.8 3 7c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.44.57 3.56.12.35.04.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function EmailIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export type ContactIconType = "location" | "schedule" | "call" | "email";

export function ContactIcon({
  type,
  className = "w-6 h-6 shrink-0 text-primary",
}: {
  type: ContactIconType;
  className?: string;
}) {
  switch (type) {
    case "location":
      return <LocationIcon className={className} />;
    case "schedule":
      return <ScheduleIcon className={className} />;
    case "call":
      return <CallIcon className={className} />;
    case "email":
      return <EmailIcon className={className} />;
  }
}
