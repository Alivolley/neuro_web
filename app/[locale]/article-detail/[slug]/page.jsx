'use client';

import { useParams } from 'next/navigation';
import { CircleLoader } from 'react-spinners';
import * as DOMPurify from 'dompurify';

// Hooks
import useArticleDetail from '../../apis/useArticleDetail/useArticleDetail';

function ArticleDetail() {
   const { slug, locale } = useParams();

   const { data: articleDetailData, isLoading: articleDetailIsLoading } = useArticleDetail(slug);

   return (
      <div className="relative text-menuItemColor">
         {articleDetailIsLoading ? (
            <div className="flex h-full w-full items-center justify-center text-goldColor">
               <CircleLoader color="#CCAA60" size={80} />
            </div>
         ) : (
            <>
               <div className="aspect-video max-h-[200px]">
                  <img src={articleDetailData?.image} alt={articleDetailData?.title} className="h-full w-full" />
               </div>
               <div>
                  <p>تاریخ : {articleDetailData?.created}</p>
                  <p>دسته بندی : {articleDetailData?.category}</p>
                  <p>نویسنده : {articleDetailData?.author?.full_name}</p>
                  <p>تعداد بازدید : {articleDetailData?.views}</p>
               </div>
               <br />
               <br />
               <br />
               <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleDetailData?.content) }} />
            </>
         )}
      </div>
   );
}

export default ArticleDetail;
