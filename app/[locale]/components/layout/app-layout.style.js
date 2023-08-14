import styled from '@emotion/styled';

//Assets
import appBg from './../../../assets/images/appBackground.png';

export const AppLayoutStyle = styled.div(({ currentLocale, theme }) => {
    return {
        ...(currentLocale === 'fa' && {
            direction: 'rtl'
        }),

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
            background: 'linear-gradient(90deg, #797F4A 0%, rgba(56, 69, 58, 0.52) 111.13%)',
            width: '1px',

            ...(currentLocale === 'en' && {
                left: '29px',
                '@media (min-width: 900px)': {
                    left: '63px'
                }
            }),

            ...(currentLocale === 'fa' && {
                right: '29px',
                '@media (min-width: 900px)': {
                    right: '63px'
                }
            })
        },

        '& .left_box': {
            position: 'absolute',
            top: '200px',
            width: '82px',
            height: '170px',
            background: theme.colors.buttonBgColor,

            ...(currentLocale === 'en' && {
                left: '30px',
                '@media (min-width: 900px)': {
                    left: '64px'
                }
            }),

            ...(currentLocale === 'fa' && {
                right: '30px',
                '@media (min-width: 900px)': {
                    right: '64px'
                }
            })
        }
    };
});