'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

//assets
import arrowIcon from './../../assets/icons/arrowIcon.svg';
import arrowIconReverse from './../../assets/icons/arrowIconReverse.svg';
import mailBox from './../../assets/icons/mailBox.svg';
import phoneIcon from './../../assets/icons/phoneIcon.svg';

//components
import HeaderTitle from '../components/template/header-title';
import InputComponent from '../components/form-group/input-component';
import ButtonTemplate from '../components/form-group/button-template';
import TextareaComponent from '../components/form-group/textarea-component';

//MUI
import { Grid } from '@mui/material';

const ContactUs = () => {
    const t = useTranslations('contactUs');
    const { locale } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: '',
            phoneNumber: '',
            email: '',
            service: '',
            description: ''
        },
        mode: 'onSubmit'
    });

    const formSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <div className='mt-[75px]'>
                <HeaderTitle>{t('Contact us')}</HeaderTitle>
            </div>
            <div className={`mt-12 ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1.5px]'}`}>
                <Grid container rowSpacing={{ xs: 3, md: 6 }} columnSpacing={2} paddingBottom={10}>
                    <Grid item xs={12}>
                        <form className='bg-[#101211] p-4 customSm:p-12 rounded-[5px]' onSubmit={handleSubmit(formSubmit)}>
                            <Grid container columnSpacing={8} rowSpacing={3} marginBottom={4}>
                                <Grid item xs={12} md={6}>
                                    <InputComponent
                                        placeholder={t('username')}
                                        className='bg-transparent border-b border-solid border-menuItemColor text-textColor
                                        mb-1 placeholder:text-[10px] customSm:placeholder:text-[13px] tracking-[1.5px] 
                                        text-[12px] customSm:text-[16px] py-4 w-full max-w-[442px]'
                                        detail={{
                                            ...register('username', {
                                                required: {
                                                    value: true,
                                                    message: t('this filed is required')
                                                }
                                            })
                                        }}
                                        error={errors.username}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputComponent
                                        placeholder={t('phone number')}
                                        className='bg-transparent border-b border-solid border-menuItemColor text-textColor
                                        mb-1 placeholder:text-[10px] customSm:placeholder:text-[13px] tracking-[1.5px] 
                                        text-[12px] customSm:text-[16px] py-4 w-full max-w-[442px]'
                                        detail={{
                                            ...register('phoneNumber', {
                                                required: {
                                                    value: true,
                                                    message: t('this filed is required')
                                                }
                                            })
                                        }}
                                        error={errors.phoneNumber}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputComponent
                                        placeholder={t('email')}
                                        className='bg-transparent border-b border-solid border-menuItemColor text-textColor
                                        mb-1 placeholder:text-[10px] customSm:placeholder:text-[13px] tracking-[1.5px] 
                                        text-[12px] customSm:text-[16px] py-4 w-full max-w-[442px]'
                                        detail={{
                                            ...register('email', {
                                                required: {
                                                    value: true,
                                                    message: t('this filed is required')
                                                }
                                            })
                                        }}
                                        error={errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputComponent
                                        placeholder={t('service')}
                                        className='bg-transparent border-b border-solid border-menuItemColor text-textColor
                                        mb-1 placeholder:text-[10px] customSm:placeholder:text-[13px] tracking-[1.5px] 
                                        text-[12px] customSm:text-[16px] py-4 w-full max-w-[442px]'
                                        detail={{
                                            ...register('service', {
                                                required: {
                                                    value: true,
                                                    message: t('this filed is required')
                                                }
                                            })
                                        }}
                                        error={errors.service}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaComponent
                                        className='bg-transparent border-[1px] border-solid border-menuItemColor text-textColor
                                        mb-1 placeholder:text-[10px] customSm:placeholder:text-[13px] trackin
                                        text-[12px] customSm:text-[16px] g-[1.5px] p-4 w-full mt-5'
                                        rows='5'
                                        placeholder={t('message')}
                                        detail={{
                                            ...register('description', {
                                                required: {
                                                    value: true,
                                                    message: t('this filed is required')
                                                }
                                            })
                                        }}
                                        error={errors.description}
                                    />
                                </Grid>
                            </Grid>
                            <ButtonTemplate
                                text={t('send your message')}
                                icon={locale === 'fa' ? arrowIconReverse : arrowIcon}
                                type='submit'
                                className='!text-[#757A4F] !ms-auto w-full customSm:w-fit'
                            />
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='bg-[#101211] p-2 customSm:p-5 rounded-[5px] text-[13px]'>
                            <div className='flex gap-12 flex-wrap'>
                                <div className='flex items-center gap-4'>
                                    <div
                                        className='w-[62px] h-[62px] flex justify-center items-center 
                                        border-[1px] border-solid border-textColor rounded-full'
                                    >
                                        <Image src={phoneIcon} alt='contact icon' />
                                    </div>
                                    <div>
                                        <p className='text-titleColor'>{t('Call us on')} :</p>
                                        <p className='text-textColor'>09383935719</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div
                                        className='w-[62px] h-[62px] flex justify-center items-center 
                                        border-[1px] border-solid border-textColor rounded-full'
                                    >
                                        <Image src={mailBox} alt='contact icon' />
                                    </div>
                                    <div>
                                        <p className='text-titleColor'>{t('Email us')} :</p>
                                        <p className='text-textColor text-[10px] customSm:text-[13px]'>alicryptovolley@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='bg-[#101211] p-2 customSm:p-5 rounded-[5px] text-[13px] flex items-center gap-8 flex-wrap'>
                            <p className='text-titleColor'>{t('Other ways')}</p>
                            <div className='flex items-center justify-center gap-8 flex-wrap'>
                                <div
                                    className='w-[62px] h-[62px] flex justify-center items-center 
                                        border-[1px] border-solid border-textColor rounded-full'
                                >
                                    <Image src={mailBox} alt='contact icon' />
                                </div>
                                <div
                                    className='w-[62px] h-[62px] flex justify-center items-center 
                                        border-[1px] border-solid border-textColor rounded-full'
                                >
                                    <Image src={mailBox} alt='contact icon' />
                                </div>
                                <div
                                    className='w-[62px] h-[62px] flex justify-center items-center 
                                        border-[1px] border-solid border-textColor rounded-full'
                                >
                                    <Image src={mailBox} alt='contact icon' />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ContactUs;
