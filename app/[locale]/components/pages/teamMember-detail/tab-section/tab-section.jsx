import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next-intl/link';

// MUI
import { Grid } from '@mui/material';

// Assets
import Image from 'next/image';
import samplePicture from '../../../../../assets/images/sample_picture.png';
import arrowIcon from '../../../../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../../../../assets/icons/arrowIconReverse.svg';
import TabSectionStyle from './tab-section.style';

// Components
import ProductCard from '../../../template/product-card/product-card';

function TabSection() {
   const [chosenTab, setChosenTab] = useState(1);

   const t = useTranslations('teamMemberDetail');
   const { locale } = useParams();

   return (
      <TabSectionStyle locale={locale}>
         <div className={`${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey'}`}>
            <Grid container columnSpacing={{ xs: 0.5, sm: 5 }}>
               <Grid item xs={4}>
                  <button
                     type="button"
                     className={`w-full space-y-3 rounded-sm border py-3 transition-all duration-200 ${
                        chosenTab === 1 ? 'border-buttonBgColor bg-[#718b9544] opacity-100' : 'border border-menuItemColor bg-transparent opacity-50'
                     }`}
                     onClick={() => setChosenTab(1)}
                  >
                     <p className="font-avgardn text-2xl font-bold text-numberColor">13</p>
                     <p className="text-xs tracking-[1px] text-titleColor customSm:text-xl">{t('projects')}</p>
                  </button>
               </Grid>
               <Grid item xs={4}>
                  <button
                     type="button"
                     className={`w-full space-y-3 rounded-sm border py-3 transition-all duration-200 ${
                        chosenTab === 2 ? 'border-buttonBgColor bg-[#718b9544] opacity-100' : 'border border-menuItemColor bg-transparent opacity-50'
                     }`}
                     onClick={() => setChosenTab(2)}
                  >
                     <p className="font-avgardn text-2xl font-bold text-numberColor">7</p>
                     <p className="text-xs tracking-[1px] text-titleColor customSm:text-xl">{t('skills')}</p>
                  </button>
               </Grid>
               <Grid item xs={4}>
                  <button
                     type="button"
                     className={`w-full space-y-3 rounded-sm border py-3 transition-all duration-200 ${
                        chosenTab === 3 ? 'border-buttonBgColor bg-[#718b9544] opacity-100' : 'border-menuItemColor bg-transparent opacity-50'
                     }`}
                     onClick={() => setChosenTab(3)}
                  >
                     <p className="font-avgardn text-2xl font-bold text-numberColor">4</p>
                     <p className="text-xs tracking-[1px] text-titleColor customSm:text-xl">{t('softwares')}</p>
                  </button>
               </Grid>
            </Grid>
         </div>
         <div
            className={`mt-5 flex items-center justify-between rounded-sm bg-[#718b9544] px-4 py-3 tracking-[1px] text-menuItemColor ${
               locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'
            }`}
         >
            <p className="text-[10px] customSm:text-sm">{t('example of works')}</p>
            <Link href="/teamMember-detail/2/all-projects" className="flex items-center gap-1 customSm:gap-3">
               <p className="text-[10px] customSm:text-sm">{t('See more')}</p>
               <Image src={locale === 'fa' ? arrowIconReverse : arrowIcon} alt="arrow" />
            </Link>
         </div>

         {chosenTab === 1 && (
            <div className="mt-5">
               <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} lg={4}>
                     <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                     <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                     <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                  </Grid>
               </Grid>
            </div>
         )}

         {chosenTab === 2 && (
            <div className={`mt-12 customLg:text-xl ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        HTML / css
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        JavaScript
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        WordPress
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        Bootstrap
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        prototype
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        User Experience (UX)
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        User Interface Design
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        Responsive Web Design
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        Social Media Marketing
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        Research
                     </p>
                  </Grid>
               </Grid>
            </div>
         )}

         {chosenTab === 3 && (
            <div className={`mt-12 customLg:text-xl ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        figma
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        adobe xd
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        Adobe Photoshop
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        Adobe Illustrator
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        terello
                     </p>
                  </Grid>
                  <Grid item xs={12} sm={6} xl={4}>
                     <p className="px-4 text-menuItemColor" id="circle_color">
                        canva
                     </p>
                  </Grid>
               </Grid>
            </div>
         )}
      </TabSectionStyle>
   );
}

export default TabSection;
