function TextareaComponent({ detail, placeholder, disabled, error, className, cols = '30', rows = '10' }) {
   return (
      <div>
         <textarea
            cols={cols}
            rows={rows}
            className={`outline-none ${className} ${error ? '!border-red-400' : ''}`}
            {...detail}
            placeholder={placeholder}
            disabled={disabled}
         />
         {error && <p className="text-[12px] text-red-400">{error.message}</p>}
      </div>
   );
}

export default TextareaComponent;
