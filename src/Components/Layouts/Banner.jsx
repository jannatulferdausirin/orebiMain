import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import logoImage from '../../assets/banner (2).jpg';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';

const Banner = () => {
    return (
             <Container>
             <Flex className="relative ">
            
            <div className='relative'>
                <Image className=" " src={logoImage} alt={logoImage}/>
            </div>
            <div className='absolute top-[20%] left-[10%]'>
                <Heading as="h3" text="Final Offer" className="font-bold text-4xl"/>
                <Flex className="py-6 text-lg text-normal items-center gap-2">
                <Paragraph text="Up to"/>
                <Paragraph text="50%" className="font-bold text-4xl "/>
                <Paragraph text="sale for all furniture items!"/>
                </Flex>
                <Button text="Shop Now"/>
            </div>
         
        </Flex>
           </Container>
        
      
    );
};

export default Banner;