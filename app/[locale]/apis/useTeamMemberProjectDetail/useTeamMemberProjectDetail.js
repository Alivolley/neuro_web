import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useTeamMemberProjectDetail = (projectId, teamMember) =>
   useSWR(`teamMemberProjectDetail-${projectId}-${teamMember}`, () =>
      axiosInstance(`/accounts/product_retrieve/?pk=${projectId}&developer=${teamMember}`).then(res => res.data)
   );

export default useTeamMemberProjectDetail;
