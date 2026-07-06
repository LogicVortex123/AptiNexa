import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLOR_MAP = {
  Easy: {
    color: "#10b981",
    gradientId: "easyGrad",
    stops: ["#34d399", "#059669"],
    bgClass: "bg-emerald-500",
    textClass: "text-emerald-500 dark:text-emerald-400"
  },
  Medium: {
    color: "#f59e0b",
    gradientId: "mediumGrad",
    stops: ["#fbbf24", "#d97706"],
    bgClass: "bg-amber-500",
    textClass: "text-amber-500 dark:text-amber-400"
  },
  Hard: {
    color: "#ef4444",
    gradientId: "hardGrad",
    stops: ["#f87171", "#dc2626"],
    bgClass: "bg-rose-500",
    textClass: "text-rose-500 dark:text-rose-400"
  },
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const config = COLOR_MAP[data.name];
    return (
      <div className="rounded-xl border border-slate-100 bg-white/90 p-3 shadow-xl backdrop-blur-md dark:border-midnight-border dark:bg-midnight-100/90 transition-all duration-300">
        <p className="text-xxs font-bold text-slate-400 dark:text-midnight-muted uppercase tracking-wider">
          {data.name} Solved
        </p>
        <p className={`mt-1 text-lg font-black ${config.textClass}`}>
          {data.value} <span className="text-xs font-semibold text-slate-400 dark:text-midnight-muted">({data.percentage}%)</span>
        </p>
      </div>
    );
  }
  return null;
};

const ProblemDistributionChart = ({ easy, medium, hard }) => {
  const total = easy + medium + hard;
  
  const data = [
    { name: "Easy", value: easy, percentage: total > 0 ? ((easy / total) * 100).toFixed(0) : 0 },
    { name: "Medium", value: medium, percentage: total > 0 ? ((medium / total) * 100).toFixed(0) : 0 },
    { name: "Hard", value: hard, percentage: total > 0 ? ((hard / total) * 100).toFixed(0) : 0 },
  ].filter((d) => d.value > 0);

  if (total === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-center text-sm font-medium text-slate-400 dark:text-midnight-muted">
          No problems solved yet
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {Object.entries(COLOR_MAP).map(([key, config]) => (
                <linearGradient key={key} id={config.gradientId} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={config.stops[0]} />
                  <stop offset="100%" stopColor={config.stops[1]} />
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={68}
              outerRadius={88}
              paddingAngle={5}
              cornerRadius={6}
              dataKey="value"
              animationBegin={100}
              animationDuration={800}
            >
              {data.map((entry, index) => {
                const config = COLOR_MAP[entry.name];
                return (
                  <Cell 
                    key={index} 
                    fill={`url(#${config.gradientId})`}
                    stroke="transparent"
                  />
                );
              })}
            </Pie>
            <Tooltip content={<CustomTooltip />} cursor={false} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Total Count Indicator */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-black text-slate-800 dark:text-midnight-text tracking-tight leading-none">
            {total}
          </span>
          <span className="text-[10px] font-bold text-slate-400 dark:text-midnight-muted uppercase tracking-widest mt-1.5">
            Total Solved
          </span>
        </div>
      </div>

      {/* Premium Custom Legend */}
      <div className="w-full max-w-sm mt-3 grid grid-cols-3 gap-3 border-t border-slate-100 dark:border-midnight-border/50 pt-4">
        {["Easy", "Medium", "Hard"].map((difficulty) => {
          const count = difficulty === "Easy" ? easy : difficulty === "Medium" ? medium : hard;
          const pct = total > 0 ? ((count / total) * 100).toFixed(0) : 0;
          const config = COLOR_MAP[difficulty];

          return (
            <div 
              key={difficulty}
              className="flex flex-col items-center rounded-xl bg-slate-50/50 dark:bg-midnight-200/20 px-2 py-2 ring-1 ring-slate-100/50 dark:ring-midnight-border/30 hover:ring-slate-200 dark:hover:ring-midnight-border/60 transition"
            >
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${config.bgClass}`} />
                <span className="text-xs font-bold text-slate-500 dark:text-midnight-muted">{difficulty}</span>
              </div>
              <span className="mt-1 text-sm font-black text-slate-800 dark:text-midnight-text">
                {count}
              </span>
              <span className="text-[10px] font-medium text-slate-400 dark:text-midnight-muted">
                {pct}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemDistributionChart;
