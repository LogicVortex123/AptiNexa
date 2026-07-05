import { FaBars } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../ThemeToggle";

const TopNavbar = ({ onMenuClick, analyzedUser }) => {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-midnight-border dark:bg-midnight-100/80">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 dark:border-midnight-border dark:text-midnight-text dark:hover:bg-midnight-300 lg:hidden"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-midnight-text sm:text-xl">
              Dashboard
            </h1>
            <p className="text-xs text-slate-500 dark:text-midnight-muted sm:text-sm">
              Welcome back, {user?.fullName?.split(" ")[0] || "there"}
              {analyzedUser && (
                <span className="text-blue-600 dark:text-blue-400"> · @{analyzedUser}</span>
              )}
            </p>
          </div>
        </div>

        <ThemeToggle className="lg:hidden" />
      </div>
    </header>
  );
};

export default TopNavbar;
