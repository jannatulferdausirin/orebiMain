import React from 'react';

const List = ({className, text}) => {
    return (
        <ul>
            <li >
            <a className={` ${className}: text-lg hover:text-black hover:font-bold duration-500 `} href="">{text}</a>
        </li>
        </ul>
    );
};

export default List;