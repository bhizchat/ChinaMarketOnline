import HeroBanner from "@/components/home/HeroBanner";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { categorySections, products } from "@/data/placeholder-products";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-375 px-3 py-4 sm:px-4">
      <HeroBanner />

      <div className="relative mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categorySections.map((section) => (
          <CategorySection key={section.id} section={section} />
        ))}
      </div>

      <div className="mt-4 space-y-4">
        <FeaturedProducts
          title="Deals you can't miss"
          products={products.filter((product) => product.badge === "Deal" || product.badge === "Best Seller")}
        />
        <FeaturedProducts title="Featured products" products={products} />
      </div>
    </div>
  );
}
