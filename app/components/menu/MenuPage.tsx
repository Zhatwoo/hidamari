"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HIDAMARI_PHONE_TEL } from "@/app/lib/site-links";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { useLanguage } from "@/app/components/shared/LanguageProvider";
import { menuItemDescJa } from "@/app/lib/i18n/menu-item-desc-ja";
import type { Locale } from "@/app/lib/i18n/types";

/* ─── Menu Data ─────────────────────────────────────────────── */

type Item = { name: string; jp: string; desc: string; price: string; image?: string };
type Category = { name: string; jp: string; note?: string; items: Item[] };
type Section = {
  id: string;
  label: string;
  jp: string;
  schedule: string;
  image: string;
  categories: Category[];
};

const appetizerImage = (name: string) =>
  `/image/Appetizers/${encodeURIComponent(name)}.png`;

const bentoImage = (file: string) =>
  `/image/Bento/${encodeURIComponent(file)}`;

const sections: Section[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    jp: "おつまみ",
    schedule: "Available from 17:00",
    image: appetizerImage("Salted Kelp Cabbage"),
    categories: [
      {
         name: "Appetizers",
        jp: "おつまみ",
        items: [
          {
            name: "Salted Kelp Cabbage",
            jp: "塩昆布キャベツ",
            desc: "Seasonal cabbage tossed with salted kelp",
            price: "₱180",
            image: appetizerImage("Salted Kelp Cabbage"),
          },
          {
            name: "Shiokara",
            jp: "塩辛",
            desc: "Salted fermented seafood",
            price: "₱150",
            image: appetizerImage("Shiokara"),
          },
          {
            name: "Pickled Okra",
            jp: "オクラのお漬物",
            desc: "Crisp okra pickles",
            price: "₱220",
            image: appetizerImage("Pickled Okra"),
          },
          {
            name: "Edamame",
            jp: "枝豆",
            desc: "Salted steamed soybeans",
            price: "₱180",
            image: appetizerImage("Edamame"),
          },
        
          {
            name: "Hijiki Ni",
            jp: "ひじき煮",
            desc: "Simmered hijiki seaweed",
            price: "₱180",
            image: appetizerImage("Hijiki Ni"),
          },
          {
            name: "Cold Tofu with Natto and Okra",
            jp: "納豆オクラ 冷ややっこ",
            desc: "Silken tofu topped with natto and okra",
            price: "₱250",
            image: appetizerImage("Cold Tofu with Natto and Okra"),
          },
          {
            name: "Grilled Bacon Wrapped Quail Eggs (2 sticks)",
            jp: "うずらベーコン焼き2本",
            desc: "Bacon-wrapped quail eggs grilled to perfection",
            price: "₱250",
            image: appetizerImage("Grilled Bacon Wrapped Quail Eggs (2 sticks)"),
          },
          {
            name: "Tako Wasabi",
            jp: "たこわさび",
            desc: "Octopus in wasabi dressing",
            price: "₱220",
            image: appetizerImage("Tako Wasabi"),
          },
          {
            name: "Cold Tofu with Kimchi",
            jp: "冷ややっこ キムチ",
            desc: "Silken tofu topped with kimchi",
            price: "₱230",
            image: appetizerImage("Cold Tofu with Kimchi"),
          },
          {
            name: "Western Style Hiyayakko",
            jp: "洋風冷ややっこ",
            desc: "Chilled tofu with western-style toppings",
            price: "₱230",
            image: appetizerImage("Western Style Hiyayakko"),
          },
         
          {
            name: "Hakusai no Tsukemono",
            jp: "白菜のお漬物",
            desc: "Crisp pickled napa cabbage",
            price: "₱180",
            image: appetizerImage("Hakusai no Tsukemono"),
          },
          {
            name: "Yakitori Kawa 2 Sticks",
            jp: "焼き鳥 皮 2本",
            desc: "Grilled chicken skin skewers",
            price: "₱220",
            image: appetizerImage("Yakitori Kawa 2 Sticks"),
          },
          {
            name: "Butter Corn",
            jp: "バターコーン",
            desc: "Sweet corn sautéed in butter",
            price: "₱300",
            image: appetizerImage("Butter Corn"),
          },
          {
            name: "Shiokara Jaga Butter",
            jp: "塩辛じゃがバター",
            desc: "Potatoes with butter and shiokara",
            price: "₱380",
            image: appetizerImage("Shiokara Jaga Butter"),
          },
          {
            name: "Pickled Cucumber",
            jp: "きゅうりのお漬物",
            desc: "Crisp pickled cucumber",
            price: "₱180",
            image: appetizerImage("Pickled Cucumber"),
          },
        ],
      },
      {
       name: "Salads",
        jp: "サラダ",
        items: [
          {
            name: "Mushroom Salad",
            jp: "きのこのサラダ",
            desc: "Wafu-style mushroom salad",
            price: "₱350",
            image: "/image/mush salad.png",
          },
          {
            name: "Hot Salad",
            jp: "温野菜サラダ",
            desc: "Warm vegetable salad",
            price: "₱400",
            image: "/image/hot salad.png",
          },
          {
            name: "Shredded Salad",
            jp: "千切りサラダ",
            desc: "Crisp shredded vegetable salad",
            price: "₱220",
            image: "/image/shredded.png",
          },
          {
            name: "Wafu Salad",
            jp: "和風サラダ",
            desc: "Japanese-style dressing salad",
            price: "₱350",
            image: "/image/wafu.png",
          },
          {
            name: "Potato Salad",
            jp: "ポテトサラダ",
            desc: "Creamy potato salad",
            price: "₱240",
            image: "/image/potato salad.png",
          },
          {
            name: "Smoked Salmon Salad",
            jp: "スモークサーモンサラダ",
            desc: "Smoked salmon with fresh greens",
            price: "₱480",
            image: "/image/smoked salmon.png",
          },
          {
            name: "Nama Ham Potato Salad Garlic Cream Cheese",
            jp: "生ハムポテト サラダガーリック クリームチーズ",
            desc: "Prosciutto, potato salad, garlic and cream cheese",
            price: "₱350",
            image: "/image/nama ham.png",
          },
          {
            name: "Nama Ham Onion Salad",
            jp: "生ハムオニオンサラダ",
            desc: "Prosciutto and onion salad",
            price: "₱380",
            image: "/image/nama.png",
          },
        ],
      },
    ],
  },
  {
    id: "meals",
    label: "Meals",
    jp: "食事",
    schedule: "Weekends & Holidays · 11:30 – 14:00 (L.O.) · Daily · 17:00 – 24:00 (L.O. 23:00)",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png",
    categories: [
      {
        name: "A La Carte",
        jp: "一品料理",
        items: [
          {
            name: "Nikujyaga",
            jp: "肉じゃが",
            desc: "Meat & potatoes",
            price: "₱320",
            image: "/image/nikujyaga.png",
          },
          {
            name: "Home Made Gyoza",
            jp: "自家製餃子",
            desc: "House-made pan-fried dumplings",
            price: "₱320",
            image: "/image/hm gyoza.png",
          },
          {
            name: "Homemade Siomai",
            jp: "自家製シュウマイ",
            desc: "Steamed pork dumplings",
            price: "₱320",
            image: "/image/siomai.png",
          },
          {
            name: "Sui Gyoza",
            jp: "水餃子",
            desc: "Boiled dumplings in broth",
            price: "₱320",
            image: "/image/gyuza.png",
          },
          {
            name: "Buta no Chinjarousu",
            jp: "豚の青椒肉絲",
            desc: "Pork and green pepper stir-fry",
            price: "₱350",
            image: "/image/buta no.png",
          },
          {
            name: "Cold Silky Eggplant Shabushabu",
            jp: "とろとろナスの冷しゃぶ",
            desc: "Chilled eggplant and pork shabu-shabu",
            price: "₱380",
            image: "/image/eggplant.png",
          },
          {
            name: "Stewed Hamburger",
            jp: "煮込みハンバーグ",
            desc: "Savory hamburger in rich stew sauce",
            price: "₱400",
            image: "/image/hamburger.png",
          },
          {
            name: "Boiled Squid",
            jp: "イカの煮物",
            desc: "Tender squid simmered in broth",
            price: "₱380",
            image: "/image/boiled squid.png",
          },
          {
            name: "Tonpeiyaki",
            jp: "とん平焼き",
            desc: "Pork omelet with savory sauce",
            price: "₱350",
            image: "/image/tonpeiyaki.png",
          },
          {
            name: "Niritama",
            jp: "にら玉",
            desc: "Garlic chive omelet",
            price: "₱350",
            image: "/image/niritama.png",
          },
          {
            name: "Chawanmushi",
            jp: "茶碗蒸し",
            desc: "Savory steamed egg custard",
            price: "₱220",
            image: "/image/chawanmushi.png",
          },
          {
            name: "Bell Pepper Meat Rolls",
            jp: "ピーマンの肉巻き",
            desc: "Stuffed green pepper rolls",
            price: "₱320",
            image: "/image/bell pepper.png",
          },
          {
            name: "Omelette",
            jp: "昔ながらのオムレツ",
            desc: "Classic Japanese-style omelet",
            price: "₱300",
            image: "/image/omelette.png",
          },
          {
            name: "Miso Tamago Yaki",
            jp: "味噌卵焼き",
            desc: "Savory miso-flavored tamagoyaki",
            price: "₱320",
            image: "/image/miso tamago.png",
          },
          {
            name: "Potato and Bacon",
            jp: "じゃがベーコン",
            desc: "Sautéed potato with bacon",
            price: "₱350",
            image: "/image/patato and bacon.png",
          },
          {
            name: "Cold Pork and Okra Shabu-Shabu",
            jp: "冷しゃぶオクラ和え",
            desc: "Chilled pork with okra salad",
            price: "₱350",
            image: "/image/cold pork.png",
          },
          {
            name: "Torikawa Cabbage",
            jp: "とり皮キャベツ（ピリ辛）",
            desc: "Spicy chicken skin and cabbage",
            price: "₱320",
            image: "/image/torikawa.png",
          },
          {
            name: "Salmon Sashimi",
            jp: "サーモン刺身",
            desc: "Fresh salmon sashimi",
            price: "₱600",
            image: "/image/salmon sashimi.png",
          },
          {
            name: "Pork Belly Radish",
            jp: "豚バラ大根",
            desc: "Simmered pork belly with daikon",
            price: "₱280",
            image: "/image/pork belly.png",
          },
          {
            name: "Spicy Kim Harusame",
            jp: "旨辛キムはるさめ",
            desc: "Spicy glass noodle salad",
            price: "₱250",
            image: "/image/sauted chicken.png",
          },
          {
            name: "Nanbanzuke",
            jp: "南蛮漬け",
            desc: "Marinated fried fish with tangy sauce",
            price: "₱320",
            image: "/image/nanbanzuke.png",
          },
          {
            name: "Chicken Teriyaki",
            jp: "チキン照焼き",
            desc: "Grilled chicken with teriyaki glaze",
            price: "₱450",
            image: "/image/chicken teri.png",
          },
          {
            name: "Shake Teriyaki",
            jp: "鮭照焼き",
            desc: "Grilled salmon with teriyaki glaze",
            price: "₱450",
            image: "/image/shake teri.png",
          },
          {
            name: "Ebichiri",
            jp: "エビチリ",
            desc: "Spicy shrimp in chili sauce",
            price: "₱650",
            image: "/image/ebichiri.png",
          },
          {
            name: "Shake Shioyaki",
            jp: "鮭塩焼き",
            desc: "Salt-grilled salmon",
            price: "₱450",
            image: "/image/shake.png",
          },
          {
            name: "Yasai Itame",
            jp: "野菜炒め",
            desc: "Stir-fried seasonal vegetables",
            price: "₱450",
            image: "/image/yasai.png",
          },
          {
            name: "Chicken Nanban",
            jp: "チキン南蛮",
            desc: "Fried chicken with sweet vinegar and tartar",
            price: "₱500",
            image: "/image/nanban.png",
          },
          {
            name: "Buta no Kakuni",
            jp: "豚の角煮",
            desc: "Braised pork belly",
            price: "₱380",
            image: "/image/kakuni.png",
          },
          {
            name: "Buta Kimchi",
            jp: "豚キムチ",
            desc: "Pork stir-fried with kimchi",
            price: "₱400",
            image: "/image/buta kim.png",
          },
          {
            name: "Schau Essen Sausage",
            jp: "シャウエッセン 焼き or ボイル",
            desc: "Grilled or boiled sausage",
            price: "₱480",
            image: "/image/essen.png",
          },
          {
            name: "Omi Beef Yakiniku",
            jp: "近江牛 焼肉",
            desc: "Premium Omi beef yakiniku",
            price: "₱1,100",
            image: "/image/omi beef.png",
          },
          {
            name: "Miyazaki Wagyu Steak",
            jp: "宮崎牛ステーキ",
            desc: "World's No.1 Miyazaki Wagyu steak",
            price: "₱2,480",
            image: "/image/wagyu.png",
          },
        ],
      },
      {
        name: "Nabe / Hot Pot",
        jp: "鍋 / HOT POT",
        items: [
          {
            name: "Butabara Cabbage Nabe",
            jp: "豚バラキャベツの旨鍋",
            desc: "Pork belly and cabbage hot pot",
            price: "₱550",
            image: "/image/nabe.png",
          },
          {
            name: "Kimchi Nabe",
            jp: "キムチ鍋",
            desc: "Spicy kimchi hot pot",
            price: "₱600",
            image: "/image/kimchi.png",
          },
        ],
      },
      {
        name: "Italian-French",
        jp: "イタリアン・フレンチ",
        note: "Best partnered with wine or champagne",
        items: [
          {
            name: "Pickled Tomato in White Wine",
            jp: "トマト白ワイン漬け",
            desc: "Chilled tomato marinated in white wine",
            price: "₱350",
            image: "/image/tomato pic.png",
          },
          {
            name: "Salmon Carpaccio",
            jp: "サーモンカルパッチョ",
            desc: "Thinly sliced salmon with citrus dressing",
            price: "₱580",
            image: "/image/carpaccio.png",
          },
          {
            name: "Anchovies Shiokombu Cabbage",
            jp: "アンチョビ塩昆布キャベツ",
            desc: "Cabbage with anchovies and kelp salt",
            price: "₱220",
            image: "/image/anchovies.png",
          },
          {
            name: "Cheese Platter",
            jp: "チーズ盛り合わせ",
            desc: "Selection of premium cheeses",
            price: "₱800",
            image: "/image/cheese.png",
          },
        ],
      },
      {
        name: "Fried Foods",
        jp: "揚げ物",
        items: [
          {
            name: "Nori Shio Karaage",
            jp: "のり塩からあげ",
            desc: "Seaweed salted fried chicken",
            price: "₱350",
            image: "/image/karaage.png",
          },
          {
            name: "French Fries",
            jp: "フレンチフライ",
            desc: "Crispy golden fries",
            price: "₱200",
            image: "/image/fries.png",
          },
          {
            name: "Shiromi Sakana Furai",
            jp: "白身魚フライ",
            desc: "Fried white fish fillet",
            price: "₱380",
            image: "/image/shiromi.png",
          },
          {
            name: "Chikuwa Isobe Age",
            jp: "ちくわ磯辺揚げ",
            desc: "Seaweed-coated fish cake fritters",
            price: "₱220",
            image: "/image/chikuwa.png",
          },
          {
            name: "Pork and Leak Kushikatsu",
            jp: "豚とネギの串カツ",
            desc: "Skewered pork and leek cutlets",
            price: "₱350",
            image: "/image/pork.png",
          },
          {
            name: "Onion Rings",
            jp: "オニオンリング",
            desc: "Crispy battered onion rings",
            price: "₱250",
            image: "/image/onion.png",
          },
          {
            name: "Menchikatsu",
            jp: "メンチカツ",
            desc: "Juicy minced meat cutlet",
            price: "₱350",
            image: "/image/menchi.png",
          },
          {
            name: "Korokke",
            jp: "コロッケ",
            desc: "Creamy potato croquettes",
            price: "₱350",
            image: "/image/karoke.png",
          },
        ],
      },
      {
        name: "Pasta",
        jp: "パスタ",
        items: [
          {
            name: "Mentaiko Pollock Roe Pasta",
            jp: "明太子スパゲティ",
            desc: "Creamy cod roe pasta",
            price: "₱400",
            image: "/image/mentaiko.png",
          },
          {
            name: "Genovese Pasta",
            jp: "ジェノベーゼパスタ",
            desc: "Basil pesto pasta",
            price: "₱400",
            image: "/image/genovese.png",
          },
          {
            name: "Tuna Mayo Aonori Pasta",
            jp: "ツナマヨ青のりパスタ",
            desc: "Tuna mayonnaise pasta with green laver",
            price: "₱400",
            image: "/image/tuna.png",
          },
          {
            name: "Tomato Garlic Pasta",
            jp: "トマトにんにくパスタ",
            desc: "Garlic tomato pasta",
            price: "₱400",
            image: "/image/tomato.png",
          },
          {
            name: "Neapolitan Pasta",
            jp: "昔ながらのナポリタン",
            desc: "Classic Japanese-style ketchup pasta",
            price: "₱400",
            image: "/image/neo.png",
          },
          {
            name: "Natto and Okra Pasta",
            jp: "納豆オクラパスタ",
            desc: "Fermented soybean and okra pasta",
            price: "₱400",
            image: "/image/nato.png",
          },
        ],
      },
      {
        name: "Rice Dish",
        jp: "ご飯もの",
        items: [
          {
            name: "Chahan / Fried Rice",
            jp: "チャーハン",
            desc: "Stir-fried rice with vegetables",
            price: "₱350",
            image: "/image/chahan.png",
          },
          {
            name: "Takana Chahan / Pickled Mustard Green Fried Rice",
            jp: "高菜チャーハン",
            desc: "Fried rice with pickled mustard greens",
            price: "₱380",
            image: "/image/takana.png",
          },
          {
            name: "Japanese Nasi Goreng",
            jp: "和風ナシゴレン",
            desc: "Japanese-style fried rice",
            price: "₱400",
            image: "/image/jap nasi.png",
          },
          {
            name: "Keema Curry",
            jp: "キーマカレー",
            desc: "Spiced ground meat curry",
            price: "₱400",
            image: "/image/keema.png",
          },
          {
            name: "Taco Rice",
            jp: "タコライス",
            desc: "Taco-seasoned beef on rice",
            price: "₱550",
            image: "/image/taco.png",
          },
          {
            name: "Gapao Rice",
            jp: "和風ガパオライス",
            desc: "Japanese-style gapao rice (ask for spice)",
            price: "₱400",
            image: "/image/gapao.png",
          },
          {
            name: "Oyakodon",
            jp: "親子丼",
            desc: "Chicken and egg on rice bowl",
            price: "₱380",
            image: "/image/oyakodun.png",
          },
          {
            name: "Omelette Rice",
            jp: "オムライス",
            desc: "Omelet over seasoned rice",
            price: "₱400",
            image: "/image/omu rice.png",
          },
          {
            name: "Gyudon / Beef Bowl",
            jp: "牛丼",
            desc: "Simmered beef and onions over rice",
            price: "₱380",
            image: "/image/gyudon bawl.png",
          },
          {
            name: "Omi Beef Yakiniku Don",
            jp: "近江牛 焼肉丼",
            desc: "Premium beef yakiniku rice bowl",
            price: "₱1,000",
            image: "/image/omi don.png",
          },
          {
            name: "Butadon / Pork Bowl",
            jp: "焼豚丼",
            desc: "Sweet savory pork rice bowl",
            price: "₱380",
            image: "/image/buta don.png",
          },
          {
            name: "Salmon Ikura Don",
            jp: "サーモンイクラ丼",
            desc: "Salmon and salmon roe rice bowl",
            price: "₱980",
            image: "/image/salmon don.png",
          },
          {
            name: "Mentaiko Ooba Onigiri",
            jp: "おにぎり明太子と大葉",
            desc: "Spicy cod roe rice ball with perilla",
            price: "₱200",
            image: "/image/ooba.png",
          },
          {
            name: "Salmon Onigiri",
            jp: "おにぎりしゃけ",
            desc: "Grilled salmon rice ball",
            price: "₱150",
            image: "/image/salmon oni.png",
          },
          {
            name: "Kelp Onigiri",
            jp: "おにぎりこんぶ",
            desc: "Kelp rice ball",
            price: "₱150",
            image: "/image/kelp.png",
          },
          {
            name: "Tamago Kake Gohan",
            jp: "卵かけご飯",
            desc: "Raw egg over rice",
            price: "₱220",
            image: "/image/tamago kake.png",
          },
          {
            name: "Yaki Miso Onigiri",
            jp: "焼きみそおにぎり",
            desc: "Grilled rice ball with miso",
            price: "₱160",
            image: "/image/yaki oni.png",

          },
          {
            name: "Ume Onigiri",
            jp: "おにぎり梅",
            desc: "Rice ball with pickled plum",
            price: "₱150",
            image: "/image/umi.png",
          },
          {
            name: "Salmon Aburi Sushi",
            jp: "サーモン炙り寿司",
            desc: "Seared salmon nigiri",
            price: "₱350",
            image: "/image/aburi.png",
          },
          {
            name: "Salmon Aburi Sushi with Mayo",
            jp: "サーモン炙り寿司 マヨ掛け",
            desc: "Seared salmon with mayonnaise",
            price: "₱350",
            image: "/image/salmon.png",
          },
          {
            name: "Omi Beef Sushi",
            jp: "近江牛てまり寿司",
            desc: "Premium Omi beef sushi",
            price: "₱700",
            image: "/image/omi.png",
          },
          {
            name: "Ikura Sushi",
            jp: "いくらてまり寿司",
            desc: "Salmon roe sushi",
            price: "₱580",
            image: "/image/ikura (2).png",
          },
        ],
      },
      {
        name: "Udon",
        jp: "うどん",
        items: [
          {
            name: "Hiyashi Abura Udon",
            jp: "冷やし油うどん",
            desc: "Cold seasoned udon",
            price: "₱380",
            image: "/image/abura.png",
          },
          {
            name: "Bukkake Hot Udon",
            jp: "ぶっかけホットうどん",
            desc: "Hot dashi-soaked udon",
            price: "₱380",
            image: "/image/hot udon.png",
          },
        ],
      },
      {
        name: "Ramen",
        jp: "ラーメン",
        items: [
          {
            name: "Shoyu Ramen",
            jp: "しょうゆラーメン",
            desc: "Classic soy sauce ramen",
            price: "₱350",
            image: "/image/shoyu.png",
          },
          {
            name: "Gomoku Ankake Ramen",
            jp: "五目あんかけラーメン",
            desc: "Thickened vegetable and seafood ramen",
            price: "₱480",
            image: "/image/gomoku.png",
          },
          {
            name: "Miso Ramen",
            jp: "みそラーメン",
            desc: "Rich miso ramen (extra butter +₱10)",
            price: "₱380",
            image: "/image/miso ramen.png",
          },
          {
            name: "Salad Ramen",
            jp: "サラダラーメン",
            desc: "Cold salad-style ramen",
            price: "₱400",
            image: "/image/salad ramen.png",
          },
        ],
      },
      {
        name: "Soumen",
        jp: "そうめん",
        items: [
          {
            name: "Torigara Hot Soumen",
            jp: "鶏ガラホットそうめん",
            desc: "Chicken bone hot soumen",
            price: "₱350",
            image: "/image/torigara hot.png",
          },
          {
            name: "Torigara Hiyashi Soumen",
            jp: "鶏ガラ冷やしそうめん",
            desc: "Chicken bone chilled soumen",
            price: "₱350",
            image: "/image/torigara soumen.png",
          },
          {
            name: "Torigara Hiyashi Salad Soumen",
            jp: "鶏ガラ冷やしサラダそうめん",
            desc: "Chilled salad soumen with chicken bone broth",
            price: "₱450",
            image: "/image/torigara salad.png",
          },
        ],
      },
      {
        name: "Soba",
        jp: "そば",
        items: [
          {
            name: "Zaru Soba",
            jp: "ざる蕎麦",
            desc: "Cold soba with dipping sauce",
            price: "₱350",
            image: "/image/zaru.png",
          },
          {
            name: "Kake Soba",
            jp: "かけ蕎麦",
            desc: "Warm soba in hot broth",
            price: "₱350",
            image: "/image/kake.png",
          },
          {
            name: "Tororo Soba",
            jp: "とろろ蕎麦",
            desc: "Soba topped with grated yam",
            price: "₱420",
            image: "/image/tororo.png",
          },
          {
            name: "Nebaraba Healthy Soba",
            jp: "ネバネバ健康そば",
            desc: "Healthy sticky soba with vegetables",
            price: "₱500",
            image: "/image/nebaneba.png",
          },
          {
            name: "Tsukimi Soba (Cold/Hot)",
            jp: "月見そば(冷/温)",
            desc: "Soba with raw egg yolk",
            price: "₱400",
            image: "/image/tsukimi.png",
          },
          {
            name: "Buta Nanban Soba",
            jp: "豚南蛮そば",
            desc: "Pork nanban soba",
            price: "₱400",
            image: "/image/buta.png",
          },
          {
            name: "Ebi Tempura Topping 1pc",
            jp: "海老天ぷらトッピング 1尾",
            desc: "Single prawn tempura topping",
            price: "₱70",
            image: "/image/tempura.png",
          },
          {
            name: "Yakisoba",
            jp: "焼きそば",
            desc: "Fried soba noodles with vegetables",
            price: "₱380",
            image: "/image/yaki.png",
          },
        ],
      },
      {
        name: "Soup",
        jp: "汁物",
        items: [
          {
            name: "Tonjiru / Pork and Vegetable Soup",
            jp: "豚汁",
            desc: "Hearty pork and vegetable miso soup",
            price: "₱250",
            image: "/image/tonjiru.png",
          },
          {
            name: "Miso Soup",
            jp: "お味噌汁",
            desc: "Classic miso soup",
            price: "₱180",
            image: "/image/miso.png",
          },
        ],
      },
    ],
  },
  
  {
    id: "drinks",
    label: "Drinks",
    jp: "飲み物",
    schedule: "Available all day",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png",
    categories: [
      {
        name: "Beer",
        jp: "ビール",
        items: [
          {
            name: "Kirin Ichiban Draft Beer",
            jp: "キリン一番搾り生ビール",
            desc: "Classic draft beer with a crisp, refreshing finish",
            price: "₱220",
          },
          {
            name: "Sapporo Draft Beer 340ml",
            jp: "サッポロ生ビール 340ml",
            desc: "Light, balanced Japanese lager",
            price: "₱200",
          },
          {
            name: "Sapporo Black Draft 500ml",
            jp: "サッポロ黒生ビール 500ml",
            desc: "Dark lager with roasted malt notes",
            price: "₱250",
          },
          {
            name: "Sapporo Black Draft 340ml",
            jp: "サッポロ黒生ビール 340ml",
            desc: "Smoky, smooth and satisfying",
            price: "₱200",
          },
          {
            name: "Sapporo Half & Half",
            jp: "サッポロ生 ハーフ&ハーフ",
            desc: "Blend of pale and dark Sapporo draft",
            price: "₱250",
          },
          {
            name: "San Miguel Apple",
            jp: "サンミゲルアップル",
            desc: "Crisp, fruity apple-flavored beer",
            price: "₱120",
          },
        ],
      },
      {
        name: "Chuhai & Cocktails",
        jp: "酎ハイ・カクテル",
        items: [
          {
            name: "Oolong Hai",
            jp: "ウーロンハイ",
            desc: "Shochu with oolong tea",
            price: "₱180",
          },
          {
            name: "Green Tea Hai",
            jp: "緑茶ハイ",
            desc: "Shochu with green tea",
            price: "₱180",
          },
          {
            name: "Barley Tea Hai",
            jp: "麦茶ハイ",
            desc: "Shochu with barley tea",
            price: "₱180",
          },
          {
            name: "Lemon Sour",
            jp: "生レモンサワー",
            desc: "Freshly squeezed lemon with shochu",
            price: "₱220",
          },
          {
            name: "Calamansi Sour",
            jp: "生カラマンシーサワー",
            desc: "Fresh calamansi citrus with shochu",
            price: "₱220",
          },
          {
            name: "Calpis Sour",
            jp: "カルピスサワー",
            desc: "Sweet and tangy Japanese yogurt soda cocktail",
            price: "₱180",
          },
          {
            name: "Margarita",
            jp: "フローズンマルガリータ",
            desc: "Frozen tequila cocktail with lime",
            price: "₱250",
          },
          {
            name: "Umeshu Soda",
            jp: "梅酒ソーダ",
            desc: "Plum wine soda with a sweet finish",
            price: "₱220",
          },
          {
            name: "Umeshu Rock",
            jp: "梅酒ろっく",
            desc: "Plum wine served over ice",
            price: "₱280",
          },
        ],
      },
      {
        name: "Whiskey & Spirits",
        jp: "ウイスキー・スピリッツ",
        items: [
          {
            name: "Yamazaki",
            jp: "山崎",
            desc: "Single malt whisky",
            price: "₱12,500",
          },
          {
            name: "Yamazaki (12 Years)",
            jp: "山崎 12年",
            desc: "Matured single malt with caramel and oak",
            price: "₱20,000",
          },
          {
            name: "Yamazaki (18 Years)",
            jp: "山崎 18年",
            desc: "Deep, rich and complex aged Japanese whisky",
            price: "₱100,000",
          },
          {
            name: "Taketsuru",
            jp: "竹鶴",
            desc: "Smooth blended whisky named after Masataka Taketsuru",
            price: "₱9,000",
          },
          {
            name: "Suntory Kakubin",
            jp: "サントリー角",
            desc: "Classic Japanese blended whisky",
            price: "₱2,500",
          },
          {
            name: "Suntory Kakubin Highball",
            jp: "サントリー角ハイボール",
            desc: "House highball made with Suntory Kakubin",
            price: "₱250",
          },
          {
            name: "The Macallan (12 Years)",
            jp: "マッカラン 12年",
            desc: "Rich single malt with oak and dried fruit",
            price: "₱10,000",
          },
          {
            name: "Hakusyu",
            jp: "白州",
            desc: "Light and fragrant Japanese single malt",
            price: "₱10,000",
          },
          {
            name: "Chivas Regal Mizunara",
            jp: "シーバスミズナラ",
            desc: "Premium blended malt finished in Mizunara oak",
            price: "₱3,500",
          },
          {
            name: "Ballantines",
            jp: "バランタイン",
            desc: "Smooth blended Scotch whisky",
            price: "₱2,000",
          },
          {
            name: "Ballantines 12 Years",
            jp: "バランタイン 12年",
            desc: "Matured blended Scotch with honeyed notes",
            price: "₱7,500",
          },
          {
            name: "Hibiki",
            jp: "響",
            desc: "Harmony of Japanese malt and grain whiskies",
            price: "₱12,000",
          },
          {
            name: "Hibiki (12 Years)",
            jp: "響 12年",
            desc: "Award-winning blended whisky with floral notes",
            price: "₱40,000",
          },
          {
            name: "Johnnie Walker Black Label",
            jp: "ジョニーウォーカー ブラックレーベル",
            desc: "Classic rich Scotch blended whisky",
            price: "₱3,000",
          },
          {
            name: "Johnnie Walker Double Black",
            jp: "ジョニーウォーカー ダブルブラック",
            desc: "Smokier, bolder Scotch blend",
            price: "₱2,000",
          },
          {
            name: "Tanqueray Gin",
            jp: "タンカレー ジン",
            desc: "London dry gin for classic cocktails",
            price: "₱1,800",
          },
          {
            name: "Gin and Tonic",
            jp: "ジントニック",
            desc: "Refreshing gin cocktail with tonic water",
            price: "₱250",
          },
        ],
      },
      {
        name: "Shochu",
        jp: "焼酎",
        items: [
          {
            name: "Kinmiya",
            jp: "キンミヤ",
            desc: "Light barley shochu",
            price: "₱1,700",
          },
        
          {
            name: "Iichiko Silhouette",
            jp: "いいちこ シルエット",
            desc: "Smooth, mild barley shochu",
            price: "₱1,300",
          },
          {
            name: "Kurokirishima",
            jp: "黒霧島",
            desc: "Rich sweet potato shochu",
            price: "₱1,800",
          },
          {
            name: "Akakirishima",
            jp: "赤霧島",
            desc: "Fruity sweet potato shochu",
            price: "₱2,000",
          },
          {
            name: "Akanekirishima",
            jp: "茜霧島",
            desc: "Premium aged sweet potato shochu",
            price: "₱2,200",
          },
          {
            name: "Shirokirishima",
            jp: "白霧島",
            desc: "Soft and smooth sweet potato shochu",
            price: "₱1,700",
          },
          {
            name: "Kurokirishima (Rock, Mizuwari, Soda)",
            jp: "黒霧島 各種",
            desc: "Served rock, with water, or soda",
            price: "₱300",
          },
          {
            name: "Kitaya Gokoo Oak Barrel Aged Barley Shochu 720ml",
            jp: "吾空 720ml",
            desc: "Oak barrel-aged barley shochu",
            price: "₱2,200",
          },
          {
            name: "Kitaya Zekoo Aged Barley Shochu 4 Years 720ml",
            jp: "是空 720ml",
            desc: "Matured barley shochu aged 4 years",
            price: "₱4,700",
          },
          {
            name: "Den-En Aged Barley Shochu Kin (Gold) Label 900ml",
            jp: "田苑 長期貯蔵 麦焼酎 金ラベル 900ml",
            desc: "Rich aged barley shochu",
            price: "₱1,800",
          },
          {
            name: "Den-En Oak Barrel Aged Sweet Potato Shochu Envelhecida 720ml",
            jp: "エンヴェレシーダ 720ml",
            desc: "Oak barrel aged sweet potato shochu",
            price: "₱2,700",
          },
          {
            name: "Daiyame",
            jp: "ダイヤメ",
            desc: "Premium shochu served rock, with water, or soda",
            price: "₱2,500",
          },
        ],
      },
      {
        name: "Japanese Rice Wine",
        jp: "日本酒",
        items: [
          {
            name: "Sanzen Tokubetsu Junmai Omachi 720ml",
            jp: "燦然 特別純米",
            desc: "Rich and smooth premium sake",
            price: "₱2,400",
          },
          {
            name: "Chiyomusubi Tokubetujunmai 55 720ml",
            jp: "千代むすび 特別純米 55",
            desc: "Crisp, elegant premium sake",
            price: "₱2,300",
          },
          {
            name: "Hakushika Chokara (Super dry) 180ml",
            jp: "白鹿 超辛",
            desc: "Dry sake served by the glass",
            price: "₱300",
          },
          {
            name: "Hakushika Tokusen Ginjo Namachozo 300ml",
            jp: "白鹿 特選吟醸 生貯蔵",
            desc: "Fresh and fragrant ginjo sake",
            price: "₱680",
          },
          {
            name: "Hakushika Junmai Ginjo 300ml",
            jp: "黒松白鹿 純米吟醸",
            desc: "Smooth and lightly fruity sake",
            price: "₱700",
          },
          {
            name: "Kuromatsu Hakushika Junmai Daiginjo Gouka Sennenju 300ml",
            jp: "黒松白鹿 豪華千年寿",
            desc: "Luxurious daiginjo sake",
            price: "₱1,180",
          },
          {
            name: "Hakushika Tokubetsu Honjozo Yamadanishiki 300ml",
            jp: "白鹿 特別本醸造 山田錦",
            desc: "Balanced honjozo sake",
            price: "₱640",
          },
          {
            name: "Hakushika Honjozo Namachozo 300ml",
            jp: "白鹿 本醸造 生貯蔵",
            desc: "Light and easy-drinking sake",
            price: "₱600",
          },
          {
            name: "Hakushika Junmai Yoshino no Taruzake 300ml",
            jp: "白鹿 純米 吉野の樽酒",
            desc: "Aged in cedar barrel for depth",
            price: "₱600",
          },
          {
            name: "Dassai Junmai Daiginjo 45 Sparkling 360ml",
            jp: "獺祭 純米大吟醸 スパークリング 45",
            desc: "Elegant sparkling sake",
            price: "₱1,480",
          },
          {
            name: "Hakkaisan Tokubetsu Junmai 720ml",
            jp: "八海山 特別純米",
            desc: "Refined and crisp premium sake",
            price: "₱2,050",
          },
          {
            name: "Hakkaisan Shiboritate Genshu Namazake 720ml",
            jp: "八海山 しぼりたて 原酒生酒 越後で候",
            desc: "Fresh unpasteurized sake",
            price: "₱2,000",
          },
          {
            name: "Urakasumi Honjozo Karakuchi 720ml",
            jp: "浦霞 本醸造 からくち",
            desc: "Dry and crisp honjozo sake",
            price: "₱2,300",
          },
          {
            name: "Tamanohikari Junmai Ginjo Namazake 720ml",
            jp: "玉乃光 純米吟醸 なまざけ",
            desc: "Rich, unpasteurized junmai ginjo sake",
            price: "₱2,300",
          },
          {
            name: "Shochikubai Shirakabegura Mio Sparkling 750ml",
            jp: "松竹梅白壁蔵 澪スパークリング",
            desc: "Sweet sparkling sake",
            price: "₱700",
          },
          {
            name: "Gekkeikan Horodoke Peach 200ml",
            jp: "月桂冠 ほろどけ ピーチ",
            desc: "Fruity peach sake",
            price: "₱700",
          },
          {
            name: "Gekkeikan Horodoke Apple 200ml",
            jp: "月桂冠 ほろどけ アップル",
            desc: "Refreshing apple sake",
            price: "₱700",
          },
          {
            name: "Gekkeikan Horodoke Strawberry 200ml",
            jp: "月桂冠 ほろどけ ストロベリー",
            desc: "Sweet strawberry sake",
            price: "₱700",
          },
          {
            name: "Hyakujuro Junmai Karakuchi Akazura 720ml",
            jp: "百十郎 赤面 (あかづら)",
            desc: "Bold junmai sake",
            price: "₱2,600",
          },
          {
            name: "Kitaya Junmai Ginjo Gin no Sato 720ml",
            jp: "喜多屋 純米吟醸 吟のさと",
            desc: "Elegant junmai ginjo sake",
            price: "₱2,800",
          },
          {
            name: "Jinyu Junmai Shu 720ml",
            jp: "仁勇 純米酒",
            desc: "Smooth junmai sake",
            price: "₱2,600",
          },
          {
            name: "Kagatobi Junmai Ginjo 720ml",
            jp: "加賀鳶 純米吟醸",
            desc: "Aromatic junmai ginjo sake",
            price: "₱2,800",
          },
          {
            name: "Izumibashi Tombo Kuro Junmai 2 Years Aged 720ml",
            jp: "泉橋 とんぼ 黒ラベル 純米",
            desc: "Aged junmai sake with rich depth",
            price: "₱3,200",
          },
          {
            name: "Dassai Junmai Daiginjo 39 720ml",
            jp: "獺祭 純米大吟醸 39",
            desc: "Silky premium daiginjo sake",
            price: "₱3,900",
          },
          {
            name: "Mifuku Sanrensei Junmai Ginjo 720ml",
            jp: "美冨久 三連星 純米吟吹雪",
            desc: "Well-balanced junmai ginjo",
            price: "₱3,000",
          },
          {
            name: "Amabuki Junmai Ginjo 720ml",
            jp: "天吹 純米吟醸 さけこまち ひまわり酵母 生酒",
            desc: "Floral and fruity special release sake",
            price: "₱2,600",
          },
          {
            name: "Kozaemon Junmai Yamadanishiki 720ml",
            jp: "小左衛門 特別純米 山田錦",
            desc: "Rich junmai made from Yamada Nishiki rice",
            price: "₱2,400",
          },
          {
            name: "Junmai Ginjo Gin no Sato 720ml",
            jp: "純米吟醸 吟のさと",
            desc: "Rich and elegant premium bottle",
            price: "₱8,000",
          },
          {
            name: "Yuki No Bosha Yamahai Junmai",
            jp: "雪の茅舎 山廃純米",
            desc: "Full-bodied yamahai-style sake",
            price: "₱2,400",
          },
          {
            name: "Yuki No Bosha Junmai Ginjo",
            jp: "雪の茅舎 純米吟醸",
            desc: "Smooth and fragrant ginjo sake",
            price: "₱2,600",
          },
          {
            name: "Sharaku Junmaishu",
            jp: "冩樂 純米酒",
            desc: "Soft and elegant junmai sake",
            price: "₱2,800",
          },
        ],
      },
      {
        name: "Wine & Champagne",
        jp: "ワイン・シャンパン",
        items: [
          {
            name: "Moet Chandon Rose",
            jp: "モエシャンドン ロゼ",
            desc: "Premium sparkling champagne",
            price: "₱2,000",
          },
          {
            name: "House Wine Glass (White/Red/Rose)",
            jp: "ハウスワイングラス (白、赤、ロゼ)",
            desc: "By the glass",
            price: "₱350",
          },
          {
            name: "Maison Bukana",
            jp: "メゾン ブカナ",
            desc: "French house wine",
            price: "₱2,000",
          },
          {
            name: "Montes Classic Chardonnay",
            jp: "モンテス クラシック シャルドネ",
            desc: "Chilean white wine",
            price: "₱2,000",
          },
          {
            name: "Montes Classic Cabernet Sauvignon",
            jp: "モンテス クラシック カベルネ ソーヴィニヨン",
            desc: "Chilean red wine",
            price: "₱2,000",
          },
          {
            name: "Penfolds BEN2 Shiraz Mataro",
            jp: "ペンフォールズ BEN2 シラーズ マタロ",
            desc: "Recommended premium wine",
            price: "₱3,800",
          },
        ],
      },
      {
        name: "Soft Drinks",
        jp: "ソフトドリンク",
        items: [
          {
            name: "Orange Juice 100%",
            jp: "オレンジジュース 100%",
            desc: "Fresh orange juice",
            price: "₱130",
          },
          {
            name: "Cranberry Juice 100%",
            jp: "クランベリージュース 100%",
            desc: "Pure cranberry juice",
            price: "₱130",
          },
          {
            name: "Coca-Cola",
            jp: "コーラ",
            desc: "Classic cola soda",
            price: "₱90",
          },
          {
            name: "Coca-Cola Zero",
            jp: "コーラゼロ",
            desc: "Zero-sugar cola",
            price: "₱90",
          },
          {
            name: "Sprite",
            jp: "スプライト",
            desc: "Lemon-lime soda",
            price: "₱90",
          },
          {
            name: "Coca-Cola Light",
            jp: "コーラライト",
            desc: "Light cola beverage",
            price: "₱90",
          },
          {
            name: "Barley Tea",
            jp: "麦茶",
            desc: "Traditional roasted barley tea",
            price: "₱90",
          },
          {
            name: "Green Tea",
            jp: "緑茶",
            desc: "Refreshing Japanese green tea",
            price: "₱90",
          },
          {
            name: "Oolong Tea",
            jp: "烏龍茶",
            desc: "Aromatic oolong tea",
            price: "₱90",
          },
          {
            name: "Calpis",
            jp: "カルピス",
            desc: "Sweet cultured milk drink",
            price: "₱180",
          },
          {
            name: "Calpis Soda",
            jp: "カルピスソーダ",
            desc: "Calpis with fizzy soda",
            price: "₱180",
          },
          {
            name: "Lemon Soda",
            jp: "生レモンソーダ",
            desc: "Fresh lemon soda",
            price: "₱130",
          },
          {
            name: "Calamansi Soda",
            jp: "生カラマンシーソーダ",
            desc: "Fresh calamansi soda",
            price: "₱130",
          },
        ],
      },
      {
        name: "Coffee & Latte",
        jp: "コーヒー・ラテ",
        items: [
          {
            name: "Americano",
            jp: "アメリカーノ",
            desc: "Medium roast Americano",
            price: "₱160",
          },
          {
            name: "Matcha Latte",
            jp: "抹茶ラテ",
            desc: "Creamy green tea latte",
            price: "₱160",
          },
          {
            name: "Latte / Coffee",
            jp: "ラテ / コーヒー",
            desc: "Hot latte or coffee",
            price: "₱150",
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
    image: "/image/bento-section.png",
    categories: [
      {
        name: "Bento Menu",
        jp: "お弁当メニュー",
        note: "All bento include miso soup and are VAT-inclusive · Pick-up only · Order at least 1 hour before pick-up",
        items: [
          {
            name: "Torigara Hiyashi Salad Somen",
            jp: "鶏がら冷やしサラダそうめん",
            desc: "Cold somen noodles with chicken broth salad",
            price: "₱380",
            image: bentoImage("torigara hiyashi salad somen.png"),
          },
          {
            name: "Salad Ramen",
            jp: "サラダラーメン",
            desc: "Chilled ramen with fresh salad and dressing",
            price: "₱380",
            image: bentoImage("Salad Ramen.png"),
          },
          {
            name: "Makunouchi Bento",
            jp: "日替わり幕の内弁当",
            desc: "Daily changing makunouchi bento with assorted sides",
            price: "₱500",
            image: bentoImage("Manunouchi bento.png"),
          },
          {
            name: "Buta Shogayaki Bento",
            jp: "豚生姜焼き弁当",
            desc: "Pork ginger stir-fry with rice · Best seller",
            price: "₱330",
            image: bentoImage("buta shogayaki bento.png"),
          },
          {
            name: "Shake Shioyaki Bento",
            jp: "鮭塩焼き弁当",
            desc: "Salt-grilled salmon with rice",
            price: "₱330",
            image: bentoImage("shake shioyaki bento.png"),
          },
          {
            name: "Yasai Itame Bento",
            jp: "野菜炒め弁当",
            desc: "Stir-fried vegetables with rice",
            price: "₱330",
            image: bentoImage("yasai itame bento.png"),
          },
          {
            name: "Karaage Bento",
            jp: "からあげ弁当",
            desc: "Japanese fried chicken with rice",
            price: "₱330",
            image: bentoImage("karaage bento.png"),
          },
          {
            name: "Chicken Nanban Bento",
            jp: "チキン南蛮弁当",
            desc: "Fried chicken with tartar sauce and rice",
            price: "₱330",
            image: bentoImage("chicken nanban.png"),
          },
          {
            name: "Hamburger & Spaghetti Bento",
            jp: "ハンバーグ & スパゲティ弁当",
            desc: "Hamburger patty with spaghetti and rice",
            price: "₱330",
            image: bentoImage("humberger and sphagetti bento.png"),
          },
          {
            name: "Menchikatsu Bento",
            jp: "メンチカツ弁当",
            desc: "Breaded minced meat cutlet with rice",
            price: "₱330",
            image: bentoImage("menchikatsu bento.png"),
          },
          {
            name: "Shiromi Sakana Fry Bento",
            jp: "白身魚フライ弁当",
            desc: "Fried white fish with rice",
            price: "₱330",
            image: bentoImage("shiromi sakana fry bento.png"),
          },
          {
            name: "Chahan & Gyoza Bento",
            jp: "炒飯 & 餃子弁当",
            desc: "Fried rice with gyoza",
            price: "₱330",
            image: bentoImage("chahan & gyoza bento.png"),
          },
          {
            name: "Oyakodon",
            jp: "親子丼",
            desc: "Chicken and egg simmered over rice",
            price: "₱320",
            image: bentoImage("oyakkodon.png"),
          },
          {
            name: "Gyudon",
            jp: "牛丼",
            desc: "Simmered beef and onions over rice",
            price: "₱320",
            image: bentoImage("gyudon.png"),
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    jp: "デザート",
    schedule: "Available all day",
    image: "/image/desserts-section.png",
    categories: [
      {
        name: "Carmen's Best Ice Cream",
        jp: "アイスクリーム",
        items: [
          {
            name: "Mango",
            jp: "マンゴー",
            desc: "Mango ice cream",
            price: "₱220",
            image: "/image/mango.png",
          },
          {
            name: "Dark Chocolate",
            jp: "ダークチョコレート",
            desc: "Dark chocolate ice cream",
            price: "₱220",
            image: "/image/chocolate.png",
          },
          {
            name: "Vanilla",
            jp: "バニラ",
            desc: "Classic vanilla ice cream",
            price: "₱220",
            image: "/image/vanilla.png",
          },
          {
            name: "Mixed Berries",
            jp: "ミックスベリー",
            desc: "Mixed berry ice cream",
            price: "₱220",
            image: "/image/mixed.png",
          },
          {
            name: "Strawberry Lite",
            jp: "ストロベリーライト",
            desc: "Light strawberry ice cream",
            price: "₱220",
            image: "/image/strawberry.png",
          },
          {
            name: "Pistachio",
            jp: "ピスタチオ",
            desc: "Creamy pistachio ice cream",
            price: "₱220",
            image: "/image/pistacho.png",
          },
          {
            name: "Coffee Almond Fudge",
            jp: "コーヒーアーモンドファッジ",
            desc: "Coffee almond fudge ice cream",
            price: "₱220",
            image: "/image/almond.png",
          },
          {
            name: "Salted Caramel",
            jp: "塩キャラメル",
            desc: "Salted caramel ice cream",
            price: "₱220",
            image: "/image/salted.png",
          },
        ],
      },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────── */

type MenuScheduleId = "lunch" | "dinner" | "drinks" | "bento";

function categoryNote(
  locale: Locale,
  note: string | undefined,
  teishoku: string,
  hotPot: string
): string | undefined {
  if (!note) return undefined;
  if (locale === "ja") {
    if (note.includes("2 persons")) return hotPot;
    if (note.includes("steamed rice")) return teishoku;
  }
  return note;
}

export function MenuPage() {
  const { locale, t, messages } = useLanguage();
  const [activeTab, setActiveTab] = useState("lunch");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Search filter logic
  const filteredSections = searchQuery.trim() === "" ? sections : sections.map((section) => ({
    ...section,
    categories: section.categories.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.jp.includes(searchQuery) ||
          item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter((cat) => cat.items.length > 0),
  })).filter((sec) => sec.categories.length > 0);

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

    return () => {
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("revealed");
      }
      revealIO.observe(el);
    });

    return () => {
      revealIO.disconnect();
    };
  }, [searchQuery]);

  

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const tabH = tabBarRef.current?.offsetHeight ?? 64;
    const navH = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navH - tabH - 16;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveTab(id);
  };

  const toggleSearch = () => {
    setSearchOpen((isOpen) => {
      if (isOpen) setSearchQuery("");
      return !isOpen;
    });
  };

  return (
    <>
      <SiteHeader active="menu" />

      <main className="pt-20 bg-background">

        {/* ── Hero ── */}
        <section className="relative h-[40vh] min-h-[280px] overflow-hidden flex items-end">
          <Image
            src="/image/Appetizers/IMG_4106.JPG"
            alt="Hidamari menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-black/55 via-ink-black/30 to-ink-black/15" />
          <div className="relative z-10 w-full pb-12 text-center">
            <h1
              className="font-headline-xl text-paper-white text-4xl sm:text-5xl md:text-[64px] leading-tight"
              style={{ lineHeight: 1, textShadow: "0 3px 18px rgba(0,0,0,0.45)" }}
            >
              {t("menu.heroTitle")}
            </h1>
            <p
              className="font-body-lg text-body-lg text-paper-white/90 mt-2 text-sm sm:text-base"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
            >
              {t("menu.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* ── Sticky Tab Navigation ── */}
        <div
          ref={tabBarRef}
          className="sticky top-16 md:top-20 z-40 bg-paper-white/90 backdrop-blur-md border-b border-primary/10 shadow-sm"
        >
          <div className="max-w-5xl mx-auto flex items-center gap-2 px-3 sm:px-4 md:px-6 py-1">
            <div className="min-w-0 flex-1 flex items-center justify-start md:justify-center gap-1 sm:gap-6 md:gap-20 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {sections.map(({ id, label, jp }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex-shrink-0 flex flex-col items-center gap-0.5 px-2.5 sm:px-3 md:px-4 py-2 sm:py-3 border-b-2 transition-all text-[11px] sm:text-sm font-label-md ${
                    activeTab === id
                      ? "border-primary text-primary"
                      : "border-transparent text-on-surface-variant hover:text-primary hover:border-primary/30"
                  }`}
                >
                  <span className="whitespace-nowrap text-[11px] sm:text-sm md:text-base">{locale === "ja" ? jp : label}</span>
                  <span
                    className="font-caption opacity-60 hidden sm:block"
                    style={{ fontSize: "10px", fontFamily: "serif" }}
                  >
                    {locale === "ja" ? label : jp}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={toggleSearch}
              className="shrink-0 inline-flex items-center justify-center rounded-full border-2 border-primary/30 bg-paper-white w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-primary hover:bg-primary/5 transition-colors"
              aria-label={searchOpen ? "Close search" : "Open search"}
              type="button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary sm:w-4 sm:h-4"
              >
                <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="2" />
                <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Search Bar (Conditional) ── */}
        {searchOpen && (
          <div className="mt-8 px-6 md:px-margin-desktop">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="2" />
                  <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder={locale === "ja" ? "メニューを検索..." : "Search menu..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-14 pr-12 py-3 rounded-2xl border-2 border-primary/20 bg-paper-white shadow-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                    aria-label="Clear search"
                    type="button"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Menu Sections ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-margin-desktop">
          {searchQuery.trim() !== "" && filteredSections.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {locale === "ja" ? "検索結果がありません" : "No menu items found"}
              </p>
            </div>
          )}
          {filteredSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
              className="pb-16 md:pb-20 border-b border-primary/10 last:border-0"
            >
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 reveal-on-scroll">
                <div className="flex-1">
                  <span
                    className="text-primary opacity-20 select-none text-[32px] sm:text-[40px] md:text-[52px] leading-none block"
                    style={{ fontFamily: "serif" }}
                  >
                    {section.jp}
                  </span>
                  <h2
                    className="font-headline-xl text-primary -mt-3 text-3xl sm:text-[38px] md:text-[44px] leading-tight"
                  >
                    {locale === "ja" ? section.jp : section.label}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-base">schedule</span>
                    {messages.menu.schedules[section.id as MenuScheduleId]}
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
                <div className="mb-10 bg-secondary-container/30 rounded-xl p-5 reveal-on-scroll space-y-4">
                  <div>
                    <p className="font-label-md text-label-md text-secondary mb-1">{t("menu.howOrderBento")}</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {t("menu.howOrderBentoBody")}
                    </p>
                  </div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-paper-white/80 border border-secondary/25 px-4 py-2 font-label-md text-label-md text-primary">
                    <span className="material-symbols-outlined text-base text-secondary">info</span>
                    {t("menu.bentoMinOrder")}
                  </p>
                </div>
              )}

              {/* Weekday lunch note */}
              {section.id === "lunch" && (
                <div className="mb-10 bg-warm-accent/8 border border-warm-accent/20 rounded-xl p-5 flex items-start gap-3 reveal-on-scroll">
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    <strong className="text-warm-accent">{t("menu.lunchNotice")}</strong>{" "}
                    {t("menu.lunchNoticeBody")}
                  </p>
                </div>
              )}

              {/* Categories */}
              {section.categories.map((cat, cIdx) => {
                const hideCategoryHeading = section.id === "appetizers" && cat.name === "Appetizers";

                return (
                  <div
                    key={cat.name}
                    className={`mb-12 reveal-on-scroll ${cIdx > 0 ? "border-t border-primary/10 pt-8" : ""}`}
                  >
                    {!hideCategoryHeading && (
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
                    )}

                    {/* Note */}
                    {cat.note && (
                      <p className="font-caption text-caption text-on-surface-variant/70 italic mb-5 pl-1">
                        * {cat.note}
                      </p>
                    )}

                    {/* Items */}
                    <div className="divide-y divide-primary/8">
                      {cat.items.map((item, idx) => (
                        <div
                          key={`${section.id}-${cat.name}-${item.name}-${idx}`}
                          className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-4 py-5 group items-start"
                        >
                          <div className="min-w-0 space-y-3">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                              <span
                                className="text-primary/60 italic shrink-0"
                                style={{ fontFamily: "serif", fontSize: "14px" }}
                              >
                                {item.jp}
                              </span>
                            </div>
                            <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <div className="flex items-center justify-end gap-3">
                            {item.image && (
                              <div className="overflow-hidden rounded-2xl bg-transparent">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={80}
                                  height={80}
                                  className="block w-20 h-20 object-contain"
                                />
                              </div>
                            )}
                            <span className="font-label-md text-label-md text-primary shrink-0 tabular-nums text-right">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>
          ))}
        </div>

        {/* ── Bottle Keep & Private Dining CTA ── */}
        <section className="bg-surface-container-low py-section-gap px-6 md:px-margin-desktop reveal-on-scroll">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

            <div className="bg-primary-container rounded-2xl p-8 text-paper-white">
              <span className="material-symbols-outlined text-3xl mb-3 block">liquor</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">{t("menu.bottleKeep")}</h3>
              <p className="font-body-md text-body-md opacity-80 leading-relaxed">
                {t("menu.bottleKeepBody")}
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-paper-white">
              <span className="material-symbols-outlined text-3xl mb-3 block">groups</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2">{t("menu.privateDining")}</h3>
              <p className="font-body-md text-body-md opacity-80 leading-relaxed mb-4">
                {t("menu.privateDiningBody")}
              </p>
              <a
                href={HIDAMARI_PHONE_TEL}
                className="inline-flex items-center gap-2 bg-paper-white text-secondary px-5 py-2.5 rounded-xl font-label-md text-label-md hover:opacity-90 transition-all"
              >
                {t("menu.enquireNow")}
                <span className="material-symbols-outlined text-base">call</span>
              </a>
            </div>

          </div>
        </section>

        

      </main>
      <SiteFooter />
    </>
  );
}
