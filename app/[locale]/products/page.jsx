'use client';

import { useParams } from 'next/navigation';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

// Assets
import { Grid } from '@mui/material';
import { CircleLoader } from 'react-spinners';
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../assets/icons/arrowIconReverse.svg';

// MUI
import HeaderTitle from '../components/template/header-title/header-title';
import BorderedText from '../components/template/bordered-text/bordered-text';
import ButtonTemplate from '../components/form-group/button-template/button-template';
import ProductCard from '../components/template/product-card/product-card';
import useProducts from '../apis/useProducts/useProducts';

function PageSome() {
   const { locale } = useParams();
   const t = useTranslations('products');

   const { data: allProductsData, isLoading: allProductsIsLoading } = useProducts();

   return (
      <div className="z-[2] mt-[20px] pb-32 sm:mt-[110px]">
         <Grid container spacing={{ xs: 5, lg: 4 }}>
            <Grid item xs={12} lg={5}>
               <div>
                  <div className="ml-5">
                     <div
                        className={`flex flex-wrap text-textColor sm:gap-2 ${
                           locale === 'fa'
                              ? 'mb-[20px] font-picoopicRegular text-[14px] font-extralight'
                              : 'font-aubrey text-[9px] uppercase tracking-[3px] sm:mb-[20px] lg:text-[11px]'
                        }`}
                     >
                        <p className="relative">{t('Enhance your brands')}</p>
                     </div>
                     <HeaderTitle>{t('Our products')}</HeaderTitle>
                  </div>

                  <div className="mb-[50px] mt-[100px]">
                     <BorderedText>{t('Our product description')}</BorderedText>
                  </div>

                  <Link href="/allProducts">
                     <ButtonTemplate text={t('all products')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                  </Link>
               </div>
            </Grid>
            <Grid item xs={12} lg={7}>
               {allProductsIsLoading ? (
                  <div className="flex h-full w-full items-center justify-center text-goldColor">
                     <CircleLoader color="#CCAA60" size={80} />
                  </div>
               ) : (
                  <Grid container spacing={4}>
                     {allProductsData?.result?.map(
                        (item, index) =>
                           index < 4 && (
                              <Grid item xs={12} md={6} key={item.id}>
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
            </Grid>
         </Grid>
      </div>
   );
}

export default PageSome;
