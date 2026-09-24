type StarRatingProps = {
  rating: number;
  reviewCount?: number;
};

export default function StarRating({ rating, reviewCount }: StarRatingProps) {
  const fullStars = Math.round(rating);

  return (
    <div className="flex items-center gap-1">
      <div className="flex text-orange-400" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 20 20"
            fill={index < fullStars ? "currentColor" : "#d1d5db"}
            className="h-4 w-4"
          >
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
          </svg>
        ))}
      </div>
      <span className="sr-only">{rating} out of 5 stars</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-blue-700 hover:underline">{reviewCount.toLocaleString()}</span>
      )}
    </div>
  );
}
