import { Link, useNavigate } from "react-router-dom";
import { FaBrain, FaChartPie, FaRobot, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../ThemeToggle";

const navItems = [
  { id: "overview", label: "Overview", icon: FaChartPie },
  { id: "profile", label: "Profile Analysis", icon: FaBrain },
  { id: "insights", label: "AI Insights", icon: FaRobot },
];

const Sidebar = ({ activeSection, onNavigate, mobileOpen, onClose, hasData }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const content = (
    <>
      <div className="flex items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="AptiNexa Logo" className="h-9 w-9 object-contain" />
          <span className="text-lg font-bold text-slate-900 dark:text-midnight-text">
            Apti<span className="gradient-text">Nexa</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-midnight-300 lg:hidden"
          aria-label="Close sidebar"
        >
          <FaTimes />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            disabled={!hasData && id !== "overview"}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-40 ${
              activeSection === id
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/25"
                : "text-slate-600 hover:bg-slate-100 dark:text-midnight-text dark:hover:bg-midnight-300"
            }`}
          >
            <Icon className="text-base" />
            {label}
          </button>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4 dark:border-midnight-border">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 dark:text-midnight-muted">Theme</span>
          <ThemeToggle />
        </div>
        <div className="mb-3 rounded-xl bg-slate-50 px-4 py-3 dark:bg-midnight-100">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-midnight-text">
            {user?.fullName || "User"}
          </p>
          <p className="truncate text-xs text-slate-500 dark:text-midnight-muted">{user?.email}</p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/30"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-64 flex-col border-r border-slate-200 bg-white transition-transform dark:border-midnight-border dark:bg-midnight-100 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {content}
      </aside>
    </>
  );
};

export default Sidebar;
