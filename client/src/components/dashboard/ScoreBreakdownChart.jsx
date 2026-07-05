import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

const ScoreBreakdownChart = ({ breakdown }) => {
  const data = [
    { name: "Problems", score: breakdown.problemScore, max: 35 },
    { name: "Difficulty", score: breakdown.difficultyScore, max: 25 },
    { name: "Ranking", score: breakdown.rankingScore, max: 20 },
    { name: "Balance", score: breakdown.balanceScore, max: 20 },
  ];

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} />
        <YAxis tick={{ fontSize: 12, fill: "#64748b" }} domain={[0, 35]} />
        <Tooltip
          formatter={(value, _, props) => [
            `${value} / ${props.payload.max}`,
            "Score",
          ]}
          contentStyle={{
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            fontSize: "13px",
          }}
        />
        <Bar dataKey="score" radius={[8, 8, 0, 0]}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ScoreBreakdownChart;
