'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Icons
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// assets
import { toast } from 'react-toastify';
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import arrowIconReverse from '../../assets/icons/arrowIconReverse.svg';
import mailBox from '../../assets/icons/mailBox.svg';
import phoneIcon from '../../assets/icons/phoneIcon.svg';

// components
import HeaderTitle from '../components/template/header-title/header-title';
import InputComponent from '../components/form-group/input-component/input-component';
import ButtonTemplate from '../components/form-group/button-template/button-template';
import TextareaComponent from '../components/form-group/textarea-component/textarea-component';

// Hooks
import useContactUs from '../apis/useContactUs/useContactUs';

function ContactUs() {
   const t = useTranslations('contactUs');
   const { locale } = useParams();

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         name: '',
         phone_number: '',
         email: '',
         service: '',
         message: '',
      },
      mode: 'onSubmit',
   });

   const { trigger, isMutating } = useContactUs();

   const formSubmit = data => {
      trigger(data, {
         onSuccess: () => {
            toast.success('با موفقیت ارسال شد');
            reset();
         },
      });
   };

   return (
      <div>
         <div className="mt-[75px]">
            <HeaderTitle>{t('Contact us')}</HeaderTitle>
         </div>
         <div className={`mt-12 ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'}`}>
            <Grid container rowSpacing={{ xs: 3, md: 6 }} columnSpacing={2} paddingBottom={10}>
               <Grid item xs={12}>
                  <form className="rounded-[5px] bg-[#101211] p-4 customSm:p-12" onSubmit={handleSubmit(formSubmit)}>
                     <Grid container columnSpacing={8} rowSpacing={3} marginBottom={4}>
                        <Grid item xs={12} md={6}>
                           <InputComponent
                              placeholder={t('username')}
                              className="mb-1 w-full max-w-[442px] border-b border-solid
                                        border-menuItemColor bg-transparent py-4 text-[12px] 
                                        tracking-[1.5px] text-textColor placeholder:text-[10px] customSm:text-[16px] customSm:placeholder:text-[13px]"
                              detail={{
                                 ...register('name', {
                                    required: {
                                       value: true,
                                       message: t('this filed is required'),
                                    },
                                 }),
                              }}
                              error={errors.name}
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                           <InputComponent
                              disabled={isMutating}
                              placeholder={t('phone number')}
                              className="mb-1 w-full max-w-[442px] border-b border-solid
                                        border-menuItemColor bg-transparent py-4 text-[12px] 
                                        tracking-[1.5px] text-textColor placeholder:text-[10px] customSm:text-[16px] customSm:placeholder:text-[13px]"
                              detail={{
                                 ...register('phone_number', {
                                    required: {
                                       value: true,
                                       message: t('this filed is required'),
                                    },
                                 }),
                              }}
                              error={errors.phone_number}
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                           <InputComponent
                              disabled={isMutating}
                              placeholder={t('email')}
                              className="mb-1 w-full max-w-[442px] border-b border-solid
                                        border-menuItemColor bg-transparent py-4 text-[12px] 
                                        tracking-[1.5px] text-textColor placeholder:text-[10px] customSm:text-[16px] customSm:placeholder:text-[13px]"
                              detail={{
                                 ...register('email', {
                                    required: {
                                       value: true,
                                       message: t('this filed is required'),
                                    },
                                 }),
                              }}
                              error={errors.email}
                           />
                        </Grid>
                        <Grid item xs={12} md={6}>
                           <InputComponent
                              disabled={isMutating}
                              placeholder={t('service')}
                              className="mb-1 w-full max-w-[442px] border-b border-solid
                                        border-menuItemColor bg-transparent py-4 text-[12px] 
                                        tracking-[1.5px] text-textColor placeholder:text-[10px] customSm:text-[16px] customSm:placeholder:text-[13px]"
                              detail={{
                                 ...register('service'),
                              }}
                              error={errors.service}
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextareaComponent
                              disabled={isMutating}
                              className="mb-1 mt-5 w-full gap-[1.5px] border-[1px] border-solid border-menuItemColor bg-transparent
                                        p-4 text-[12px] text-textColor placeholder:text-[10px] customSm:text-[16px] customSm:placeholder:text-[13px]"
                              rows="5"
                              placeholder={t('message')}
                              detail={{
                                 ...register('message', {
                                    required: {
                                       value: true,
                                       message: t('this filed is required'),
                                    },
                                 }),
                              }}
                              error={errors.message}
                           />
                        </Grid>
                     </Grid>
                     <ButtonTemplate
                        text={t('send your message')}
                        icon={locale === 'fa' ? arrowIconReverse : arrowIcon}
                        type="submit"
                        className="!ms-auto w-full !text-[#757A4F] customSm:w-fit"
                        loading={isMutating}
                     />
                  </form>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="rounded-[5px] bg-[#101211] p-2 text-[13px] customSm:p-5">
                     <div className="flex flex-wrap gap-12">
                        <div className="flex items-center gap-4">
                           <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[1px] border-solid border-textColor">
                              <Image src={phoneIcon} alt="contact icon" />
                           </div>
                           <div>
                              <p className="text-titleColor">{t('Call us on')} :</p>
                              <p className="text-textColor">09383935719</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-4">
                           <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[1px] border-solid border-textColor">
                              <Image src={mailBox} alt="contact icon" />
                           </div>
                           <div>
                              <p className="text-titleColor">{t('Email us')} :</p>
                              <p
                                 className={`text-textColor ${locale === 'fa' ? 'text-[13px] customSm:text-sm' : 'text-[10px] customSm:text-[13px]'}`}
                              >
                                 alicryptovolley@gmail.com
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="flex flex-wrap items-center gap-8 rounded-[5px] bg-[#101211] p-2 text-[13px] customSm:p-5">
                     <p className="text-titleColor">{t('Other ways')}</p>
                     <div className="flex flex-wrap items-center justify-center gap-8">
                        <a
                           href="https://t.me/Alivolley"
                           target="_blank"
                           className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[1px] border-solid border-textColor"
                           rel="noreferrer"
                        >
                           <TelegramIcon color="menuItemColor" fontSize="medium" />
                        </a>
                        <a
                           href="https://www.linkedin.com/in/ali-azghandi-91781a27a/"
                           target="_blank"
                           className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[1px] border-solid border-textColor"
                           rel="noreferrer"
                        >
                           <LinkedInIcon color="menuItemColor" fontSize="medium" />
                        </a>
                        <a
                           href="https://wa.link/j2zuz4"
                           target="_blank"
                           className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[1px] border-solid border-textColor"
                           rel="noreferrer"
                        >
                           <WhatsAppIcon color="menuItemColor" fontSize="medium" />
                        </a>
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default ContactUs;
