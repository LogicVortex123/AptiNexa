import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaCode } from "react-icons/fa";
import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";
import AnalyzeBar from "../components/dashboard/AnalyzeBar";
import LoadingState from "../components/dashboard/LoadingState";
import ErrorState from "../components/dashboard/ErrorState";
import ProfileStats from "../components/dashboard/ProfileStats";
import ReadinessOverview from "../components/dashboard/ReadinessOverview";
import ProblemDistributionChart from "../components/dashboard/ProblemDistributionChart";
import {
  WeakAreasCard,
  StrengthAreasCard,
  RecommendationsCard,
} from "../components/dashboard/AnalysisCards";
import AIInsightsSection from "../components/dashboard/AIInsightsSection";
import { analyzeLeetCodeProfile } from "../services/leetcodeService";
import useScrollSpy from "../hooks/useScrollSpy";
import { getLastUsername, setLastUsername } from "../utils/storage";

const SECTIONS = ["overview", "profile", "insights"];

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 shadow-sm ring-1 ring-slate-100 dark:bg-midnight-100 dark:ring-midnight-border"
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100">
      <FaCode className="text-2xl text-blue-600" />
    </div>
    <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-midnight-text">
      Analyze Your LeetCode Profile
    </h3>
    <p className="mt-2 max-w-md text-center text-sm text-slate-500">
      Enter your LeetCode username above to get your readiness score,
      strengths, weak areas, and AI-powered career insights.
    </p>
  </motion.div>
);

const Dashboard = () => {
  const [username, setUsername] = useState(getLastUsername);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollSpyId = useScrollSpy(data ? SECTIONS : [], 140);
  const activeSection = data ? scrollSpyId : "overview";

  const handleAnalyze = useCallback(async () => {
    const trimmed = username.trim();
    if (!trimmed) {
      toast.error("Please enter a LeetCode username.");
      return;
    }

    setLoading(true);
    setError(null);
    setLastUsername(trimmed);

    try {
      const response = await analyzeLeetCodeProfile(trimmed);
      if (response.success) {
        setData(response.data);
        toast.success("Profile analyzed successfully!");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(response.message || "Analysis failed.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to analyze profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [username]);

  const scrollToSection = (id) => {
    if (!data && id !== "overview") {
      toast.error("Analyze a profile first to view this section.");
      return;
    }
    setSidebarOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-midnight">
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        hasData={Boolean(data)}
      />

      <div className="lg:pl-64">
        <TopNavbar
          onMenuClick={() => setSidebarOpen(true)}
          analyzedUser={data?.username}
        />

        <main className="space-y-8 p-4 sm:p-6 lg:p-8">
          <AnalyzeBar
            username={username}
            onChange={setUsername}
            onAnalyze={handleAnalyze}
            loading={loading}
          />

          {loading && <LoadingState />}

          {error && !loading && (
            <ErrorState message={error} onRetry={handleAnalyze} />
          )}

          {!loading && !error && !data && <EmptyState />}

          {data && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-10"
            >
              <section id="overview" className="scroll-mt-24 space-y-6">
                <ProfileStats username={data.username} profile={data.profile} />
                <ReadinessOverview analysis={data.analysis} />

                <div className="glass-card rounded-2xl p-6 shadow-sm">
                  <h3 className="mb-4 text-sm font-semibold text-slate-500 dark:text-midnight-muted">
                    Problem Distribution
                  </h3>
                  <ProblemDistributionChart
                    easy={data.profile.easySolved}
                    medium={data.profile.mediumSolved}
                    hard={data.profile.hardSolved}
                  />
                </div>
              </section>

              <section id="profile" className="scroll-mt-24 space-y-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-midnight-text sm:text-2xl">
                  Profile Analysis
                </h2>
                <div className="grid gap-6 lg:grid-cols-3">
                  <WeakAreasCard areas={data.analysis.weakAreas} />
                  <StrengthAreasCard areas={data.analysis.strengthAreas} />
                  <RecommendationsCard recommendations={data.analysis.recommendations} />
                </div>
              </section>

              <AIInsightsSection insights={data.aiInsights} />
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
