'use client';

import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';
import { useTranslations } from 'next-intl';

// MUI
import { Grid } from '@mui/material';

// API
import useTeamMemberProjectDetail from '../../../apis/useTeamMemberProjectDetail/useTeamMemberProjectDetail';

function PersonalProjectDetail() {
   const { locale, projectId, teamMember } = useParams();
   const t = useTranslations('productDetail');

   const { data: teamMemberProjectData, isLoading: teamMemberProjectIsLoading } = useTeamMemberProjectDetail(projectId, teamMember);

   return (
      <div className="relative pb-12">
         {teamMemberProjectIsLoading ? (
            <div className="flex h-full w-full items-center justify-center text-goldColor">
               <CircleLoader color="#CCAA60" size={80} />
            </div>
         ) : (
            <div>
               <Grid container columnSpacing={{ xs: 3, lg: 15 }} rowSpacing={5}>
                  <Grid item xs={12} sm={2}>
                     <div className="flex items-end gap-5 space-y-4 customSm:block">
                        <div className="aspect-square w-full max-w-[120px] customSm:aspect-[1/1.2] customSm:max-w-none">
                           <img src={teamMemberProjectData?.user?.image} alt="profile" className="h-full w-full object-cover grayscale" />
                        </div>
                        <div className="space-y-1">
                           <p
                              className={`uppercase text-titleColor customLg:whitespace-nowrap ${
                                 locale === 'fa' ? 'font-titreZebr2 text-[30px]' : 'font-pubg text-[30px] tracking-[1px]'
                              }`}
                           >
                              {teamMemberProjectData?.user?.full_name}
                           </p>
                           <p
                              className={`text-xs capitalize text-menuItemColor ${
                                 locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'
                              }`}
                           >
                              {teamMemberProjectData?.user?.title}
                           </p>
                        </div>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                     <div>
                        <p
                           className={`mb-6 text-lg capitalize text-menuItemColor ${
                              locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'
                           }`}
                        >
                           {teamMemberProjectData?.title}
                        </p>

                        <div className="mx-auto max-w-5xl customMd:flex customMd:gap-10">
                           <div className="mb-1 aspect-video w-full bg-yellow-200 customMd:mb-0 customMd:w-[70%]">
                              <img src={teamMemberProjectData?.pictures?.[0]} alt="project" className="h-full w-full object-cover" />
                           </div>
                           <div className="flex gap-1 customMd:block customMd:w-[30%] customMd:gap-0 customMd:space-y-1">
                              <div className="aspect-video w-full">
                                 <img src={teamMemberProjectData?.pictures?.[1]} alt="project" className="h-full w-full object-cover" />
                              </div>
                              <div className="aspect-video w-full">
                                 <img src={teamMemberProjectData?.pictures?.[2]} alt="project" className="h-full w-full object-cover" />
                              </div>
                              <div className="aspect-video w-full">
                                 <img src={teamMemberProjectData?.pictures?.[3]} alt="project" className="h-full w-full object-cover" />
                              </div>
                           </div>
                        </div>

                        <p className={`mt-5 capitalize text-textColor ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'}`}>
                           {teamMemberProjectData?.description}
                        </p>

                        <p
                           className={`mt-5 text-sm capitalize text-textColor ${
                              locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'
                           }`}
                        >
                           {t('Related Link')} :{' '}
                           <a href={teamMemberProjectData?.website_link} target="_blank" rel="noreferrer" className="underline">
                              {teamMemberProjectData?.website_link}
                           </a>
                        </p>
                     </div>
                  </Grid>
               </Grid>
            </div>
         )}
      </div>
   );
}

export default PersonalProjectDetail;
