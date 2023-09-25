'use client';

import Image from 'next/image';

// Mui
import { CircularProgress } from '@mui/material';

// Assets
import ButtonStyle from './button.style';

function Button({ className, loading, icon, text, disabled, type = 'button', onClick }) {
   return (
      <ButtonStyle className={className} disabled={loading || disabled} type={type} onClick={onClick}>
         {loading && (
            <p className="bg-slate-200" id="progress_wrapper">
               <CircularProgress size={15} color="inherit" />
            </p>
         )}
         {text && <p>{text}</p>}
         {icon && <Image src={icon} alt="loading" />}
      </ButtonStyle>
   );
}

export default Button;
