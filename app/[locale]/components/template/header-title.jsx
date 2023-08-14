import { useParams } from 'next/navigation';

const HeaderTitle = ({ children }) => {
    const { locale } = useParams();

    return (
        <div>
            <p
                className={`uppercase text-goldColor ${
                    locale === 'fa'
                        ? 'font-titreZebr2 text-[22px] sm:text-[36px]'
                        : 'uppercase text-goldColor text-[40px] sm:text-[70px] font-pubg tracking-[7px]'
                }`}
            >
                {children}
            </p>
        </div>
    );
};

export default HeaderTitle;
