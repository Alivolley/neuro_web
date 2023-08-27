'use client';

import { InputComponentWrapper } from './input-component.style';

const InputComponent = ({ type = 'text', detail, placeholder, disabled, error, className, showArrows = true }) => {
    return (
        <InputComponentWrapper showArrows={showArrows}>
            <input
                type={type}
                className={`${className} ${error ? '!border-red-400' : ''}`}
                {...detail}
                placeholder={placeholder}
                disabled={disabled}
            />
            {error && <p className='text-red-400 text-[12px]'>{error.message}</p>}
        </InputComponentWrapper>
    );
};

export default InputComponent;
