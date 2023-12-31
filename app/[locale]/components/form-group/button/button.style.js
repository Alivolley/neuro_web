import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

const ButtonStyle = styled(IconButton)(props => ({
   position: 'relative',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '10px',
   borderRadius: '0',
   padding: '0',
   fontSize: '16px',

   '&:disabled': {
      '& #progress_wrapper': {
         backgroundColor: props.theme.colors.disableBgColor,
         color: props.theme.colors.disableTextColor,
      },
   },

   '& #progress_wrapper': {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
}));

export default ButtonStyle;
