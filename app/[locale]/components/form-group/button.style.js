import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const ButtonStyle = styled(IconButton)(() => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: '0',
    padding: '0',
    fontSize: '16px',

    '&:disabled': {
        backgroundColor: '#E2E8F0'
    },

    '& .progress_wrapper': {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));
