import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBrain, FaHome } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 dark:from-midnight dark:via-midnight-50 dark:to-\[#0c0e16\]">
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-md rounded-3xl p-10 text-center shadow-xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">
          <FaBrain className="text-2xl text-white" />
        </div>
        <h1 className="mt-6 text-6xl font-extrabold gradient-text">404</h1>
        <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-midnight-text">Page not found</p>
        <p className="mt-2 text-sm text-slate-500 dark:text-midnight-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-primary mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
        >
          <FaHome />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
