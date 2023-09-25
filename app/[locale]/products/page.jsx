'use client';

import { useParams } from 'next/navigation';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

// Assets
import { Grid } from '@mui/material';
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../assets/icons/arrowIconReverse.svg';
import samplePicture from '../../assets/images/sample_picture.png';

// MUI
import HeaderTitle from '../components/template/header-title/header-title';
import BorderedText from '../components/template/bordered-text/bordered-text';
import ButtonTemplate from '../components/form-group/button-template/button-template';
import ProductCard from '../components/template/product-card/product-card';

function PageSome() {
   const { locale } = useParams();
   const t = useTranslations('products');

   return (
      <div className="z-[2] mt-[20px] sm:mt-[110px]">
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

                  <div className="mb-[90px] mt-[100px]">
                     <BorderedText>{t('Our product description')}</BorderedText>
                  </div>

                  <Link href="/allProducts">
                     <ButtonTemplate text={t('all products')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
                  </Link>
               </div>
            </Grid>
            <Grid item xs={12} lg={7}>
               <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                     <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </div>
   );
}

export default PageSome;
