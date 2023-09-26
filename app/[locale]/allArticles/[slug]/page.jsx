'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

// MUI
import { Grid } from '@mui/material';

// assets
import samplePicture from '../../../assets/images/sample_picture.png';

// Components
import HeaderTitle from '../../components/template/header-title/header-title';
import ArticleCard from '../../components/template/article-card/article-card';

function AllArticles() {
   const { locale, slug } = useParams();
   const t = useTranslations('articles');

   return (
      <div>
         <p className={`mt-12 text-lg text-textColor customMd:text-2xl ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
            {t('articles title')}
         </p>
         <div className="mt-5">
            <HeaderTitle>{t(`Articles related to ${slug}`)}</HeaderTitle>
         </div>

         <div className="mt-28">
            <Grid container spacing={4}>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque it. Debitis blanditiis velit, neque id molestiae illum doloremque  accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="عنوان یک مقاله"
                     description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  فاده از طراحان گرافیک است چاپگرها و متون بلکه  روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <ArticleCard
                     title="title of article"
                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis velit, neque id molestiae illum doloremque accusantium nobis minus illo cumque, facilis magnam sint quibusdam aut sunt voluptatum alias reiciendis."
                     cover={samplePicture}
                     id={1}
                  />
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default AllArticles;
