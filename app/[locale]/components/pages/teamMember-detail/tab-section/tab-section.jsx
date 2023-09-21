import { useState } from 'react';
import Link from 'next-intl/link';

// MUI
import { Grid } from '@mui/material';

// Assets
import Image from 'next/image';
import samplePicture from '../../../../../assets/images/sample_picture.png';
import arrowIcon from '../../../../../assets/icons/arrowIcon.svg';

// Components
import ProductCard from '../../../template/product-card';

function TabSection() {
   const [chosenTab, setChosenTab] = useState(1);

   return (
      <div>
         <div>
            <Grid container columnSpacing={4}>
               <Grid item xs={4}>
                  <button
                     type="button"
                     className={`w-full space-y-3 rounded-sm border py-3 transition-all duration-200 ${
                        chosenTab === 1 ? 'border-buttonBgColor bg-[#718b9544] opacity-100' : 'border border-menuItemColor bg-transparent opacity-50'
                     }`}
                     onClick={() => setChosenTab(1)}
                  >
                     <p className="font-avgardn text-2xl font-bold text-numberColor">13</p>
                     <p className="font-aubrey text-xl tracking-[1px] text-titleColor">PROJECTS</p>
                  </button>
               </Grid>
               <Grid item xs={4}>
                  <button
                     type="button"
                     className={`w-full space-y-3 rounded-sm border py-3 transition-all duration-200 ${
                        chosenTab === 2 ? 'border-buttonBgColor bg-[#718b9544] opacity-100' : 'border border-menuItemColor bg-transparent opacity-50'
                     }`}
                     onClick={() => setChosenTab(2)}
                  >
                     <p className="font-avgardn text-2xl font-bold text-numberColor">7</p>
                     <p className="font-aubrey text-xl tracking-[1px] text-titleColor">SKILLS</p>
                  </button>
               </Grid>
               <Grid item xs={4}>
                  <button
                     type="button"
                     className={`w-full space-y-3 rounded-sm border py-3 transition-all duration-200 ${
                        chosenTab === 3 ? 'border-buttonBgColor bg-[#718b9544] opacity-100' : 'border-menuItemColor bg-transparent opacity-50'
                     }`}
                     onClick={() => setChosenTab(3)}
                  >
                     <p className="font-avgardn text-2xl font-bold text-numberColor">4</p>
                     <p className="font-aubrey text-xl tracking-[1px] text-titleColor">SOFTWARES</p>
                  </button>
               </Grid>
            </Grid>
         </div>
         <div className="mt-5 flex items-center justify-between rounded-sm bg-[#718b9544] px-4 py-3 font-avgardn tracking-[1px] text-menuItemColor">
            <p>EXAMPLE OF WORKS</p>
            <Link href="/" className="flex items-center gap-3">
               <p className="text-sm">See more</p>
               <Image src={arrowIcon} alt="arrow" />
            </Link>
         </div>

         <div className="mt-5">
            <Grid container spacing={4}>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <ProductCard bigPic={samplePicture} firstSubPic={samplePicture} secondSubPic={samplePicture} thirdSubPic={samplePicture} />
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default TabSection;
