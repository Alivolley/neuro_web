import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

// Assets
import { Drawer } from '@mui/material';
import { usePathname } from 'next/navigation';
import logoHeader from '../../../assets/images/logoHeader.png';
import logoHeaderPersian from '../../../assets/images/logoHeaderPersian.png';
import searchImage from '../../../assets/icons/searchHeader.png';
import menuTogglerIcon from '../../../assets/icons/menu_toggler_icon.svg';

// Components
import Button from '../form-group/button';

// MUI
import ModalComponent from '../template/modal-component';
import HeaderSearch from '../header-search';

function Header({ currentLocale }) {
   const [searchModalStatus, setSearchModalStatus] = useState(false);
   const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
   const t = useTranslations('header');
   const params = usePathname();

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

   return (
      <header className="sticky top-0 flex h-[120px] items-center justify-between font-avgardn text-menuItemColor">
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
               {/* <li className='hidden customMd:list-item'>{t('Articles')}</li> */}
               <li>
                  <Link href={detectedRoute || '/'} locale={currentLocale === 'fa' ? 'en' : 'fa'}>
                     <div className="hidden items-center justify-center gap-[6px] customMd:flex">
                        <p className="font-picoopicRegular">فارسی</p>
                        <span className="h-[2px] w-6 bg-menuItemColor" />
                        <p>EN</p>
                     </div>
                     <p className="font-picoopicRegular customMd:hidden">{currentLocale === 'fa' ? 'EN' : 'فارسی'}</p>
                  </Link>
               </li>
               <li className="w-[35px] sm:w-auto">
                  <Button icon={searchImage} onClick={() => setSearchModalStatus(true)} />
               </li>
            </ul>
         </div>
         <Drawer anchor="right" open={mobileMenuStatus} onClose={() => setMobileMenuStatus(false)}>
            <p className="h-full w-[250px] bg-buttonBgColor p-7 text-menuItemColor">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo quasi fugiat ex voluptatem illo expedita iusto voluptatum porro
               vel, magni at sapiente, cumque iure. Recusandae iusto adipisci ab ducimus.
            </p>
         </Drawer>
         <ModalComponent show={searchModalStatus} handleClose={closeSearchModalHandler} fullWidth size="md" fullScreen hasTransition={false}>
            <HeaderSearch closeSearchModalHandler={closeSearchModalHandler} />
         </ModalComponent>
      </header>
   );
}

export default Header;
