import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";

const LoadingState = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 shadow-sm ring-1 ring-slate-100 dark:bg-midnight-100 dark:ring-midnight-border"
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/20" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">
          <FaBrain className="text-2xl text-white" />
        </div>
      </div>
      <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-midnight-text">
        Analyzing your profile...
      </h3>
      <p className="mt-2 max-w-sm text-center text-sm text-slate-500">
        Fetching LeetCode stats, calculating readiness score, and generating AI insights. This may take a moment.
      </p>
      <div className="mt-6 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-blue-500"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingState;
