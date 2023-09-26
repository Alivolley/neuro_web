import axios from 'axios';
import Cookies from 'js-cookie';

const language = Cookies.get('neuroCodeLocale') || 'en';

const axiosInstance = axios.create({
   baseURL: 'https://neuroweb.pythonanywhere.com/',
   params: {
      lang: language,
   },
});

axiosInstance.interceptors.request.use(async config => config);

axiosInstance.interceptors.response.use(
   res => res,
   error => Promise.reject(error)
);

export default axiosInstance;
