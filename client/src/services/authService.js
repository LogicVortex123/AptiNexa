import api from "./api";

const hashPassword = async (password) => {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

export const loginUser = async (email, password) => {
  const hashedPassword = await hashPassword(password);
  const { data } = await api.post("/auth/login", { email, password: hashedPassword });
  return data;
};

export const signupUser = async (fullName, email, password) => {
  const hashedPassword = await hashPassword(password);
  const { data } = await api.post("/auth/signup", { fullName, email, password: hashedPassword });
  return data;
};

export const fetchProfile = async () => {
  const { data } = await api.get("/auth/profile");
  return data;
};
