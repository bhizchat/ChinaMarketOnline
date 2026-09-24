"use client";

import { useRef } from "react";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/data/placeholder-products";

type FeaturedProductsProps = {
  title: string;
  products: Product[];
};

export default function FeaturedProducts({ title, products }: FeaturedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(amount: number) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section className="relative rounded-lg bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-lg font-bold text-slate-800">{title}</h3>

      <button
        type="button"
        onClick={() => scrollByAmount(-600)}
        aria-label="Scroll left"
        className="absolute left-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white sm:flex"
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth pb-1 scrollbar-none"
      >
        {products.map((product) => (
          <div key={product.id} className="w-40 shrink-0 sm:w-48">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(600)}
        aria-label="Scroll right"
        className="absolute right-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white sm:flex"
      >
        ›
      </button>
    </section>
  );
}
