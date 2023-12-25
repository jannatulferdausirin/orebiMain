import React from 'react';
import Flex from '../Flex';
import { FaChevronRight } from "react-icons/fa6";
import Anchor from '../../Anchor';

const Breadcrumbs = () => {
    return (
        <div>
             <Flex className="align-center items-center gap-2 text-lg font-medium">
            <Anchor href="home" text="Home"/>
            <FaChevronRight />
            <Anchor href="about" text="About"/>
           </Flex>
        </div>
    );
};

export default Breadcrumbs;