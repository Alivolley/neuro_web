import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useProducts = () => useSWR(`allProducts`, () => axiosInstance(`accounts/team_product_list/`).then(res => res.data));

export default useProducts;
