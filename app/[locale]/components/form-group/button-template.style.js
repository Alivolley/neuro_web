import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonTemplateStyle = styled(Button)(props => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: '2px',
    color: props.theme.colors.buttonTextColor,
    border: '1px solid',
    borderColor: props.theme.colors.borderColor,
    backgroundColor: `${props.theme.colors.buttonBgColor} !important`,
    boxShadow: '0px 4px 30px 0px #757A4F1A',
    fontFamily: props.locale === 'fa' ? 'picoopic_Regular' : 'aubrey',
    // padding: '8px 10px',
    textTransform: 'none',
    fontSize: '13px',
    height: 'fit-content',

    '@media (min-width: 900px)': {
        padding: '10px 20px',
        fontSize: '16px'
    },

    '&:disabled': {
        '& .progress_wrapper': {
            backgroundColor: props.theme.colors.disableBgColor,
            color: props.theme.colors.disableTextColor
        }
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
