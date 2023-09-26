import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname, useParams } from 'next/navigation';
import { useRouter } from 'next-intl/client';

// MUI
import { Drawer } from '@mui/material';

// Assets
import logoHeader from '../../../../assets/images/logoHeader.png';
import logoHeaderPersian from '../../../../assets/images/logoHeaderPersian.png';
import searchImage from '../../../../assets/icons/searchHeader.png';
import menuTogglerIcon from '../../../../assets/icons/menu_toggler_icon.svg';

// Components
import Button from '../../form-group/button/button';
import MobileMenu from '../mobile-menu/mobile-menu';
import ModalComponent from '../../template/modal-component/modal-component';
import HeaderSearch from '../../template/header-search/header-search';
import RtlProvider from '../rtlProvider/rtlProvider';

// hooks
import useCookie from '../../../../hooks/useCookie';

function Header({ currentLocale }) {
   const [searchModalStatus, setSearchModalStatus] = useState(false);
   const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
   const [hasBackGround, setHasBackGround] = useState(false);

   const t = useTranslations('header');
   const params = usePathname();
   const router = useRouter();
   const { locale } = useParams();
   const { getCookie, addCookie, updateCookie } = useCookie();

   let detectedRoute = null;
   if (params?.startsWith('/en')) {
      const link = params.replace('/en', '');
      detectedRoute = link;
   } else {
      detectedRoute = params;
   }

   const closeSearchModalHandler = () => {
      setSearchModalStatus(false);
   };

   const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition === 0) {
         setHasBackGround(false);
      } else {
         setHasBackGround(true);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      if (!getCookie('neuroCodeLocale')) {
         addCookie('neuroCodeLocale', 'fa');
      } else if (locale !== getCookie('neuroCodeLocale')) {
         router.push(detectedRoute, {
            locale: getCookie('neuroCodeLocale'),
         });
      }

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const changeLocaleCookie = () => {
      if (currentLocale === 'fa') {
         updateCookie('neuroCodeLocale', 'en');
      } else {
         updateCookie('neuroCodeLocale', 'fa');
      }
   };

   return (
      <header
         className={`sticky top-0 mx-[-32px] flex h-[120px] items-center justify-between duration-300 transition-all z-10 
         px-[32px] font-avgardn text-menuItemColor customMd:mx-[-80px] customMd:px-[80px] ${hasBackGround ? 'bg-[#0C0D0C]' : ''}`}
      >
         <div className="flex items-center gap-3 sm:gap-10">
            <div className="w-[25px] sm:w-auto customMd:hidden">
               <Button icon={menuTogglerIcon} onClick={() => setMobileMenuStatus(true)} />
            </div>
            <Link href="/" className="w-[125px] sm:w-auto">
               <Image src={currentLocale === 'fa' ? logoHeaderPersian : logoHeader} alt="header logo" />
            </Link>
         </div>
         <div>
            <ul className={`flex items-center gap-[20px] lg:gap-[50px] xl:gap-[70px] ${currentLocale === 'fa' ? 'font-picoopicRegular' : ''}`}>
               <li className="hidden customMd:list-item">
                  <Link href="/products">{t('Product')}</Link>
               </li>
               <li className="hidden customMd:list-item">
                  <Link href="/ourTeam">{t('Our team')}</Link>
               </li>
               <li className="hidden customMd:list-item">
                  <Link href="/contactUs">{t('Contact us')}</Link>
               </li>
               <li className="hidden customMd:list-item">
                  <Link href="/articles">{t('Articles')}</Link>
               </li>
               <li>
                  <Link href={detectedRoute || '/'} locale={currentLocale === 'fa' ? 'en' : 'fa'} onClick={changeLocaleCookie}>
                     <div className="hidden items-center justify-center gap-[6px] customMd:flex">
                        <p className={`font-picoopicRegular ${locale === 'en' ? 'text-[#3F4436]' : ''}`}>فارسی</p>
                        <span className="h-[2px] w-6 bg-menuItemColor" />
                        <p className={`${locale === 'fa' ? 'text-[#3F4436]' : ''}`}>EN</p>
                     </div>
                     <p className="font-picoopicRegular customMd:hidden">{currentLocale === 'fa' ? 'EN' : 'فارسی'}</p>
                  </Link>
               </li>
               <li className="w-[35px] sm:w-auto">
                  <Button icon={searchImage} onClick={() => setSearchModalStatus(true)} />
               </li>
            </ul>
         </div>
         <RtlProvider>
            <Drawer
               anchor={currentLocale === 'en' ? 'right' : 'left'}
               SlideProps={{ direction: currentLocale === 'en' ? 'right' : 'left' }}
               open={mobileMenuStatus}
               onClose={() => setMobileMenuStatus(false)}
            >
               <MobileMenu currentLocale={currentLocale} setMobileMenuStatus={setMobileMenuStatus} />
            </Drawer>
         </RtlProvider>
         <ModalComponent show={searchModalStatus} handleClose={closeSearchModalHandler} fullWidth size="md" fullScreen hasTransition={false}>
            <HeaderSearch closeSearchModalHandler={closeSearchModalHandler} />
         </ModalComponent>
      </header>
   );
}

export default Header;
