import { motion } from "framer-motion";
import { FaUserPlus, FaSearch, FaBrain, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    color: "text-blue-600",
    bg: "bg-blue-50",
    ring: "ring-blue-100",
    title: "Create an Account",
    desc: "Sign up securely and access your personalized AptiNexa dashboard.",
  },
  {
    icon: FaSearch,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    title: "Enter LeetCode Username",
    desc: "Provide your LeetCode username for profile analysis.",
  },
  {
    icon: FaBrain,
    color: "text-purple-600",
    bg: "bg-purple-50",
    ring: "ring-purple-100",
    title: "AI Profile Analysis",
    desc: "AptiNexa analyzes your coding profile using custom algorithms and AI.",
  },
  {
    icon: FaChartLine,
    color: "text-orange-600",
    bg: "bg-orange-50",
    ring: "ring-orange-100",
    title: "Get Personalized Insights",
    desc: "Receive readiness scores, AI mentoring, roadmap and interview guidance.",
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="relative bg-white py-24 dark:bg-midnight-100 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-badge">Process</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-midnight-text sm:text-4xl">
            How AptiNexa Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-midnight-muted sm:text-lg">
            Four simple steps to improve your interview preparation.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line — desktop only */}
          <div className="pointer-events-none absolute top-16 right-[12.5%] left-[12.5%] hidden h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative text-center"
              >
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.bg} ring-4 ${step.ring} shadow-md`}
                  >
                    <Icon className={`text-2xl ${step.color}`} />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-xs font-bold text-white shadow-md">
                    {index + 1}
                  </span>
                </div>

                <div className="glass-card rounded-2xl p-6 shadow-md transition-shadow hover:shadow-lg sm:p-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-midnight-text sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-midnight-muted sm:text-base sm:leading-7">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
