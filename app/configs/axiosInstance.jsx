/* eslint-disable no-undef */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

axiosInstance.interceptors.request.use(async config => {
    return config;
});

axiosInstance.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
