import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

//Assets
import logoHeader from './../../../assets/images/logoHeader.png';
import searchImage from './../../../assets/icons/searchHeader.png';
import menu_toggler_icon from './../../../assets/icons/menu_toggler_icon.svg';

//Components
import Button from '../form-group/button';

//MUI
import { Drawer } from '@mui/material';
import { useState } from 'react';

const Header = ({ currentLocale }) => {
    const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

    const t = useTranslations('header');

    return (
        <header className='text-menuItemColor font-avgardn flex justify-between h-[120px] items-center'>
            <div>
                <Image src={logoHeader} alt='header logo' />
            </div>
            <div>
                <ul className='hidden customMd:flex items-center gap-[20px] lg:gap-[50px] xl:gap-[70px]'>
                    <li>{t('Product')}</li>
                    <li>{t('Our team')}</li>
                    <li>{t('Contact us')}</li>
                    <li>{t('Articles')}</li>
                    <li>
                        <Link href='/' locale={currentLocale === 'fa' ? 'en' : 'fa'}>
                            {t('Change lang')}
                        </Link>
                    </li>
                    <li>
                        <Image src={searchImage} alt='search' />
                    </li>
                </ul>
                <Button className='customMd:hidden' icon={menu_toggler_icon} onClick={() => setMobileMenuStatus(true)} />
            </div>
            <Drawer anchor='right' open={mobileMenuStatus} onClose={() => setMobileMenuStatus(false)}>
                <p className='w-[250px] p-7 bg-buttonBgColor h-full text-menuItemColor'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo quasi fugiat ex voluptatem illo expedita iusto
                    voluptatum porro vel, magni at sapiente, cumque iure. Recusandae iusto adipisci ab ducimus.
                </p>
            </Drawer>
        </header>
    );
};

export default Header;
