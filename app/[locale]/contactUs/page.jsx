'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

//assets
import arrowIcon from './../../assets/icons/arrowIcon.svg';
import arrowIconReverse from './../../assets/icons/arrowIconReverse.svg';

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
                <Grid container>
                    <Grid item xs={12}>
                        <form className='bg-[#101211] p-12' onSubmit={handleSubmit(formSubmit)}>
                            <Grid container columnSpacing={8} rowSpacing={3}>
                                <Grid item xs={12} md={6}>
                                    <InputComponent
                                        placeholder={t('username')}
                                        className='bg-transparent border-b border-solid border-menuItemColor text-textColor
                                        mb-1 placeholder:text-[13px] tracking-[1.5px] py-4 w-full max-w-[442px]'
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
                                        mb-1 placeholder:text-[13px] tracking-[1.5px] py-4 w-full max-w-[442px]'
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
                                        mb-1 placeholder:text-[13px] tracking-[1.5px] py-4 w-full max-w-[442px]'
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
                                        mb-1 placeholder:text-[13px] tracking-[1.5px] py-4 w-full max-w-[442px]'
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
                                        mb-1 placeholder:text-[13px] tracking-[1.5px] p-4 w-full mt-5'
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
                                className='!bg-[#272d28] !text-[#757A4F] !ms-auto mt-7'
                            />
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ContactUs;
