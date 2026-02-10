interface StatisticsPanelProps {
  title: string;
  stats: {
    label: string;
    value: string;
    color: string;
  }[];
  isRTL: boolean;
}

export function StatisticsPanel({
  title,
  stats,
  isRTL,
}: StatisticsPanelProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-6 text-white shadow-lg">
      <h3
        className={`mb-6 border-b border-white/20 pb-4 text-xl font-bold ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h3>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center justify-between border-b border-white/10 pb-4 last:border-0 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <span className="text-sm font-medium opacity-90">{stat.label}</span>
            <span className="text-2xl font-bold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
