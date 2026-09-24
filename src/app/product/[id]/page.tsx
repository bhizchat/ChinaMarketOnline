import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import StarRating from "@/components/ui/StarRating";
import { formatNaira } from "@/lib/format";
import { getProductById } from "@/data/placeholder-products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-375 px-3 py-6 sm:px-4">
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-white p-4 shadow-sm md:grid-cols-2">
        <PlaceholderImage
          label={product.name}
          accent={product.accent}
          className="aspect-square w-full rounded-lg"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-slate-900">{product.name}</h1>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />

          <div className="flex items-baseline gap-3 border-y border-slate-200 py-3">
            <span className="text-3xl font-bold text-slate-900">{formatNaira(product.priceNGN)}</span>
            {product.originalPriceNGN && (
              <span className="text-base text-slate-400 line-through">
                {formatNaira(product.originalPriceNGN)}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600">Category: {product.category}</p>
          <p className="text-sm text-slate-600">Sold by: {product.seller}</p>
          <p className="text-sm text-slate-500">
            Product details, images and shipping options will be provided by the seller once seller onboarding
            launches. This is placeholder content for MVP layout purposes.
          </p>

          <button
            type="button"
            disabled
            className="mt-4 w-full cursor-not-allowed rounded-md bg-orange-300 px-4 py-3 text-sm font-semibold text-slate-800 sm:w-64"
            title="Checkout is not available yet"
          >
            Add to Cart (coming soon)
          </button>
        </div>
      </div>
    </div>
  );
}
