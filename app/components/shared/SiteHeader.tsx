import Link from "next/link";
import Image from "next/image";

type SiteHeaderProps = {
  active: "home" | "lunch" | "dinner" | "menu" | "access";
};

const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "lunch", label: "Lunch", href: "/lunch" },
  { key: "dinner", label: "Dinner", href: "/dinner" },
  { key: "menu", label: "Menu", href: "/menu" },
  { key: "access", label: "Access", href: "/access" },
] as const;

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-paper-white/85 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop h-20 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_hidamari-removebg-preview.png"
            alt="Hidamari logo"
            width={44}
            height={44}
            className="object-contain"
          />
          <span className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Hidamari
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                item.key === active
                  ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
                  : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="bg-primary text-paper-white px-6 py-2 rounded-xl font-label-md text-label-md active:scale-95 transition-transform duration-200 hover:opacity-90">
          Book a Table
        </button>
      </nav>
    </header>
  );
}
