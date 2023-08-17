import { useParams } from 'next/navigation';

const BorderedText = ({ children }) => {
    const { locale } = useParams();

    return (
        <div className='relative'>
            <p
                className={`text-textColor text-[10px] sm:text-[14px] mx-1 px-3 ${
                    locale === 'fa' ? 'font-picoopicRegular leading-9' : 'leading-7 font-aubrey tracking-[3px]'
                }`}
            >
                {children}
            </p>
            <div
                className={`absolute w-[4px] top-0 bottom-0 bg-darkGold rounded-[1px] ${
                    locale === 'fa' ? 'right-[0px] customMd:right-[0]' : 'left-[0px] customMd:left-[0]'
                }`}
            ></div>
        </div>
    );
};

export default BorderedText;
