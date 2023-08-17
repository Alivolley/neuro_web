/* eslint-disable max-len */
import Image from 'next/image';

//Assets
import backItem from './../../../../assets/images/backItem.png';
import frontItem from './../../../../assets/images/frontItem.png';
import uiuxItem from './../../../../assets/images/uiuxItem.png';
import { SlidersItemStyle } from './slidersItem.style';

const SlidersItems = ({ activeSlide, changeSlide, locale }) => {
    return (
        <SlidersItemStyle className='text-goldColor relative w-fit'>
            <div className='flex flex-col gap-[80px]'>
                <div className='relative item_wrapper'>
                    <Image src={uiuxItem} alt='backend' className='cursor-pointer' onClick={() => changeSlide(0)} />
                    <div
                        className={`absolute top-[30px] w-[14px] h-[14px] bg-[#80949C] rounded-full transition-all duration-200 ${
                            activeSlide === 0 ? 'shadow-customShadow bg-[#C6E8EA]' : ''
                        } ${locale === 'fa' ? 'right-[-37px] ' : 'left-[-37px]'}`}
                    ></div>
                </div>
                <div className='relative item_wrapper'>
                    <Image src={frontItem} alt='frontend' className='cursor-pointer' onClick={() => changeSlide(1)} />
                    <div
                        className={`absolute left-[-37px] top-[30px] w-[14px] h-[14px] bg-[#80949C] rounded-full transition-all duration-200 ${
                            activeSlide === 1 ? 'shadow-customShadow bg-[#C6E8EA]' : ''
                        } ${locale === 'fa' ? 'right-[-37px] ' : 'left-[-37px]'}`}
                    ></div>
                </div>
                <div className='relative item_wrapper'>
                    <Image src={backItem} alt='uiux' className='cursor-pointer' onClick={() => changeSlide(2)} />
                    <div
                        className={`absolute left-[-37px] top-[30px] w-[14px] h-[14px] bg-[#80949C] rounded-full transition-all duration-200 ${
                            activeSlide === 2 ? 'shadow-customShadow bg-[#C6E8EA]' : ''
                        } ${locale === 'fa' ? 'right-[-37px] ' : 'left-[-37px]'}`}
                    ></div>
                </div>
            </div>
            <div
                className={`absolute top-0 bottom-0 w-[1px] bg-gradient-to-t from-[#587987] to-[rgba(88, 121, 135, 0)] ${
                    locale === 'fa' ? 'right-[-30px]' : 'left-[-30px]'
                }`}
            ></div>
        </SlidersItemStyle>
    );
};

export default SlidersItems;
