"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/placeholder-products";

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function goTo(nextIndex: number) {
    setIndex((nextIndex + heroSlides.length) % heroSlides.length);
  }

  const slide = heroSlides[index];

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className={`flex min-h-55 flex-col justify-center gap-3 bg-linear-to-br ${slide.accent} p-8 sm:min-h-70 sm:p-12`}>
        <h2 className="max-w-md text-2xl font-bold text-slate-800 sm:text-3xl">{slide.title}</h2>
        <p className="max-w-sm text-sm text-slate-600 sm:text-base">{slide.subtitle}</p>
        <Link
          href={slide.href}
          className="mt-2 w-fit rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          {slide.ctaText}
        </Link>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-slate-800 hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-slate-800 hover:bg-white"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-slate-900" : "bg-slate-900/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
