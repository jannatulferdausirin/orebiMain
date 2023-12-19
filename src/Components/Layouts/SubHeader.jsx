import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Paragraph from '../Paragraph';
import BarsIcon from '../Layouts/BarsIcon'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import Button from '../Button';

const SubHeader = () => {
    return (
        <section className='bg-gray-100 py-6 border border-gray-300 border-b-2'>
        <Container>
        <Flex className="justify-between items-center">
          <Flex className={`gap-3 items-center`}>
           <BarsIcon/>
            <Paragraph text="Shop by Category" />
          </Flex>
          <form action="#" className="relative w-[600px]">
            <input
              type="text"
              className="py-4 pl-5 w-full rounded-lg"
              placeholder="Search Products"
            />
            <button
              className="absolute top-5 right-10 items-middle"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
          <Flex className="gap-4">
           <FaUser />
           <GoTriangleDown />
            <FaShoppingCart />
          </Flex>
        </Flex>
      </Container>
      </section>
    );
};

export default SubHeader;