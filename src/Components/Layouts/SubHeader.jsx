import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import BarsIcon from "../Layouts/BarsIcon";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";

const SubHeader = () => {
  // const [open,setOpen] =useState(false);
  // const Menus = [
  //   "Accessories",
  //   "Furniture",
  //   "Electronics",
  //   "Clothes",
  //   "Bags",
  //   "Home Appliance",
  // ];
  return (
    <section className="bg-gray-100 py-6 border border-gray-300 border-b-2">
      <Container>
        <Flex className="justify-between items-center">
          {/* <div className="gap-3 items-center relative ">
            <BarsIcon onClick="" />

            
        
            <div className="bg-black rounded-lg text-white p-4 w-48 shadow-lg absolute z-20 ">
            <ul>
              {Menus.map((menu) => (
                <li
                  className="p-2 text-sm cursor-pointer hover:pl-6 hover:font-bold text-white z-50 "
                  key={menu}
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
          </div> */}
          <Flex className="items-center gap-6 ml-2">
            <BarsIcon />
            <Paragraph text="Sort by name" className=" text-sm text-gray-500" />
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
          <Flex className="gap-4 mr-4">
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
