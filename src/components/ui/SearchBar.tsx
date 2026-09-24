"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SEARCH_CATEGORIES } from "@/lib/constants";

export default function SearchBar() {
  const router = useRouter();
  const [category, setCategory] = useState<string>(SEARCH_CATEGORIES[0]);
  const [query, setQuery] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category !== SEARCH_CATEGORIES[0]) params.set("category", category);
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-10 w-full max-w-3xl overflow-hidden rounded-md shadow-sm"
      role="search"
      aria-label="Search China Market Online"
    >
      <label htmlFor="search-category" className="sr-only">
        Search category
      </label>
      <select
        id="search-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="hidden shrink-0 border-r border-slate-300 bg-slate-100 px-2 text-sm text-slate-700 focus:outline-none sm:block"
      >
        {SEARCH_CATEGORIES.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search China Market Online"
        aria-label="Search China Market Online"
        className="min-w-0 flex-1 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex w-12 shrink-0 items-center justify-center bg-orange-400 text-slate-900 transition hover:bg-orange-500"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.45 4.39l3.58 3.58a.75.75 0 11-1.06 1.06l-3.58-3.58A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
