'use client';

import { Provider } from 'react-redux';
import { useParams, usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

// MUI
import { ThemeProvider, createTheme } from '@mui/material';

// Assets
import store from '../../../store/store';
import getDesignTokens from '../../../configs/theme';
import AppLayoutStyle from './app-layout.style';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Header from './header/header';

function AppLayout({ children, currentLocale }) {
   const { locale } = useParams();

   const themeConfig = createTheme(getDesignTokens('light', locale));
   const pathname = usePathname();
   const notShowBox =
      pathname.endsWith('/allProducts') ||
      /\/product-detail\/(.+)/.test(pathname) ||
      /\/allArticles\/(.+)/.test(pathname) ||
      pathname.endsWith('/contactUs') ||
      pathname.endsWith('/articles');

   return (
      <Provider store={store}>
         <ThemeProvider theme={themeConfig}>
            <AppLayoutStyle currentLocale={currentLocale} dir={currentLocale === 'fa' ? 'rtl' : 'ltr'}>
               <div id="left_line" />
               {!notShowBox && <div id="left_box" />}
               <Header currentLocale={currentLocale} />
               {children}
               <ToastContainer theme="dark" />
            </AppLayoutStyle>
         </ThemeProvider>
      </Provider>
   );
}

export default AppLayout;
