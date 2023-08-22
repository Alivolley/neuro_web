'use client';
import { useParams } from 'next/navigation';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

//Assets
import arrowIcon from './../../assets/icons/arrowIcon.svg';
import arrowIconReverse from './../../assets/icons/arrowIconReverse.svg';
import sample_picture from './../../assets/images/sample_picture.png';

//MUI
import { Grid } from '@mui/material';
import HeaderTitle from '../components/template/header-title';
import BorderedText from '../components/template/bordered-text';
import ButtonTemplate from '../components/form-group/button-template';
import ProductCard from '../components/template/product-card';

const PageSome = () => {
    const { locale } = useParams();
    const t = useTranslations('products');

    return (
        <div className='mt-[20px] sm:mt-[110px] z-[2]'>
            <Grid container spacing={{ xs: 5, lg: 2 }}>
                <Grid item xs={12} lg={5}>
                    <div>
                        <div className='ml-5'>
                            <div
                                className={`flex flex-wrap sm:gap-2 text-textColor ${
                                    locale === 'fa'
                                        ? 'font-picoopicRegular mb-[20px] font-extralight text-[14px]'
                                        : 'font-aubrey tracking-[3px] uppercase text-[9px] lg:text-[11px] sm:mb-[20px]'
                                }`}
                            >
                                <p className='relative'>{t('Enhance your brands')}</p>
                            </div>
                            <HeaderTitle>{t('Our products')}</HeaderTitle>
                        </div>

                        <div className='mt-[120px] mb-[90px]'>
                            <BorderedText>{t('Our product description')}</BorderedText>
                        </div>

                        <Link href={'/'}>
                            <ButtonTemplate text={t('all products')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} xl={4}>
                            <ProductCard
                                bigPic={sample_picture}
                                firstSubPic={sample_picture}
                                secondSubPic={sample_picture}
                                thirdSubPic={sample_picture}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <ProductCard
                                bigPic={sample_picture}
                                firstSubPic={sample_picture}
                                secondSubPic={sample_picture}
                                thirdSubPic={sample_picture}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <ProductCard
                                bigPic={sample_picture}
                                firstSubPic={sample_picture}
                                secondSubPic={sample_picture}
                                thirdSubPic={sample_picture}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <ProductCard
                                bigPic={sample_picture}
                                firstSubPic={sample_picture}
                                secondSubPic={sample_picture}
                                thirdSubPic={sample_picture}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default PageSome;
