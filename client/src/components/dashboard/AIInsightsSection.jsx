import { motion } from "framer-motion";
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
import {
  FaRobot,
  FaBriefcase,
  FaBullseye,
  FaCalendarWeek,
  FaComments,
  FaFlag,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaBuilding,
} from "react-icons/fa";

const InsightCard = ({ icon: Icon, title, children, color = "blue", className = "" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    emerald: "bg-emerald-100 text-emerald-600",
    rose: "bg-rose-100 text-rose-600",
    amber: "bg-amber-100 text-amber-600",
    indigo: "bg-indigo-100 text-indigo-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={`glass-card rounded-2xl p-6 shadow-sm ${className}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[color]}`}>
          <Icon />
        </div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-midnight-text">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

const ReadinessAssessmentChart = ({ assessment }) => {
  const data = [
    { name: "Internship", value: assessment.internship },
    { name: "Service", value: assessment.serviceBased },
    { name: "Product", value: assessment.productBased },
    { name: "FAANG", value: assessment.faang },
  ];

  const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} />
        <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} />
        <Tooltip
          formatter={(v) => [`${v}%`, "Readiness"]}
          contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "13px" }}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const AIInsightsSection = ({ insights }) => {
  if (!insights) return null;

  const companies = insights.recommendedCompanies || {};
  const ready = companies.currentlyReady || [];
  const target = companies.targetAfterImprovement || [];

  return (
    <section id="insights" className="scroll-mt-24 space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
          <FaRobot className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-midnight-text sm:text-2xl">AI Insights</h2>
          <p className="text-sm text-slate-500 dark:text-midnight-muted">Personalized mentoring from AptiNexa AI</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <InsightCard icon={FaBriefcase} title="Career Summary" color="blue" className="lg:col-span-2">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
            {insights.careerSummary || "No summary available."}
          </p>
        </InsightCard>

        <InsightCard icon={FaRocket} title="Current Stage" color="purple">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
            {insights.currentStage || "—"}
          </p>
        </InsightCard>

        <InsightCard icon={FaBullseye} title="Readiness Assessment" color="indigo">
          {insights.readinessAssessment ? (
            <ReadinessAssessmentChart assessment={insights.readinessAssessment} />
          ) : (
            <p className="text-sm text-slate-500 dark:text-midnight-muted">Assessment unavailable.</p>
          )}
        </InsightCard>

        <InsightCard icon={FaStar} title="Biggest Strength" color="emerald">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
            {insights.biggestStrength || "—"}
          </p>
        </InsightCard>

        <InsightCard icon={FaBullseye} title="Biggest Weakness" color="rose">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
            {insights.biggestWeakness || "—"}
          </p>
        </InsightCard>

        <InsightCard icon={FaBuilding} title="Recommended Companies" color="blue">
          {ready.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {ready.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100"
                >
                  {c}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 dark:text-midnight-muted">No companies listed.</p>
          )}
        </InsightCard>

        <InsightCard icon={FaFlag} title="Target Companies" color="purple">
          {target.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {target.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 ring-1 ring-purple-100"
                >
                  {c}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 dark:text-midnight-muted">No target companies listed.</p>
          )}
        </InsightCard>

        <InsightCard icon={FaCalendarWeek} title="Weekly Roadmap" color="amber" className="lg:col-span-2">
          {(insights.weeklyRoadmap || []).length > 0 ? (
            <ul className="space-y-3">
              {insights.weeklyRoadmap.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl bg-slate-50 dark:bg-midnight-200/60 p-4 ring-1 ring-slate-100 dark:ring-midnight-border"
                >
                  <span className="shrink-0 rounded-lg bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    {item.day}
                  </span>
                  <p className="text-sm text-slate-600 dark:text-midnight-muted">{item.task}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 dark:text-midnight-muted">No roadmap available.</p>
          )}
        </InsightCard>

        <InsightCard icon={FaLightbulb} title="Focus Topics" color="indigo" className="lg:col-span-2">
          {(insights.focusTopics || []).length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2">
              {insights.focusTopics.map((item, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-slate-50 dark:bg-midnight-200/60 p-4 ring-1 ring-slate-100 dark:ring-midnight-border"
                >
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-midnight-text">{item.topic}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-midnight-muted">{item.reason}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 dark:text-midnight-muted">No focus topics available.</p>
          )}
        </InsightCard>

        <InsightCard icon={FaComments} title="Interview Tips" color="blue" className="lg:col-span-2">
          {(insights.interviewTips || []).length > 0 ? (
            <ul className="space-y-2">
              {insights.interviewTips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-midnight-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 dark:text-midnight-muted">No tips available.</p>
          )}
        </InsightCard>

        <InsightCard icon={FaFlag} title="30-Day Goal" color="emerald">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
            {insights.thirtyDayGoal || "—"}
          </p>
        </InsightCard>

        <InsightCard icon={FaRocket} title="Next Milestone" color="purple">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
            {insights.nextMilestone || "—"}
          </p>
        </InsightCard>

        <InsightCard icon={FaHeart} title="Motivation" color="rose" className="lg:col-span-2">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted italic">
            &ldquo;{insights.motivation || "Keep pushing forward!"}&rdquo;
          </p>
        </InsightCard>

        {insights.whyThisRecommendation && (
          <InsightCard icon={FaLightbulb} title="Why This Recommendation" color="amber" className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
              {insights.whyThisRecommendation}
            </p>
          </InsightCard>
        )}
      </div>
    </section>
  );
};

export default AIInsightsSection;
