/* eslint-disable no-nested-ternary */

'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next-intl/link';

// MUI
import { Grid, Tab } from '@mui/material';

// assets
import { CircleLoader } from 'react-spinners';
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../assets/icons/arrowIconReverse.svg';

// Components
import HeaderTitle from '../components/template/header-title/header-title';
import ArticlesTabs from './articles.style';
import ButtonTemplate from '../components/form-group/button-template/button-template';
import ArticleCard from '../components/template/article-card/article-card';
import useArticles from '../apis/useArticles/useArticles';

function Articles() {
   const [tabsValue, setTabsValue] = useState(0);

   const { locale } = useParams();
   const t = useTranslations('articles');

   const {
      data: articlesData,
      isLoading: articlesIsLoading,
      mutate,
      isValidating,
   } = useArticles(tabsValue === 1 ? 'frontend' : tabsValue === 2 ? 'backend' : tabsValue === 3 ? 'uiux' : null);

   useEffect(() => {
      mutate();
   }, [tabsValue]);

   return (
      <div>
         <div className="mt-12">
            <HeaderTitle>{t('articles')}</HeaderTitle>
         </div>
         <p className={`mt-5 text-lg text-textColor customMd:text-2xl ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
            {t('articles title')}
         </p>

         <div className="mt-20 flex flex-wrap-reverse items-end justify-between border-b border-solid border-darkGold customMd:flex-nowrap">
            <div className="text-menuItemColor">
               <ArticlesTabs
                  value={tabsValue}
                  onChange={(e, newValue) => {
                     setTabsValue(newValue);
                  }}
                  textColor="inherit"
                  TabIndicatorProps={{
                     style: {
                        backgroundColor: '#797F4A',
                     },
                  }}
                  locale={locale}
               >
                  <Tab label={t('all articles')} disabled={articlesIsLoading} />
                  <Tab label={t('Frontend')} disabled={articlesIsLoading} />
                  <Tab label={t('Backend')} disabled={articlesIsLoading} />
                  <Tab label={t('UiUx')} disabled={articlesIsLoading} />
               </ArticlesTabs>
            </div>

            <div className="mb-3">
               <Link
                  href={`/allArticles/${
                     tabsValue === 0 ? 'all' : tabsValue === 1 ? 'frontend' : tabsValue === 2 ? 'backend' : tabsValue === 3 ? 'uiux' : ''
                  }`}
               >
                  <ButtonTemplate
                     text={t(
                        `All ${
                           tabsValue === 0 ? '' : tabsValue === 1 ? 'frontend' : tabsValue === 2 ? 'backend' : tabsValue === 3 ? 'uiux' : ''
                        } articles`
                     )}
                     icon={locale === 'fa' ? arrowIconReverse : arrowIcon}
                  />
               </Link>
            </div>
         </div>

         <div className="mt-6 pb-16">
            {articlesIsLoading || isValidating ? (
               <div className="flex h-full w-full items-center justify-center text-goldColor">
                  <CircleLoader color="#CCAA60" size={80} />
               </div>
            ) : (
               <Grid container spacing={4}>
                  {articlesData?.result?.map(
                     (item, index) =>
                        index < 3 && (
                           <Grid item xs={12} sm={6} lg={4} key={item.id}>
                              <ArticleCard
                                 title={item.title}
                                 description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque it. Debitis blanditiis velit, neque id molestiae illum doloremque  accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                                 cover={item.image}
                                 id={item.id}
                              />
                           </Grid>
                        )
                  )}
               </Grid>
            )}
         </div>
      </div>
   );
}

export default Articles;
