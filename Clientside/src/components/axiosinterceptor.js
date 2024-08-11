import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'otp-auth-app-backend.vercel.app/otp', 
  timeout: 10000, 
});

// Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
