/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next-intl/link';

// Assets
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../assets/icons/arrowIconReverse.svg';
import lineArrow from '../../assets/images/line_arrow.png';
import OurTeamCard from './ourTeam.style';

// components
import HeaderTitle from '../components/template/header-title/header-title';
import ButtonTemplate from '../components/form-group/button-template/button-template';
import BorderedText from '../components/template/bordered-text/bordered-text';
import useOurTeam from '../apis/useOurTeam/useOurTeam';
import OurTeamCardSkeleton from '../components/template/skeletons/ourTeam-card-skeleton/ourTeam-card-skeleton';

// MUI

function OurTeam() {
   const [activeSlide, setActiveSlide] = useState(1);

   const changeSlideHandler = slideId => {
      setActiveSlide(slideId);
   };

   const { locale } = useParams();
   const t = useTranslations('ourTeam');

   const { data: teamMemberData, isLoading: teamMemberIsLoading } = useOurTeam();

   // console.log(teamMemberData);

   return (
      <OurTeamCard>
         <div className="mt-[20px] sm:mt-[110px]">
            <div
               className={`flex flex-wrap text-textColor sm:gap-2 ${
                  locale === 'fa'
                     ? 'mb-[20px] font-picoopicRegular text-[14px] font-extralight'
                     : 'font-aubrey text-[9px] uppercase tracking-[3px] sm:mb-[20px] lg:text-[11px]'
               }`}
            >
               <p className="relative">{t('introduce')}</p>
            </div>
            <HeaderTitle>{t('Our team')}</HeaderTitle>
         </div>

         <div className="mt-[120px] h-[270px] overflow-auto customSm:h-[320px] customMd:mt-[30px] customMd:h-[440px]" id="picsWidth">
            {teamMemberIsLoading ? (
               <OurTeamCardSkeleton />
            ) : (
               <div className={`flex gap-8 customXl:justify-end ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[3px]'}`}>
                  {teamMemberData?.data?.map((item, index) => (
                     <div
                        key={item.id}
                        className={`flex h-60 cursor-pointer items-center justify-center bg-[#101211] customSm:h-72 customMd:h-80 ${
                           index === 1 ? '' : 'customMd:mt-20'
                        }`}
                        onClick={() => changeSlideHandler(index + 1)}
                     >
                        <div
                           className={`flex flex-col justify-center transition-all duration-300 ${
                              activeSlide === index + 1
                                 ? `visible h-full w-[150px] px-4 py-6 opacity-100 customSm:w-[220px] customSm:px-7 customSm:py-12 customMd:w-[250px]`
                                 : 'invisible h-0 w-0 scale-0 opacity-0'
                           }`}
                        >
                           <p className="text-[10px] capitalize text-titleColor customMd:text-[18px]">{item.full_name}</p>
                           <p className="mt-2 text-[10px] text-textColor customMd:text-[15px]">{item.title}</p>
                           <p className="mb-9 mt-6 text-[8px] text-textColor customMd:text-[13px]">{item.short_description}</p>
                           <Link href={`/teamMember-detail/${item.id}`}>
                              <ButtonTemplate text={t('See more')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                           </Link>
                        </div>
                        <div className="relative h-full w-[150px] customSm:w-[220px] customMd:w-[250px]">
                           <img src={item.image} alt="team member" className="h-full w-full grayscale" />
                           <div
                              className={`absolute inset-x-0 bottom-0 flex flex-col items-center bg-[#101211] px-1 py-4 transition-all duration-200 ${
                                 activeSlide !== index + 1 ? 'visible opacity-100' : 'invisible opacity-0'
                              }`}
                           >
                              <p className="text-[10px] text-titleColor customMd:text-[18px]">{item.full_name}</p>
                              <p className="mt-2 text-[10px] text-textColor customMd:text-[15px]">{item.title}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>

         <div className="mt-12 flex max-w-sm items-end gap-5 px-3 customMd:hidden">
            <div className="mt-5 flex gap-3">
               {teamMemberData?.data?.map((item, index) => (
                  <div
                     key={item.id}
                     className={`aspect-[1/1.5] w-10 rounded-sm transition-all duration-200 ${activeSlide === index + 1 ? '-translate-y-5' : ''}`}
                     onClick={() => changeSlideHandler(index + 1)}
                  >
                     <img src={item.image} alt="team member" className="h-full w-full grayscale" />
                  </div>
               ))}
            </div>
            <div className="flex grow items-center gap-2 text-xl font-bold text-titleColor">
               <p>{activeSlide}</p>
               <div className="grow">
                  <Image src={lineArrow} alt="team member picture" className="h-full w-full" />
               </div>
               <p>3</p>
            </div>
         </div>

         <div className="my-12 max-w-4xl">
            <BorderedText>{t('Our team description')}</BorderedText>
         </div>

         <Link href="/contactUs">
            <ButtonTemplate text={t('Contact us')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
         </Link>
      </OurTeamCard>
   );
}

export default OurTeam;
