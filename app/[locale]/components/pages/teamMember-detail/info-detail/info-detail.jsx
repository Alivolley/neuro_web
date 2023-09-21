// Icons
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function InfoDetail() {
   return (
      <div className="space-y-5">
         <div className="space-y-1">
            <p className="font-avgardn text-titleColor">Phone</p>
            <p className="font-avgardn text-sm text-[#80949C]">+98 9363341048</p>
         </div>
         <div className="space-y-1">
            <p className="font-avgardn text-titleColor">Telegram id</p>
            <p className="font-avgardn text-sm text-[#80949C]">@Devacreat_jasmin</p>
         </div>
         <div className="space-y-1">
            <p className="font-avgardn text-titleColor">Email</p>
            <p className="font-avgardn text-sm text-[#80949C]">DEVACREAT.JASMIN@GMAIL.COM</p>
         </div>
         <div className="space-y-1">
            <p className="font-avgardn text-titleColor">Address</p>
            <p className="font-avgardn text-sm text-[#80949C]">IRAN,Razavi Khorasan,Mashhad, Farmarez St</p>
         </div>
         <div className="space-y-1">
            <p className="font-avgardn text-titleColor">Social media</p>
            <div className="flex items-center gap-3">
               <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#80949C]">
                  <TelegramIcon className="text-menuItemColor" />
               </div>
               <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#80949C]">
                  <LinkedInIcon className="text-menuItemColor" />
               </div>
               <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#80949C]">
                  <GitHubIcon className="text-menuItemColor" />
               </div>
               <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#80949C]">
                  <WhatsAppIcon className="text-menuItemColor" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default InfoDetail;
