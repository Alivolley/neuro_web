import { useParams } from 'next/navigation';

function BorderedText({ children }) {
   const { locale } = useParams();

   return (
      <div className="relative">
         <p
            className={`mx-1 text-[12px] text-textColor sm:text-[14px] ${
               locale === 'fa' ? 'font-picoopicRegular leading-9' : 'font-aubrey leading-7 tracking-[3px]'
            }`}
         >
            {children}
         </p>
         <div
            className={`absolute inset-y-0 w-[4px] rounded-[1px] bg-darkGold ${
               locale === 'fa' ? 'right-[-5px] customMd:right-[-18px]' : 'left-[-5px] customMd:left-[-18px]'
            }`}
         />
      </div>
   );
}

export default BorderedText;
