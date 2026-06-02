import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/10">
                <Image
                  src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_toplogo.png/screen.png"
                  alt="Hidamari logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-headline-lg text-headline-lg-mobile text-primary">
                Hidamari
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A sunlit spot for mindful Japanese dining in Makati, inspired by
              the warmth of home.
            </p>
          </div>

          {/* Explore More */}
          <div className="space-y-4">
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Explore More
            </h4>
            <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/lunch" className="hover:text-primary transition-colors">Lunch</Link></li>
              <li><Link href="/dinner" className="hover:text-primary transition-colors">Dinner</Link></li>
              <li><Link href="/access" className="hover:text-primary transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Shop Info */}
          <div className="space-y-4">
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Shop Info
            </h4>
            <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li><Link href="/access" className="hover:text-primary transition-colors">Access &amp; Map</Link></li>
              <li><Link href="/access" className="hover:text-primary transition-colors">Bento Orders</Link></li>
              <li><Link href="/access" className="hover:text-primary transition-colors">Private Dining</Link></li>
              <li><Link href="/access" className="hover:text-primary transition-colors">Party Space</Link></li>
            </ul>
          </div>

          {/* Links / Legal */}
          <div className="space-y-4">
            <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Links
            </h4>
            <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-caption text-caption text-on-surface-variant opacity-60">
            © 2024 Hidamari Japanese Restaurant. All Rights Reserved.
          </p>
          <p className="font-caption text-caption text-on-surface-variant opacity-40 tracking-widest uppercase">
            言語切り替え / Switch Language
          </p>
        </div>
      </div>
    </footer>
  );
}
