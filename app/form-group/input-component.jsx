'use client';

import { InputComponentWrapper } from './input-component.style';

const InputComponent = ({ type = 'text', detail, placeholder, disabled, error, className }) => {
    return (
        <>
            <InputComponentWrapper>
                <input
                    type={type}
                    className={`${className} border-[2px] border-slate-500 rounded-md ${error && 'border-red-400'}`}
                    {...detail}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                {error && <p className='text-red-500 text-[12px]'>there is an error</p>}
            </InputComponentWrapper>
        </>
    );
};

export default InputComponent;
