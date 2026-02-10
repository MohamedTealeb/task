interface LineChartProps {
  title: string;
  days: string[];
  isRTL: boolean;
}

export function LineChart({ title, days, isRTL }: LineChartProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="relative h-64">
        <div className="flex h-full items-end justify-around">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 250">
            <path
              d="M 50 150 Q 150 100 250 130 T 450 120 T 650 140"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
            />
            <path
              d="M 50 180 Q 150 220 250 200 T 450 180 T 650 160"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="3"
            />
            <path
              d="M 50 120 Q 150 80 250 100 T 450 90 T 650 110"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
            />
            <path
              d="M 50 140 Q 150 120 250 150 T 450 140 T 650 130"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />

            <circle cx="500" cy="100" r="8" fill="#fbbf24" />
          </svg>

          <div className="absolute right-1/3 top-8 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-gray-800">
            {title}
          </div>
        </div>

        <div className="absolute bottom-0 flex w-full justify-around text-xs text-gray-400">
          {days.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
