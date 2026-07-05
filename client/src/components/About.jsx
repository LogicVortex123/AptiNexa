import { motion } from "framer-motion";
import { FaBrain, FaCode, FaRocket } from "react-icons/fa";

const highlights = [
  { icon: FaBrain, label: "AI-Powered", desc: "Smart mentoring" },
  { icon: FaCode, label: "LeetCode Analytics", desc: "Deep profile insights" },
  { icon: FaRocket, label: "Career Ready", desc: "Interview focused" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50/50 to-purple-50/50 dark:from-midnight dark:via-midnight-50 dark:to-\[#0c0e16\]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">About Us</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-midnight-text sm:text-4xl">
            About AptiNexa
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-base leading-relaxed text-slate-600 dark:text-midnight-muted sm:text-lg sm:leading-8"
        >
          AptiNexa is an AI-powered interview readiness platform built to help
          students and software developers prepare smarter for technical
          interviews.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base leading-relaxed text-slate-600 dark:text-midnight-muted sm:text-lg sm:leading-8"
        >
          Using LeetCode analytics, custom readiness algorithms, and AI-powered
          career mentoring, AptiNexa identifies strengths, highlights weak
          areas, recommends learning roadmaps, and provides personalized
          interview guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                  <Icon className="text-lg text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-midnight-text">{item.label}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-midnight-muted">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
