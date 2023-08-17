'use client';
import Image from 'next/image';

//Assets
import { ButtonStyle } from './button.style';

//Mui
import { CircularProgress } from '@mui/material';

const Button = ({ className, loading, icon, text, disabled, type = 'button', onClick }) => {
    return (
        <ButtonStyle className={className} disabled={loading || disabled} type={type} onClick={onClick}>
            {loading && (
                <p className='progress_wrapper bg-slate-200'>
                    <CircularProgress size={15} color='inherit' />
                </p>
            )}
            {text && <p>{text}</p>}
            {icon && <Image src={icon} alt='loading' />}
        </ButtonStyle>
    );
};

export default Button;
