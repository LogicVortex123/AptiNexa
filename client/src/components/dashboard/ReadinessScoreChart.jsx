import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";

const ReadinessScoreChart = ({ score }) => {
  const { isDark } = useTheme();
  const data = [{ name: "Score", value: score, fill: "url(#scoreGradient)" }];
  const trackColor = isDark ? "#252b3d" : "#e2e8f0";

  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="100%"
        barSize={14}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <defs>
          <linearGradient id="scoreGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          background={{ fill: trackColor }}
          dataKey="value"
          cornerRadius={8}
        />
        <text
          x="50%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-slate-900 text-3xl font-bold dark:fill-midnight-text"
        >
          {score}
        </text>
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-slate-400 text-xs"
        >
          / 100
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ReadinessScoreChart;
