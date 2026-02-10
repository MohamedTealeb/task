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
      className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
    >
      <div className="relative">
        <select
          className={`
            appearance-none w-full min-w-[200px]  rounded-full border border-gray-300 bg-white 
            px-6 py-3 pr-10 text-sm text-gray-600 
            shadow-sm transition-all hover:border-gray-400 
            focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200
            ${isRTL ? "text-right" : "text-left"}
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

      <div className="relative">
        <select
          className={`
            appearance-none w-full min-w-[200px] rounded-full border border-gray-300 bg-white 
            px-6 py-3 pr-10 text-sm text-gray-600 
            shadow-sm transition-all hover:border-gray-400 
            focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200
            ${isRTL ? "text-right" : "text-left"}
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
