interface ChartLegendItem {
  label: string;
  color: string;
}

interface StatisticsChartProps {
  title: string;
  legendItems: ChartLegendItem[];
  isRTL: boolean;
}

const chartData = [
  { height: "50%", color: "bg-teal-400" },
  { height: "25%", color: "bg-yellow-400" },
  { height: "30%", color: "bg-blue-400" },
  { height: "10%", color: "bg-pink-500" },
  { height: "50%", color: "bg-blue-500" },
  { height: "25%", color: "bg-orange-400" },
  { height: "30%", color: "bg-fuchsia-500" },
  { height: "10%", color: "bg-cyan-400" },
];

export function StatisticsChart({
  title,
  legendItems,
  isRTL,
}: StatisticsChartProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2
        className={`mb-6 text-lg font-bold text-gray-800 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h2>

      <div className="flex gap-8">
        <div className="flex flex-1 items-end gap-4 border-b-2 border-l-2 border-gray-300 pb-4 pl-4">
      
          <div className="flex flex-col justify-between text-xs text-gray-500">
            <span>100 %</span>
            <span>90 %</span>
            <span>40 %</span>
            <span>30 %</span>
            <span>20 %</span>
            <span>10 %</span>
            <span>0 %</span>
          </div>

      
          <div className="flex flex-1 items-end justify-around gap-2">
            {chartData.map((bar, index) => (
              <div
                key={index}
                className={`${bar.color} w-full rounded-t transition-all hover:opacity-80`}
                style={{ height: bar.height }}
              />
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col justify-center gap-3 ${
            isRTL ? "items-end" : "items-start"
          }`}
        >
          {legendItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`h-3 w-3 rounded-full ${item.color}`} />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
