import api from "./api";

export const loginUser = async (email, password) => {
  const { data } = await api.post("/auth/login", { email, password });
  return data;
};

export const signupUser = async (fullName, email, password) => {
  const { data } = await api.post("/auth/signup", { fullName, email, password });
  return data;
};

export const fetchProfile = async () => {
  const { data } = await api.get("/auth/profile");
  return data;
};
