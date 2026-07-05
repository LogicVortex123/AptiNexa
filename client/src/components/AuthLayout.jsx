import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaRobot } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10 dark:from-midnight dark:via-midnight-50 dark:to-\[#0c0e16\] sm:px-6">
      <div className="absolute top-5 right-5 z-10 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <div className="relative grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block"
        >
          <Link to="/" className="group inline-flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="AptiNexa Logo"
              className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold text-slate-900 dark:text-midnight-text">
              Apti<span className="gradient-text">Nexa</span>
            </span>
          </Link>

          <h2 className="mt-8 text-3xl font-bold leading-tight text-slate-900 dark:text-midnight-text">
            Prepare smarter for your next{" "}
            <span className="gradient-text">coding interview</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-midnight-muted">
            Analyze your LeetCode profile, get a readiness score, and receive
            AI-powered career mentoring tailored to your skills.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { icon: FaChartLine, label: "Readiness scoring from your stats" },
              { icon: FaRobot, label: "AI insights and weekly roadmaps" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 ring-1 ring-slate-200/80 dark:bg-midnight-200/60 dark:ring-midnight-border"
              >
                <Icon className="shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-midnight-text">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card w-full rounded-3xl p-7 shadow-xl shadow-blue-500/10 sm:p-9"
        >
          <div className="mb-8 lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="/logo.png" alt="AptiNexa Logo" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold text-slate-900 dark:text-midnight-text">AptiNexa</span>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 dark:text-midnight-text sm:text-3xl">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-500 dark:text-midnight-muted sm:text-base">{subtitle}</p>
          )}

          <div className="mt-8">{children}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
