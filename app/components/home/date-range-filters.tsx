import { ChevronDown } from "lucide-react";

interface DateRangeFiltersProps {
  fromDateLabel: string;
  toDateLabel: string;
  isRTL: boolean;
}

export function DateRangeFilters({
  fromDateLabel,
  toDateLabel,
  isRTL,
}: DateRangeFiltersProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center gap-3 ${isRTL ? "sm:flex-row-reverse" : ""}`}
    >
      <div className="relative w-full sm:w-auto">
        <select
          className={`
            appearance-none w-full sm:min-w-[200px] rounded-full border border-gray-300 bg-white 
            px-4 py-2.5 sm:px-6 sm:py-3 text-sm text-gray-600 
            shadow-sm transition-all hover:border-gray-400 
            focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200
            ${isRTL ? "pr-10 text-right" : "pr-10 text-left"}
          `}
        >
          <option>{fromDateLabel}</option>
        </select>
        <ChevronDown
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 ${
            isRTL ? "left-4" : "right-4"
          }`}
          size={16}
        />
      </div>

      <div className="relative w-full sm:w-auto">
        <select
          className={`
            appearance-none w-full sm:min-w-[200px] rounded-full border border-gray-300 bg-white 
            px-4 py-2.5 sm:px-6 sm:py-3 text-sm text-gray-600 
            shadow-sm transition-all hover:border-gray-400 
            focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200
            ${isRTL ? "pr-10 text-right" : "pr-10 text-left"}
          `}
        >
          <option>{toDateLabel}</option>
        </select>
        <ChevronDown
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 ${
            isRTL ? "left-4" : "right-4"
          }`}
          size={16}
        />
      </div>
    </div>
  );
}
