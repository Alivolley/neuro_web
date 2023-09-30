import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

// Assets
import '../globals.css';

// Components
import AppLayout from './components/layout/app-layout';

export const metadata = {
   title: 'neuro-code',
   description:
      'طراحی سایت‌های حرفه‌ای و برتر با استفاده از طراحان ماهر و به‌روز و فن‌آوری روز دنیا. طراحی و تولید سایت های شخصی سازه شده شرکتی ، فروشگاهی ، آموزشی ، تبلیغاتی و ...', //
   keywords: 'طراحی سایت, خدمات طراحی وب, طراحی سایت حرفه‌ای',
   author: 'علی ازقندی',
   image: 'https://example.com/image.jpg', //
   url: 'https://neuro-code.ir',
   type: 'website',
   siteName: 'neuro-code',
   locale: 'fa_IR',
   published: '2023-09-30T08:27:28.025Z',
   modified: '2023-09-30T08:27:28.025Z',
};

export function generateStaticParams() {
   return [{ locale: 'en' }, { locale: 'fa' }];
}

export default async function RootLayout({ children, params: { locale } }) {
   let messages = null;
   try {
      messages = (await import(`../../messages/${locale}.json`)).default;
   } catch (error) {
      notFound();
   }

   return (
      <html lang={locale}>
         <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
               <AppLayout currentLocale={locale}>{children}</AppLayout>
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
