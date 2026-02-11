import { ChevronDown, Search } from "lucide-react";

interface EmployeesFiltersProps {
  searchPlaceholder: string;
  statusLabel: string;
  isRTL: boolean;
}

export function EmployeesFilters({
  searchPlaceholder,
  statusLabel,
  isRTL,
}: EmployeesFiltersProps) {
  return (
    <div
      className={`mb-6 flex items-center gap-3 ${
        isRTL ? "flex-row-reverse" : "flex-row-reverse"
      }`}
    >
      <div className="relative flex-1">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className={`
            h-10 sm:h-12 rounded-full border-2 border-[#B00A70] bg-white 
            px-4 sm:px-6 text-sm text-gray-700 placeholder:text-gray-400
            transition-all 
            focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100
            ${isRTL ? "pr-10 sm:pr-12 text-right" : "pl-10 sm:pl-12 text-left"}
          `}
        />
        <Search
          className={`absolute top-1/2 -translate-y-1/2 text-[#B00A70] ${
            isRTL ? "right-3 sm:right-4" : "left-3 sm:left-4"
          }`}
          size={16}
        />
      </div>

      <div className="relative min-w-[200px]">
        <select
          className={`
            h-10 sm:h-12 w-full appearance-none rounded-full border-2 border-[#B00A70] bg-white 
            px-4 sm:px-6 text-sm text-gray-600 placeholder:text-gray-400
            transition-all 
            focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100
            ${isRTL ? "pr-10 sm:pr-12 text-right" : "pl-4 sm:pl-6 text-left"}
          `}
        >
          <option>{statusLabel}</option>
        </select>
        <ChevronDown
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#B00A70] ${
            isRTL ? "left-3 sm:left-4" : "right-3 sm:right-4"
          }`}
          size={16}
        />
      </div>
    </div>
  );
}
