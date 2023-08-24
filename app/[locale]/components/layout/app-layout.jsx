'use client';
import { Provider } from 'react-redux';
import { useParams, usePathname } from 'next/navigation';

//Assets
import store from '@/app/store/store';
import { getDesignTokens } from '@/app/configs/theme';
import { AppLayoutStyle } from './app-layout.style';

//MUI
import { ThemeProvider, createTheme } from '@mui/material';

//Components
import Header from './header';

const AppLayout = ({ children, currentLocale }) => {
    const { locale } = useParams();

    const themeConfig = createTheme(getDesignTokens('light', locale));
    const pathname = usePathname();
    const notShowBox = pathname.endsWith('/allProducts');

    return (
        <Provider store={store}>
            <ThemeProvider theme={themeConfig}>
                <AppLayoutStyle currentLocale={currentLocale}>
                    <div className='left_line'></div>
                    {!notShowBox && <div className='left_box'></div>}
                    <Header currentLocale={currentLocale} />
                    {children}
                </AppLayoutStyle>
            </ThemeProvider>
        </Provider>
    );
};

export default AppLayout;
