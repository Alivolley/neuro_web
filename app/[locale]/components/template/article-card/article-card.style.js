import styled from '@emotion/styled';

const ArticleCardStyle = styled.div(() => ({
   '& #title': {
      height: '70px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
   },

   '& #text': {
      height: '70px',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
   },
}));

export default ArticleCardStyle;
