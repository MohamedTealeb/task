import { ChevronDown, Search } from "lucide-react";

interface FormsFiltersProps {
  searchPlaceholder: string;
  motorStatusLabel: string;
  isRTL: boolean;
}

export function FormsFilters({
  searchPlaceholder,
  motorStatusLabel,
  isRTL,
}: FormsFiltersProps) {
  return (
    <div className="mx-auto mb-6 grid w-full max-w-[720px] grid-cols-1 items-center gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder={searchPlaceholder}
          className={`
            w-full rounded-full border border-gray-200 bg-white 
            px-6 py-3 text-sm text-gray-700 shadow-sm
            transition-all 
            focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100
            ${isRTL ? "pr-12 text-right" : "pl-12 text-left"}
          `}
        />
        <div
          className={`
            absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full 
          bg-[#71144B] shadow-md
            ${isRTL ? "left-2" : "right-2"}
          `}
        >
          <Search className="text-white" size={16} />
        </div>
      </div>

      <div className="relative w-full">
        <select
          className={`
            w-full appearance-none rounded-full border border-gray-200 bg-white 
            px-6 py-3 text-sm text-gray-700 shadow-sm
            transition-all 
            focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100
            ${isRTL ? "pr-10 text-right" : "pl-6 text-left"}
          `}
        >
          <option>{motorStatusLabel}</option>
        </select>
        <ChevronDown
          className={`
            pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#B00A70]
            ${isRTL ? "left-4" : "right-4"}
          `}
          size={16}
        />
      </div>
    </div>
  );
}
