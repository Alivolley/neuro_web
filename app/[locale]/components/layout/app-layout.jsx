'use client';
import { Provider } from 'react-redux';

//Assets
import store from '@/app/store/store';
import { getDesignTokens } from '@/app/configs/theme';

//MUI
import { ThemeProvider, createTheme } from '@mui/material';

const AppLayout = ({ children }) => {
    const themeConfig = createTheme(getDesignTokens('light'));

    return (
        <Provider store={store}>
            <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
        </Provider>
    );
};

export default AppLayout;
