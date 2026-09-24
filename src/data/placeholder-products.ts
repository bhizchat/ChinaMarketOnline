export type Category = {
  id: string;
  name: string;
  slug: string;
  accent: string;
};

export type Product = {
  id: string;
  name: string;
  priceNGN: number;
  originalPriceNGN?: number;
  category: string;
  rating: number;
  reviewCount: number;
  seller: string;
  badge?: "New" | "Best Seller" | "Deal";
  accent: string;
};

export type CategorySection = {
  id: string;
  title: string;
  href: string;
  tiles: { id: string; label: string; href: string; accent: string }[];
};

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  href: string;
  accent: string;
};

export const categories: Category[] = [
  { id: "phones-accessories", name: "Phones & Accessories", slug: "phones-accessories", accent: "from-sky-100 to-sky-200" },
  { id: "electronics", name: "Electronics & Gadgets", slug: "electronics", accent: "from-indigo-100 to-indigo-200" },
  { id: "fashion", name: "Fashion, Shoes & Bags", slug: "fashion", accent: "from-pink-100 to-pink-200" },
  { id: "hair-wigs", name: "Human Hair & Wigs", slug: "hair-wigs", accent: "from-purple-100 to-purple-200" },
  { id: "home-appliances", name: "Home Appliances", slug: "home-appliances", accent: "from-emerald-100 to-emerald-200" },
  { id: "automobile-parts", name: "Automobile Parts", slug: "automobile-parts", accent: "from-slate-100 to-slate-200" },
  { id: "building-materials", name: "Building & Construction Materials", slug: "building-materials", accent: "from-amber-100 to-amber-200" },
  { id: "machinery", name: "Machinery & Industrial Equipment", slug: "machinery", accent: "from-stone-100 to-stone-200" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Latest phones & accessories",
    subtitle: "Direct from verified Chinese sellers",
    ctaText: "Shop phones",
    href: "/category/phones-accessories",
    accent: "from-sky-200 via-blue-200 to-indigo-200",
  },
  {
    id: "slide-2",
    title: "Power your home",
    subtitle: "Appliances, gadgets & electronics",
    ctaText: "Shop electronics",
    href: "/category/electronics",
    accent: "from-teal-100 via-emerald-100 to-teal-200",
  },
  {
    id: "slide-3",
    title: "Human hair & wigs",
    subtitle: "Premium quality, wholesale prices",
    ctaText: "Shop hair & wigs",
    href: "/category/hair-wigs",
    accent: "from-purple-100 via-fuchsia-100 to-pink-100",
  },
  {
    id: "slide-4",
    title: "Fashion, shoes & bags",
    subtitle: "Fresh styles for every season",
    ctaText: "Shop fashion",
    href: "/category/fashion",
    accent: "from-amber-100 via-yellow-100 to-orange-200",
  },
  {
    id: "slide-5",
    title: "Automobile parts",
    subtitle: "Genuine and aftermarket parts",
    ctaText: "Shop auto parts",
    href: "/category/automobile-parts",
    accent: "from-slate-100 via-gray-100 to-slate-200",
  },
];

export const categorySections: CategorySection[] = [
  {
    id: "phones-section",
    title: "Phones & Accessories",
    href: "/category/phones-accessories",
    tiles: [
      { id: "smartphones", label: "Smartphones", href: "/category/phones-accessories/smartphones", accent: "from-sky-100 to-sky-200" },
      { id: "phone-cases", label: "Cases & Covers", href: "/category/phones-accessories/cases", accent: "from-slate-100 to-slate-200" },
      { id: "chargers", label: "Chargers & Cables", href: "/category/phones-accessories/chargers", accent: "from-violet-100 to-violet-200" },
      { id: "earphones", label: "Earphones", href: "/category/phones-accessories/earphones", accent: "from-red-100 to-red-200" },
    ],
  },
  {
    id: "electronics-section",
    title: "Electronics & Gadgets",
    href: "/category/electronics",
    tiles: [
      { id: "generators", label: "Generators", href: "/category/electronics/generators", accent: "from-cyan-100 to-cyan-200" },
      { id: "power-banks", label: "Power Banks", href: "/category/electronics/power-banks", accent: "from-blue-100 to-blue-200" },
      { id: "laptops", label: "Laptops", href: "/category/electronics/laptops", accent: "from-green-100 to-green-200" },
      { id: "cctv", label: "CCTV & Security", href: "/category/electronics/cctv", accent: "from-lime-100 to-lime-200" },
    ],
  },
  {
    id: "hair-section",
    title: "Human Hair & Wigs",
    href: "/category/hair-wigs",
    tiles: [
      { id: "wigs", label: "Wigs", href: "/category/hair-wigs/wigs", accent: "from-purple-100 to-purple-200" },
      { id: "hair-extensions", label: "Hair Extensions", href: "/category/hair-wigs/extensions", accent: "from-fuchsia-100 to-fuchsia-200" },
      { id: "closures", label: "Closures & Frontals", href: "/category/hair-wigs/closures", accent: "from-pink-100 to-pink-200" },
      { id: "hair-tools", label: "Styling Tools", href: "/category/hair-wigs/tools", accent: "from-rose-100 to-rose-200" },
    ],
  },
  {
    id: "fashion-section",
    title: "Fashion, Shoes & Bags",
    href: "/category/fashion",
    tiles: [
      { id: "women", label: "Women's Fashion", href: "/category/fashion/women", accent: "from-pink-100 to-pink-200" },
      { id: "men", label: "Men's Fashion", href: "/category/fashion/men", accent: "from-neutral-100 to-neutral-200" },
      { id: "shoes", label: "Shoes", href: "/category/fashion/shoes", accent: "from-amber-100 to-amber-200" },
      { id: "bags", label: "Bags", href: "/category/fashion/bags", accent: "from-orange-100 to-orange-200" },
    ],
  },
];

export const products: Product[] = [
  { id: "p1", name: "Wireless Bluetooth Earphones", priceNGN: 24500, originalPriceNGN: 32000, category: "Phones & Accessories", rating: 4.5, reviewCount: 1280, seller: "Shenzhen AudioTech", badge: "Best Seller", accent: "from-sky-100 to-sky-200" },
  { id: "p2", name: "6.7\" Android Smartphone 128GB", priceNGN: 145000, originalPriceNGN: 168000, category: "Phones & Accessories", rating: 4.3, reviewCount: 542, seller: "Guangzhou Digital Co.", badge: "Deal", accent: "from-blue-100 to-blue-200" },
  { id: "p3", name: "3.5KVA Petrol Generator", priceNGN: 285000, category: "Electronics & Gadgets", rating: 4.6, reviewCount: 389, seller: "Ningbo Power Equipment", badge: "New", accent: "from-emerald-100 to-emerald-200" },
  { id: "p4", name: "20000mAh Fast-Charge Power Bank", priceNGN: 19800, originalPriceNGN: 25000, category: "Electronics & Gadgets", rating: 4.2, reviewCount: 210, seller: "Shenzhen AudioTech", badge: "Deal", accent: "from-cyan-100 to-cyan-200" },
  { id: "p5", name: "Brazilian Human Hair Wig 24\"", priceNGN: 85000, category: "Human Hair & Wigs", rating: 4.7, reviewCount: 965, seller: "Guangzhou Hair Supply", badge: "Best Seller", accent: "from-purple-100 to-purple-200" },
  { id: "p6", name: "Vegan Leather Handbag", priceNGN: 27800, originalPriceNGN: 36000, category: "Fashion, Shoes & Bags", rating: 4.4, reviewCount: 331, seller: "Yiwu Fashion House", badge: "Deal", accent: "from-fuchsia-100 to-fuchsia-200" },
  { id: "p7", name: "HD CCTV Camera Kit (4-Channel)", priceNGN: 92000, category: "Electronics & Gadgets", rating: 4.8, reviewCount: 704, seller: "Shenzhen Security Tech", badge: "Deal", accent: "from-lime-100 to-lime-200" },
  { id: "p8", name: "Closure Lace Wig 20\"", priceNGN: 68000, originalPriceNGN: 82000, category: "Human Hair & Wigs", rating: 4.6, reviewCount: 458, seller: "Guangzhou Hair Supply", badge: "Deal", accent: "from-pink-100 to-pink-200" },
  { id: "p9", name: "Car Brake Pads (Universal Fit)", priceNGN: 32000, category: "Automobile Parts", rating: 4.5, reviewCount: 176, seller: "Jinjiang Auto Parts Co.", accent: "from-slate-100 to-slate-200" },
  { id: "p10", name: "13\" Laptop 8GB/256GB", priceNGN: 315000, originalPriceNGN: 360000, category: "Electronics & Gadgets", rating: 4.1, reviewCount: 890, seller: "Guangzhou Digital Co.", badge: "Deal", accent: "from-green-100 to-green-200" },
  { id: "p11", name: "Men's Tailored Blazer", priceNGN: 45000, category: "Fashion, Shoes & Bags", rating: 4.3, reviewCount: 122, seller: "Yiwu Fashion House", accent: "from-neutral-100 to-neutral-200" },
  { id: "p12", name: "Car Headlight Assembly (LED)", priceNGN: 54000, category: "Automobile Parts", rating: 4.4, reviewCount: 264, seller: "Jinjiang Auto Parts Co.", badge: "New", accent: "from-amber-100 to-amber-200" },
  { id: "p13", name: "Wireless Charging Pad 15W", priceNGN: 12500, originalPriceNGN: 18000, category: "Phones & Accessories", rating: 4.4, reviewCount: 380, seller: "Shenzhen AudioTech", badge: "Deal", accent: "from-sky-100 to-blue-200" },
  { id: "p14", name: "Smart LED TV 43\"", priceNGN: 198000, originalPriceNGN: 240000, category: "Electronics & Gadgets", rating: 4.5, reviewCount: 612, seller: "Ningbo Power Equipment", badge: "Best Seller", accent: "from-teal-100 to-cyan-200" },
  { id: "p15", name: "Ankara Print Maxi Dress", priceNGN: 21500, originalPriceNGN: 27000, category: "Fashion, Shoes & Bags", rating: 4.6, reviewCount: 289, seller: "Yiwu Fashion House", badge: "Deal", accent: "from-orange-100 to-pink-200" },
  { id: "p16", name: "Frontal Lace Wig 22\"", priceNGN: 95000, originalPriceNGN: 115000, category: "Human Hair & Wigs", rating: 4.7, reviewCount: 521, seller: "Guangzhou Hair Supply", badge: "Deal", accent: "from-violet-100 to-purple-200" },
  { id: "p17", name: "Car Side Mirror (Universal)", priceNGN: 18500, originalPriceNGN: 24000, category: "Automobile Parts", rating: 4.2, reviewCount: 143, seller: "Jinjiang Auto Parts Co.", badge: "Deal", accent: "from-gray-100 to-slate-200" },
  { id: "p18", name: "Bluetooth Smartwatch", priceNGN: 34500, originalPriceNGN: 42000, category: "Electronics & Gadgets", rating: 4.3, reviewCount: 705, seller: "Shenzhen AudioTech", badge: "Deal", accent: "from-indigo-100 to-blue-200" },
];


export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
