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
      className={`mb-6 flex items-center gap-4 ${
        isRTL ? "flex-row-reverse" : ""
      }`}
    >
      {/* Search Input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className={`
            w-full rounded-full border border-gray-300 bg-white 
            px-6 py-3 text-sm text-gray-700 
            transition-all 
            focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100
            ${isRTL ? "pr-12 text-right" : "pl-12 text-left"}
          `}
        />
        <Search
          className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
            isRTL ? "right-4" : "left-4"
          }`}
          size={18}
        />
      </div>

      {/* Status Filter */}
      <div className="relative min-w-[200px]">
        <select
          className={`
            w-full appearance-none rounded-full border border-gray-300 bg-white 
            px-6 py-3 text-sm text-gray-600 
            transition-all 
            focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100
            ${isRTL ? "pr-12 text-right" : "pl-6 text-left"}
          `}
        >
          <option>{statusLabel}</option>
        </select>
        <ChevronDown
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 ${
            isRTL ? "left-4" : "right-4"
          }`}
          size={18}
        />
      </div>
    </div>
  );
}
