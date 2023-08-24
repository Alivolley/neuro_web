import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

export const ModalComponentStyle = styled(Dialog)(() => ({
    '& div:first-of-type': {
        backgroundColor: 'transparent'
    }
}));
