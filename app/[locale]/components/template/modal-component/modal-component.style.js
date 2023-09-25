import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

const ModalComponentStyle = styled(Dialog)(() => ({
   '& div:first-of-type': {
      backgroundColor: 'transparent',
   },
}));

export default ModalComponentStyle;
