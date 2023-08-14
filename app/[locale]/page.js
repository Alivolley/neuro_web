/* eslint-disable max-len */
'use client';
import { useState } from 'react';
import Link from 'next-intl/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

//Assets
import arrowIcon from './../assets/icons/arrowIcon.svg';
import arrowIconReverse from './../assets/icons/arrowIconReverse.svg';
import { HomeStyle } from './home.style';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//MUI
import { Grid } from '@mui/material';

//Components
import Button from './components/form-group/button';
import HeaderTitle from './components/template/header-title';
import BorderedText from './components/template/bordered-text';

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    const t = useTranslations('home');
    const { locale } = useParams();

    return (
        <HomeStyle>
            <Swiper
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop
                className='mySwiper'
                onSwiper={swiper => setActiveSlide(swiper.realIndex)}
                onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
            >
                <Grid container>
                    <SwiperSlide>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className='mt-[140px] sm:mt-[110px]'>
                                    <div className='ml-5'>
                                        <div
                                            className={`flex flex-wrap sm:gap-2 text-textColor ${
                                                locale === 'fa'
                                                    ? 'font-picoopicRegular mb-[20px] font-extralight'
                                                    : 'font-aubrey tracking-[3px] sm:tracking-[7px] uppercase text-[9px] sm:text-[12px] sm:mb-[-20px]'
                                            }`}
                                        >
                                            <p>{t('userInterface')}</p>
                                            <p>{t('experience')}</p>
                                        </div>
                                        <HeaderTitle>{t('ui_ux design')}</HeaderTitle>
                                    </div>

                                    <div className='mt-[120px]'>
                                        <BorderedText>{t('describeUiUx')}</BorderedText>
                                    </div>

                                    <Link href={'/'} className=''>
                                        <Button
                                            text={t('more info')}
                                            icon={locale === 'fa' ? arrowIconReverse : arrowIcon}
                                            className={`text-buttonTextColor border-[1px] border-solid bg-buttonBgColor
                                             border-borderColor py-[10px] px-[20px] rounded-[2px] font-aubrey my-[90px]
                                             shadow-customButtonShadow ${locale === 'fa' ? 'font-picoopicRegular' : ''}`}
                                        ></Button>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}></Grid>
                        </Grid>
                    </SwiperSlide>
                </Grid>
            </Swiper>
        </HomeStyle>
    );
}
