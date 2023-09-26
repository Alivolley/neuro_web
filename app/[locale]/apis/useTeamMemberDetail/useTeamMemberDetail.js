import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useTeamMemberDetail = id => useSWR(`teamMemberDetail-${id}`, () => axiosInstance(`accounts/profile/?pk=${id}`).then(res => res.data));

export default useTeamMemberDetail;
