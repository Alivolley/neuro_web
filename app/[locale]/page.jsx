'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next-intl/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Assets
import arrowIcon from '../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../assets/icons/arrowIconReverse.svg';
import HomeStyle from './home.style';
import uiuxSkeleton from '../assets/images/uiuxSkeleton.png';
import frontEndSkeleton from '../assets/images/frontEndSkeleton.png';
import backEndSkeleton from '../assets/images/backEndSkeleton.png';

// Components
import HeaderTitle from './components/template/header-title/header-title';
import BorderedText from './components/template/bordered-text/bordered-text';
import ButtonTemplate from './components/form-group/button-template/button-template';
import SlidersItems from './components/pages/home/slidersItem/slidersItems';

export default function Home() {
   const [activeSlide, setActiveSlide] = useState(1);
   const intervalRef = useRef(null);

   const t = useTranslations('home');
   const { locale } = useParams();

   const changeSlide = () => {
      setActiveSlide(prev => {
         if (prev < 3) {
            return prev + 1;
         }
         return 1;
      });
   };

   const changeSlideManuel = id => {
      setActiveSlide(id);
      clearInterval(intervalRef.current);
   };

   useEffect(() => {
      intervalRef.current = setInterval(changeSlide, 3000);

      return () => {
         clearInterval(intervalRef.current);
      };
   }, []);

   return (
      <HomeStyle className="relative mt-[60px] sm:mt-[110px]">
         <div className="relative">
            <div className={`absolute inset-0 transition-all duration-300 ${activeSlide === 1 ? 'visible opacity-100' : 'invisible opacity-0'}`}>
               <Grid container>
                  <Grid item xs={12} md={7}>
                     <div>
                        <div className="ml-5">
                           <div
                              className={`flex flex-wrap text-textColor sm:gap-2 ${
                                 locale === 'fa'
                                    ? 'mb-[20px] font-picoopicRegular font-extralight'
                                    : 'font-aubrey text-[9px] uppercase tracking-[3px] sm:mb-[20px] sm:tracking-[7px] lg:text-[12px]'
                              }`}
                           >
                              <p>{t('userInterface')}</p>
                              <p>{t('experience')}</p>
                           </div>
                           <HeaderTitle>{t('ui_ux design')}</HeaderTitle>
                        </div>

                        <div className="mb-10 mt-20 customSm:mb-[90px] customSm:mt-[120px]">
                           <BorderedText>{t('describeUiUx')}</BorderedText>
                        </div>

                        <Link href="/ourTeam">
                           <ButtonTemplate text={t('more info')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                        </Link>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={5}>
                     <div className="flex items-center gap-12">
                        <div className="flex grow flex-col items-end">
                           <Image src={uiuxSkeleton} alt="uiuxPicture" />
                        </div>
                        <SlidersItems activeSlide={activeSlide} changeSlideManuel={changeSlideManuel} locale={locale} />
                     </div>
                  </Grid>
               </Grid>
            </div>

            <div className={`transition-all duration-300 ${activeSlide === 2 ? 'visible opacity-100' : 'invisible opacity-0'}`}>
               <Grid container spacing={{ xs: 5, md: 0 }}>
                  <Grid item xs={12} md={7}>
                     <div>
                        <div className="ml-5">
                           <div
                              className={`flex flex-wrap text-textColor sm:gap-2 ${
                                 locale === 'fa'
                                    ? 'mb-[20px] font-picoopicRegular font-extralight'
                                    : 'font-aubrey text-[9px] uppercase tracking-[3px] sm:mb-[20px] sm:tracking-[7px] lg:text-[12px]'
                              }`}
                           >
                              <p>{t('Development of')}</p>
                              <p>{t('client side applications')}</p>
                           </div>
                           <HeaderTitle>{t('Frontend developer')}</HeaderTitle>
                        </div>

                        <div className="mb-[90px] mt-[120px]">
                           <BorderedText>{t('describeFront')}</BorderedText>
                        </div>

                        <Link href="/ourTeam">
                           <ButtonTemplate text={t('more info')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                        </Link>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={5}>
                     <div className="flex items-center gap-12">
                        <div className="flex grow flex-col items-end">
                           <Image src={frontEndSkeleton} alt="uiuxPicture" />
                        </div>
                        <SlidersItems activeSlide={activeSlide} changeSlideManuel={changeSlideManuel} locale={locale} />
                     </div>
                  </Grid>
               </Grid>
            </div>

            <div className={`absolute inset-0 transition-all duration-300 ${activeSlide === 3 ? 'visible opacity-100' : 'invisible opacity-0'}`}>
               <Grid container spacing={{ xs: 5, md: 0 }}>
                  <Grid item xs={12} md={7}>
                     <div>
                        <div className="ml-5">
                           <div
                              className={`flex flex-wrap text-textColor sm:gap-2 ${
                                 locale === 'fa'
                                    ? 'mb-[20px] font-picoopicRegular font-extralight'
                                    : 'font-aubrey text-[9px] uppercase tracking-[3px] sm:mb-[20px] sm:tracking-[7px] lg:text-[12px]'
                              }`}
                           >
                              <p>{t('Specialist in')}</p>
                              <p>{t('server side development')}</p>
                           </div>
                           <HeaderTitle>{t('backend developer')}</HeaderTitle>
                        </div>

                        <div className="mb-[90px] mt-[120px]">
                           <BorderedText>{t('describeBack')}</BorderedText>
                        </div>

                        <Link href="/ourTeam">
                           <ButtonTemplate text={t('more info')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                        </Link>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={5}>
                     <div className="flex items-center gap-12">
                        <div className="flex grow flex-col items-end">
                           <Image src={backEndSkeleton} alt="uiuxPicture" />
                        </div>
                        <SlidersItems activeSlide={activeSlide} changeSlideManuel={changeSlideManuel} locale={locale} />
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>
      </HomeStyle>
   );
}
