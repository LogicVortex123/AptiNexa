import api from "./api";

export const analyzeLeetCodeProfile = async (username) => {
  const { data } = await api.get("/leetcode/analyze", {
    params: { username },
  });
  return data;
};
