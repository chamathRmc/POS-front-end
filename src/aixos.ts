import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
  baseURL: 'http://13.127.53.164:80', // Replace with your API base URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

// Add a request interceptor to include the token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
