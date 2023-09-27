'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';

// MUI
import { Grid } from '@mui/material';

// Components
import HeaderTitle from '../../components/template/header-title/header-title';
import ArticleCard from '../../components/template/article-card/article-card';
import useArticles from '../../apis/useArticles/useArticles';

function AllArticles() {
   const { locale, slug } = useParams();
   const t = useTranslations('articles');

   const { data: allArticlesData, isLoading: allArticlesIsLoading } = useArticles(slug === 'all' ? null : slug);

   return (
      <div>
         <p className={`mt-12 text-lg text-textColor customMd:text-2xl ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
            {t('articles title')}
         </p>
         <div className="mt-5">
            <HeaderTitle>{t(`Articles related to ${slug}`)}</HeaderTitle>
         </div>

         <div className="mt-28 border-t border-darkGold pt-10">
            {allArticlesIsLoading ? (
               <div className="flex h-full w-full items-center justify-center text-goldColor">
                  <CircleLoader color="#CCAA60" size={80} />
               </div>
            ) : (
               <Grid container spacing={4}>
                  {allArticlesData?.result?.map(item => (
                     <Grid item xs={12} sm={6} lg={4} key={item.id}>
                        <ArticleCard title={item.title} description={item.short_description} cover={item.image} id={item.id} />
                     </Grid>
                  ))}
               </Grid>
            )}
         </div>
      </div>
   );
}

export default AllArticles;
