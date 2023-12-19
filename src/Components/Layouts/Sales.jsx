import React from 'react';
import Container from '../Container';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Flex from '../Flex';
import Heading from '../Heading';
import Image from '../Image';
import LightImage from '../../assets/light.png';
import lampImage from '../../assets/clock.png';
import clockImage from '../../assets/table lamp.png';

const Sales = () => {
    return (
      <Container>
          <Flex className="py-[100px] gap-4">
            
            <div className='w-[780px] h-[780] relative'>
                <Image src={LightImage } alt={LightImage }/>
                <div className='absolute bottom-[15%] left-[20%] '>
                    <Heading as="h3" text="Phones Sale" className="font-bold text-4xl"/>
                    <Flex className="py-6 text-lg text-normal items-center gap-2">
                    <Paragraph text="Up to"/>
                    <Paragraph text="30%" className="font-bold text-4xl py-4"/>
                    <Paragraph text="sale for all furniture items!"/>
                    </Flex>
                    <Button text="Shop Now"/>
                </div>
            </div>
            <div className='w-[784px] h-[368px]'>
             <div className='relative'>
             <Image src={clockImage} alt={clockImage} className="pb-10"/>
                <div className='absolute top-[10%] left-[5%] '>
                    <Heading as="h3" text="Electronics Sales" className="font-bold text-4xl"/>
                    <Flex className="py-6 text-lg text-normal items-center gap-2">
                    <Paragraph text="Up to"/>
                    <Paragraph text="70%" className="font-bold text-4xl py-4"/>
                    <Paragraph text="sale for all furniture items!"/>
                    </Flex>
                    <Button text="Shop Now"/>
                </div>
             </div>
             <div className='relative'>
             <Image src={lampImage} alt={lampImage}/>
             <div className='absolute top-[10%] left-[5%] '>
                    <Heading as="h3" text="Furniture Offer" className="font-bold text-4xl"/>
                    <Flex className="py-6 text-lg text-normal items-center gap-2">
                    <Paragraph text="Up to"/>
                    <Paragraph text="30%" className="font-bold text-4xl py-4"/>
                    <Paragraph text="sale for all furniture items!"/>
                    </Flex>
                    <Button text="Shop Now"/>
                </div>
             </div>
               
            </div>
        
         
        </Flex>
      </Container>
    );
};

export default Sales;