import { useParams } from 'next/navigation';

function HeaderTitle({ children }) {
   const { locale } = useParams();

   return (
      <div className="relative">
         <p
            className={`uppercase text-goldColor ${
               locale === 'fa'
                  ? 'font-titreZebr2 text-[22px] sm:text-[36px]'
                  : 'font-pubg text-[40px] uppercase leading-9 tracking-[7px] text-goldColor sm:text-[70px] sm:leading-[60px]'
            }`}
         >
            {children}
         </p>
      </div>
   );
}

export default HeaderTitle;
