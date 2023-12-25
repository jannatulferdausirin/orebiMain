import React from 'react';
import Button from '../Button';
import Image from '../Image';
import Heading from '../Heading';
import Container from '../Container';
import Paragraph from '../Paragraph';
import Flex from '../Flex';
import Price from '../Price';
import { FaHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const Cards = ({cardsImage,buttonText,cardText,headingText }) => {
    return (
        <Container className="">
    
       <Flex  className="gap-4 items-center justify-center relative ">
       <div className='group'>
        <div className='w-[366px] '>
            <Image className="w-full" src={cardsImage} />
            <Button text={buttonText} className="absolute top-5 left-14 "/>
           <Flex className="justify-between items-center pb-2">
           <Heading text={headingText} className="text-xl" as="h3"/>
        
            <Price text="44.99"/>
           </Flex>
           <Paragraph text={cardText} className="text-gray-500 text-xl"/>
        </div>
        
        <div className= "absolute invisible w-[366px]   top-[200px] group-hover:visible  bg-white duration-500 ease-in">
      <Flex className="justify-end gap-8 align-middle py-4 items-center mr-8 ">
        <Paragraph text="Add to wishlist" />
        <FaHeart />
      </Flex>
      <Flex className="justify-end gap-8 align-middle items-center py-4  mr-8">
        <Paragraph text='Compare'/>
        <FaCodeCompare />
      </Flex>
      <Flex className="justify-end gap-8 align-middle items-center py-4 mr-8">
        <Paragraph text="Add to Cart" />
        <FaCartPlus />
      </Flex>
    </div>
        </div>
       {/* <div className='group'>
        <div className='w-[366px] relative '>
            <Image className="w-full" src={ImageTwo } alt={ImageTwo  }/>
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
            <Image className="w-full" src={ImageThree} alt={ImageThree}/>
            <Button text="New" className="absolute top-5 left-5 "/>
           <Flex className="justify-between items-center pb-2">
           <Heading text="Basic Crew Neck Tee" className="text-xl" as="h3"/>
            <Price text="44.99"/>
           </Flex>
           <Paragraph text="Black" className="text-gray-500 text-xl"/>
        </div>
        
        <div className= "absolute invisible  w-[366px]   top-[200px] group-hover:visible  bg-white duration-500 ease-in">
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
            <Image className="w-full" src={ImageFour} alt={ImageFour }/>
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
        </div> */}
       </Flex>
      
        </Container>
    );
};

export default Cards;