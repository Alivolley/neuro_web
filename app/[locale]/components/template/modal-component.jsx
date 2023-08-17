'use client';

import React from 'react';

//Assets
import { ModalComponentStyle } from './modal-component.style';

//MUI
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const ModalComponent = ({ show, handleClose, size = 'xs', children, fullWidth = false, className, sx, fullScreen = false }) => {
    return (
        <ModalComponentStyle
            open={show}
            onClose={handleClose}
            maxWidth={size}
            fullWidth={fullWidth}
            fullScreen={fullScreen}
            TransitionComponent={Transition}
            className={className}
            sx={sx}
        >
            {children}
        </ModalComponentStyle>
    );
};

export default ModalComponent;
