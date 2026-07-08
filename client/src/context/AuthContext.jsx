import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { fetchProfile } from "../services/authService";
import {
  clearAuth,
  getStoredUser,
  getToken,
  setStoredUser,
  setToken,
} from "../utils/token";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);
  const [token, setTokenState] = useState(getToken);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = Boolean(token) || Boolean(getToken());

  const login = useCallback((newToken, userData) => {
    setToken(newToken);
    setStoredUser(userData);
    setUser(userData);
    setTokenState(newToken);
  }, []);

  const logout = useCallback(() => {
    clearAuth();
    setUser(null);
    setTokenState(null);
  }, []);

  useEffect(() => {
    const init = async () => {
      const token = getToken();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await fetchProfile();
        if (data?.user) {
          setUser(data.user);
          setStoredUser(data.user);
        }
      } catch (err) {
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          clearAuth();
          setUser(null);
        } else {
          console.warn("Failed to fetch profile due to a network/server issue. Retaining auth state.", err);
        }
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
