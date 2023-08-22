import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ bigPic, firstSubPic, secondSubPic, thirdSubPic }) => {
    return (
        <div className='w-full max-w-[325px] mx-auto'>
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
        </div>
    );
};

export default ProductCard;
