import styled from '@emotion/styled';
import { Tabs } from '@mui/material';

const ArticlesTabs = styled(Tabs)(props => ({
   button: {
      fontFamily: 'aubrey',
      ...(props.locale === 'fa' && {
         fontFamily: 'picoopic_Regular',
      }),

      '@media (max-width: 600px)': {
         padding: '0px 5px',
         fontSize: '11px',
         maxWidth: 'auto',
         minWidth: 'auto',
      },
   },
}));

export default ArticlesTabs;
