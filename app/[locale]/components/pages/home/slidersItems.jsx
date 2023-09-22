import Image from 'next/image';

// Assets
import backItem from '../../../../assets/images/backItem.png';
import frontItem from '../../../../assets/images/frontItem.png';
import uiuxItem from '../../../../assets/images/uiuxItem.png';
import SlidersItemStyle from './slidersItem.style';

function SlidersItems({ activeSlide, changeSlideManuel, locale }) {
   return (
      <SlidersItemStyle className="relative w-fit text-goldColor">
         <div className="flex flex-col gap-[80px]">
            <div className="relative" id="item_wrapper">
               <Image src={uiuxItem} alt="backend" className="cursor-pointer" onClick={() => changeSlideManuel(1)} />
               <div
                  className={`absolute top-[30px] h-[14px] w-[14px] rounded-full bg-[#80949C] transition-all duration-300 ${
                     activeSlide === 1 ? 'bg-[#C6E8EA] shadow-customShadow' : ''
                  } ${locale === 'fa' ? 'right-[-37px] ' : 'left-[-37px]'}`}
               />
            </div>
            <div className="relative" id="item_wrapper">
               <Image src={backItem} alt="frontend" className="cursor-pointer" onClick={() => changeSlideManuel(2)} />
               <div
                  className={`absolute left-[-37px] top-[30px] h-[14px] w-[14px] rounded-full bg-[#80949C] transition-all duration-300 ${
                     activeSlide === 2 ? 'bg-[#C6E8EA] shadow-customShadow' : ''
                  } ${locale === 'fa' ? 'right-[-37px] ' : 'left-[-37px]'}`}
               />
            </div>
            <div className="relative" id="item_wrapper">
               <Image src={frontItem} alt="uiux" className="cursor-pointer" onClick={() => changeSlideManuel(3)} />
               <div
                  className={`absolute left-[-37px] top-[30px] h-[14px] w-[14px] rounded-full bg-[#80949C] transition-all duration-300 ${
                     activeSlide === 3 ? 'bg-[#C6E8EA] shadow-customShadow' : ''
                  } ${locale === 'fa' ? 'right-[-37px] ' : 'left-[-37px]'}`}
               />
            </div>
         </div>
         <div
            className={`absolute inset-y-0 w-[1px] bg-gradient-to-t from-[#587987] to-[#58798700] ${
               locale === 'fa' ? 'right-[-30px]' : 'left-[-30px]'
            }`}
         />
      </SlidersItemStyle>
   );
}

export default SlidersItems;
