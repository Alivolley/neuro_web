/* eslint-disable max-len */
import Link from 'next/link';
import { useForm } from 'react-hook-form';

// Intl
import { useTranslations } from 'next-intl';

// Assets
import { useParams } from 'next/navigation';
import searchButtonIcon from '../../../../assets/icons/searchButtonIcon.svg';
import HeaderSearchStyle from './header-search.style';

// Components
import InputComponent from '../../form-group/input-component/input-component';
import ButtonTemplate from '../../form-group/button-template/button-template';
import useOnClickOutside from '../../../../hooks/useOnclickOutside';

function HeaderSearch({ closeSearchModalHandler }) {
   const t = useTranslations('searchModal');
   const { locale } = useParams();
   const [ref] = useOnClickOutside(closeSearchModalHandler);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         searchValue: '',
      },
      mode: 'onSubmit',
   });

   const searchSubmitHandler = data => {
      console.log(data);
   };

   return (
      <HeaderSearchStyle className="flex items-center justify-center">
         <div
            className={`flex flex-col items-center justify-center gap-6 py-14 ${locale === 'fa' ? 'font-picoopicRegular' : ''}`}
            {...(locale === 'fa' && {
               style: { direction: 'rtl' },
            })}
            ref={ref}
         >
            <p className={`font-avgardn text-2xl text-textColor ${locale === 'fa' ? 'font-picoopicRegular' : ''}`}>{t('Search in neuro web')} :</p>
            <form onSubmit={handleSubmit(searchSubmitHandler)} className="flex flex-col gap-4 customMd:flex-row">
               <InputComponent
                  detail={{
                     ...register('searchValue', {
                        required: {
                           value: true,
                           message: t('Please enter some word'),
                        },
                     }),
                  }}
                  error={errors.searchValue}
                  className="h-[55px] w-[230px] border-[1px] border-solid border-borderColor bg-[#373D2D4D]
                     p-4 text-textColor sm:w-[430px]"
                  placeholder={t('Search neuro web')}
               />
               <ButtonTemplate text={t('Search')} type="submit" icon={searchButtonIcon} />
            </form>
            <div
               className={`flex flex-col items-center gap-5 font-avgardn text-textColor sm:flex-row ${locale === 'fa' ? 'font-picoopicRegular' : ''}`}
            >
               <p>{t('Other ways to search')} : </p>
               <Link href="/" className="underline">
                  {t('Instagram')}
               </Link>
               <Link href="/" className="underline">
                  {t('Linkedin')}
               </Link>
            </div>
         </div>
      </HeaderSearchStyle>
   );
}

export default HeaderSearch;
