'use client';

import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';

import useTeamMemberProjectDetail from '../../../apis/useTeamMemberProjectDetail/useTeamMemberProjectDetail';

function PersonalProjectDetail() {
   const { locale, projectId, teamMember } = useParams();

   const { data: teamMemberProjectData, isLoading: teamMemberProjectIsLoading } = useTeamMemberProjectDetail(projectId, teamMember);

   console.log(teamMemberProjectData);

   return (
      <div className="relative">
         {teamMemberProjectIsLoading ? (
            <div className="flex h-full w-full items-center justify-center text-goldColor">
               <CircleLoader color="#CCAA60" size={80} />
            </div>
         ) : (
            <div className="text-menuItemColor">
               <div className="flex gap-2">
                  <div className="grow">
                     <img src={teamMemberProjectData?.picture_1} alt="" className="w-full" />
                  </div>
                  <div className="grow">
                     <img src={teamMemberProjectData?.picture_2} alt="" className="w-full" />
                  </div>
                  <div className="grow">
                     <img src={teamMemberProjectData?.picture_3} alt="" className="w-full" />
                  </div>
                  <div className="grow">
                     <img src={teamMemberProjectData?.picture_4} alt="" className="w-full" />
                  </div>
               </div>
               <p>{teamMemberProjectData?.title}</p>
               <p>{teamMemberProjectData?.description}</p>
               <a href={teamMemberProjectData?.website_link} target="_blank" rel="noreferrer" className="underline">
                  لینک
               </a>
            </div>
         )}
      </div>
   );
}

export default PersonalProjectDetail;
