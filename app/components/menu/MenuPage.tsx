"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/app/components/shared/SiteHeader";
import { SiteFooter } from "@/app/components/shared/SiteFooter";

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

const sections: Section[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    jp: "おつまみ",
    schedule: "Available from 17:00",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo005.png/screen.png",
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
          },
          {
            name: "Shiokara",
            jp: "塩辛",
            desc: "Salted fermented seafood",
            price: "₱150",
          },
          {
            name: "Pickled Okra",
            jp: "オクラのお漬物",
            desc: "Crisp okra pickles",
            price: "₱220",
          },
          {
            name: "Edamame",
            jp: "枝豆",
            desc: "Salted steamed soybeans",
            price: "₱180",
          },
        
          {
            name: "Hijiki Ni",
            jp: "ひじき煮",
            desc: "Simmered hijiki seaweed",
            price: "₱180",
          },
          {
            name: "Cold Tofu with Natto and Okra",
            jp: "納豆オクラ 冷ややっこ",
            desc: "Silken tofu topped with natto and okra",
            price: "₱250",
          },
          {
            name: "Grilled Bacon Wrapped Quail Eggs (2 sticks)",
            jp: "うずらベーコン焼き2本",
            desc: "Bacon-wrapped quail eggs grilled to perfection",
            price: "₱250",
          },
          {
            name: "Tako Wasabi",
            jp: "たこわさび",
            desc: "Octopus in wasabi dressing",
            price: "₱220",
          },
          {
            name: "Cold Tofu with Kimchi",
            jp: "冷ややっこ キムチ",
            desc: "Silken tofu topped with kimchi",
            price: "₱230",
          },
          {
            name: "Western Style Hiyayakko",
            jp: "洋風冷ややっこ",
            desc: "Chilled tofu with western-style toppings",
            price: "₱230",
          },
         
          {
            name: "Hakusai no Tsukemono",
            jp: "白菜のお漬物",
            desc: "Crisp pickled napa cabbage",
            price: "₱180",
          },
          {
            name: "Yakitori Kawa 2 Sticks",
            jp: "焼き鳥 皮 2本",
            desc: "Grilled chicken skin skewers",
            price: "₱220",
          },
          {
            name: "Butter Corn",
            jp: "バターコーン",
            desc: "Sweet corn sautéed in butter",
            price: "₱300",
          },
          {
            name: "Shiokara Jaga Butter",
            jp: "塩辛じゃがバター",
            desc: "Potatoes with butter and shiokara",
            price: "₱380",
          },
          {
            name: "Pickled Cucumber",
            jp: "きゅうりのお漬物",
            desc: "Crisp pickled cucumber",
            price: "₱180",
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
    jp: "ドリンク",
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
  {
    id: "desserts",
    label: "Desserts",
    jp: "デザート",
    schedule: "Available all day",
    image:
      "/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo003.png/screen.png",
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

      <main className="pt-[9.5rem] bg-background">

        {/* ── Hero ── */}
        <section className="relative h-[40vh] min-h-[280px] overflow-hidden flex items-end">
          <Image
            src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png"
            alt="Hidamari menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-ink-black/30 to-ink-black/10" />
          <div className="relative z-10 w-full pb-12 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-paper-white/85 px-4 py-2 shadow-sm shadow-black/10 backdrop-blur-sm">
              <Image
                src="/stitch_hidamari_inspired_portfolio/image_from_https_hidamari_restaurant.com_images_toplogo.png/screen.png"
                alt="Hidamari logo"
                width={140}
                height={80}
                className="object-contain"
              />
            </div>
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
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-1 overflow-x-auto">
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
          {sections.map((section) => (
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
                 
                  <div>
                    <p className="font-label-md text-label-md text-secondary mb-1">How to Order Bento:</p>
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
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    <strong className="text-warm-accent">Notice:</strong> Weekday lunch is temporarily
                    suspended from May 16. Lunch is available on{" "}
                    <strong>weekends and public holidays only</strong>.
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
                          className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-4 py-5 group items-start"
                        >
                          <div className="min-w-0 space-y-3">
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
                            <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <div className="flex items-center justify-end gap-3">
                            {item.image && (
                              <div className="overflow-hidden rounded-2xl bg-transparent">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  loading="lazy"
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
