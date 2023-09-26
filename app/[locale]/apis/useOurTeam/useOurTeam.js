import useSWR from 'swr';
import axiosInstance from '../../../configs/axiosInstance';

const useOurTeam = () => useSWR('ourTeam', () => axiosInstance('accounts/developers/'));

export default useOurTeam;
