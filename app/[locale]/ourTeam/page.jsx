/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Assets
import { useState } from 'react';
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../assets/icons/arrowIconReverse.svg';
import jasminPicture from '../../assets/images/jasminPicture.png';

// components
import HeaderTitle from '../components/template/header-title';
import ButtonTemplate from '../components/form-group/button-template';

// MUI

function OurTeam() {
   const [activeSlide, setActiveSlide] = useState(1);

   const changeSlideHandler = slideId => {
      setActiveSlide(slideId);
   };

   const { locale } = useParams();
   const t = useTranslations('ourTeam');
   return (
      <div>
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

         <div className="overflow-auto customMd:ms-[220px] ">
            <div className={`mt-[120px] flex gap-8 customSm:mt-[95px] ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[3px]'}`}>
               <div className="relative flex h-fit items-center justify-center bg-[#101211]" onClick={() => changeSlideHandler(1)}>
                  <div
                     className={
                        activeSlide === 1
                           ? 'w-[150px] px-4 py-6 transition-all duration-300 customSm:w-[220px] customSm:px-7 customSm:py-12 customMd:w-[250px]'
                           : 'absolute z-[-1] transition-all duration-300'
                     }
                  >
                     <p className="text-[10px] text-titleColor customMd:text-[18px]">jasmin dehghan</p>
                     <p className="mt-2 text-[10px] text-textColor customMd:text-[15px]">ui-ux designer</p>
                     <p className="mb-9 mt-6 text-[8px] text-textColor customMd:text-[13px]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.strud amet.
                     </p>
                     <ButtonTemplate text="See more" icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                  </div>
                  <div className="w-[150px] customSm:w-[220px] customMd:w-[250px]">
                     <Image src={jasminPicture} alt="team member picture" className="h-full w-full" />
                  </div>
               </div>

               <div className="relative bottom-16 flex h-fit items-center justify-center bg-[#101211]" onClick={() => changeSlideHandler(2)}>
                  <div
                     className={
                        activeSlide === 2
                           ? 'w-[150px] px-4 py-6 transition-all duration-300 customSm:w-[220px] customSm:px-7 customSm:py-12 customMd:w-[250px]'
                           : 'absolute z-[-1] transition-all duration-300'
                     }
                  >
                     <p className="text-[10px] text-titleColor customMd:text-[18px]">jasmin dehghan</p>
                     <p className="mt-2 text-[10px] text-textColor customMd:text-[15px]">ui-ux designer</p>
                     <p className="mb-9 mt-6 text-[8px] text-textColor customMd:text-[13px]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.strud amet.
                     </p>
                     <ButtonTemplate text="See more" icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                  </div>
                  <div className="w-[150px] customSm:w-[220px] customMd:w-[250px]">
                     <Image src={jasminPicture} alt="team member picture" className="h-full w-full" />
                  </div>
               </div>

               <div className="relative flex h-fit items-center justify-center bg-[#101211]" onClick={() => changeSlideHandler(3)}>
                  <div
                     className={
                        activeSlide === 3
                           ? 'w-[150px] px-4 py-6 transition-all duration-300 customSm:w-[220px] customSm:px-7 customSm:py-12 customMd:w-[250px]'
                           : 'absolute z-[-1] transition-all duration-300'
                     }
                  >
                     <p className="text-[10px] text-titleColor customMd:text-[18px]">jasmin dehghan</p>
                     <p className="mt-2 text-[10px] text-textColor customMd:text-[15px]">ui-ux designer</p>
                     <p className="mb-9 mt-6 text-[8px] text-textColor customMd:text-[13px]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.strud amet.
                     </p>
                     <ButtonTemplate text="See more" icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                  </div>
                  <div className="w-[150px] customSm:w-[220px] customMd:w-[250px]">
                     <Image src={jasminPicture} alt="team member picture" className="h-full w-full" />
                  </div>
               </div>
            </div>
         </div>

         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit aut nam voluptates similique deserunt veniam fugit tenetur, ut iste
            suscipit dolore odio at modi, quasi beatae temporibus. Dolores illum nostrum consectetur voluptatem itaque et sint, perspiciatis ratione
            minima ab nisi laborum modi, nesciunt neque omnis possimus quia accusamus esse vel commodi eaque, quam rem? Nisi unde fuga incidunt
            deleniti ipsam in tempora pariatur quaerat, illo possimus libero dignissimos natus distinctio aliquam! Eaque molestias deserunt recusandae
            enim asperiores quidem qui, animi quam fugiat necessitatibus nisi voluptate, adipisci placeat rerum aut illum consequuntur maiores esse
            repellat odit ex reprehenderit quasi. Dolorum aliquam obcaecati, sapiente accusantium voluptates deserunt harum fuga consequatur debitis
            laborum ducimus pariatur. Ea obcaecati sapiente quaerat vitae consectetur! Libero natus itaque excepturi eos quas atque quia id nisi et!
            Iste aperiam maxime velit. Saepe sapiente animi magni. Repellendus ex consequatur facere quidem fuga accusamus quod? Aspernatur, rerum
            libero officiis repudiandae aliquid molestias ratione repellat odio veniam et eius explicabo ipsam facilis error dignissimos aliquam
            incidunt. Accusantium temporibus autem rerum dolore quo omnis animi quidem ullam necessitatibus ducimus fuga inventore, aliquid in
            laudantium fugit eum perspiciatis assumenda voluptate veniam quis et ipsum! Aliquam, eos nisi enim maxime at placeat voluptatem veritatis,
            esse, vel ipsam ex. Ea accusamus cumque quidem natus magnam rem praesentium velit quae excepturi, nemo, cupiditate ex. Ullam sint totam
            unde, eveniet ipsa, blanditiis sed aut quas nesciunt expedita fuga velit iste minus vel nostrum saepe magni voluptatum. Dolorum recusandae
            culpa numquam cumque obcaecati reprehenderit sint! Repellendus totam exercitationem doloremque aliquam nemo placeat laboriosam, labore
            necessitatibus similique praesentium sed. Fugiat suscipit vel omnis culpa molestias esse delectus? Non quis hic facere blanditiis impedit,
            facilis iusto quaerat porro, ipsum fugit officiis maiores incidunt ducimus quae? Veniam odio fugiat quibusdam, quisquam illum incidunt
            voluptates corporis quod consequuntur dicta non eius sequi nesciunt nihil. Accusantium similique, quaerat quis impedit deleniti tenetur
            amet inventore autem voluptas quo nostrum, dolor asperiores nihil rem iusto veritatis nisi magni nemo? Delectus, eligendi cupiditate iste
            cum hic dolorum tempora mollitia voluptatum eaque ipsum obcaecati dolor, rem, ad accusamus quod? Quis distinctio dolorum, asperiores
            libero earum, in ullam sunt voluptas explicabo repellat eius id nulla nemo totam impedit corporis minus sapiente possimus vel
            reprehenderit. Atque saepe architecto, impedit perspiciatis unde placeat. Alias, quibusdam consequuntur voluptas vitae corporis
            praesentium magni cupiditate obcaecati officia fuga eum sunt perferendis distinctio quia laudantium voluptatibus nostrum reiciendis harum!
            Accusamus cupiditate harum laboriosam quia mollitia doloremque commodi dignissimos eius cum quibusdam? Quia praesentium consectetur dolor
            unde pariatur repellendus, dolores, nobis, similique qui impedit repudiandae commodi veniam porro! Nesciunt obcaecati inventore culpa
            nihil sunt et, error ex. Unde distinctio rerum fugit quisquam natus, eius sunt itaque corrupti voluptates deserunt officiis minus
            laboriosam accusamus nihil maiores nobis explicabo. Unde tempore iusto cupiditate aliquid minus magnam cumque nihil ea, illo, impedit
            atque sapiente quam animi neque ipsam mollitia, perferendis quod adipisci optio quas doloribus et fugit modi ullam. Mollitia laborum
            adipisci minima, assumenda voluptate esse earum ad sed reiciendis, obcaecati facilis porro commodi, reprehenderit temporibus! Aut.
         </p>
      </div>
   );
}

export default OurTeam;
