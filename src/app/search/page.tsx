import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/placeholder-products";

type SearchPageProps = {
  searchParams: Promise<{ q?: string; category?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, category } = await searchParams;
  const query = q?.toLowerCase().trim() ?? "";

  const results = products.filter((product) => {
    const matchesQuery = query ? product.name.toLowerCase().includes(query) : true;
    const matchesCategory = category && category !== "All Categories" ? product.category === category : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-375 px-3 py-6 sm:px-4">
      <h1 className="mb-4 text-lg text-slate-700">
        {query ? (
          <>
            Results for <span className="font-semibold">&ldquo;{q}&rdquo;</span>
          </>
        ) : (
          "All products"
        )}
      </h1>

      {results.length === 0 ? (
        <p className="text-sm text-slate-500">
          No placeholder products match your search yet. Try browsing categories from the homepage.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
