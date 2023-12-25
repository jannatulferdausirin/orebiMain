import React from 'react';
import useTitle from '../hooks/UseTitle';
import Container from '../Container';
import Heading from '../Heading';
import Flex from '../Flex';
import Paragraph from '../Paragraph';
import Breadcrumbs from './Breadcrumbs';
import aboutImg from '../../assets/Image (7).png';
import aboutImgTwo from '../../assets/balti.png';
import Image from '../Image';


const About = () => {
    useTitle('about');
    return (
        <Container>
           <div className='mt-40'>
           <Heading as='h2' text="About" className="font-bold text-[49px] mb-6"/>
          <Breadcrumbs/>
           </div>
           <div className='pt-24'>
           <Flex className="gap-8">
            <div className='relative -z-20 '>
            <Image className="w-[779px] h-[776px]" src={aboutImg} />

            <a className="absolute bottom-[15%] left-[20%] z-10 translate-x-[50%] translate-y-[50%] bg-black py-5 px-12 rounded-xl font-bold text-white text-2xl" href="#">Our Brands</a>
            </div>
            <div className='relative -z-20 '>
            <Image className="w-[779px] h-[776px]" src={aboutImgTwo} />

            <a className="absolute bottom-[15%] left-[20%] z-10 translate-x-[50%] translate-y-[50%] bg-black py-5 px-12 rounded-lg font-bold text-white text-2xl" href="#">Our Brands</a>
            </div>
               
           </Flex>
           </div>
           <div>
           <Paragraph className="text-4xl font-medium pt-16 leading-[52px]  tracking-normal" text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."/>
           </div>
         <Flex className="gap-8 pt-24">
         <div>
         <Paragraph text="Our Vision"  className="font-bold text-2xl text-gray-700 leading-10"/>
           <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." className=" font-medium text-lg text-gray-500 leading-10"/>
           
           </div>
         <div>
         <Paragraph text="Our Story"  className="font-bold text-2xl text-gray-700 leading-10"/>
         <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic." className=" font-medium text-lg text-gray-500 leading-10"/>
           </div>
         <div>
         <Paragraph text="Our Brands" className="font-bold text-2xl text-gray-700 leading-10" />
         <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic." className=" font-medium text-lg text-gray-500 leading-10"/>
           </div>
         </Flex>
        </Container>
    );
};

export default About;