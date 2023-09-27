'use client';

import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';

import useTeamMemberProjectDetail from '../../../apis/useTeamMemberProjectDetail/useTeamMemberProjectDetail';

function PersonalProjectDetail() {
   const { locale, projectId, teamMember } = useParams();

   const { data: teamMemberProjectData, isLoading: teamMemberProjectIsLoading } = useTeamMemberProjectDetail(projectId, teamMember);

   return (
      <div className="relative">
         {teamMemberProjectIsLoading ? (
            <div className="flex h-full w-full items-center justify-center text-goldColor">
               <CircleLoader color="#CCAA60" size={80} />
            </div>
         ) : (
            <div className="text-menuItemColor">
               <div className="flex">
                  <div className="max-w-xs">
                     <img src={teamMemberProjectData?.user?.image} alt="profile" className="h-full w-full" />
                  </div>
                  <p>{teamMemberProjectData?.user?.full_name}</p>
                  <p>{teamMemberProjectData?.user?.title}</p>
               </div>
               <div className="flex gap-2">
                  {teamMemberProjectData?.pictures?.map(item => (
                     <div className="grow" key={item}>
                        <img src={item} alt="project" className="w-full" />
                     </div>
                  ))}
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
