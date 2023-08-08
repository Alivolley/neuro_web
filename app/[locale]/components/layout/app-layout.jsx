'use client';
import { Provider } from 'react-redux';

//Assets
import store from '@/app/store/store';
import { getDesignTokens } from '@/app/configs/theme';

//MUI
import { ThemeProvider, createTheme } from '@mui/material';
import { AppLayoutStyle } from './app-layout.style';
import Header from './header';

const AppLayout = ({ children, currentLocale }) => {
    const themeConfig = createTheme(getDesignTokens('light'));

    return (
        <Provider store={store}>
            <ThemeProvider theme={themeConfig}>
                <AppLayoutStyle currentLocale={currentLocale}>
                    <Header currentLocale={currentLocale} />
                    {children}
                </AppLayoutStyle>
            </ThemeProvider>
        </Provider>
    );
};

export default AppLayout;
