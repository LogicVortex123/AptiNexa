const TOKEN_KEY = "aptinexa_token";
const USER_KEY = "aptinexa_user";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const getStoredUser = () => {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const setStoredUser = (user) =>
  localStorage.setItem(USER_KEY, JSON.stringify(user));

export const removeStoredUser = () => localStorage.removeItem(USER_KEY);

export const clearAuth = () => {
  removeToken();
  removeStoredUser();
};
