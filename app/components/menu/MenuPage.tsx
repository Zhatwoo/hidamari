"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { SiteFooter } from "@/app/components/shared/SiteFooter";

/* ─── Menu Data ─────────────────────────────────────────────── */

type Item = { name: string; jp: string; desc: string; price: string };
type Category = { name: string; jp: string; note?: string; items: Item[] };
type Section = {
  id: string;
  label: string;
  jp: string;
  schedule: string;
  image: string;
  categories: Category[];
};

const sections: Section[] = [
  {
    id: "lunch",
    label: "Lunch",
    jp: "ランチ",
    schedule: "Weekends & Holidays · 11:30 – 14:00 (L.O.)",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_lunch_btn.png/screen.png",
    categories: [
      {
        name: "Starters",
        jp: "前菜",
        items: [
          {
            name: "Edamame",
            jp: "枝豆",
            desc: "Salted steamed soybeans",
            price: "₱120",
          },
          {
            name: "Karaage",
            jp: "唐揚げ",
            desc: "Crispy Japanese fried chicken · 5 pieces",
            price: "₱280",
          },
          {
            name: "Gyoza",
            jp: "餃子",
            desc: "Pan-fried pork and vegetable dumplings · 6 pieces",
            price: "₱250",
          },
          {
            name: "Agedashi Tofu",
            jp: "揚げ出し豆腐",
            desc: "Lightly fried silken tofu served in warm dashi broth",
            price: "₱200",
          },
        ],
      },
      {
        name: "Rice & Noodles",
        jp: "ご飯・麺",
        items: [
          {
            name: "Classic Omurice",
            jp: "オムライス",
            desc: "Fluffy omelet over savory chicken fried rice with demi-glace sauce",
            price: "₱380",
          },
          {
            name: "Tonkotsu Ramen",
            jp: "豚骨ラーメン",
            desc: "Rich pork bone broth · chashu · soft-boiled egg · bamboo shoots",
            price: "₱420",
          },
          {
            name: "Yakisoba",
            jp: "焼きそば",
            desc: "Stir-fried noodles with pork, cabbage, and seasonal vegetables",
            price: "₱350",
          },
          {
            name: "Zaru Soba",
            jp: "ざる蕎麦",
            desc: "Chilled buckwheat noodles served with tsuyu dipping sauce",
            price: "₱320",
          },
        ],
      },
      {
        name: "Teishoku Sets",
        jp: "定食",
        note: "All sets include steamed rice, miso soup, and seasonal pickles",
        items: [
          {
            name: "Salmon Teriyaki Set",
            jp: "鮭照り焼き定食",
            desc: "Grilled salmon fillet glazed with house teriyaki sauce",
            price: "₱680",
          },
          {
            name: "Chicken Katsu Set",
            jp: "チキンカツ定食",
            desc: "Crispy panko-breaded chicken cutlet with tonkatsu sauce",
            price: "₱580",
          },
          {
            name: "Ginger Pork Set",
            jp: "生姜焼き定食",
            desc: "Tender sliced pork sautéed in a savory ginger and soy sauce",
            price: "₱620",
          },
        ],
      },
    ],
  },
  {
    id: "dinner",
    label: "Dinner",
    jp: "ディナー",
    schedule: "Daily · 17:00 – 24:00 (L.O. 23:00)",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_dinner_btn.png/screen.png",
    categories: [
      {
        name: "Appetizers",
        jp: "おつまみ",
        items: [
          {
            name: "Mixed Sashimi",
            jp: "刺身盛り合わせ",
            desc: "Chef's selection of 5 seasonal fish, freshly sliced",
            price: "₱980",
          },
          {
            name: "Yakitori Moriawase",
            jp: "焼き鳥盛り合わせ",
            desc: "Assorted charcoal-grilled skewers · 6 pieces",
            price: "₱450",
          },
          {
            name: "Takoyaki",
            jp: "たこ焼き",
            desc: "Octopus balls topped with mayo, bonito flakes, and takoyaki sauce · 8 pieces",
            price: "₱280",
          },
          {
            name: "Chawanmushi",
            jp: "茶碗蒸し",
            desc: "Silky steamed egg custard with shrimp, chicken, and ginkgo nuts",
            price: "₱220",
          },
        ],
      },
      {
        name: "Main Dishes",
        jp: "メイン料理",
        items: [
          {
            name: "A4 Wagyu Yakiniku",
            jp: "A4和牛焼肉",
            desc: "Premium Japanese Wagyu beef, lightly seasoned and grilled to order at the table",
            price: "₱1,800",
          },
          {
            name: "Salmon Sashimi",
            jp: "鮭の刺身",
            desc: "8 slices of premium fresh Atlantic salmon",
            price: "₱680",
          },
          {
            name: "Tempura Moriawase",
            jp: "天ぷら盛り合わせ",
            desc: "Light batter-fried tiger prawns and seasonal vegetables with tentsuyu",
            price: "₱750",
          },
          {
            name: "Premium Tonkatsu",
            jp: "プレミアムとんかつ",
            desc: "Thick-cut Berkshire pork loin, hand-breaded and deep-fried golden",
            price: "₱680",
          },
          {
            name: "Chicken Nanban",
            jp: "チキン南蛮",
            desc: "Deep-fried chicken thigh in sweet vinegar, topped with house tartar sauce",
            price: "₱560",
          },
        ],
      },
      {
        name: "Hot Pot",
        jp: "鍋料理",
        note: "Served for a minimum of 2 persons",
        items: [
          {
            name: "Sukiyaki",
            jp: "すき焼き",
            desc: "Premium beef slices simmered in sweet soy broth with tofu, mushrooms, and vegetables",
            price: "₱2,200 / 2pax",
          },
          {
            name: "Shabu-Shabu",
            jp: "しゃぶしゃぶ",
            desc: "Thinly sliced beef in light kombu broth with ponzu and sesame dipping sauces",
            price: "₱2,400 / 2pax",
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    jp: "ドリンク",
    schedule: "Available all day",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png",
    categories: [
      {
        name: "Draft Beer",
        jp: "生ビール",
        items: [
          {
            name: "Sapporo Premium Draft",
            jp: "サッポロプレミアム生",
            desc: "Classic Japanese lager, crisp and well-balanced",
            price: "₱250",
          },
          {
            name: "Sapporo Black Draft",
            jp: "サッポロ黒生",
            desc: "Dark lager with malty depth and a smooth finish",
            price: "₱260",
          },
          {
            name: "Kirin Ichiban Draft",
            jp: "キリン一番搾り生",
            desc: "First-press brewing, smooth and elegantly light",
            price: "₱250",
          },
          {
            name: "Half & Half",
            jp: "ハーフ&ハーフ",
            desc: "Blend of pale and dark Sapporo draft",
            price: "₱280",
          },
        ],
      },
      {
        name: "Sake",
        jp: "日本酒",
        items: [
          {
            name: "House Sake",
            jp: "料理酒",
            desc: "Served cold (冷) or warm (燗) · ask staff for seasonal selection",
            price: "₱320 / carafe",
          },
          {
            name: "Junmai Daiginjo",
            jp: "純米大吟醸",
            desc: "Premium fruity and aromatic sake, best enjoyed chilled",
            price: "₱680 / carafe",
          },
        ],
      },
      {
        name: "Shochu",
        jp: "焼酎",
        items: [
          {
            name: "Iichiko Silhouette",
            jp: "いいちこシルエット",
            desc: "Smooth barley shochu, mild with a clean finish",
            price: "₱280 / glass",
          },
          {
            name: "Satsuma Shiranami",
            jp: "薩摩白波",
            desc: "Sweet potato shochu with a rich, earthy character",
            price: "₱280 / glass",
          },
        ],
      },
      {
        name: "Whiskey",
        jp: "ウイスキー",
        items: [
          {
            name: "Suntory Toki",
            jp: "サントリー季",
            desc: "Blended Japanese whisky, light with apple and honey notes",
            price: "₱350",
          },
          {
            name: "Nikka from the Barrel",
            jp: "ニッカフロムザバレル",
            desc: "Rich full-bodied blended malt whisky, a connoisseur's choice",
            price: "₱420",
          },
          {
            name: "Yamazaki 12 Year",
            jp: "山崎12年",
            desc: "Single malt with honeyed oak, Mizunara complexity, and a long finish",
            price: "₱980",
          },
        ],
      },
      {
        name: "Wine & Champagne",
        jp: "ワイン・シャンパン",
        items: [
          {
            name: "House Wine",
            jp: "ハウスワイン",
            desc: "Red or white · ask staff for the current selection",
            price: "₱320 / glass",
          },
          {
            name: "Champagne",
            jp: "シャンパン",
            desc: "Festive bubbles for celebrations — by glass or bottle",
            price: "₱580 / glass",
          },
        ],
      },
      {
        name: "Cocktails & Soft Drinks",
        jp: "カクテル・ソフトドリンク",
        items: [
          {
            name: "Yuzu Sour",
            jp: "柚子サワー",
            desc: "Shochu, fresh yuzu citrus, soda, and a hint of honey",
            price: "₱320",
          },
          {
            name: "Calpico Soda",
            jp: "カルピスソーダ",
            desc: "Japanese cultured milk soda, sweet and refreshing",
            price: "₱150",
          },
          {
            name: "Green Tea",
            jp: "緑茶",
            desc: "Hot or iced premium Japanese sencha",
            price: "₱120",
          },
        ],
      },
    ],
  },
  {
    id: "bento",
    label: "Bento",
    jp: "お弁当",
    schedule: "Order: 10:00–13:30 · Pick-up: 11:30–14:00",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo005.png/screen.png",
    categories: [
      {
        name: "Bento Boxes",
        jp: "お弁当",
        note: "All bento boxes include premium Koshihikari rice, seasonal pickles, and a small miso soup",
        items: [
          {
            name: "Standard Bento",
            jp: "スタンダード弁当",
            desc: "Chicken teriyaki or grilled salmon · tamagoyaki · simmered seasonal vegetable",
            price: "₱480",
          },
          {
            name: "Premium Bento",
            jp: "プレミアム弁当",
            desc: "Wagyu beef slice · sashimi (2 kinds) · chawanmushi · seasonal assorted sides",
            price: "₱680",
          },
          {
            name: "Vegetable Bento",
            jp: "野菜弁当",
            desc: "Agedashi tofu · simmered pumpkin · inari sushi · pickled vegetables",
            price: "₱420",
          },
          {
            name: "Kids Bento",
            jp: "お子様弁当",
            desc: "Mini omurice · karaage (2 pcs) · tamagoyaki · seasonal fruit",
            price: "₱320",
          },
        ],
      },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export function MenuPage() {
  const [activeTab, setActiveTab] = useState("lunch");
  const tabBarRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Scroll-spy: update active tab as sections scroll into view
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveTab(e.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    // Reveal-on-scroll
    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => revealIO.observe(el));

    return () => {
      io.disconnect();
      revealIO.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const tabH = tabBarRef.current?.offsetHeight ?? 64;
    const navH = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navH - tabH - 16;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveTab(id);
  };

  return (
    <>
      <SiteHeader active="menu" />

      <main className="pt-20 bg-background">

        {/* ── Hero ── */}
        <section className="relative h-[50vh] min-h-[360px] overflow-hidden flex items-end">
          <Image
            src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png"
            alt="Hidamari menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-ink-black/30 to-ink-black/10" />
          <div className="relative z-10 w-full pb-12 text-center">
            <span className="font-label-md text-label-md text-paper-white/70 uppercase tracking-[0.3em] block mb-2">
              ひだまりレストラン
            </span>
            <h1
              className="font-headline-xl text-primary"
              style={{ fontSize: "64px", lineHeight: 1 }}
            >
              MENU
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Lunch · Dinner · Drinks · Bento
            </p>
          </div>
        </section>

        {/* ── Sticky Tab Navigation ── */}
        <div
          ref={tabBarRef}
          className="sticky z-40 bg-paper-white/90 backdrop-blur-md border-b border-primary/10 shadow-sm"
          style={{ top: "80px" }}
        >
          <div className="max-w-5xl mx-auto px-6 flex items-center gap-1 overflow-x-auto">
            {sections.map(({ id, label, jp }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex-shrink-0 flex flex-col items-center gap-0.5 px-6 py-4 border-b-2 transition-all font-label-md text-label-md ${
                  activeTab === id
                    ? "border-primary text-primary"
                    : "border-transparent text-on-surface-variant hover:text-primary hover:border-primary/30"
                }`}
              >
                <span>{label}</span>
                <span
                  className="font-caption opacity-60"
                  style={{ fontSize: "10px", fontFamily: "serif" }}
                >
                  {jp}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Menu Sections ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-margin-desktop">
          {sections.map((section, sIdx) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
              className="py-16 border-b border-primary/10 last:border-0"
            >
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 reveal-on-scroll">
                <div className="flex-1">
                  <span
                    className="text-primary opacity-20 select-none"
                    style={{ fontFamily: "serif", fontSize: "52px", lineHeight: 1, display: "block" }}
                  >
                    {section.jp}
                  </span>
                  <h2
                    className="font-headline-xl text-primary -mt-3"
                    style={{ fontSize: "44px", lineHeight: "52px" }}
                  >
                    {section.label}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-base">schedule</span>
                    {section.schedule}
                  </p>
                </div>
                {/* Section photo thumbnail */}
                <div className="w-full md:w-52 h-32 rounded-xl overflow-hidden sunlit-shadow shrink-0">
                  <Image
                    src={section.image}
                    alt={section.label}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Special bento order note */}
              {section.id === "bento" && (
                <div className="mb-10 bg-secondary-container/30 rounded-xl p-5 flex items-start gap-3 reveal-on-scroll">
                  <span className="material-symbols-outlined text-secondary mt-0.5">info</span>
                  <div>
                    <p className="font-label-md text-label-md text-secondary mb-1">How to Order Bento</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Please place your order by phone at{" "}
                      <strong className="text-primary">02-8659-6120</strong> during ordering hours.
                      Pick-up is available at the restaurant entrance.
                    </p>
                  </div>
                </div>
              )}

              {/* Weekday lunch note */}
              {section.id === "lunch" && (
                <div className="mb-10 bg-warm-accent/8 border border-warm-accent/20 rounded-xl p-5 flex items-start gap-3 reveal-on-scroll">
                  <span className="material-symbols-outlined text-warm-accent mt-0.5">warning</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    <strong className="text-warm-accent">Notice:</strong> Weekday lunch is temporarily
                    suspended from May 16. Lunch is available on{" "}
                    <strong>weekends and public holidays only</strong>.
                  </p>
                </div>
              )}

              {/* Categories */}
              {section.categories.map((cat, cIdx) => (
                <div key={cat.name} className={`mb-12 reveal-on-scroll`}>
                  {/* Category label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex flex-col">
                      <span
                        className="font-label-md text-label-md text-tertiary uppercase tracking-[0.2em]"
                      >
                        {cat.name}
                      </span>
                      <span
                        className="text-primary opacity-40"
                        style={{ fontFamily: "serif", fontSize: "20px", lineHeight: 1 }}
                      >
                        {cat.jp}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-primary/10" />
                  </div>

                  {/* Note */}
                  {cat.note && (
                    <p className="font-caption text-caption text-on-surface-variant/70 italic mb-5 pl-1">
                      * {cat.note}
                    </p>
                  )}

                  {/* Items */}
                  <div className="divide-y divide-primary/8">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-start justify-between gap-6 py-5 group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <span
                              className="text-primary/30 italic shrink-0"
                              style={{ fontFamily: "serif", fontSize: "13px" }}
                            >
                              {item.jp}
                            </span>
                          </div>
                          <p className="font-caption text-caption text-on-surface-variant mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <span className="font-label-md text-label-md text-primary shrink-0 tabular-nums pt-0.5">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* ── Bottle Keep & Private Dining CTA ── */}
        <section className="bg-surface-container-low py-section-gap px-6 md:px-margin-desktop reveal-on-scroll">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

            <div className="bg-primary-container rounded-2xl p-8 text-paper-white">
              <span className="material-symbols-outlined text-3xl mb-3 block">liquor</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">Bottle Keep</h3>
              <p className="font-body-md text-body-md opacity-80 leading-relaxed">
                Store your favourite bottle with us for your next visit. Ask our staff for details
                on our bottle-keep service — available for whiskey, shochu, and wine.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-paper-white">
              <span className="material-symbols-outlined text-3xl mb-3 block">groups</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">Private Dining</h3>
              <p className="font-body-md text-body-md opacity-80 leading-relaxed mb-4">
                Private rooms available for 8–10 and 16–18 guests. Full restaurant buyout
                accommodates up to 65. Inquire for custom menus and packages.
              </p>
              <Link
                href="/access"
                className="inline-flex items-center gap-2 bg-paper-white text-secondary px-5 py-2.5 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all"
              >
                Enquire Now
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ── Accepted Payment ── */}
        <section className="py-10 px-6 md:px-margin-desktop">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border border-primary/10 rounded-xl px-8 py-5">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Cards Accepted
              </span>
            </div>
            <div className="flex items-center gap-4">
              {["VISA", "MASTER", "AMEX", "JCB"].map((card) => (
                <span
                  key={card}
                  className="font-label-md text-label-md text-primary border border-primary/20 rounded-lg px-3 py-1"
                >
                  {card}
                </span>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-right">
              Reservations via phone or in-person.
              <br />
              <strong className="text-primary">02-8659-6120</strong>
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
