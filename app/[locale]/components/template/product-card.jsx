import Image from 'next/image';
import Link from 'next-intl/link';

//MUI
import { Grid } from '@mui/material';

const ProductCard = ({ bigPic, firstSubPic, secondSubPic, thirdSubPic, hrefId }) => {
    return (
        <div className='w-full max-w-[325px] mx-auto'>
            <Link href={`product-detail/${hrefId}`}>
                <Grid container spacing={0.5}>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            img: {
                                width: '100%'
                            }
                        }}
                    >
                        <Image src={bigPic} alt='product image 1' />
                    </Grid>
                    <Grid item xs={12} container spacing={0.5}>
                        <Grid item xs={4}>
                            <Image src={firstSubPic} alt='product image 2' />
                        </Grid>
                        <Grid item xs={4}>
                            <Image src={secondSubPic} alt='product image 3' />
                        </Grid>
                        <Grid item xs={4}>
                            <Image src={thirdSubPic} alt='product image 4' />
                        </Grid>
                    </Grid>
                </Grid>
                <p className='text-textBlue font-aubrey text-center my-5 tracking-[1px]'>Say Hello To Peter</p>
            </Link>
        </div>
    );
};

export default ProductCard;
