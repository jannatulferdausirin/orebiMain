import React from 'react';
import Image from '../Image';
import List from '../List';
import logo from '../../assets/Logo (6).png'
import Flex from '../Flex';
import Container from '../Container';


const Navbar = () => {
    return (
        <nav>
          <Container>
        <Flex className="justify-between items-center py-6">
          <Image src={logo} className="w-[80px]" />

          <ul className="mx-auto">
            <Flex className="gap-12">
              <List text="Home" />
              <List text="Shop" />
              <List text="About" />
              <List text="Contacts" />
              <List text="Journal" />
            </Flex>
          </ul>
        </Flex>
      </Container>
    
            
        </nav>
    );
};

export default Navbar;