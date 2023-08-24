import styled from '@emotion/styled';
import { FormControl, Tabs } from '@mui/material';

export const AllProductsSelect = styled(FormControl)(props => ({
    minWidth: '58px',
    fontFamily: 'aubrey',

    '@media (min-width: 600px)': {
        minWidth: '120px'
    },

    '& *': {
        fontFamily: 'aubrey',
        color: `${props.theme.colors.menuItemColor} !important`,
        borderColor: `${props.theme.colors.menuItemColor} !important`,
        letterSpacing: '2px',

        '@media (max-width: 600px)': {
            fontSize: '9px'
        }
    }
}));

export const AllProductsTabs = styled(Tabs)(() => ({
    button: {
        fontFamily: 'aubrey',

        '@media (max-width: 600px)': {
            padding: '0px 5px',
            fontSize: '9px',
            maxWidth: 'auto',
            minWidth: 'auto'
        }
    }
}));
