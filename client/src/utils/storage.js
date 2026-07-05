const USERNAME_KEY = "aptinexa_last_username";

export const getLastUsername = () => localStorage.getItem(USERNAME_KEY) || "";

export const setLastUsername = (username) =>
  localStorage.setItem(USERNAME_KEY, username);
