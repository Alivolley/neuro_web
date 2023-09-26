import Link from 'next-intl/link';

// MUI
import { Grid } from '@mui/material';
import { useParams } from 'next/navigation';

function ProductCard({ bigPic, firstSubPic, secondSubPic, thirdSubPic, userId, productId, title }) {
   const { locale } = useParams();

   return (
      <div className="mx-auto w-full max-w-[325px]">
         <Link
            href="/"
            // href={`/product-detail/${hrefId}`}
         >
            <Grid container spacing={0.5}>
               <Grid item xs={12}>
                  <div className="aspect-video w-full">
                     <img src={bigPic} alt="product" className="h-full w-full" />
                  </div>
               </Grid>
               <Grid item xs={12}>
                  <div className="flex gap-1">
                     {firstSubPic && (
                        <div className="h-16 grow">
                           <img src={firstSubPic} alt="product" className="h-full w-full" />
                        </div>
                     )}
                     {secondSubPic && (
                        <div className="h-16 grow">
                           <img src={secondSubPic} alt="product" className="h-full w-full" />
                        </div>
                     )}
                     {thirdSubPic && (
                        <div className="h-16 grow">
                           <img src={thirdSubPic} alt="product" className="h-full w-full" />
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
