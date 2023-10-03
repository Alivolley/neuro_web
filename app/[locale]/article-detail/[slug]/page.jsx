/* eslint-disable react/no-danger */

'use client';

import { useParams } from 'next/navigation';
import * as DOMPurify from 'dompurify';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

// MUI
import { Grid } from '@mui/material';

// Icons
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

// assets
import { CircleLoader } from 'react-spinners';
import arrowIcon from '../../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../../assets/icons/arrowIconReverse.svg';

// Hooks
import useArticleDetail from '../../apis/useArticleDetail/useArticleDetail';

// Components
import ArticleCard from '../../components/template/article-card/article-card';
import ButtonTemplate from '../../components/form-group/button-template/button-template';

function ArticleDetail() {
   const { slug, locale } = useParams();
   const t = useTranslations('articleDetail');

   const { data: articleDetailData, isLoading: articleDetailIsLoading } = useArticleDetail(slug);

   return (
      <div className="relative text-menuItemColor">
         {articleDetailIsLoading ? (
            <div className="flex h-full w-full items-center justify-center text-goldColor">
               <CircleLoader color="#CCAA60" size={80} />
            </div>
         ) : (
            <div className="font-picoopicRegular text-textColor">
               <Grid container bgcolor="#1A1C1A70" padding={2} spacing={2}>
                  <Grid item xs={12} md={9}>
                     <div>
                        <h2 className="rounded-sm bg-[#555A4C] px-5 py-1 text-2xl capitalize text-white">
                           {articleDetailData?.title}
                        </h2>
                        <div className="my-6 flex items-center gap-8 px-3">
                           <p className="flex items-center justify-center gap-2 text-sm">
                              <Person2OutlinedIcon fontSize="small" color="menuItemColor" />
                              {articleDetailData?.author?.full_name}
                           </p>

                           <p className="flex items-center justify-center gap-2 text-sm">
                              <EventOutlinedIcon fontSize="small" color="menuItemColor" />
                              {articleDetailData?.created}
                           </p>
                        </div>

                        <div className="mx-auto mb-8 aspect-video max-h-[450px]">
                           <img
                              src={articleDetailData?.image}
                              alt={articleDetailData?.title}
                              className="h-full w-full object-cover"
                           />
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleDetailData?.content) }} />
                     </div>
                  </Grid>
                  <Grid item xs={12} md={3}>
                     <div className="hidden text-white customMd:block">
                        {/* <div>
                           <p
                              className={`rounded-sm bg-[#555A4C] px-4 py-2 text-center text-lg font-bold capitalize ${
                                 locale === 'fa' ? '' : 'tracking-[1px]'
                              }`}
                           >
                              {t('latest')}
                           </p>

                           <div className="flex flex-col bg-[#3F4436] py-5">
                              <Link href="/" className="mx-4 border-b border-[#32362B] py-2">
                                 some
                              </Link>
                              <Link href="/" className="mx-4 border-b border-[#32362B] py-2">
                                 some
                              </Link>
                              <Link href="/" className="mx-4 border-b border-[#32362B] py-2">
                                 some
                              </Link>
                           </div>
                        </div> */}

                        <div>
                           <p
                              className={`rounded-sm bg-[#555A4C] px-4 py-2 text-center text-lg font-bold capitalize ${
                                 locale === 'fa' ? '' : 'tracking-[1px]'
                              }`}
                           >
                              {t('categories')}
                           </p>

                           <div className="flex flex-col bg-[#3F4436] py-5">
                              <Link href="/allArticles/all" className="mx-4 border-b border-[#32362B] py-2 capitalize">
                                 {t('all')}
                              </Link>
                              <Link
                                 href="/allArticles/frontend"
                                 className="mx-4 border-b border-[#32362B] py-2 capitalize"
                              >
                                 {t('frontend')}
                              </Link>
                              <Link
                                 href="/allArticles/backend"
                                 className="mx-4 border-b border-[#32362B] py-2 capitalize"
                              >
                                 {t('backend')}
                              </Link>
                              <Link href="/allArticles/uiux" className="mx-4 border-b border-[#32362B] py-2 capitalize">
                                 {t('ui ux')}
                              </Link>
                           </div>
                        </div>
                     </div>
                  </Grid>
               </Grid>

               <div className="mt-40 pb-16">
                  <div className="mb-10 flex items-center justify-between">
                     <p className="text-lg text-menuItemColor">{t('related articles')}</p>

                     <Link href="/allArticles/all">
                        <ButtonTemplate
                           text={t('all articles')}
                           icon={locale === 'fa' ? arrowIconReverse : arrowIcon}
                        />
                     </Link>
                  </div>

                  <Grid container spacing={4}>
                     {articleDetailData?.similar_articles?.map(
                        (item, index) =>
                           index < 3 && (
                              <Grid item xs={12} sm={6} lg={4} key={item.id}>
                                 <ArticleCard
                                    title={item.title}
                                    description={item.short_description}
                                    cover={item.image}
                                 />
                              </Grid>
                           )
                     )}
                  </Grid>
               </div>
            </div>
         )}
      </div>
   );
}

export default ArticleDetail;
