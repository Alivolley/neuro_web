import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const language = Cookies.get('NEXT_LOCALE') || 'fa';

const axiosInstance = axios.create({
   baseURL: 'https://neuroweb.pythonanywhere.com/api/',
   params: {
      lang: language,
   },
});

axiosInstance.interceptors.request.use(async config => config);

axiosInstance.interceptors.response.use(
   res => res,
   error => {
      console.log(error);
      toast.error(error.message);
      return Promise.reject(error);
   }
);

export default axiosInstance;
