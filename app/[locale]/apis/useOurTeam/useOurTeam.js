import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useOurTeam = () => useSWR('ourTeam', () => axiosInstance('api/accounts/developers/'));

export default useOurTeam;
