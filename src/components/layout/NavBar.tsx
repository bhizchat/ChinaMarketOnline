import Link from "next/link";
import { PRIMARY_NAV_LINKS } from "@/lib/constants";

export default function NavBar() {
  return (
    <nav className="bg-[#0e4d73] text-white">
      <div className="mx-auto flex max-w-375 items-center gap-1 overflow-x-auto px-3 py-1.5 text-sm sm:px-4">
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 rounded border border-transparent px-2 py-1 font-semibold hover:border-white"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zM2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z"
              clipRule="evenodd"
            />
          </svg>
          All
        </button>

        {PRIMARY_NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 whitespace-nowrap rounded border border-transparent px-2 py-1 hover:border-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
