import React from 'react';
import Container from '../Container';
import Paragraph from '../Paragraph';
import Price from '../Price';
import Button from '../Button';
import Heading from '../Heading';
import Flex from '../Flex';
import Image from '../Image';
import  cap from '../../assets/cap.png';
import  table from '../../assets/table.png';
import  headphone from '../../assets/hedphone.png';
import  sunglass from '../../assets/glass.png';
import { FaHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";


const SpecialOffer = () => {
    return (
        <div>
        <Container className="">
     <Heading text="Special Offer" as="h3" className=" font-bold text-4xl font-sans my-8 pl-8"/>
       <Flex className="gap-4 items-center justify-center relative ">
       <div className='group'>
        <div className='w-[366px] '>
            <Image className="w-full " src={cap} alt={cap }/>
            <Button text="New" className="absolute top-5 left-14  "/>
           <Flex className="justify-between items-center pb-2">
           <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
            <Price text="44.99"/>
           </Flex>
           <Paragraph text="Black" className="text-gray-500 text-xl"/>
        </div>
        
        <div className= "absolute invisible w-[366px]  top-[200px] group-hover:visible  bg-white duration-500 ease-in">
      <Flex className="justify-end gap-8 align-middle items-center mr-8 py-4">
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
            <Image className="w-full" src={table } alt={table  }/>
            <Button text="New" className="absolute top-5 left-5 "/>
           <Flex className="justify-between items-center pb-2">
           <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
            <Price text="44.99"/>
           </Flex>
           <Paragraph text="Black" className="text-gray-500 text-xl"/>
        </div>
        
        <div className= "absolute invisible  w-[366px] top-[200px] group-hover:visible  bg-white duration-500 ease-in">
      <Flex className="justify-end gap-8 align-middle items-center mr-8 py-4">
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
            <Image className="w-full" src={ headphone} alt={ headphone}/>
            <Button text="New" className="absolute top-5 left-5 "/>
           <Flex className="justify-between items-center pb-2">
           <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
            <Price text="44.99"/>
           </Flex>
           <Paragraph text="Black" className="text-gray-500 text-xl"/>
        </div>
        
        <div className= "absolute invisible  w-[366px]  top-[200px] group-hover:visible  bg-white duration-500 ease-in">
      <Flex className="justify-end gap-8 align-middle items-center mr-8 py-4">
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
            <Image className="w-full" src={sunglass} alt={sunglass}/>
            <Button text="New" className="absolute top-5 left-5 "/>
           <Flex className="justify-between items-center pb-2">
           <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
            <Price text="44.99"/>
           </Flex>
           <Paragraph text="Black" className="text-gray-500 text-xl"/>
        </div>
        
        <div className= "absolute invisible   w-[366px]  top-[200px] group-hover:visible  bg-white duration-500 ease-in">
      <Flex className="justify-end gap-8 align-middle items-center mr-8 py-4">
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
       </Flex>
      
        </Container>
        </div>
    );
};

export default SpecialOffer;