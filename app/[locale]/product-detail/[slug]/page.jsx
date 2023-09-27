'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { CircleLoader } from 'react-spinners';

// Mui
import { Grid } from '@mui/material';

// assets
import mailBox from '../../../assets/icons/mailBox.svg';
import phoneIcon from '../../../assets/icons/phoneIcon.svg';
import arrowIcon from '../../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../../assets/icons/arrowIconReverse.svg';

// components
import ProductCard from '../../components/template/product-card/product-card';
import useProducts from '../../apis/useProducts/useProducts';
import useProductDetail from '../../apis/useProductDetail/useProductDetail';

function ChosenProduct() {
   const { slug, locale } = useParams();
   const t = useTranslations('productDetail');

   const { data: allProductsData, isLoading: allProductsIsLoading } = useProducts();
   const { data: productDetailData, isLoading: productDetailIsLoading } = useProductDetail(slug);

   return (
      <div className={`mt-12 ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'}`}>
         {productDetailIsLoading ? (
            <div className="flex h-full w-full items-center justify-center text-goldColor">
               <CircleLoader color="#CCAA60" size={80} />
            </div>
         ) : (
            <>
               <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                     <div className="customMd:flex customMd:gap-2">
                        <div className="mb-1 aspect-video w-full bg-yellow-200 customMd:mb-0 customMd:w-[70%]">
                           <img src={productDetailData?.pictures?.[0]} alt="project" className="h-full w-full" />
                        </div>
                        <div className="flex gap-1 customMd:block customMd:w-[30%] customMd:gap-0 customMd:space-y-1">
                           <div className="aspect-video w-full">
                              <img src={productDetailData?.pictures?.[1]} alt="project" className="h-full w-full object-cover" />
                           </div>
                           <div className="aspect-video w-full">
                              <img src={productDetailData?.pictures?.[2]} alt="project" className="h-full w-full object-cover" />
                           </div>
                           <div className="aspect-video w-full">
                              <img src={productDetailData?.pictures?.[3]} alt="project" className="h-full w-full object-cover" />
                           </div>
                        </div>
                     </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <p className="uppercase text-titleColor">{t('site name')} :</p>

                     <p className="mb-5 mt-2 uppercase text-textColor">{productDetailData?.title}</p>

                     <a
                        href={productDetailData?.website_link}
                        target="_blank"
                        className="text-[18px] text-titleColor customSm:text-[24px]"
                        rel="noreferrer"
                     >
                        {productDetailData?.website_link}
                     </a>
                     <p className="mt-5 text-textColor">{productDetailData?.description}</p>

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
                  {allProductsIsLoading ? (
                     <div className="flex h-full w-full items-center justify-center text-goldColor">
                        <CircleLoader color="#CCAA60" size={80} />
                     </div>
                  ) : (
                     <Grid container spacing={4}>
                        {allProductsData?.result?.map(
                           (item, index) =>
                              index < 3 && (
                                 <Grid item xs={12} sm={6} lg={4} key={item.id}>
                                    <ProductCard
                                       bigPic={item.pictures[0]}
                                       firstSubPic={item.pictures[1]}
                                       secondSubPic={item.pictures[2]}
                                       thirdSubPic={item.pictures[3]}
                                       href={`/product-detail/${item.id}`}
                                       title={item.title}
                                    />
                                 </Grid>
                              )
                        )}
                     </Grid>
                  )}
               </div>
            </>
         )}
      </div>
   );
}

export default ChosenProduct;
