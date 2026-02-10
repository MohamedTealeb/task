interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  isRTL: boolean;
}

export function FormInput({
  label,
  placeholder,
  type = "text",
  isRTL,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder || label}
        className={`
          rounded-full border border-pink-200 bg-white px-6 py-3 
          text-sm text-gray-700 placeholder-gray-400 
          transition-all 
          focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-100
          ${isRTL ? "text-right" : "text-left"}
        `}
      />
    </div>
  );
}
