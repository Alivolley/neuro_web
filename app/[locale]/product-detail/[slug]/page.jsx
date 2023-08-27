'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

//assets
import testPic from './../../../assets/images/sample_picture.png';
import mailBox from './../../../assets/icons/mailBox.svg';
import phoneIcon from './../../../assets/icons/phoneIcon.svg';
import arrowIcon from './../../../assets/icons/arrowIcon.svg';
import arrowIconReverse from './../../../assets/icons/arrowIconReverse.svg';
import sample_picture from './../../../assets/images/sample_picture.png';

//Mui
import { Grid } from '@mui/material';

//components
import ProductCard from '../../components/template/product-card';

const ChosenProduct = () => {
    const { slug, locale } = useParams();
    const t = useTranslations('productDetail');

    return (
        <div className={`mt-12 ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'}`}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={{ sx: 0.5, sm: 1.5 }}>
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            sx={{
                                img: {
                                    width: '100%',
                                    height: '100%'
                                }
                            }}
                        >
                            <Image src={testPic} alt='project picture' />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container spacing={0.5}>
                                <Grid
                                    item
                                    xs={4}
                                    sm={12}
                                    sx={{
                                        img: {
                                            width: '100%',
                                            height: '100%'
                                        }
                                    }}
                                >
                                    <Image src={testPic} alt='project picture' />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    sm={12}
                                    sx={{
                                        img: {
                                            width: '100%',
                                            height: '100%'
                                        }
                                    }}
                                >
                                    <Image src={testPic} alt='project picture' />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    sm={12}
                                    sx={{
                                        img: {
                                            width: '100%',
                                            height: '100%'
                                        }
                                    }}
                                >
                                    <Image src={testPic} alt='project picture' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <a
                        href='https://www.google.com/'
                        target='_blank'
                        className='text-titleColor text-[18px] customSm:text-[24px]'
                        rel='noreferrer'
                    >
                        www.oskol.team.com
                    </a>
                    <p className='text-textColor mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non ratione mollitia! Cupiditate, quas eum. Nulla
                        nihil libero architecto pariatur eaque voluptate inventore sapiente, voluptates ducimus, doloribus placeat
                        consectetur illo.
                    </p>
                    <p className='text-titleColor mt-8 uppercase'>{t('At the request')} :</p>
                    <p className='text-textColor uppercase mt-5'>ms dehghan - PM websima</p>
                    <div className='flex mt-8 gap-12 flex-wrap'>
                        <div className='flex items-center gap-4'>
                            <div
                                className='w-[62px] h-[62px] flex justify-center items-center 
                            border-[1px] border-solid border-textColor rounded-full'
                            >
                                <Image src={phoneIcon} alt='contact icon' />
                            </div>
                            <div>
                                <p className='text-titleColor'>{t('Call us on')} :</p>
                                <p className='text-textColor'>09383935719</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div
                                className='w-[62px] h-[62px] flex justify-center items-center 
                            border-[1px] border-solid border-textColor rounded-full'
                            >
                                <Image src={mailBox} alt='contact icon' />
                            </div>
                            <div>
                                <p className='text-titleColor'>{t('Email us')} :</p>
                                <p className='text-textColor text-[10px] customSm:text-[16px]'>alicryptovolley@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className='flex items-center justify-between mt-[110px] border-b-[1px] border-solid border-darkGold pb-4'>
                <p className='text-menuItemColor text-[12px] customSm:text-[17px]'>{t('SIMILAR PROJECTS')}</p>
                <div className='flex items-center justify-center gap-3 customSm:gap-5'>
                    <Link href='/allProducts' className='text-[#555A4C] text-[10px] customSm:text-[14px]'>
                        {t('See more')}
                    </Link>
                    <Image src={locale === 'fa' ? arrowIconReverse : arrowIcon} alt='arrow icon' />
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

export default ChosenProduct;
