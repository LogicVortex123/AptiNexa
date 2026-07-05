import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

const ProblemDistributionChart = ({ easy, medium, hard }) => {
  const data = [
    { name: "Easy", value: easy },
    { name: "Medium", value: medium },
    { name: "Hard", value: hard },
  ].filter((d) => d.value > 0);

  if (data.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-slate-400">No problems solved yet</p>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={90}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            fontSize: "13px",
          }}
        />
        <Legend iconType="circle" wrapperStyle={{ fontSize: "13px" }} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProblemDistributionChart;
