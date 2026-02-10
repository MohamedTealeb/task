interface DetailItemProps {
  label: string;
  value: string;
  icon?: "check" | "cross" | "pending";
  isRTL: boolean;
}

const iconColors = {
  check: "bg-green-500",
  cross: "bg-red-500",
  pending: "bg-gray-400",
};

export function DetailItem({ label, value, icon, isRTL }: DetailItemProps) {
  return (
    <div
      className={`flex items-center gap-3 ${
        isRTL ? "flex-row-reverse" : ""
      }`}
    >
      {icon && (
        <div className={`h-6 w-6 rounded-full ${iconColors[icon]}`} />
      )}
      <div className={`flex flex-1 flex-col gap-1 ${isRTL ? "text-right" : "text-left"}`}>
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-sm font-semibold text-gray-800">{value}</span>
      </div>
    </div>
  );
}
