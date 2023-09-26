import axios from 'axios';

// const language = localStorage.getItem

const axiosInstance = axios.create({
   baseURL: 'https://neuroweb.pythonanywhere.com/',
});

axiosInstance.interceptors.request.use(async config => config);

axiosInstance.interceptors.response.use(
   res => res,
   error => Promise.reject(error)
);

export default axiosInstance;
