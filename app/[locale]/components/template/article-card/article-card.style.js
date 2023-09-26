import styled from '@emotion/styled';

const ArticleCardStyle = styled.div(() => ({
   '& #text': {
      height: '70px',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
   },
}));

export default ArticleCardStyle;
