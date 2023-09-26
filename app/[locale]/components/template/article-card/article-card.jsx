import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// assets
import arrowIcon from '../../../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../../../assets/icons/arrowIconReverse.svg';
import ArticleCardStyle from './article-card.style';

// Components
import ButtonTemplate from '../../form-group/button-template/button-template';

function ArticleCard({ title, description, cover, id }) {
   const { locale } = useParams();
   const t = useTranslations('articles');

   return (
      <ArticleCardStyle className="mx-auto w-full max-w-sm">
         <Link href={`/article-detail/${id}`}>
            <div className="aspect-[1.4/1] h-full">
               <Image src={cover} alt="product image 1" className="h-full w-full" />
            </div>
            <div className={`text-textColor ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
               <h3 className={`mb-4 mt-5 text-2xl font-bold ${locale === 'fa' ? '' : 'capitalize tracking-[2px]'}`}>{title}</h3>
               <p className="mb-6 text-sm leading-[24px]" id="text">
                  {description}
               </p>

               <ButtonTemplate text={t('read more')} icon={locale === 'fa' ? arrowIconReverse : arrowIcon} />
            </div>
         </Link>
      </ArticleCardStyle>
   );
}

export default ArticleCard;
