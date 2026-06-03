type IconProps = {
  className?: string;
};

/** Calendar — book a table */
export function CalendarIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zM7 6h2v2H7V6zm10 0h2v2h-2V6z" />
    </svg>
  );
}

/** Bento / dining */
export function BentoIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm0 18H6V8h12v12zM8 10h3v3H8v-3zm5 0h3v3h-3v-3zM8 15h3v3H8v-3zm5 0h3v3h-3v-3z" />
    </svg>
  );
}
