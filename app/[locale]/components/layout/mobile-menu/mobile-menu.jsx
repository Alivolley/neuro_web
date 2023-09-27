import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// MUI
import { IconButton } from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';

// Assets
import logoHeader from '../../../../assets/images/logoHeader.png';
import logoHeaderPersian from '../../../../assets/images/logoHeaderPersian.png';

function MobileMenu({ currentLocale, setMobileMenuStatus }) {
   const t = useTranslations('header');

   return (
      <div
         className={`h-full w-[280px] bg-buttonBgColor p-5 text-menuItemColor ${currentLocale === 'fa' ? 'font-picoopicRegular' : ''}`}
         dir={currentLocale === 'fa' ? 'rtl' : 'ltr'}
      >
         <div className="flex items-center justify-between">
            <Link href="/" className="w-[125px] sm:w-auto" onClick={() => setMobileMenuStatus(false)}>
               <Image src={currentLocale === 'fa' ? logoHeaderPersian : logoHeader} alt="header logo" />
            </Link>
            <IconButton onClick={() => setMobileMenuStatus(false)}>
               <CloseIcon className="text-menuItemColor" />
            </IconButton>
         </div>

         <div className="mt-16 flex flex-col">
            <Link href="/products" className="mt-6 border-b border-[#3F4436] pb-6" onClick={() => setMobileMenuStatus(false)}>
               {t('Product')}
            </Link>
            <Link href="/ourTeam" className="mt-6 border-b border-[#3F4436] pb-6" onClick={() => setMobileMenuStatus(false)}>
               {t('Our team')}
            </Link>
            <Link href="/contactUs" className="mt-6 border-b border-[#3F4436] pb-6" onClick={() => setMobileMenuStatus(false)}>
               {t('Contact us')}
            </Link>
            <Link href="/articles" className="mt-6 pb-6" onClick={() => setMobileMenuStatus(false)}>
               {t('Articles')}
            </Link>
         </div>
      </div>
   );
}

export default MobileMenu;
