import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useArticles = category =>
   useSWR(`teamMemberProjectDetail-${useArticles}`, () =>
      axiosInstance(`articles/list/`, {
         params: {
            ...(category && {
               category__title: category,
            }),
         },
      }).then(res => res.data)
   );

export default useArticles;
