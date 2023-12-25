import React from 'react';
import { Link } from 'react-router-dom';

const List = ({className, text}) => {
    return (
        <ul>
            <li >
            <Link className={` ${className}: text-lg hover:text-black hover:font-bold duration-500 `} to ={text} >{text}</Link>
        </li>
        </ul>
    );
};

export default List;