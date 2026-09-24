import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { CategorySection as CategorySectionType } from "@/data/placeholder-products";

type CategorySectionProps = {
  section: CategorySectionType;
};

export default function CategorySection({ section }: CategorySectionProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-800">{section.title}</h3>
        <Link href={section.href} aria-label={`See more: ${section.title}`} className="text-slate-500 hover:text-slate-800">
          ›
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {section.tiles.map((tile) => (
          <Link key={tile.id} href={tile.href} className="group">
            <PlaceholderImage
              label={tile.label}
              accent={tile.accent}
              className="aspect-square w-full rounded"
            />
            <span className="mt-1 block text-sm text-slate-700 group-hover:underline">{tile.label}</span>
          </Link>
        ))}
      </div>
      <Link href={section.href} className="mt-3 block text-sm text-blue-700 hover:underline">
        Shop now
      </Link>
    </div>
  );
}
