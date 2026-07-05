import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import { signupUser } from "../services/authService";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const data = await signupUser(
        form.fullName.trim(),
        form.email.trim(),
        form.password
      );

      if (data.success) {
        toast.success("Account created! Please sign in.");
        navigate("/login");
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Signup failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start analyzing your LeetCode profile today."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-midnight-text">
            Full name
          </label>
          <div className="relative">
            <FaUser className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              value={form.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="input-field py-3 pr-4 pl-11"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-midnight-text">
            Email address
          </label>
          <div className="relative">
            <FaEnvelope className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input-field py-3 pr-4 pl-11"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-midnight-text">
            Password
          </label>
          <div className="relative">
            <FaLock className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              className="input-field py-3 pr-11 pl-11"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.01 }}
          whileTap={{ scale: loading ? 1 : 0.99 }}
          className="btn-primary w-full rounded-xl py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create Account"}
        </motion.button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Sign in
        </Link>
      </p>

      <p className="mt-4 text-center">
        <Link to="/" className="text-sm text-slate-400 transition hover:text-slate-600">
          &larr; Back to home
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
