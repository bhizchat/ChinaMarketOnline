export const SITE_NAME = "China Market Online";
export const DEFAULT_CURRENCY = "NGN";
export const DEFAULT_COUNTRY = "Nigeria";

export const SEARCH_CATEGORIES = [
  "All Categories",
  "Phones & Accessories",
  "Electronics & Gadgets",
  "Fashion, Shoes & Bags",
  "Human Hair & Wigs",
  "Beauty & Cosmetics",
  "Home Appliances",
  "Automobile Parts",
  "Building & Construction Materials",
  "Machinery & Industrial Equipment",
  "Baby & Kids Products",
  "Furniture & Home Decor",
  "Jewelry & Accessories",
] as const;

export const PRIMARY_NAV_LINKS = [
  { label: "Today's Deals", href: "/deals" },
  { label: "Phones & Accessories", href: "/category/phones-accessories" },
  { label: "Electronics & Gadgets", href: "/category/electronics" },
  { label: "Fashion, Shoes & Bags", href: "/category/fashion" },
  { label: "Human Hair & Wigs", href: "/category/hair-wigs" },
  { label: "Home Appliances", href: "/category/home-appliances" },
  { label: "Automobile Parts", href: "/category/automobile-parts" },
  { label: "Sell on CMO", href: "/sell" },
  { label: "Customer Service", href: "/help" },
] as const;

export const FOOTER_LINK_GROUPS = [
  {
    title: "Get to Know Us",
    links: [
      { label: "About China Market Online", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press Releases", href: "/press" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Make Money With Us",
    links: [
      { label: "Sell on China Market Online", href: "/sell" },
      { label: "Become a Verified Seller", href: "/sell/verification" },
      { label: "Seller Subscription Plans", href: "/sell/pricing" },
      { label: "Advertise Your Products", href: "/advertise" },
    ],
  },
  {
    title: "Payment & Shipping",
    links: [
      { label: "Payment Methods", href: "/help/payments" },
      { label: "Shipping Rates & Policies", href: "/help/shipping" },
      { label: "Track Your Order", href: "/orders/track" },
      { label: "Currency Converter", href: "/help/currency" },
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      { label: "Your Account", href: "/account" },
      { label: "Your Orders", href: "/orders" },
      { label: "Returns & Refunds", href: "/help/returns" },
      { label: "Help Center", href: "/help" },
    ],
  },
] as const;
