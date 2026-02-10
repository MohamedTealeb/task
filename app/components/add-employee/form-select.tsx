import { ChevronDown } from "lucide-react";

interface FormSelectProps {
  label: string;
  placeholder?: string;
  options?: string[];
  isRTL: boolean;
}

export function FormSelect({
  label,
  placeholder,
  options = [],
  isRTL,
}: FormSelectProps) {
  return (
    <div className="relative flex flex-col gap-2">
      <select
        className={`
          appearance-none rounded-full border border-pink-200 bg-white 
          px-6 py-3 text-sm text-gray-400 
          transition-all 
          focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-100
          ${isRTL ? "text-right pr-12" : "text-left pl-6"}
        `}
      >
        <option value="">{placeholder || label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-pink-400 ${
          isRTL ? "left-4" : "right-4"
        }`}
        size={18}
      />
    </div>
  );
}
