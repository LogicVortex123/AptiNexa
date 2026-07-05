import { FaTrophy, FaStar, FaMedal, FaChartBar } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const formatRanking = (ranking) => {
  if (ranking == null) return "—";
  if (ranking >= 1_000_000) return `${(ranking / 1_000_000).toFixed(1)}M`;
  if (ranking >= 1_000) return `${(ranking / 1_000).toFixed(1)}K`;
  return ranking.toLocaleString();
};

const StatCard = ({ icon: Icon, label, value, color, title }) => (
  <div className="glass-card min-w-0 overflow-hidden rounded-2xl p-4 shadow-sm transition hover:shadow-md sm:p-5">
    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
      <Icon className="text-lg text-white" />
    </div>
    <p
      className="truncate text-lg font-bold text-slate-900 dark:text-midnight-text sm:text-xl lg:text-2xl"
      title={title || (typeof value === "string" ? value : String(value))}
    >
      {value}
    </p>
    <p className="mt-1 truncate text-xs text-slate-500 sm:text-sm">{label}</p>
  </div>
);

const ProfileStats = ({ username, profile }) => {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffa116]/10 ring-1 ring-[#ffa116]/20">
          <SiLeetcode className="text-2xl text-[#ffa116]" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-midnight-text">@{username}</h2>
          <p className="text-sm text-slate-500">LeetCode Profile</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        <StatCard
          icon={FaTrophy}
          label="Total Solved"
          value={profile.totalSolved}
          color="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatCard
          icon={FaMedal}
          label="Easy"
          value={profile.easySolved}
          color="bg-gradient-to-br from-emerald-500 to-emerald-600"
        />
        <StatCard
          icon={FaMedal}
          label="Medium"
          value={profile.mediumSolved}
          color="bg-gradient-to-br from-amber-500 to-amber-600"
        />
        <StatCard
          icon={FaMedal}
          label="Hard"
          value={profile.hardSolved}
          color="bg-gradient-to-br from-rose-500 to-rose-600"
        />
        <StatCard
          icon={FaChartBar}
          label="Ranking"
          value={formatRanking(profile.ranking)}
          title={profile.ranking?.toLocaleString()}
          color="bg-gradient-to-br from-indigo-500 to-indigo-600"
        />
        <StatCard
          icon={FaStar}
          label="Star Rating"
          value={profile.starRating ?? "—"}
          color="bg-gradient-to-br from-purple-500 to-purple-600"
        />
        <StatCard
          icon={FaTrophy}
          label="Reputation"
          value={profile.reputation ?? "—"}
          color="bg-gradient-to-br from-cyan-500 to-cyan-600"
        />
      </div>
    </div>
  );
};

export default ProfileStats;
