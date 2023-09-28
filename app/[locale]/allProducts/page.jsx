'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';

// MUI
import { Grid } from '@mui/material';
// import { Grid, InputLabel, MenuItem, Select, Tab } from '@mui/material';

// Assets
// import { AllProductsSelect, AllProductsTabs } from './allProducts.style';

// Components
import ProductCard from '../components/template/product-card/product-card';
import useProducts from '../apis/useProducts/useProducts';
// import RtlProvider from '../components/layout/rtlProvider/rtlProvider';

function AllProducts() {
   // const [tabsValue, setTabsValue] = useState(0);
   // const [selectValue, setSelectValue] = useState('');

   const t = useTranslations('allProducts');
   const { locale } = useParams();

   const { data: allProductsData, isLoading: allProductsIsLoading } = useProducts();

   return (
      <div className="pb-14">
         <div className={`bg-buttonBgColor ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[2px]'}`}>
            <div className="px-[25px] py-[20px]">
               <Grid container spacing={{ xs: 5, lg: '100px' }}>
                  <Grid item xs={12} lg={6}>
                     <div className="relative">
                        <p className="text-titleColor">{t('first title')}</p>
                        <p className="mt-6 text-[14px] uppercase leading-8 text-textColor">{t('first describe')}</p>
                        <div
                           className={`absolute bottom-0 w-[90px] bg-[#3A4553] customLg:inset-y-0 customLg:w-[1px] ${
                              locale === 'fa'
                                 ? 'right-0 customLg:left-[-50px] customLg:right-auto'
                                 : 'left-0 customLg:left-auto customLg:right-[-50px]'
                           }`}
                        />
                        <div
                           className={`absolute bottom-[-20px] h-[1px] w-[90px] bg-[#3A4553] customLg:h-0 customLg:w-0 ${
                              locale === 'fa' ? 'right-0' : 'left-0 '
                           }`}
                        />
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                     <div className="relative">
                        <p className="text-titleColor">{t('second title')}</p>
                        <p className={`mt-6 leading-8 text-textColor ${locale === 'fa' ? 'text-base' : 'text-sm'}`}>alicryptovolley@gmail.com</p>
                        <p className="text-textColor">09383935719</p>
                        <div
                           className={`absolute bottom-0 w-[90px] bg-[#3A4553] customSm:inset-y-0 customSm:w-[1px] ${
                              locale === 'fa'
                                 ? 'right-0 customSm:left-0 customSm:right-auto customLg:left-[-50px]'
                                 : 'left-0 customSm:left-auto customSm:right-0 customLg:right-[-50px]'
                           }`}
                        />
                        <div
                           className={`absolute bottom-[-20px] h-[1px] w-[90px] bg-[#3A4553] customSm:h-0 customLg:w-0 ${
                              locale === 'fa' ? 'right-0' : 'left-0'
                           }`}
                        />
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                     <div>
                        <p className="text-titleColor">{t('third title')}</p>
                        <p className={`mt-6 leading-8 text-textColor ${locale === 'fa' ? 'text-sm' : 'text-xs'}`}>javad.programmer100@gmail.com</p>
                        <p className="text-textColor">09908227202</p>
                     </div>
                  </Grid>
               </Grid>
            </div>
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
         <div className="mt-20">
            {allProductsIsLoading ? (
               <div className="flex h-full w-full items-center justify-center text-goldColor">
                  <CircleLoader color="#CCAA60" size={80} />
               </div>
            ) : (
               <Grid container spacing={4}>
                  {allProductsData?.result?.map(item => (
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
                  ))}
               </Grid>
            )}
         </div>
      </div>
   );
}

export default AllProducts;
