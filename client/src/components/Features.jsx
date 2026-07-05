import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaBullseye,
  FaCode,
  FaRoad,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: FaRobot,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "AI Career Mentor",
    desc: "Receive personalized career guidance, interview tips, and learning roadmaps powered by AI.",
  },
  {
    icon: FaChartLine,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Readiness Score",
    desc: "Measure your interview readiness with a custom AptiNexa scoring algorithm.",
  },
  {
    icon: FaBullseye,
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    title: "Weak Area Detection",
    desc: "Discover the DSA topics and problem areas that need your attention.",
  },
  {
    icon: FaCode,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Strength Analysis",
    desc: "Identify your strongest problem-solving skills and coding abilities.",
  },
  {
    icon: FaRoad,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Weekly Roadmap",
    desc: "Get an AI-generated weekly plan tailored to your coding profile.",
  },
  {
    icon: FaLaptopCode,
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    title: "Company Readiness",
    desc: "Know which companies match your current preparation level.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-midnight dark:to-slate-900" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-badge">Features</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-midnight-text sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-midnight-muted sm:text-lg">
            Everything you need to prepare smarter for coding interviews.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={card}
                whileHover={{ y: -6 }}
                className="group glass-card rounded-2xl p-7 shadow-lg shadow-slate-200/50 transition-shadow hover:shadow-xl hover:shadow-blue-500/10 dark:shadow-slate-900/50 sm:p-8"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} transition-transform group-hover:scale-110`}
                >
                  <Icon className={`text-2xl ${feature.iconColor}`} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-midnight-text sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-midnight-muted sm:text-base sm:leading-7">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
