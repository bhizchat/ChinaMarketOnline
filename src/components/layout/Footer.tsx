"use client";

import Link from "next/link";
import { FOOTER_LINK_GROUPS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-white">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full bg-slate-700 py-3 text-center text-sm hover:bg-slate-600"
      >
        Back to top
      </button>

      <div className="mx-auto grid max-w-375 grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        {FOOTER_LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-375 flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-center">
          <span className="text-lg font-bold">{SITE_NAME}</span>
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded border border-slate-600 px-2 py-1">English</span>
            <span className="rounded border border-slate-600 px-2 py-1">₦ NGN &ndash; Nigerian Naira</span>
            <span className="rounded border border-slate-600 px-2 py-1">🇳🇬 Nigeria</span>
          </div>
        </div>
        <p className="pb-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
