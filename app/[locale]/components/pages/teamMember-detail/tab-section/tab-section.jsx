import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next-intl/link';

// MUI
import { Grid } from '@mui/material';

// Assets
import Image from 'next/image';
import arrowIcon from '../../../../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../../../../assets/icons/arrowIconReverse.svg';
import TabSectionStyle from './tab-section.style';

// Components
import ProductCard from '../../../template/product-card/product-card';

function TabSection({ detail }) {
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
                     <p className="font-avgardn text-2xl font-bold text-numberColor">{detail?.products?.length}</p>
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
                     <p className="font-avgardn text-2xl font-bold text-numberColor">{detail?.skills?.length}</p>
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
                     <p className="font-avgardn text-2xl font-bold text-numberColor">{detail?.soft_skills?.length}</p>
                     <p className="text-xs tracking-[1px] text-titleColor customSm:text-xl">{t('soft skills')}</p>
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
            <Link href={`/teamMember-detail/${detail?.user?.id}/all-projects`} className="flex items-center gap-1 customSm:gap-3">
               <p className="text-[10px] customSm:text-sm">{t('See more')}</p>
               <Image src={locale === 'fa' ? arrowIconReverse : arrowIcon} alt="arrow" />
            </Link>
         </div>

         {chosenTab === 1 && (
            <div className="mt-5">
               <Grid container spacing={4}>
                  {detail?.products?.map(
                     (item, index) =>
                        index < 3 && (
                           <Grid key={item.id} item xs={12} sm={6} lg={4}>
                              <ProductCard
                                 bigPic={item?.picture_1}
                                 firstSubPic={item?.picture_2}
                                 secondSubPic={item?.picture_3}
                                 thirdSubPic={item?.picture_4}
                                 productId={item?.id}
                                 userId={detail?.user?.id}
                                 title={item?.title}
                              />
                           </Grid>
                        )
                  )}
               </Grid>
            </div>
         )}

         {chosenTab === 2 && (
            <div className={`mt-12 customLg:text-xl ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
               <Grid container spacing={3}>
                  {detail?.skills?.map(item => (
                     <Grid item xs={6} xl={4} key={item}>
                        <p className="px-4 text-menuItemColor" id="circle_color">
                           {item}
                        </p>
                     </Grid>
                  ))}
               </Grid>
            </div>
         )}

         {chosenTab === 3 && (
            <div className={`mt-12 customLg:text-xl ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
               <Grid container spacing={3}>
                  {detail?.soft_skills?.map(item => (
                     <Grid item xs={6} xl={4} key={item}>
                        <p className="px-4 text-menuItemColor" id="circle_color">
                           {item}
                        </p>
                     </Grid>
                  ))}
               </Grid>
            </div>
         )}
      </TabSectionStyle>
   );
}

export default TabSection;
