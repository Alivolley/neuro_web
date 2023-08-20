/* eslint-disable max-len */
'use client';
import { useRef, useState } from 'react';
import Link from 'next-intl/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

//Assets
import arrowIcon from './../assets/icons/arrowIcon.svg';
import arrowIconReverse from './../assets/icons/arrowIconReverse.svg';
import { HomeStyle } from './home.style';
import uiuxSkeleton from './../assets/images/uiuxSkeleton.png';
import frontEndSkeleton from './../assets/images/frontEndSkeleton.png';
import backEndSkeleton from './../assets/images/backEndSkeleton.png';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

//MUI
import { Grid } from '@mui/material';

//Components
import HeaderTitle from './components/template/header-title';
import BorderedText from './components/template/bordered-text';
import ButtonTemplate from './components/form-group/button-template';
import SlidersItems from './components/pages/home/slidersItems';

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef();

    const t = useTranslations('home');
    const { locale } = useParams();

    const changeSlide = index => {
        swiperRef.current.swiper.slideTo(index);
    };

    return (
        <HomeStyle className='mt-[20px] sm:mt-[110px]'>
            <Swiper
                loop
                className='mySwiper'
                onSwiper={swiper => setActiveSlide(swiper.realIndex)}
                modules={[Autoplay]}
                onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
                // allowTouchMove={false}
                ref={swiperRef}
                speed={1000}
                spaceBetween={5}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true
                }}
            >
                <SwiperSlide>
                    <Grid container>
                        <Grid item xs={12} md={7}>
                            <div>
                                <div className='ml-5'>
                                    <div
                                        className={`flex flex-wrap sm:gap-2 text-textColor ${
                                            locale === 'fa'
                                                ? 'font-picoopicRegular mb-[20px] font-extralight'
                                                : 'font-aubrey tracking-[3px] sm:tracking-[7px] uppercase text-[9px] lg:text-[12px] sm:mb-[20px]'
                                        }`}
                                    >
                                        <p>{t('userInterface')}</p>
                                        <p>{t('experience')}</p>
                                    </div>
                                    <HeaderTitle>{t('ui_ux design')}</HeaderTitle>
                                </div>

                                <div className='mt-[120px] mb-[90px]'>
                                    <BorderedText>{t('describeUiUx')}</BorderedText>
                                </div>

                                <Link href={'/'}>
                                    <ButtonTemplate text={t('more info')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <div className='flex items-center gap-12'>
                                <div className='flex-grow flex flex-col items-end'>
                                    <Image src={uiuxSkeleton} alt='uiuxPicture' onClick={() => changeSlide(2)} />
                                </div>
                                <SlidersItems activeSlide={activeSlide} changeSlide={changeSlide} locale={locale} />
                            </div>
                        </Grid>
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='text-goldColor font-[30px]'>
                        <Grid container spacing={{ xs: 5, md: 0 }}>
                            <Grid item xs={12} md={7}>
                                <div>
                                    <div className='ml-5'>
                                        <div
                                            className={`flex flex-wrap sm:gap-2 text-textColor ${
                                                locale === 'fa'
                                                    ? 'font-picoopicRegular mb-[20px] font-extralight'
                                                    : 'font-aubrey tracking-[3px] sm:tracking-[7px] uppercase text-[9px] lg:text-[12px] sm:mb-[20px]'
                                            }`}
                                        >
                                            <p>{t('Development of')}</p>
                                            <p>{t('client side applications')}</p>
                                        </div>
                                        <HeaderTitle>{t('Frontend developer')}</HeaderTitle>
                                    </div>

                                    <div className='mt-[120px] mb-[90px]'>
                                        <BorderedText>{t('describeFront')}</BorderedText>
                                    </div>

                                    <Link href={'/'}>
                                        <ButtonTemplate text={t('more info')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <div className='flex items-center gap-12'>
                                    <div className='flex-grow flex flex-col items-end'>
                                        <Image src={frontEndSkeleton} alt='uiuxPicture' onClick={() => changeSlide(2)} />
                                    </div>
                                    <SlidersItems activeSlide={activeSlide} changeSlide={changeSlide} locale={locale} />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='text-goldColor font-[30px]'>
                        <Grid container spacing={{ xs: 5, md: 0 }}>
                            <Grid item xs={12} md={7}>
                                <div>
                                    <div className='ml-5'>
                                        <div
                                            className={`flex flex-wrap sm:gap-2 text-textColor ${
                                                locale === 'fa'
                                                    ? 'font-picoopicRegular mb-[20px] font-extralight'
                                                    : 'font-aubrey tracking-[3px] sm:tracking-[7px] uppercase text-[9px] lg:text-[12px] sm:mb-[20px]'
                                            }`}
                                        >
                                            <p>{t('Specialist in')}</p>
                                            <p>{t('server side development')}</p>
                                        </div>
                                        <HeaderTitle>{t('backend developer')}</HeaderTitle>
                                    </div>

                                    <div className='mt-[120px] mb-[90px]'>
                                        <BorderedText>{t('describeBack')}</BorderedText>
                                    </div>

                                    <Link href={'/'}>
                                        <ButtonTemplate text={t('more info')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <div className='flex items-center gap-12'>
                                    <div className='flex-grow flex flex-col items-end'>
                                        <Image src={backEndSkeleton} alt='uiuxPicture' onClick={() => changeSlide(2)} />
                                    </div>
                                    <SlidersItems activeSlide={activeSlide} changeSlide={changeSlide} locale={locale} />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </SwiperSlide>
            </Swiper>
        </HomeStyle>
    );
}
