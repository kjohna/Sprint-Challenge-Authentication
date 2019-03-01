import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3300/api',
});

api.interceptors.request.use(
  function(config) {
    config.headers.authorization = localStorage.getItem('jwt');
    return config;
});

export default api;