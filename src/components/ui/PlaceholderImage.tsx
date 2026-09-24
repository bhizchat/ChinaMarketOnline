type PlaceholderImageProps = {
  label: string;
  accent: string;
  className?: string;
};

/**
 * Lightweight gradient placeholder used in place of real product/category imagery.
 * Swap for real <Image> components once seller product photos are available.
 */
export default function PlaceholderImage({ label, accent, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-linear-to-br ${accent} text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="px-2 text-xs font-medium text-slate-600 sm:text-sm">
        {label}
      </span>
    </div>
  );
}
