import Image from 'next/image';
import Link from 'next-intl/link';

// MUI
import { Grid } from '@mui/material';

function ProductCard({ bigPic, firstSubPic, secondSubPic, thirdSubPic, hrefId }) {
   return (
      <div className="mx-auto w-full max-w-[325px]">
         <Link href={`/product-detail/${hrefId}`}>
            <Grid container spacing={0.5}>
               <Grid
                  item
                  xs={12}
                  sx={{
                     img: {
                        width: '100%',
                     },
                  }}
               >
                  <Image src={bigPic} alt="product image 1" />
               </Grid>
               <Grid item xs={12} container spacing={0.5}>
                  <Grid item xs={4}>
                     <Image src={firstSubPic} alt="product image 2" />
                  </Grid>
                  <Grid item xs={4}>
                     <Image src={secondSubPic} alt="product image 3" />
                  </Grid>
                  <Grid item xs={4}>
                     <Image src={thirdSubPic} alt="product image 4" />
                  </Grid>
               </Grid>
            </Grid>
            <p className="my-5 text-center font-aubrey tracking-[1px] text-textBlue">Say Hello To Peter</p>
         </Link>
      </div>
   );
}

export default ProductCard;
