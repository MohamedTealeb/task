interface CityItemProps {
  city: string;
  awdCount: string;
  percentage: number;
  isRTL: boolean;
}

export function CityItem({ city, awdCount, percentage, isRTL }: CityItemProps) {
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={`flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md ${
        isRTL ? "flex-row-reverse" : ""
      }`}
    >
      <div className={isRTL ? "text-right" : "text-left"}>
        <h4 className="mb-1 font-bold text-gray-800">{city}</h4>
        <p className="text-xs text-gray-500">
          All AWD <span className="font-semibold text-pink-600">{awdCount}</span>
        </p>
      </div>

      <div className="relative h-12 w-12">
        <svg className="h-full w-full -rotate-90 transform">
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="#ec4899"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
