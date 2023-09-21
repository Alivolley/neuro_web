'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

// assets
import { Grid } from '@mui/material';
import testPic from '../../../assets/images/sample_picture.png';
import mailBox from '../../../assets/icons/mailBox.svg';
import phoneIcon from '../../../assets/icons/phoneIcon.svg';
import arrowIcon from '../../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../../assets/icons/arrowIconReverse.svg';

// Mui

// components
import ProductCard from '../../components/template/product-card';

function ChosenProduct() {
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
                           height: '100%',
                        },
                     }}
                  >
                     <Image src={testPic} alt="project picture" />
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
                                 height: '100%',
                              },
                           }}
                        >
                           <Image src={testPic} alt="project picture" />
                        </Grid>
                        <Grid
                           item
                           xs={4}
                           sm={12}
                           sx={{
                              img: {
                                 width: '100%',
                                 height: '100%',
                              },
                           }}
                        >
                           <Image src={testPic} alt="project picture" />
                        </Grid>
                        <Grid
                           item
                           xs={4}
                           sm={12}
                           sx={{
                              img: {
                                 width: '100%',
                                 height: '100%',
                              },
                           }}
                        >
                           <Image src={testPic} alt="project picture" />
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
               <a href="https://www.google.com/" target="_blank" className="text-[18px] text-titleColor customSm:text-[24px]" rel="noreferrer">
                  www.oskol.team.com
               </a>
               <p className="mt-5 text-textColor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non ratione mollitia! Cupiditate, quas eum. Nulla nihil libero
                  architecto pariatur eaque voluptate inventore sapiente, voluptates ducimus, doloribus placeat consectetur illo.
               </p>
               <p className="mt-8 uppercase text-titleColor">{t('At the request')} :</p>
               <p className="mt-5 uppercase text-textColor">ms dehghan - PM websima</p>
               <div className="mt-8 flex flex-wrap gap-12">
                  <div className="flex items-center gap-4">
                     <div
                        className="flex h-[62px] w-[62px] items-center justify-center 
                            rounded-full border-[1px] border-solid border-textColor"
                     >
                        <Image src={phoneIcon} alt="contact icon" />
                     </div>
                     <div>
                        <p className="text-titleColor">{t('Call us on')} :</p>
                        <p className="text-textColor">09383935719</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4">
                     <div
                        className="flex h-[62px] w-[62px] items-center justify-center 
                            rounded-full border-[1px] border-solid border-textColor"
                     >
                        <Image src={mailBox} alt="contact icon" />
                     </div>
                     <div>
                        <p className="text-titleColor">{t('Email us')} :</p>
                        <p className="text-[10px] text-textColor customSm:text-[16px]">alicryptovolley@gmail.com</p>
                     </div>
                  </div>
               </div>
            </Grid>
         </Grid>
         <div className="mt-[110px] flex items-center justify-between border-b-[1px] border-solid border-darkGold pb-4">
            <p className="text-[12px] text-menuItemColor customSm:text-[17px]">{t('SIMILAR PROJECTS')}</p>
            <div className="flex items-center justify-center gap-3 customSm:gap-5">
               <Link href="/allProducts" className="text-[10px] text-[#555A4C] customSm:text-[14px]">
                  {t('See more')}
               </Link>
               <Image src={locale === 'fa' ? arrowIconReverse : arrowIcon} alt="arrow icon" />
            </div>
         </div>
         <div className="mt-6">
            <Grid container spacing={4}>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={testPic} firstSubPic={testPic} secondSubPic={testPic} thirdSubPic={testPic} />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={testPic} firstSubPic={testPic} secondSubPic={testPic} thirdSubPic={testPic} />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={testPic} firstSubPic={testPic} secondSubPic={testPic} thirdSubPic={testPic} />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={testPic} firstSubPic={testPic} secondSubPic={testPic} thirdSubPic={testPic} />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={testPic} firstSubPic={testPic} secondSubPic={testPic} thirdSubPic={testPic} />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={testPic} firstSubPic={testPic} secondSubPic={testPic} thirdSubPic={testPic} />
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default ChosenProduct;
