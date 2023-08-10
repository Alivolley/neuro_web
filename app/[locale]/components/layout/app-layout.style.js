import styled from '@emotion/styled';

//Assets
import appBg from './../../../assets/images/appBackground.png';

export const AppLayoutStyle = styled.div(({ currentLocale }) => {
    return {
        position: 'relative',
        backgroundImage: `url(${appBg.src})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        padding: '0 32px',

        '@media (min-width: 900px)': {
            padding: '0 80px'
        },

        '& .left_line': {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '29px',
            width: '1px',
            background: 'linear-gradient(90deg, #797F4A 0%, rgba(56, 69, 58, 0.52) 111.13%)',
            '@media (min-width: 900px)': {
                left: '63px'
            }
        },

        ...(currentLocale === 'fa' && {
            direction: 'rtl'
        })
    };
});
