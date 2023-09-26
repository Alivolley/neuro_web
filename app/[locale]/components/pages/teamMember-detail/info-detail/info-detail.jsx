import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

// Icons
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function InfoDetail({ detail }) {
   const t = useTranslations('teamMemberDetail');
   const { locale } = useParams();

   return (
      <div className={`mt-7 flex gap-5 customMd:block ${locale === 'fa' ? 'font-picoopicRegular' : 'font-avgardn'}`}>
         <div className="space-y-5">
            <div className="space-y-1">
               <p className="text-titleColor">{t('Phone')}</p>
               <p className="text-[11px] text-[#80949C] customSm:text-sm">{detail?.user?.phone_number}</p>
            </div>
            <div className="space-y-1">
               <p className="text-titleColor">{t('Telegram id')}</p>
               <p className="text-[11px] text-[#80949C] customSm:text-sm">{detail?.telegram_id}</p>
            </div>
            <div className="space-y-1">
               <p className="text-titleColor">{t('Email')}</p>
               <p className="text-[10px] text-[#80949C] customSm:text-xs customLg:text-sm">{detail?.email}</p>
            </div>
         </div>
         <div className="space-y-5 customMd:mt-3">
            <div className="space-y-1">
               <p className="text-titleColor">{t('Address')}</p>
               <p className="text-[11px] capitalize text-[#80949C] customSm:text-xs customLg:text-sm">{detail?.address}</p>
            </div>
            <div className="space-y-1">
               <p className="text-titleColor">{t('Social media')}</p>
               <div className="flex flex-wrap items-center gap-1 customMd:gap-3">
                  <a
                     href={detail?.telegram_link}
                     target="_blank"
                     className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#80949C] customMd:h-9 customMd:w-9"
                     rel="noreferrer"
                  >
                     <TelegramIcon className="text-menuItemColor" fontSize="inherit" />
                  </a>
                  <a
                     href={detail?.linkedin_link}
                     target="_blank"
                     className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#80949C] customMd:h-9 customMd:w-9"
                     rel="noreferrer"
                  >
                     <LinkedInIcon className="text-menuItemColor" fontSize="inherit" />
                  </a>
                  <a
                     href={detail?.github_link}
                     target="_blank"
                     className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#80949C] customMd:h-9 customMd:w-9"
                     rel="noreferrer"
                  >
                     <GitHubIcon className="text-menuItemColor" fontSize="inherit" />
                  </a>
                  <a
                     href={detail?.whatsapp_link}
                     target="_blank"
                     className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#80949C] customMd:h-9 customMd:w-9"
                     rel="noreferrer"
                  >
                     <WhatsAppIcon className="text-menuItemColor" fontSize="inherit" />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default InfoDetail;
