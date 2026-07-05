import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBrain, FaChartLine, FaRobot, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-28 pb-16 dark:from-midnight dark:via-midnight-50 dark:to-[#0c0e16] sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="section-badge"
          >
            <FaBrain className="text-sm" />
            AI Powered Interview Readiness Platform
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-midnight-text sm:text-5xl lg:text-6xl"
          >
            Crack Coding
            <span className="gradient-text"> Interviews </span>
            Smarter with
            <span className="text-purple-600 dark:text-violet-400"> AptiNexa.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-midnight-muted sm:text-lg sm:leading-8"
          >
            Analyze your LeetCode profile, discover your strengths,
            identify weak areas, calculate interview readiness and receive
            personalized AI mentoring to accelerate your software engineering journey.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5"
          >
            <Link
              to="/signup"
              className="btn-primary group flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-sm font-semibold sm:text-base"
            >
              Analyze Your Profile
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#features"
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-midnight-border dark:bg-midnight-200/80 dark:text-midnight-text dark:hover:border-midnight-300 dark:hover:bg-midnight-200 sm:text-base"
            >
              Explore Features
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="relative"
        >
          <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

          <div className="glass-card relative rounded-3xl p-6 shadow-2xl shadow-blue-500/10 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-midnight-text sm:text-2xl">
                Dashboard Preview
              </h2>
              <div className="flex items-center gap-1.5 rounded-full bg-[#ffa116]/10 px-3 py-1.5 ring-1 ring-[#ffa116]/20">
                <SiLeetcode className="text-[#ffa116]" />
                <span className="text-xs font-semibold text-slate-700 dark:text-midnight-text">LeetCode</span>
              </div>
            </div>

            <div className="mb-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5 ring-1 ring-blue-100/80 dark:from-midnight-200/80 dark:to-midnight-100/60 dark:ring-midnight-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700 dark:text-midnight-text">
                  Readiness Score
                </span>
                <FaCode className="text-slate-300" />
              </div>
              <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-midnight-300">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <span className="absolute inset-0 rounded-full bg-white/20" />
                </motion.div>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Calculated after you connect your profile
              </p>
            </div>

            <div className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100 dark:bg-midnight-200/50 dark:ring-midnight-border"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <FaChartLine className="text-lg text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-midnight-text">Strengths &amp; Weak Areas</h3>
                  <p className="text-sm text-slate-400">
                    From your solved problems
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-100 dark:bg-midnight-200/50 dark:ring-midnight-border"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                  <FaRobot className="text-lg text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-midnight-text">AI Career Insights</h3>
                  <p className="text-sm text-slate-400">
                    Personalized to your stats
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
