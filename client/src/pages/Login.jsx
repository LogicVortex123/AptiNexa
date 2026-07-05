import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const data = await loginUser(form.email.trim(), form.password);

      if (data.success) {
        login(data.token, data.user);
        toast.success("Welcome back!");
        navigate("/dashboard");
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to access your AptiNexa dashboard."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
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
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
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
          {loading ? "Signing in..." : "Sign In"}
        </motion.button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
          Sign up
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

export default Login;
