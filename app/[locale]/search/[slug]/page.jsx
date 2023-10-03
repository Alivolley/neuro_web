/* eslint-disable react/no-unescaped-entities */

'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';

// MUI
import { Grid } from '@mui/material';

// Components
import ArticleCard from '../../components/template/article-card/article-card';
import useSearch from '../../apis/useSearch/useSearch';

function Search() {
   const { locale, slug } = useParams();
   const decodedSlug = decodeURIComponent(slug);
   const t = useTranslations('search');

   const { data: searchedArticlesData, isLoading: searchedArticlesIsLoading } = useSearch(decodedSlug);

   return (
      <div className="relative pb-20">
         <p
            className={`mt-12 text-xl font-bold text-textColor customMd:text-4xl ${
               locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'
            }`}
         >
            {t('search result of')} " {decodedSlug} "
         </p>

         <div className="mt-16 border-t border-darkGold pt-10">
            {searchedArticlesIsLoading ? (
               <div className="flex h-full w-full items-center justify-center text-goldColor">
                  <CircleLoader color="#CCAA60" size={80} />
               </div>
            ) : (
               <Grid container spacing={4}>
                  {searchedArticlesData?.result?.map(item => (
                     <Grid item xs={12} sm={6} lg={4} key={item.id}>
                        <ArticleCard title={item.title} description={item.short_description} cover={item.image} />
                     </Grid>
                  ))}
               </Grid>
            )}
         </div>
      </div>
   );
}

export default Search;
