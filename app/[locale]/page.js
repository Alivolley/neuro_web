'use client';
import { useState } from 'react';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//MUI
import { Grid } from '@mui/material';

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <main className=''>
            <Grid container>
                {/* <Grid item md={8} className='bg-stone-100'>
                    <Swiper
                        pagination={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        loop
                        className='mySwiper'
                        onSwiper={swiper => setActiveSlide(swiper.realIndex)}
                        onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
                    >
                        <SwiperSlide>
                            <p className='text-goldColor'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi maxime provident in repudiandae perferendis
                                ipsa quod consectetur quisquam est accusantium dolores ipsum laudantium fuga numquam totam deleniti
                                quibusdam, voluptatem explicabo!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='text-goldColor'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi maxime provident in repudiandae perferendis
                                ipsa quod consectetur quisquam est accusantium dolores ipsum laudantium fuga numquam totam deleniti
                                quibusdam, voluptatem explicabo!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className='text-goldColor'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi maxime provident in repudiandae perferendis
                                ipsa quod consectetur quisquam est accusantium dolores ipsum laudantium fuga numquam totam deleniti
                                quibusdam, voluptatem explicabo!
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </Grid>
                <Grid item md={4}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor nemo eaque, minima illo sequi dicta hic
                        mollitia culpa quo accusamus ullam sit similique deserunt obcaecati provident error quod perspiciatis.
                    </p>
                </Grid> */}
            </Grid>
        </main>
    );
}
