import axios from 'axios';

export const api = axios.create({
  baseURL: `https://tastedive.com/api`,
});

api.interceptors.request.use((config) => {
  config.params = { k: `${process.env.NEXT_PUBLIC_TASTE_DIVE_API_KEY}` };
  return config;
});
