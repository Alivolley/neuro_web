'use client';
import { useState } from 'react';

//MUI
import { Grid, InputLabel, MenuItem, Select, Tab } from '@mui/material';

//Assets
import { AllProductsSelect, AllProductsTabs } from './allProducts.style';
import sample_picture from './../../assets/images/sample_picture.png';

//Components
import ProductCard from '../components/template/product-card';

const AllProducts = () => {
    const [tabsValue, setTabsValue] = useState(0);
    const [selectValue, setSelectValue] = useState('');

    return (
        <div>
            <div className='bg-buttonBgColor font-aubrey tracking-[2px]'>
                <div className='px-[25px] py-[20px]'>
                    <Grid container spacing={{ xs: 5, lg: '100px' }}>
                        <Grid item xs={12} lg={6}>
                            <div className='relative'>
                                <p className='text-titleColor'>Say Hello To Peter</p>
                                <p className='text-textColor mt-6 uppercase leading-8 text-[14px]'>
                                    There are of Lorem Ipsum available, but the majority have su alteration in some form,
                                </p>
                                <div
                                    className='absolute bg-[#3A4553] bottom-0 left-0 w-[90px]
                             customLg:left-auto customLg:right-[-50px] customLg:top-0 customLg:bottom-0 customLg:w-[1px]'
                                ></div>
                                <div
                                    className='absolute 
                                bottom-[-20px] left-0 w-[90px] h-[1px] bg-[#3A4553] customLg:w-0 customLg:h-0'
                                ></div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <div className='relative'>
                                <p className='text-titleColor'>Las Vegas</p>
                                <p className='text-textColor mt-6 uppercase leading-8 text-[14px]'>contact@diacara.com</p>
                                <p className='text-textColor'>+0 123 654 78910 </p>
                                <div
                                    className='absolute bg-[#3A4553] bottom-0 left-0 w-[90px]
                             customSm:left-auto customSm:right-0 customSm:top-0 customSm:bottom-0 customSm:w-[1px] customLg:right-[-50px]'
                                ></div>
                                <div
                                    className='absolute 
                                bottom-[-20px] left-0 w-[90px] h-[1px] bg-[#3A4553] customLg:w-0 customSm:h-0'
                                ></div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <div>
                                <p className='text-titleColor'>New York</p>
                                <p className='text-textColor mt-6 uppercase leading-8 text-[14px]'>contact@diacara.com</p>
                                <p className='text-textColor'>+0 123 654 78910 </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className='mt-16 flex items-center justify-between border-b-[1px] border-solid border-darkGold'>
                <div className='text-menuItemColor font-aubrey'>
                    <AllProductsTabs
                        value={tabsValue}
                        onChange={(e, newValue) => setTabsValue(newValue)}
                        textColor='inherit'
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#797F4A'
                            }
                        }}
                    >
                        <Tab label='all products' />
                        <Tab label='templates' />
                        <Tab label='work' />
                    </AllProductsTabs>
                </div>
                <div className='font-aubrey mb-2'>
                    <AllProductsSelect size='small'>
                        <InputLabel sx={{ fontFamily: 'inherit' }}>TIME</InputLabel>
                        <Select value={selectValue} label='TIME' onChange={e => setSelectValue(e.target.value)}>
                            <MenuItem value={10} sx={{ color: '#B0CEB8', fontFamily: 'inherit' }}>
                                Ten
                            </MenuItem>
                            <MenuItem value={20} sx={{ color: '#B0CEB8', fontFamily: 'inherit' }}>
                                Twenty
                            </MenuItem>
                            <MenuItem value={30} sx={{ color: '#B0CEB8', fontFamily: 'inherit' }}>
                                Thirty
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
