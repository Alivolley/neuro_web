import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

//Assets
import logoHeader from './../../../assets/images/logoHeader.png';
import logoHeaderPersian from './../../../assets/images/logoHeaderPersian.png';
import searchImage from './../../../assets/icons/searchHeader.png';
import menu_toggler_icon from './../../../assets/icons/menu_toggler_icon.svg';

//Components
import Button from '../form-group/button';

//MUI
import { Drawer } from '@mui/material';
import { usePathname } from 'next/navigation';
import ModalComponent from '../template/modal-component';
import HeaderSearch from '../header-search';

const Header = ({ currentLocale }) => {
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
        <header className='text-menuItemColor font-avgardn flex justify-between h-[120px] items-center sticky top-0'>
            <div className='flex items-center gap-3 sm:gap-10'>
                <div className='customMd:hidden w-[25px] sm:w-auto'>
                    <Button icon={menu_toggler_icon} onClick={() => setMobileMenuStatus(true)} />
                </div>
                <Link href='/' className='w-[125px] sm:w-auto'>
                    <Image src={currentLocale === 'fa' ? logoHeaderPersian : logoHeader} alt='header logo' />
                </Link>
            </div>
            <div>
                <ul
                    className={`flex items-center gap-[20px] lg:gap-[50px] xl:gap-[70px] ${
                        currentLocale === 'fa' ? 'font-picoopicRegular' : ''
                    }`}
                >
                    <li className='hidden customMd:list-item'>{t('Product')}</li>
                    <li className='hidden customMd:list-item'>{t('Our team')}</li>
                    <li className='hidden customMd:list-item'>{t('Contact us')}</li>
                    <li className='hidden customMd:list-item'>{t('Articles')}</li>
                    <li>
                        <Link href={detectedRoute || '/'} locale={currentLocale === 'fa' ? 'en' : 'fa'}>
                            <div className='hidden customMd:flex items-center justify-center gap-[6px]'>
                                <p className='font-picoopicRegular'>فارسی</p>
                                <span className='h-[2px] w-6 bg-menuItemColor'></span>
                                <p>EN</p>
                            </div>
                            <p className={'customMd:hidden font-picoopicRegular'}>{currentLocale === 'fa' ? 'EN' : 'فارسی'}</p>
                        </Link>
                    </li>
                    <li className='w-[35px] sm:w-auto'>
                        <Button icon={searchImage} onClick={() => setSearchModalStatus(true)} />
                    </li>
                </ul>
            </div>
            <Drawer anchor='right' open={mobileMenuStatus} onClose={() => setMobileMenuStatus(false)}>
                <p className='w-[250px] p-7 bg-buttonBgColor h-full text-menuItemColor'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo quasi fugiat ex voluptatem illo expedita iusto
                    voluptatum porro vel, magni at sapiente, cumque iure. Recusandae iusto adipisci ab ducimus.
                </p>
            </Drawer>
            <ModalComponent show={searchModalStatus} handleClose={closeSearchModalHandler} fullWidth={true} size='md'>
                <HeaderSearch />
            </ModalComponent>
        </header>
    );
};

export default Header;
