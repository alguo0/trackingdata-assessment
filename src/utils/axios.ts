import axios from 'axios';
import { ENDPOINT_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: ENDPOINT_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
// Add request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // What to do before sending the request
  // Write a value to bypass if judgment
  if (config.method === 'get') {
    config.data = true
  }
  if (config.headers)
    config.headers['H-TOKEN'] = '111'
  return config;
}, function (error) {
  // What to do about request errors
  return Promise.reject(error);
});

export default axiosInstance;
