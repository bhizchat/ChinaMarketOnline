import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";
import { DEFAULT_COUNTRY, SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-[#0b3d5c] text-white">
      <div className="mx-auto flex max-w-375 items-center gap-4 px-3 py-2 sm:px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded border border-transparent p-1 hover:border-white"
        >
          <Image
            src="/images/cmo-logo-trimmed.png"
            alt={SITE_NAME}
            width={415}
            height={208}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        <button
          type="button"
          className="hidden shrink-0 flex-col items-start rounded border border-transparent p-1 text-xs hover:border-white lg:flex"
        >
          <span className="text-slate-200">Deliver to</span>
          <span className="font-semibold">{DEFAULT_COUNTRY}</span>
        </button>

        <div className="flex-1">
          <SearchBar />
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="hidden rounded border border-transparent p-1 text-xs hover:border-white sm:block"
          >
            <span className="block text-slate-200">EN</span>
            <span className="font-semibold">🌐</span>
          </button>

          <Link
            href="/account"
            className="rounded border border-transparent p-1 text-xs leading-tight hover:border-white"
          >
            <span className="block text-slate-200">Hello, sign in</span>
            <span className="font-semibold">Account &amp; Lists</span>
          </Link>

          <Link
            href="/orders"
            className="hidden rounded border border-transparent p-1 text-xs leading-tight hover:border-white md:block"
          >
            <span className="block text-slate-200">Returns</span>
            <span className="font-semibold">&amp; Orders</span>
          </Link>

          <Link
            href="/cart"
            className="flex items-end gap-1 rounded border border-transparent p-1 hover:border-white"
            aria-label="Cart, 0 items"
          >
            <span className="relative">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M7 4h-2l-1 2v1h2l3.6 7.59-1.35 2.44A2 2 0 0010 20h9v-2h-9l1.1-2h6.45a2 2 0 001.8-1.11L21.84 8H6.2l-.94-2H7zM7 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-[10px] font-bold text-slate-900">
                0
              </span>
            </span>
            <span className="hidden text-sm font-semibold sm:block">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
