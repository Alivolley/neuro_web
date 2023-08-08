import styled from '@emotion/styled';

//Assets
import appBg from './../../../assets/images/appBackground.png';

export const AppLayoutStyle = styled.div(({ currentLocale }) => {
    return {
        backgroundImage: `url(${appBg.src})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',

        ...(currentLocale === 'fa' && {
            direction: 'rtl'
        })
    };
});
