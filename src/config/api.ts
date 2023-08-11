import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
