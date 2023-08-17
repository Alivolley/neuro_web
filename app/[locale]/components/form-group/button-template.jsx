'use client';
import Image from 'next/image';

//Assets
import { ButtonTemplateStyle } from './button-template.style';

//MUI
import { CircularProgress } from '@mui/material';
import { useParams } from 'next/navigation';

const ButtonTemplate = ({ className, loading = false, icon, text, disabled, type = 'button', onClick }) => {
    const { locale } = useParams();
    return (
        <ButtonTemplateStyle className={className} disabled={loading || disabled} type={type} onClick={onClick} locale={locale}>
            {loading && (
                <p className='progress_wrapper bg-slate-200'>
                    <CircularProgress size={15} color='inherit' />
                </p>
            )}
            {text && <p>{text}</p>}
            {icon && <Image src={icon} alt='icon' />}
        </ButtonTemplateStyle>
    );
};

export default ButtonTemplate;
