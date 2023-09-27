import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useProductDetail = id => useSWR(`productDetail-${id}`, () => axiosInstance(`accounts/team_product_retrieve/?pk=${id}`).then(res => res.data));

export default useProductDetail;
