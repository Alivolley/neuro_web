import styled from '@emotion/styled';
import { FormControl, Tabs } from '@mui/material';

export const AllProductsSelect = styled(FormControl)(props => ({
   minWidth: '58px',
   fontFamily: 'aubrey',
   ...(props.locale === 'fa' && {
      fontFamily: 'picoopic_Regular',
   }),

   '@media (min-width: 600px)': {
      minWidth: '120px',
   },

   '& *': {
      fontFamily: 'aubrey',
      ...(props.locale === 'fa' && {
         fontFamily: 'picoopic_Regular',
      }),
      color: `${props.theme.colors.menuItemColor} !important`,
      borderColor: `${props.theme.colors.menuItemColor} !important`,

      '@media (max-width: 600px)': {
         fontSize: '9px !important',
      },
   },
}));

export const AllProductsTabs = styled(Tabs)(props => ({
   button: {
      fontFamily: 'aubrey',
      ...(props.locale === 'fa' && {
         fontFamily: 'picoopic_Regular',
      }),

      '@media (max-width: 600px)': {
         padding: '0px 5px',
         fontSize: '9px',
         maxWidth: 'auto',
         minWidth: 'auto',
      },
   },
}));
