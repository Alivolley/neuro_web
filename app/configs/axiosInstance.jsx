import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const language = Cookies.get('NEXT_LOCALE') || 'fa';

const axiosInstance = axios.create({
   baseURL: 'https://neuro-code.iran.liara.run/api/',
   params: {
      lang: language,
   },
});

axiosInstance.interceptors.request.use(async config => config);

axiosInstance.interceptors.response.use(
   res => res,
   error => {
      console.log(error);
      toast.error('an error accrued');
      return Promise.reject(error);
   }
);

export default axiosInstance;
