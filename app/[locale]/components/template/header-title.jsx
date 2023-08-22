import { useParams } from 'next/navigation';

const HeaderTitle = ({ children }) => {
    const { locale } = useParams();

    return (
        <div className='relative'>
            <p
                className={`uppercase text-goldColor ${
                    locale === 'fa'
                        ? 'font-titreZebr2 text-[22px] sm:text-[36px]'
                        : 'uppercase text-goldColor text-[40px] sm:text-[70px] font-pubg tracking-[7px] leading-9 sm:leading-[60px]'
                }`}
            >
                {children}
            </p>
        </div>
    );
};

export default HeaderTitle;
