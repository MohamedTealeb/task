import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
  { name: "1", value: 42 },
  { name: "2", value: 21 },
  { name: "3", value: 28 },
  { name: "4", value: 9 },
  { name: "5", value: 42 },
  { name: "6", value: 21 },
  { name: "7", value: 27 },
  { name: "8", value: 10 },
];

const barColors = [
  "#2dd4bf", 
  "#facc15", 
  "#60a5fa", 
  "#ec4899", 
  "#3b82f6", 
  "#fb923c", 
  "#d946ef", 
  "#22d3ee", 
];

export function StatisticsChart({
  title,
  legendItems,
  isRTL,
}: StatisticsChartProps) {
  return (
    <div className="rounded-[32px] bg-white p-6 md:p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <h2
        className={`mb-6 text-lg font-bold text-gray-800 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h2>

      <div
        className={`flex flex-col gap-8 md:flex-row ${
          isRTL ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="flex-1 rounded-[28px] bg-white px-4 py-5 shadow-[0_0_0_1px_rgba(226,232,240,1)]">
          <div className="h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                barCategoryGap={20}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis dataKey="name" hide />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v} %`}
                  tick={{ fontSize: 11, fill: "#6B7280" }}
                />
                <Tooltip
                  cursor={{ fill: "rgba(243,244,246,0.8)" }}
                  formatter={(value: number | undefined) => [`${value ?? 0} %`, ""]}
                />
                <Bar dataKey="value" radius={[999, 999, 0, 0]}>
                  {chartData.map((_, index) => (
                    <Cell key={index} fill={barColors[index % barColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
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
