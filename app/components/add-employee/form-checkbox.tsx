interface FormCheckboxProps {
  label: string;
  isRTL: boolean;
}

export function FormCheckbox({ label, isRTL }: FormCheckboxProps) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 ${
        isRTL ? "flex-row-reverse" : ""
      }`}
    >
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer rounded border-2 border-gray-300 text-pink-600 transition-all focus:ring-2 focus:ring-pink-200"
      />
      <span className="text-sm text-gray-600">{label}</span>
    </label>
  );
}
