import axios from 'axios';

export const api = axios.create({
  baseURL: `https://api.spotify.com/v1/`,
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OAUTH_TOKEN}`,
  };
  return config;
});
