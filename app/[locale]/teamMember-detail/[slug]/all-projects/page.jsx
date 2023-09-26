'use client';

// import { useState } from 'react';
// import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';

// MUI
import { Grid } from '@mui/material';
// import { Grid, InputLabel, MenuItem, Select, Tab } from '@mui/material';

// Components
import InfoDetail from '../../../components/pages/teamMember-detail/info-detail/info-detail';
import ProductCard from '../../../components/template/product-card/product-card';
import useTeamMemberDetail from '../../../apis/useTeamMemberDetail/useTeamMemberDetail';
// import RtlProvider from '../../../components/layout/rtlProvider/rtlProvider';
// import { AllProductsSelect, AllProductsTabs } from '../../../allProducts/allProducts.style';

function AllProjects() {
   // const [tabsValue, setTabsValue] = useState(0);
   // const [selectValue, setSelectValue] = useState('');

   // const { slug, locale } = useParams();
   // const t = useTranslations('allProducts');

   const { slug, locale } = useParams();

   const { data: teamMemberData, isLoading: teamMemberIsLoading } = useTeamMemberDetail(slug);

   console.log(teamMemberData);

   return (
      <div className="relative mt-3 pb-12 customMd:mt-12">
         <Grid container columnSpacing={8} rowSpacing={3}>
            {teamMemberIsLoading ? (
               <div className="flex h-full w-full items-center justify-center text-goldColor">
                  <CircleLoader color="#CCAA60" size={80} />
               </div>
            ) : (
               <>
                  <Grid item xs={12} md={3}>
                     <div className="flex gap-4 customMd:flex-col">
                        <div className="aspect-[1/1] w-full max-w-[200px] customSm:aspect-[1/1.3] customMd:max-w-[300px]">
                           <img src={teamMemberData?.image} className="h-full w-full object-cover grayscale customSm:object-contain" alt="profile" />
                        </div>

                        <div>
                           <div className="customMd:hidden">
                              <h3
                                 className={`whitespace-nowrap text-xl text-titleColor customSm:text-4xl ${
                                    locale === 'fa' ? 'font-titreZebr2' : 'font-pubg tracking-[3px]'
                                 }`}
                              >
                                 {teamMemberData?.first_name} {teamMemberData?.last_name}
                              </h3>
                              <p
                                 className={`mt-3 whitespace-nowrap text-xs capitalize text-menuItemColor customSm:text-sm ${
                                    locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'
                                 }`}
                              >
                                 {teamMemberData?.title}
                              </p>
                           </div>

                           <div className="hidden customSm:block">
                              <InfoDetail detail={teamMemberData} />
                           </div>
                        </div>
                     </div>
                  </Grid>

                  <Grid item xs={12} md={9}>
                     <div className="hidden customMd:block">
                        <h3 className={`text-titleColor ${locale === 'fa' ? 'font-titreZebr2 text-[34px]' : 'font-pubg text-[40px] tracking-[3px]'}`}>
                           {teamMemberData?.first_name} {teamMemberData?.last_name}
                        </h3>
                        <p
                           className={`mt-3 capitalize text-menuItemColor ${
                              locale === 'fa' ? 'font-picoopicRegular text-lg' : 'font-aubrey tracking-[1.5px]'
                           }`}
                        >
                           {teamMemberData?.title}
                        </p>
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
                     <div className="mt-12 border-t border-darkGold pt-10">
                        <Grid container spacing={4}>
                           {teamMemberData?.products?.map(item => (
                              <Grid item xs={12} sm={6} lg={4} key={item.id}>
                                 <ProductCard
                                    bigPic={item?.picture_1}
                                    firstSubPic={item?.picture_2}
                                    secondSubPic={item?.picture_3}
                                    thirdSubPic={item?.picture_4}
                                    productId={item?.id}
                                    userId={teamMemberData?.user?.id}
                                    title={item?.title}
                                 />
                              </Grid>
                           ))}
                        </Grid>
                     </div>
                  </Grid>
               </>
            )}
         </Grid>
      </div>
   );
}

export default AllProjects;
