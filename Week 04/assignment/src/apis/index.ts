import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  timeout: 5000,
});

export default instance;
