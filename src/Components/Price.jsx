import React from 'react';

const Price = ({className,text}) => {
    return (
        <h3 className={`${className}: text-gray-400 text-lg `}>
            {text}
        </h3>
    );
};

export default Price;