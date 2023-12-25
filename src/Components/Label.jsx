import React from 'react';

const Label = ({className,labelName}) => {
    return (
        <label className={`block font-bold text-gray-600 pt-6 ${className}`}>
            {labelName}
        </label>
    );
};

export default Label;