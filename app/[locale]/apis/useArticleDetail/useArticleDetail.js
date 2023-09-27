import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useArticleDetail = id => useSWR(`articleDetail-${id}`, () => axiosInstance(`articles/?pk=${id}`).then(res => res.data));

export default useArticleDetail;
