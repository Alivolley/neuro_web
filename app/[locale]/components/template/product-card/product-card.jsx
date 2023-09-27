import Link from 'next-intl/link';
import { useParams } from 'next/navigation';

// MUI
import { Grid } from '@mui/material';

function ProductCard({ bigPic, firstSubPic, secondSubPic, thirdSubPic, href = '/', title }) {
   const { locale } = useParams();

   return (
      <div className="mx-auto w-full max-w-[325px]">
         <Link href={href}>
            <Grid container spacing={0.5}>
               <Grid item xs={12}>
                  <div className="aspect-video w-full bg-gray-700">
                     <img src={bigPic} alt="product" className="h-full w-full object-cover" />
                  </div>
               </Grid>
               <Grid item xs={12}>
                  <div className="flex gap-1">
                     {firstSubPic && (
                        <div className="h-16 grow bg-gray-700">
                           <img src={firstSubPic} alt="product" className="h-full w-full object-cover" />
                        </div>
                     )}
                     {secondSubPic && (
                        <div className="h-16 grow bg-gray-700">
                           <img src={secondSubPic} alt="product" className="h-full w-full object-cover" />
                        </div>
                     )}
                     {thirdSubPic && (
                        <div className="h-16 grow bg-gray-700">
                           <img src={thirdSubPic} alt="product" className="h-full w-full object-cover" />
                        </div>
                     )}
                  </div>
               </Grid>
            </Grid>
            <p className={`my-3 text-center capitalize text-textBlue ${locale === 'fa' ? 'font-picoopicRegular' : 'font-aubrey tracking-[1px]'}`}>
               {title}
            </p>
         </Link>
      </div>
   );
}

export default ProductCard;
