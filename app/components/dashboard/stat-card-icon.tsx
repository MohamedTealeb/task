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
    bg: "bg-orange-50",
    border: "border-t-orange-400",
    text: "text-orange-600",
    icon: "bg-orange-100",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-t-purple-400",
    text: "text-purple-600",
    icon: "bg-purple-100",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-t-blue-400",
    text: "text-blue-600",
    icon: "bg-blue-100",
  },
  green: {
    bg: "bg-green-50",
    border: "border-t-green-400",
    text: "text-green-600",
    icon: "bg-green-100",
  },
  yellow: {
    bg: "bg-yellow-50",
    border: "border-t-yellow-400",
    text: "text-yellow-600",
    icon: "bg-yellow-100",
  },
  red: {
    bg: "bg-red-50",
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
      className={`${colors.bg} rounded-2xl border-t-4 ${colors.border} p-6 shadow-sm transition-all hover:shadow-md`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className={`rounded-full ${colors.icon} p-3`}>
          <Icon className={colors.text} size={24} />
        </div>
        {subtitle && (
          <span className="text-xs text-gray-500">{subtitle}</span>
        )}
      </div>

      <div className={`mb-2 text-3xl font-bold ${colors.text}`}>{value}</div>
      <div className="text-sm font-semibold text-gray-600">{title}</div>
    </div>
  );
}
