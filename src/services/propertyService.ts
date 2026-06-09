import axios from "axios";

const API_URL = "http://localhost:8080/api/properties";

export const getProperties = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProperty = async (property: any) => {
  const response = await axios.post(API_URL, property);
  return response.data;
};
export const deleteProperty = async (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateProperty = async (
  id: number,
  property: any
) => {
  return axios.put(`${API_URL}/${id}`, property);
};