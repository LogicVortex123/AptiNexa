import ReadinessScoreChart from "./ReadinessScoreChart";
import ScoreBreakdownChart from "./ScoreBreakdownChart";
import ProgressChart from "./ProgressChart";

const ReadinessOverview = ({ analysis }) => {
  const { readinessScore, profileGrade, progress, scoreBreakdown } = analysis;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="glass-card rounded-2xl p-6 shadow-sm lg:col-span-1">
        <h3 className="mb-2 text-sm font-semibold text-slate-500 dark:text-midnight-muted">Readiness Score</h3>
        <ReadinessScoreChart score={readinessScore} />
        <div className="mt-2 text-center">
          <span className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-bold text-purple-700">
            Grade {profileGrade}
          </span>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 shadow-sm lg:col-span-1">
        <h3 className="mb-4 text-sm font-semibold text-slate-500 dark:text-midnight-muted">Score Breakdown</h3>
        <ScoreBreakdownChart breakdown={scoreBreakdown} />
      </div>

      <div className="glass-card rounded-2xl p-6 shadow-sm lg:col-span-1">
        <h3 className="mb-4 text-sm font-semibold text-slate-500 dark:text-midnight-muted">Progress to Next Level</h3>
        <ProgressChart progress={progress} />
      </div>
    </div>
  );
};

export default ReadinessOverview;
