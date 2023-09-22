import styled from '@emotion/styled';

const TabSectionStyle = styled.div(({ theme, locale }) => ({
   '& #circle_color': {
      position: 'relative',

      ':before': {
         content: '""',
         position: 'absolute',
         ...(locale === 'fa'
            ? {
                 right: '0px',
              }
            : {
                 left: '0px',
              }),
         bottom: '40%',
         width: '5px',
         height: '5px',
         borderRadius: '100%',
         backgroundColor: theme.colors.menuItemColor,
      },
   },
}));

export default TabSectionStyle;
