import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#howitworks", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-2xl shadow-lg shadow-blue-500/5">
        <div className="flex items-center justify-between px-5 py-3.5 sm:px-6">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5" onClick={closeMobile}>
            <img
              src="/logo.png"
              alt="AptiNexa Logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-midnight-text sm:text-2xl">
              Apti<span className="gradient-text">Nexa</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-midnight-text dark:hover:bg-midnight-300 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="btn-primary rounded-xl px-5 py-2.5 text-sm font-semibold"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-midnight-border dark:bg-midnight-200 dark:text-midnight-text dark:hover:border-blue-500 dark:hover:bg-midnight-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="btn-primary rounded-xl px-5 py-2.5 text-sm font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 dark:border-midnight-border dark:bg-midnight-200 dark:text-midnight-text dark:hover:bg-midnight-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-100 dark:border-midnight-border lg:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-midnight-text dark:hover:bg-midnight-300 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4 dark:border-midnight-border">
                  {isAuthenticated ? (
                    <Link
                      to="/dashboard"
                      onClick={closeMobile}
                      className="btn-primary rounded-xl px-4 py-3 text-center text-sm font-semibold"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={closeMobile}
                        className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        onClick={closeMobile}
                        className="btn-primary rounded-xl px-4 py-3 text-center text-sm font-semibold"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
