import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useSearch = query =>
   useSWR(`search-${query}`, () =>
      axiosInstance(`articles/list/`, {
         params: {
            search: query,
         },
      }).then(res => res.data)
   );

export default useSearch;
