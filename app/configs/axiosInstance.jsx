import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(async config => config);

axiosInstance.interceptors.response.use(
   res => res,
   error => Promise.reject(error)
);

export default axiosInstance;
