interface StatCardProps {
  title: string;
  value: string;
  period: string;
  color: "pink" | "orange" | "green" | "blue";
}

const colorVariants = {
  pink: "bg-gradient-to-br from-pink-400 to-pink-500",
  orange: "bg-gradient-to-br from-orange-400 to-orange-500",
  green: "bg-gradient-to-br from-green-400 to-green-500",
  blue: "bg-gradient-to-br from-cyan-400 to-cyan-500",
};

export function StatCard({ title, value, period, color }: StatCardProps) {
  return (
    <div
      className={`${colorVariants[color]} rounded-2xl p-6 text-white shadow-lg`}
    >
      <h3 className="mb-4 text-sm font-semibold">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-sm opacity-90">{period}</span>
      </div>
    </div>
  );
}
