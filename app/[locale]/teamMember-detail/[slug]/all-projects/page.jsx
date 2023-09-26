'use client';

// import { useState } from 'react';
// import { useTranslations } from 'next-intl';
// import { useParams } from 'next/navigation';
import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';
// import { Grid, InputLabel, MenuItem, Select, Tab } from '@mui/material';

// Assets
import jasminPic from '../../../../assets/images/jasminPicture.png';
import samplePicture from '../../../../assets/images/sample_picture.png';

// Components
import InfoDetail from '../../../components/pages/teamMember-detail/info-detail/info-detail';
import ProductCard from '../../../components/template/product-card/product-card';
// import RtlProvider from '../../../components/layout/rtlProvider/rtlProvider';
// import { AllProductsSelect, AllProductsTabs } from '../../../allProducts/allProducts.style';

function AllProjects() {
   // const [tabsValue, setTabsValue] = useState(0);
   // const [selectValue, setSelectValue] = useState('');

   // const { slug, locale } = useParams();
   // const t = useTranslations('allProducts');

   return (
      <div className="relative mt-3 pb-12 customMd:mt-12">
         <Grid container columnSpacing={8} rowSpacing={3}>
            <Grid item xs={12} md={3}>
               <div className="flex gap-4 customMd:flex-col">
                  <div className="aspect-[1/1] w-full max-w-[200px] customSm:aspect-[1/1.3] customMd:max-w-[300px]">
                     <Image src={jasminPic} className="w-full" alt="profile" />
                  </div>

                  <div>
                     <div className="customMd:hidden">
                        <h3 className="whitespace-nowrap font-pubg text-xl tracking-[3px] text-titleColor customSm:text-4xl">JASMIN DEHGHAN</h3>
                        <p className="mt-1 whitespace-nowrap font-aubrey text-xs tracking-[1.5px] text-menuItemColor customSm:text-sm">
                           UI/UX Designer
                        </p>
                     </div>

                     <div className="hidden customSm:block">
                        <InfoDetail />
                     </div>
                  </div>
               </div>
            </Grid>

            <Grid item xs={12} md={9}>
               <div className="hidden customMd:block">
                  <h3 className="font-pubg text-[40px] tracking-[3px] text-titleColor">JASMIN DEHGHAN</h3>
                  <p className="mt-1 font-aubrey tracking-[1.5px] text-menuItemColor">UI/UX Designer</p>
               </div>

               {/* <div className="mt-16 flex items-center justify-between border-b-[1px] border-solid border-darkGold">
                  <div className="text-menuItemColor">
                     <AllProductsTabs
                        value={tabsValue}
                        onChange={(e, newValue) => setTabsValue(newValue)}
                        textColor="inherit"
                        TabIndicatorProps={{
                           style: {
                              backgroundColor: '#797F4A',
                           },
                        }}
                        locale={locale}
                     >
                        <Tab label={t('all products')} />
                        <Tab label={t('templates')} />
                        <Tab label={t('work')} />
                     </AllProductsTabs>
                  </div>
                  <div className="mb-2">
                     <RtlProvider>
                        <AllProductsSelect size="small" locale={locale}>
                           <InputLabel sx={{ fontFamily: 'inherit' }}>{t('Time')}</InputLabel>
                           <Select
                              value={selectValue}
                              label={t('Time')}
                              onChange={e => setSelectValue(e.target.value)}
                              className={`${locale === 'fa' ? '!font-picoopicRegular' : '!font-aubrey'}`}
                           >
                              <MenuItem
                                 value={10}
                                 sx={{ color: '#B0CEB8' }}
                                 className={`${locale === 'fa' ? '!font-picoopicRegular' : '!font-aubrey !tracking-[2px]'}`}
                              >
                                 {t('first tab')}
                              </MenuItem>
                              <MenuItem
                                 value={20}
                                 sx={{ color: '#B0CEB8' }}
                                 className={`${locale === 'fa' ? '!font-picoopicRegular' : '!font-aubrey !tracking-[2px]'}`}
                              >
                                 {t('second tab')}
                              </MenuItem>
                              <MenuItem
                                 value={30}
                                 sx={{ color: '#B0CEB8' }}
                                 className={`${locale === 'fa' ? '!font-picoopicRegular' : '!font-aubrey !tracking-[2px]'}`}
                              >
                                 {t('third tab')}
                              </MenuItem>
                           </Select>
                        </AllProductsSelect>
                     </RtlProvider>
                  </div>
               </div> */}
               <div className="mt-12 border-t border-darkGold">
                  <Grid container spacing={4}>
                     <Grid item xs={12} sm={6} lg={4}>
                        <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                        <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                        <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                        <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                        <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                        <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
                     </Grid>
                  </Grid>
               </div>
            </Grid>
         </Grid>
      </div>
   );
}

export default AllProjects;
