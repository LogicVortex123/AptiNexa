import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-50 dark:border-midnight-border dark:bg-midnight-200 dark:text-amber-200/90 dark:hover:bg-midnight-300 ${className}`}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
