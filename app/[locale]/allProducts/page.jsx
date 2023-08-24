/* eslint-disable max-len */
'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

//MUI
import { Grid, InputLabel, MenuItem, Select, Tab } from '@mui/material';

//Assets
import { AllProductsSelect, AllProductsTabs } from './allProducts.style';
import sample_picture from './../../assets/images/sample_picture.png';

//Components
import ProductCard from '../components/template/product-card';
import { useParams } from 'next/navigation';

const AllProducts = () => {
    const [tabsValue, setTabsValue] = useState(0);
    const [selectValue, setSelectValue] = useState('');

    const t = useTranslations('allProducts');
    const { locale } = useParams();

    return (
        <div>
            <div className={`bg-buttonBgColor ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[2px]'}`}>
                <div className='px-[25px] py-[20px]'>
                    <Grid container spacing={{ xs: 5, lg: '100px' }}>
                        <Grid item xs={12} lg={6}>
                            <div className='relative'>
                                <p className='text-titleColor'>{t('first title')}</p>
                                <p className='text-textColor mt-6 uppercase leading-8 text-[14px]'>{t('first describe')}</p>
                                <div
                                    className={`absolute bg-[#3A4553] w-[90px] bottom-0 customLg:top-0 customLg:bottom-0 customLg:w-[1px] ${
                                        locale === 'fa'
                                            ? 'right-0 customLg:right-auto customLg:left-[-50px]'
                                            : 'left-0 customLg:left-auto customLg:right-[-50px]'
                                    }`}
                                ></div>
                                <div
                                    className={`absolute bottom-[-20px] w-[90px] h-[1px] bg-[#3A4553] customLg:w-0 customLg:h-0 ${
                                        locale === 'fa' ? 'right-0' : 'left-0 '
                                    }`}
                                ></div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <div className='relative'>
                                <p className='text-titleColor'>{t('second title')}</p>
                                <p className='text-textColor mt-6 uppercase leading-8 text-[14px]'>contact@diacara.com</p>
                                <p className='text-textColor'>+0 123 654 78910 </p>
                                <div
                                    className={`absolute bg-[#3A4553] bottom-0 w-[90px] customSm:top-0 customSm:bottom-0 customSm:w-[1px] ${
                                        locale === 'fa'
                                            ? 'right-0 customSm:right-auto customSm:left-0 customLg:left-[-50px]'
                                            : 'left-0 customSm:left-auto customSm:right-0 customLg:right-[-50px]'
                                    }`}
                                ></div>
                                <div
                                    className={`absolute bottom-[-20px] w-[90px] h-[1px] bg-[#3A4553] customLg:w-0 customSm:h-0 ${
                                        locale === 'fa' ? 'right-0' : 'left-0'
                                    }`}
                                ></div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <div>
                                <p className='text-titleColor'>{t('third title')}</p>
                                <p className='text-textColor mt-6 uppercase leading-8 text-[14px]'>contact@diacara.com</p>
                                <p className='text-textColor'>+0 123 654 78910 </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className='mt-16 flex items-center justify-between border-b-[1px] border-solid border-darkGold'>
                <div className='text-menuItemColor'>
                    <AllProductsTabs
                        value={tabsValue}
                        onChange={(e, newValue) => setTabsValue(newValue)}
                        textColor='inherit'
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#797F4A'
                            }
                        }}
                        locale={locale}
                    >
                        <Tab label={t('all products')} />
                        <Tab label={t('templates')} />
                        <Tab label={t('work')} />
                    </AllProductsTabs>
                </div>
                <div className='mb-2'>
                    <AllProductsSelect size='small' locale={locale}>
                        <InputLabel sx={{ fontFamily: 'inherit' }}>{t('Time')}</InputLabel>
                        <Select value={selectValue} label={t('Time')} onChange={e => setSelectValue(e.target.value)}>
                            <MenuItem value={10} sx={{ color: '#B0CEB8', fontFamily: 'inherit' }}>
                                {t('first tab')}
                            </MenuItem>
                            <MenuItem value={20} sx={{ color: '#B0CEB8', fontFamily: 'inherit' }}>
                                {t('second tab')}
                            </MenuItem>
                            <MenuItem value={30} sx={{ color: '#B0CEB8', fontFamily: 'inherit' }}>
                                {t('third tab')}
                            </MenuItem>
                        </Select>
                    </AllProductsSelect>
                </div>
            </div>
            <div className='mt-6'>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProductCard
                            bigPic={sample_picture}
                            firstSubPic={sample_picture}
                            secondSubPic={sample_picture}
                            thirdSubPic={sample_picture}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProductCard
                            bigPic={sample_picture}
                            firstSubPic={sample_picture}
                            secondSubPic={sample_picture}
                            thirdSubPic={sample_picture}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProductCard
                            bigPic={sample_picture}
                            firstSubPic={sample_picture}
                            secondSubPic={sample_picture}
                            thirdSubPic={sample_picture}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProductCard
                            bigPic={sample_picture}
                            firstSubPic={sample_picture}
                            secondSubPic={sample_picture}
                            thirdSubPic={sample_picture}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProductCard
                            bigPic={sample_picture}
                            firstSubPic={sample_picture}
                            secondSubPic={sample_picture}
                            thirdSubPic={sample_picture}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProductCard
                            bigPic={sample_picture}
                            firstSubPic={sample_picture}
                            secondSubPic={sample_picture}
                            thirdSubPic={sample_picture}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AllProducts;
