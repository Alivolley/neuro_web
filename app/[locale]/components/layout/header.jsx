import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

//Assets
import logoHeader from './../../../assets/images/logoHeader.png';
import searchImage from './../../../assets/icons/searchHeader.png';

const Header = ({ currentLocale }) => {
    const t = useTranslations('header');

    return (
        <header className='text-menuItemColor font-avgardn'>
            <div>
                <Image src={logoHeader} alt='header logo' />
            </div>
            <div>
                <ul>
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
            </div>
        </header>
    );
};

export default Header;
