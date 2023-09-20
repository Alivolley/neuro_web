'use client';

import { Provider } from 'react-redux';
import { useParams, usePathname } from 'next/navigation';

// Assets
import { ThemeProvider, createTheme } from '@mui/material';
import store from '../../../store/store';
import getDesignTokens from '../../../configs/theme';
import AppLayoutStyle from './app-layout.style';

// MUI

// Components
import Header from './header';

function AppLayout({ children, currentLocale }) {
   const { locale } = useParams();

   const themeConfig = createTheme(getDesignTokens('light', locale));
   const pathname = usePathname();
   const notShowBox = pathname.endsWith('/allProducts') || /\/product-detail\/(.+)/.test(pathname) || pathname.endsWith('/contactUs');

   return (
      <Provider store={store}>
         <ThemeProvider theme={themeConfig}>
            <AppLayoutStyle currentLocale={currentLocale}>
               <div id="left_line" />
               {!notShowBox && <div id="left_box" />}
               <Header currentLocale={currentLocale} />
               {children}
            </AppLayoutStyle>
         </ThemeProvider>
      </Provider>
   );
}

export default AppLayout;
