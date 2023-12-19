import React from 'react';
import Container from './Container';
import Image from './Image';
import Button from './Button';
import Flex from './Flex';
import Heading from './Heading';
import Price from './Price';
import Paragraph from './Paragraph';
import bottle from '../assets/bottle.png';
import ashBag from '../assets/bag.png';
import jafran from '../assets/jafran.png';
import blackBag from '../assets/black bag.png';
import { FaHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const SellerCard = () => {
    return (
      <Container className="">
      <Heading text="Our BestSellers" as="h3" className=" font-bold text-4xl font-sans my-8 pl-8"/>
        <Flex className="gap-4 items-center justify-center relative ">
        <div className='group'>
         <div className='w-[366px] '>
             <Image className="w-full " src={bottle} alt={bottle}/>
             <Button text="New" className="absolute top-5 left-14  "/>
            <Flex className="justify-between items-center pb-2">
            <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
             <Price text="44.99"/>
            </Flex>
            <Paragraph text="Black" className="text-gray-500 text-xl"/>
         </div>
         
         <div className= "absolute invisible w-[366px]  py-4 top-[200px] group-hover:visible  bg-white duration-500 ease-in">
       <Flex className="justify-end gap-8 align-middle items-center mr-8 py-4">
         <Paragraph text="Add to Wishlist" />
         <FaHeart />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center mr-8">
         <Paragraph text="Compare" />
         <FaCodeCompare />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center py-4 mr-8">
         <Paragraph text="Add to Cart" />
         <FaCartPlus />
       </Flex>
     </div>
         </div>
        <div className='group'>
         <div className='w-[366px] relative '>
             <Image className="w-full" src={ashBag } alt={ashBag }/>
             <Button text="New" className="absolute top-5 left-5 "/>
            <Flex className="justify-between items-center pb-2">
            <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
             <Price text="44.99"/>
            </Flex>
            <Paragraph text="Black" className="text-gray-500 text-xl"/>
         </div>
         
         <div className= "absolute invisible  w-[366px]  py-4 top-[200px] group-hover:visible  bg-white duration-500 ease-in">
       <Flex className="justify-end gap-8 align-middle items-center mr-8 ">
         <Paragraph text="Add to Wishlist" />
         <FaHeart />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center py-4 mr-8">
         <Paragraph text="Compare" />
         <FaCodeCompare />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center py-4 mr-8">
         <Paragraph text="Add to Cart" />
         <FaCartPlus />
       </Flex>
     </div>
         </div>
        <div className='group'>
         <div className='w-[366px] relative '>
             <Image className="w-full" src={jafran} alt={jafran}/>
             <Button text="New" className="absolute top-5 left-5 "/>
            <Flex className="justify-between items-center pb-2">
            <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
             <Price text="44.99"/>
            </Flex>
            <Paragraph text="Black" className="text-gray-500 text-xl"/>
         </div>
         
         <div className= "absolute invisible  w-[366px]  py-4 top-[200px] group-hover:visible  bg-white duration-500 ease-in">
       <Flex className="justify-end gap-8 align-middle items-center mr-8 py-4">
         <Paragraph text="Add to Wishlist" />
         <FaHeart />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center  mr-8">
         <Paragraph text="Compare" />
         <FaCodeCompare />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center py-4 mr-8">
         <Paragraph text="Add to Cart" />
         <FaCartPlus />
       </Flex>
     </div>
         </div>
        <div className='group'>
         <div className='w-[366px] relative '>
             <Image className="w-full" src={blackBag } alt={blackBag  }/>
             <Button text="New" className="absolute top-5 left-5 "/>
            <Flex className="justify-between items-center pb-2">
            <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
             <Price text="44.99"/>
            </Flex>
            <Paragraph text="Black" className="text-gray-500 text-xl"/>
         </div>
         
         <div className= "absolute invisible   w-[366px]  py-4 top-[200px] group-hover:visible  bg-white duration-500 ease-in">
       <Flex className="justify-end gap-8 align-middle items-center mr-8 py-4">
         <Paragraph text="Add to Wishlist" />
         <FaHeart />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center  mr-8">
         <Paragraph text="Compare" />
         <FaCodeCompare />
       </Flex>
       <Flex className="justify-end gap-8 align-middle items-center py-4 mr-8">
         <Paragraph text="Add to Cart" />
         <FaCartPlus />
       </Flex>
     </div>
         </div>
        </Flex>
       
         </Container>
      
    );
};

export default SellerCard;