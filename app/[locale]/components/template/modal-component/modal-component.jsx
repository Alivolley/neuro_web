'use client';

import React from 'react';

// Assets
import Slide from '@mui/material/Slide';
import ModalComponentStyle from './modal-component.style';

// MUI

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function ModalComponent({ show, handleClose, size = 'xs', children, fullWidth = false, className, sx, fullScreen = false, hasTransition = true }) {
   return (
      <ModalComponentStyle
         open={show}
         onClose={handleClose}
         maxWidth={size}
         fullWidth={fullWidth}
         fullScreen={fullScreen}
         {...(hasTransition && {
            TransitionComponent: Transition,
         })}
         className={className}
         sx={sx}
      >
         {children}
      </ModalComponentStyle>
   );
}

export default ModalComponent;
