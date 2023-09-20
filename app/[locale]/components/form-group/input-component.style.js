import styled from '@emotion/styled';

const InputComponentWrapper = styled.div(props => ({
   input: {
      outline: 'none',
   },

   ...(!props.showArrows && {
      input: {
         '&[type=number]': {
            '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
               margin: 0,
               WebkitAppearance: 'none',
            },
         },
      },
   }),
}));

export default InputComponentWrapper;
