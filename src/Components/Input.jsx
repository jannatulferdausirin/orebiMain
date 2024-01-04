import React from 'react';

const Input = ({inputType,inputName,inputPh,inputValue, className}) => {
    return (
       <input type={inputType}  placeholder={inputPh} name={inputName} value={inputValue} className={` pt-2  pb-2 border-b-2 border-gray-100 focus:outline-none placeholder:text-gray-500 placeholder:font-normal placeholder:text-sm placeholder:font-sans w-[50%]  ${className}`}
       />
    );
};

export default Input;