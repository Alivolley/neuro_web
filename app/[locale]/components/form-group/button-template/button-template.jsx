'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

// MUI
import { CircularProgress } from '@mui/material';

// Assets
import ButtonTemplateStyle from './button-template.style';

function ButtonTemplate({ className, loading = false, icon, text, disabled, type = 'button', onClick }) {
   const { locale } = useParams();
   return (
      <ButtonTemplateStyle className={className} disabled={loading || disabled} type={type} onClick={onClick} locale={locale}>
         {loading && (
            <p className="bg-slate-200" id="progress_wrapper">
               <CircularProgress size={15} color="inherit" />
            </p>
         )}
         {text && <p>{text}</p>}
         {icon && <Image src={icon} alt="icon" />}
      </ButtonTemplateStyle>
   );
}

export default ButtonTemplate;
