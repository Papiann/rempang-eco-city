export type UMKMCategory =
  | "Kuliner"
  | "Kerajinan"
  | "Jasa";

export type EcommercePlatform = "shopee" | "tokopedia" | "tiktokshop";

export type EcommerceStore = {
  platform: EcommercePlatform;
  href: string;
};

export type UMKMItem = {
  id: number;
  slug: string;
  name: string;
  brandName: string;
  category: UMKMCategory;
  cardDescription: string;
  detailDescription: string;
  products: string[];
  image: string;
  gallery: string[];
  whatsapp: string;
  ecommerce?: EcommerceStore[];
};

export const umkmCategories: Array<"Semua" | UMKMCategory> = [
  "Semua",
  "Kuliner",
  "Kerajinan",
  "Jasa",
];

export const umkmCatalog: UMKMItem[] = [
  {
    id: 1,
    slug: "kerajinan-rotan-rempang",
    name: "Kerajinan Rotan Rempang",
    brandName: "Sanggar Rotan Bahari",
    category: "Kerajinan",
    cardDescription:
      "Produksi kerajinan rotan dan bambu untuk perlengkapan rumah serta souvenir khas Rempang.",
    detailDescription:
      "Sanggar Rotan Bahari adalah UMKM keluarga yang fokus pada kerajinan anyaman berbahan rotan lokal. Produk dibuat manual oleh perajin setempat dengan desain fungsional dan estetik untuk kebutuhan rumah, hampers, serta cendera mata wisata.",
    products: [
      "Keranjang anyaman",
      "Tempat alat makan",
      "Dekorasi dinding",
      "Souvenir custom",
    ],
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573739028470-3e78f8ad5d6d?q=80&w=1200&auto=format&fit=crop",
    ],
    whatsapp: "https://wa.me/6281234567801",
    ecommerce: [
      { platform: "shopee", href: "https://shopee.co.id/" },
      { platform: "tokopedia", href: "https://www.tokopedia.com/" },
    ],
  },
  {
    id: 2,
    slug: "ikan-asap-khas-rempang",
    name: "Ikan Asap Khas Rempang",
    brandName: "Dapur Pesisir Rempang",
    category: "Kuliner",
    cardDescription:
      "Ikan asap berkualitas dengan teknik pengasapan tradisional dan cita rasa khas pesisir.",
    detailDescription:
      "Dapur Pesisir Rempang memproduksi olahan ikan asap dari hasil tangkapan nelayan lokal. Proses produksi dilakukan harian dengan standar kebersihan pangan untuk menjaga kualitas rasa, aroma, dan daya simpan produk.",
    products: [
      "Ikan asap tongkol",
      "Ikan asap kembung",
      "Sambal ikan asap",
      "Paket frozen seafood",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1200&auto=format&fit=crop",
    ],
    whatsapp: "https://wa.me/6281234567802",
    ecommerce: [
      { platform: "shopee", href: "https://shopee.co.id/" },
      { platform: "tiktokshop", href: "https://www.tiktok.com/shop" },
    ],
  },
  {
    id: 3,
    slug: "souvenir-anyaman-rempang",
    name: "Souvenir Anyaman Rempang",
    brandName: "Galeri Anyam Pulau",
    category: "Kerajinan",
    cardDescription:
      "Souvenir anyaman khas Rempang untuk oleh-oleh wisata dan kebutuhan dekorasi rumah.",
    detailDescription:
      "Galeri Anyam Pulau fokus pada produksi souvenir khas berbahan anyaman lokal. Produk dibuat oleh perajin binaan komunitas dengan desain khas pesisir Rempang yang cocok untuk kebutuhan oleh-oleh dan hadiah.",
    products: [
      "Tas anyaman mini",
      "Dompet anyaman",
      "Kotak hampers rotan",
      "Souvenir custom event",
    ],
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8a2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop",
    ],
    whatsapp: "https://wa.me/6281234567803",
    ecommerce: [{ platform: "tokopedia", href: "https://www.tokopedia.com/" }],
  },
  {
    id: 4,
    slug: "jasa-wisata-alam-rempang",
    name: "Jasa Wisata Alam Rempang",
    brandName: "Rempang Explore Tour",
    category: "Jasa",
    cardDescription:
      "Layanan paket wisata lokal, trip pulau, dan pendampingan guide berpengalaman.",
    detailDescription:
      "Rempang Explore Tour menyediakan jasa perjalanan wisata berbasis komunitas. Layanan mencakup city tour, wisata pantai, paket keluarga, serta sesi edukasi budaya lokal dengan pemandu tersertifikasi.",
    products: [
      "Open trip harian",
      "Private tour keluarga",
      "Paket edukasi budaya",
      "Sewa kendaraan wisata",
    ],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",
    ],
    whatsapp: "https://wa.me/6281234567804",
    ecommerce: [{ platform: "tiktokshop", href: "https://www.tiktok.com/shop" }],
  },
  {
    id: 5,
    slug: "kue-tradisional-rempang",
    name: "Kue Tradisional Rempang",
    brandName: "Dapur Mak Cik Sari",
    category: "Kuliner",
    cardDescription:
      "Olahan kue tradisional rumahan dengan bahan lokal untuk konsumsi harian dan acara.",
    detailDescription:
      "Dapur Mak Cik Sari fokus pada produksi kue tradisional Melayu dan jajanan pasar. Produk dibuat harian menggunakan bahan segar dan melayani pesanan untuk acara keluarga maupun kebutuhan katering ringan.",
    products: [
      "Kue lapis",
      "Kue bingka",
      "Paket snack box",
      "Kue kering lokal",
    ],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop",
    ],
    whatsapp: "https://wa.me/6281234567805",
  },
  {
    id: 6,
    slug: "katering-rumahan-rempang",
    name: "Katering Rumahan Rempang",
    brandName: "Dapur Pesisir Ibu Lina",
    category: "Kuliner",
    cardDescription:
      "Layanan katering rumahan dengan menu kuliner khas Rempang untuk acara keluarga dan komunitas.",
    detailDescription:
      "Dapur Pesisir Ibu Lina melayani katering harian dan pesanan acara dengan menu tradisional berbahan segar dari pasar lokal. Usaha ini berkembang lewat layanan antar, pemesanan online, dan kolaborasi dengan komunitas setempat.",
    products: [
      "Nasi box seafood",
      "Paket prasmanan",
      "Snack box tradisional",
      "Menu harian rumah tangga",
    ],
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    ],
    whatsapp: "https://wa.me/6281234567806",
    ecommerce: [
      { platform: "shopee", href: "https://shopee.co.id/" },
      { platform: "tokopedia", href: "https://www.tokopedia.com/" },
      { platform: "tiktokshop", href: "https://www.tiktok.com/shop" },
    ],
  },
];

export function getUmkmBySlug(slug: string) {
  return umkmCatalog.find((item) => item.slug === slug);
}
