import styled from '@emotion/styled';

// Assets
import appBg from '../../../assets/images/appBackground.png';
import appBgRtl from '../../../assets/images/appBackgroundRtl.png';

const AppLayoutStyle = styled.div(({ currentLocale, theme }) => ({
   position: 'relative',
   backgroundImage: `url(${theme.direction === 'ltr' ? appBg.src : appBgRtl.src})`,
   backgroundPosition: 'center center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   backgroundAttachment: 'fixed',
   backgroundColor: '#0C0D0C',
   minHeight: '100lvh',
   padding: '0 32px',

   '@media (min-width: 900px)': {
      padding: '0 80px',
   },

   '& #left_line': {
      position: 'absolute',
      top: '0',
      bottom: '0',
      background: 'linear-gradient(90deg, #797F4A 0%, rgba(56, 69, 58, 0.52) 111.13%)',
      width: '1px',

      ...(currentLocale === 'en'
         ? {
              left: '29px',
              '@media (min-width: 900px)': {
                 left: '63px',
              },
           }
         : {
              right: '29px',
              '@media (min-width: 900px)': {
                 right: '63px',
              },
           }),
   },

   '& #left_box': {
      position: 'absolute',
      top: '100px',
      width: '82px',
      height: '170px',
      background: theme.colors.buttonBgColor,
      '@media (min-width: 640px)': {
         top: '200px',
      },

      ...(currentLocale === 'en'
         ? {
              left: '30px',
              '@media (min-width: 900px)': {
                 left: '64px',
              },
           }
         : {
              right: '30px',
              '@media (min-width: 900px)': {
                 right: '64px',
              },
           }),
   },
}));

export default AppLayoutStyle;
