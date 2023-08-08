'use client';

import { InputComponentWrapper } from './input-component.style';

const InputComponent = ({ type = 'text', detail, placeholder, disabled, error, className, showArrows = true }) => {
    return (
        <InputComponentWrapper showArrows={showArrows}>
            <input
                type={type}
                className={`border-[1px] border-stone-500 rounded-md p-[10px] ${error ? 'border-red-600' : ''} ${className}`}
                {...detail}
                placeholder={placeholder}
                disabled={disabled}
            />
            {error && <p className='text-red-500 text-[12px]'>{error.message}</p>}
        </InputComponentWrapper>
    );
};

export default InputComponent;
