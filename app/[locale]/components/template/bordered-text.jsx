import { useParams } from 'next/navigation';

const BorderedText = ({ children }) => {
    const { locale } = useParams();

    return (
        <div className='relative'>
            <p
                className={`text-textColor text-[10px] sm:text-[14px] mx-1 ${
                    locale === 'fa' ? 'font-picoopicRegular leading-9' : 'leading-7 font-aubrey tracking-[3px]'
                }`}
            >
                {children}
            </p>
            <div
                className={`absolute w-[4px] top-0 bottom-0 bg-darkGold rounded-[1px] ${
                    locale === 'fa' ? 'right-[-5px] customMd:right-[-18px]' : 'left-[-5px] customMd:left-[-18px]'
                }`}
            ></div>
        </div>
    );
};

export default BorderedText;
