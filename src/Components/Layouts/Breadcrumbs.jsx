import React from 'react';
import Flex from '../Flex';
import { FaChevronRight } from "react-icons/fa6";
import Anchor from '../../Anchor';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    return (
        <div>
             <Flex className="items-center gap-2 text-lg font-medium align-center">
           
            <Link to="/home">Home</Link>
            <FaChevronRight />
            <Link to="/about">About</Link>
           </Flex>
        </div>
    );
};

export default Breadcrumbs;