import axios from 'axios';

const getParams = (option) => {
  const params = {
    apikey: import.meta.env.VITE_API_KEY,
  };
  if (option) Object.assign(params, option);
  return params;
};

const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, headers: getParams(), ...options });
  return instance;
};

export const defaultInstance = axiosApi(import.meta.env.VITE_BASE_URL);