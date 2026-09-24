import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import StarRating from "@/components/ui/StarRating";
import { formatNaira } from "@/lib/format";
import type { Product } from "@/data/placeholder-products";

type ProductCardProps = {
  product: Product;
};

const BADGE_STYLES: Record<NonNullable<Product["badge"]>, string> = {
  New: "bg-emerald-100 text-emerald-800",
  "Best Seller": "bg-orange-100 text-orange-800",
  Deal: "bg-red-100 text-red-800",
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col rounded-lg border border-slate-200 bg-white p-3 transition hover:shadow-md"
    >
      <PlaceholderImage
        label={product.name}
        accent={product.accent}
        className="aspect-square w-full rounded"
      />

      <div className="mt-3 flex flex-1 flex-col gap-1">
        {product.badge && (
          <span className={`w-fit rounded px-1.5 py-0.5 text-[11px] font-semibold ${BADGE_STYLES[product.badge]}`}>
            {product.badge}
          </span>
        )}

        <h3 className="line-clamp-2 text-sm text-slate-800">{product.name}</h3>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900">{formatNaira(product.priceNGN)}</span>
          {product.originalPriceNGN && (
            <span className="text-xs text-slate-400 line-through">{formatNaira(product.originalPriceNGN)}</span>
          )}
        </div>

        <span className="mt-auto text-xs text-slate-500">Sold by {product.seller}</span>
      </div>
    </Link>
  );
}
