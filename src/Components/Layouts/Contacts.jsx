import React from 'react';
import useTitle from '../hooks/UseTitle';
import Container from '../Container';
import Heading from '../Heading';
import Flex from '../Flex';
import Anchor from '../../Anchor';
import { FaChevronRight } from "react-icons/fa6";
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';
import { Link } from 'react-router-dom';
// import GoogleMap from './GoogleMap';


const Contacts = () => {
    useTitle('contacts');
    return (
        <Container>
          <div className='mt-40'>
           <Heading as='h2' text="Contact" className="font-bold text-[49px] mb-6"/>
         <Flex className="items-center gap-2 text-lg font-medium">
         <Link to="/home">Home</Link>
            <FaChevronRight />
            <Link to="/contacts">Contacts</Link>
         </Flex>
           </div>
           <Heading as='h2' text="Fill up a Form" className=" text-gray-800 text-[39px] font-bold mt-32"/>
           <div>
            <Label labelName="Name" />
            <Input inputType="text" inputPh="Your Name"/>
            <Label labelName="Email" />
            <Input inputType="email" inputPh="Your Email"/>
            <Label labelName="Your Message" />
            <textarea placeholder="Your Message" rows="5" className='pb-2  border-b-2 border-gray-200 focus:outline-none w-[50%] placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm placeholder:font-sans pt-2'/>
           </div>
           <Button text="Post" className="py-[16px] px-[85px] mt-4 mb-[100px]"/>
          {/* <GoogleMap/> */}
          
        </Container>
    );
};

export default Contacts;