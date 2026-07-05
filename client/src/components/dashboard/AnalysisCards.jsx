import { FaBullseye, FaChartLine, FaLightbulb } from "react-icons/fa";

const severityColor = {
  High: "bg-red-100 text-red-700 ring-red-200",
  Medium: "bg-amber-100 text-amber-700 ring-amber-200",
  Low: "bg-yellow-100 text-yellow-700 ring-yellow-200",
};

const levelColor = {
  Excellent: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  Good: "bg-blue-100 text-blue-700 ring-blue-200",
  Average: "bg-slate-100 text-slate-700 ring-slate-200",
};

const WeakAreasCard = ({ areas }) => (
  <div className="glass-card rounded-2xl p-6 shadow-sm">
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100">
        <FaBullseye className="text-rose-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-midnight-text">Weak Areas</h3>
    </div>
    {areas.length === 0 ? (
      <p className="text-sm text-slate-500 dark:text-midnight-muted">No significant weak areas detected.</p>
    ) : (
      <ul className="space-y-3">
        {areas.map((item) => (
          <li
            key={item.area}
            className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-midnight-200/60 px-4 py-3 ring-1 ring-slate-100 dark:ring-midnight-border"
          >
            <span className="text-sm font-medium text-slate-800 dark:text-midnight-text">{item.area}</span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${severityColor[item.severity] || severityColor.Medium}`}
            >
              {item.severity}
            </span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const StrengthAreasCard = ({ areas }) => (
  <div className="glass-card rounded-2xl p-6 shadow-sm">
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
        <FaChartLine className="text-emerald-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-midnight-text">Strength Areas</h3>
    </div>
    {areas.length === 0 ? (
      <p className="text-sm text-slate-500 dark:text-midnight-muted">Keep solving to build strength areas.</p>
    ) : (
      <ul className="space-y-3">
        {areas.map((item) => (
          <li
            key={item.area}
            className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-midnight-200/60 px-4 py-3 ring-1 ring-slate-100 dark:ring-midnight-border"
          >
            <span className="text-sm font-medium text-slate-800 dark:text-midnight-text">{item.area}</span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${levelColor[item.level] || levelColor.Good}`}
            >
              {item.level}
            </span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const RecommendationsCard = ({ recommendations }) => (
  <div className="glass-card rounded-2xl p-6 shadow-sm">
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
        <FaLightbulb className="text-amber-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-midnight-text">Recommendations</h3>
    </div>
    {recommendations.length === 0 ? (
      <p className="text-sm text-slate-500 dark:text-midnight-muted">You&apos;re on a great track. Keep practicing!</p>
    ) : (
      <ul className="space-y-4">
        {recommendations.map((rec) => (
          <li
            key={rec.title}
            className="rounded-xl bg-slate-50 dark:bg-midnight-200/60 p-4 ring-1 ring-slate-100 dark:ring-midnight-border"
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-midnight-text">{rec.title}</h4>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ${severityColor[rec.priority] || severityColor.Medium}`}
              >
                {rec.priority}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-midnight-muted">
              {rec.recommendation}
            </p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export { WeakAreasCard, StrengthAreasCard, RecommendationsCard };
