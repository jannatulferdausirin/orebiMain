import React from 'react';

const Button = ({text,className}) => {
    return (
        <button className={` bg-black text-white px-7 py-2 rounded ${className}`}>
            {text}
        </button>
    );
};

export default Button;