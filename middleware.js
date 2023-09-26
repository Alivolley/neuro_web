import createMiddleware from 'next-intl/middleware';
import Cookies from 'js-cookie';

const cookieLocale = Cookies.get('neuroCodeLocale');

export default createMiddleware({
   locales: ['en', 'fa'],
   defaultLocale: cookieLocale || 'fa',
   localeDetection: false,
});

export const config = {
   // Skip all paths that should not be internationalized. This example skips the
   // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
   matcher: ['/((?!api|_next|.*\\..*).*)'],
};
