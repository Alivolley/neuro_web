import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useContactUs = data => useSWR(`contactUs`, () => axiosInstance(`accounts/contact_us/`).then(res => res.data));

export default useContactUs;
