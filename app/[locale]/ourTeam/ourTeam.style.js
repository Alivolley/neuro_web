import styled from '@emotion/styled';

const OurTeamCard = styled.div(() => ({
   paddingBottom: '100px',

   '& #picsWidth': {
      /* width */
      '&::-webkit-scrollbar': {
         width: '5px',
         height: '5px',
      },

      /* Track */
      '&::-webkit-scrollbar-track': {
         backgroundColor: 'transparent',
      },

      /* Handle */
      '&::-webkit-scrollbar-thumb': {
         backgroundColor: '#797f4a42',
         borderRadius: '10px',
      },

      /* Handle on hover */
      '&::-webkit-scrollbar-thumb:hover': {
         backgroundColor: '#797f4a7e',
      },
   },
}));

export default OurTeamCard;
