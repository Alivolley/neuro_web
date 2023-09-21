'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Assets
import jasminPic from '../../../assets/images/jasminPicture.png';

// Components
import InfoDetail from '../../components/pages/teamMember-detail/info-detail/info-detail';
import TabSection from '../../components/pages/teamMember-detail/tab-section/tab-section';

function TeamMemberDetail() {
   const { slug, locale } = useParams();

   return (
      <div className="relative mt-12 pb-12">
         <Grid container columnSpacing={8} rowSpacing={3}>
            <Grid item xs={12} md={2.5}>
               <div className="aspect-[1/1.3] w-full">
                  <Image src={jasminPic} className="h-full w-full" alt="profile" />
               </div>
            </Grid>
            <Grid item xs={12} md={9.5}>
               <div className="text-white">
                  <h3 className="font-pubg text-[40px] tracking-[3px] text-titleColor">JASMIN DEHGHAN</h3>
                  <p className="my-5 font-aubrey tracking-[1.5px] text-menuItemColor">UI/UX Designer</p>
                  <p className="font-aubrey text-sm uppercase leading-[42px] tracking-[1.5px] text-[#80949C]">
                     As a driven and immensely creative designer, I constantly seek new challenges that allow me to express my creativity and push the
                     boundaries of what is possible. My perpetual strive is to exceed expectations and attain unparalleled levels of excellence in
                     every facet of my work, including collaborating with you to bring your vision to life.
                  </p>
               </div>
            </Grid>

            <Grid item xs={12} md={2.5}>
               <div>
                  <InfoDetail />
               </div>
            </Grid>
            <Grid item xs={12} md={9.5}>
               <TabSection />
            </Grid>
         </Grid>
      </div>
   );
}

export default TeamMemberDetail;
