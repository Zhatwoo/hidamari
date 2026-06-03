import Link from "next/link";
import { BentoIcon, CalendarIcon } from "@/app/components/shared/icons/SideNavIcons";

export function SideQuickNav() {
  return (
    <aside
      className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 p-3 rounded-l-2xl sunlit-shadow border-l-4 border-secondary-container bg-primary shadow-xl"
      aria-label="Quick actions"
    >
      <Link
        href="tel:0286596120"
        className="group flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl hover:bg-paper-white/10 transition-colors"
        title="Book a table"
      >
        <div className="w-11 h-11 rounded-full bg-secondary-container/35 flex items-center justify-center text-primary group-hover:bg-secondary-container transition-colors">
          <CalendarIcon className="w-5 h-5" />
        </div>
        <span className="font-label-md text-paper-white uppercase tracking-widest text-[10px]">
          Book
        </span>
      </Link>

      <Link
        href="/lunch"
        className="group flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl hover:bg-paper-white/10 transition-colors"
        title="Bento orders"
      >
        <div className="w-11 h-11 rounded-full bg-paper-white/12 flex items-center justify-center text-paper-white group-hover:bg-paper-white/20 transition-colors">
          <BentoIcon className="w-5 h-5" />
        </div>
        <span className="font-label-md text-paper-white/85 uppercase tracking-widest text-[10px]">
          Bento
        </span>
      </Link>
    </aside>
  );
}
