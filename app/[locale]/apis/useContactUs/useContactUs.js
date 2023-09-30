import useSWRMutation from 'swr/mutation';
import axiosInstance from '../../../configs/axiosInstance';

const useContactUs = () => useSWRMutation(`contactUs`, (url, data) => axiosInstance.post('accounts/contact_us/', data.arg));

export default useContactUs;
