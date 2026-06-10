import axios from "axios";

const API_URL = "http://localhost:8080/api/agents";

export const getAgentByUserId = async (userId: number) => {
  const response = await axios.get(
    `${API_URL}/user/${userId}`
  );

  return response.data;
};
export const updateAgent = async (
  id: number,
  agent: any
) => {
  const response = await axios.put(
    `http://localhost:8080/api/agents/${id}`,
    agent
  );

  return response.data;
};