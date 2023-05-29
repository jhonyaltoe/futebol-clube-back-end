import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL_API || `http://localhost:${process.env.REACT_APP_API_LOCAL_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  console.log(data)
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
