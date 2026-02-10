import {
  DollarSign,
  Truck,
  Star,
  CheckCircle,
  Clock,
  RotateCcw,
} from "lucide-react";

interface StatCardIconProps {
  title: string;
  value: string;
  subtitle?: string;
  color: "orange" | "purple" | "blue" | "green" | "yellow" | "red";
  icon: "clients" | "deliverers" | "star" | "check" | "clock" | "return";
}

const colorVariants = {
  orange: {
    border: "border-t-orange-400",
    text: "text-orange-600",
    icon: "bg-orange-100",
  },
  purple: {
    border: "border-t-purple-400",
    text: "text-purple-600",
    icon: "bg-purple-100",
  },
  blue: {
    border: "border-t-blue-400",
    text: "text-blue-600",
    icon: "bg-blue-100",
  },
  green: {
    border: "border-t-green-400",
    text: "text-green-600",
    icon: "bg-green-100",
  },
  yellow: {
    border: "border-t-yellow-400",
    text: "text-yellow-600",
    icon: "bg-yellow-100",
  },
  red: {
    border: "border-t-red-400",
    text: "text-red-600",
    icon: "bg-red-100",
  },
};

const icons = {
  clients: DollarSign,
  deliverers: Truck,
  star: Star,
  check: CheckCircle,
  clock: Clock,
  return: RotateCcw,
};

export function StatCardIcon({
  title,
  value,
  subtitle,
  color,
  icon,
}: StatCardIconProps) {
  const Icon = icons[icon];
  const colors = colorVariants[color];

  return (
    <div
      className={`bg-white rounded-2xl border-t-4 ${colors.border} p-6 transition-transform hover:translate-y-[1px]`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className={`text-3xl font-bold ${colors.text}`}>{value}</div>

        <div className="flex flex-col items-end gap-1">
          <div className={`rounded-full ${colors.icon} p-3`}>
            <Icon className={colors.text} size={24} />
          </div>
          {subtitle && (
            <span className="text-[11px] font-medium text-gray-500">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="text-sm font-semibold text-gray-700">{title}</div>
    </div>
  );
}
