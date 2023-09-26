'use client';

import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';

// MUI
import { Grid } from '@mui/material';

// Components
import InfoDetail from '../../components/pages/teamMember-detail/info-detail/info-detail';
import TabSection from '../../components/pages/teamMember-detail/tab-section/tab-section';

// Hooks
import useTeamMemberDetail from '../../apis/useTeamMemberDetail/useTeamMemberDetail';

function TeamMemberDetail() {
   const { slug, locale } = useParams();

   const { data: teamMemberData, isLoading: teamMemberIsLoading } = useTeamMemberDetail(slug);

   console.log(teamMemberData);

   return (
      <div className="relative mt-3 pb-12 customMd:mt-12">
         <Grid container columnSpacing={8} rowSpacing={3}>
            {teamMemberIsLoading ? (
               <div className="flex h-full w-full items-center justify-center text-goldColor">
                  <CircleLoader color="#CCAA60" size={100} />
               </div>
            ) : (
               <>
                  <Grid item xs={12} md={3}>
                     <div className="flex gap-4">
                        <div className="aspect-[1/1] w-full max-w-[200px] customSm:aspect-[1/1.3] customMd:max-w-[300px]">
                           <img src={teamMemberData?.image} className="h-full w-full object-cover grayscale customMd:object-contain" alt="profile" />
                        </div>
                        <div className="customMd:hidden">
                           <h3
                              className={`whitespace-nowrap text-2xl text-titleColor ${
                                 locale === 'fa' ? 'font-titreZebr2' : 'font-pubg tracking-[3px]'
                              }`}
                           >
                              {teamMemberData?.first_name} {teamMemberData?.last_name}
                           </h3>
                           <p
                              className={`my-5 whitespace-nowrap text-sm text-menuItemColor ${
                                 locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'
                              }`}
                           >
                              {teamMemberData?.title}
                           </p>
                           <div className="hidden customSm:block">
                              <InfoDetail detail={teamMemberData} />
                           </div>
                        </div>
                     </div>
                  </Grid>

                  <Grid item display={{ xs: 'none', md: 'flex' }} md={9}>
                     <div>
                        <h3 className={`text-titleColor ${locale === 'fa' ? 'font-titreZebr2 text-[34px]' : 'font-pubg text-[40px] tracking-[3px]'}`}>
                           {teamMemberData?.first_name} {teamMemberData?.last_name}
                        </h3>
                        <p className={`my-5 text-menuItemColor ${locale === 'fa' ? 'font-picoopicRegular text-lg' : 'font-aubrey tracking-[1.5px]'}`}>
                           {teamMemberData?.title}
                        </p>
                        <p
                           className={`leading-[42px] text-[#80949C] ${
                              locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey text-sm uppercase tracking-[1.5px]'
                           }`}
                        >
                           {teamMemberData?.long_description}
                        </p>
                     </div>
                  </Grid>

                  <Grid item xs={12} display={{ sm: 'none', md: 'flex' }} md={3}>
                     <div>
                        <InfoDetail detail={teamMemberData} />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={9}>
                     <TabSection detail={teamMemberData} />
                  </Grid>
               </>
            )}
         </Grid>
      </div>
   );
}

export default TeamMemberDetail;
