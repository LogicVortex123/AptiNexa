import { FaSearch, FaSpinner } from "react-icons/fa";

const AnalyzeBar = ({ username, onChange, onAnalyze, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-4 shadow-sm sm:p-5"
    >
      <label htmlFor="leetcode-username" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-midnight-text">
        LeetCode Username
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <FaSearch className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
          <input
            id="leetcode-username"
            type="text"
            value={username}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your LeetCode username"
            className="input-field py-3 pr-4 pl-11"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !username.trim()}
          className="btn-primary flex items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Profile"
          )}
        </button>
      </div>
    </form>
  );
};

export default AnalyzeBar;
