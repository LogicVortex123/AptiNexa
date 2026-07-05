import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const ProgressChart = ({ progress }) => {
  const data = [
    {
      name: "Progress",
      current: progress.currentScore,
      target: progress.targetScore,
    },
  ];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-slate-500">
          {progress.currentLevel} → {progress.nextLevel}
        </span>
        <span className="font-semibold text-blue-600">
          {progress.remainingPoints} pts to go
        </span>
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip
            formatter={(value) => [`${value}`, ""]}
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              fontSize: "13px",
            }}
          />
          <ReferenceLine x={progress.targetScore} stroke="#7c3aed" strokeDasharray="4 4" />
          <Bar dataKey="current" fill="url(#progressGrad)" radius={[0, 8, 8, 0]} barSize={28} />
          <defs>
            <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
