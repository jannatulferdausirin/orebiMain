import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import List from '../List';
import Image from '../Image';
import logo from '../../assets/Logo (6).png';
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className="bg-[#F5F5F3] py-12  mt-24">
        <Container>
          <Flex className="justify-between">
            <div>
              <Flex className="gap-56">
                <Flex className="gap-36">
                  <div>
                    <Heading
                      text="Menu"
                      as="h3"
                      className="mb-4 text-xl font-semibold tex-gray-400text-black"
                    />
                    <ul>
                      <Flex className="flex-col gap-2">
                        <List text="Home" />
                        <List text="Shop" />
                        <List text="About" />
                        <List text="Contact"  />
                        <List text="Journal"  />
                      </Flex>
                    </ul>
                  </div>
                  <div>
                    <Heading
                      text="SHOP"
                      as="h3"
                      className="mb-4 text-xl font-semibold  tex-gray-400 text-black"
                    />
                    <ul>
                      <Flex className="flex-col gap-2">
                        <List text="Category 1"  />
                        <List text="Category 2"  />
                        <List text="Category 3"  />
                        <List text="Category 4" />
                        <List text="Category 5"  />
                      </Flex>
                    </ul>
                  </div>
                  <div>
                    <Heading
                      text="HELP"
                      as="h3"
                      className="mb-4 text-xl font-semibold tex-gray-400 text-black"
                    />
                    <ul>
                      <Flex className="flex-col gap-2">
                        <List text="Privacy Policy"/>
                        <List text="Terms & Conditions"  />
                        <List text="Special E-shop"  />
                        <List text="Shipping"  />
                        <List text="Secure Payments"  />
                      </Flex>
                    </ul>
                  </div>
                  <div>
                    <Heading
                      text="(052) 611-5711"
                      as="h3"
                      className="mb-2 font-bold tex-gray-400 text-black"
                    />
                    <Heading
                      text="company@domain.com"
                      as="h3"
                      className="mb-4 font-bold tex-gray-400 text-black"
                    />
                    <ul>
                      <List
                        text="575 Crescent Ave. Quakertown, PA 18951"
                      
                      />
                    </ul>
                  </div>
                </Flex>
              </Flex>
              <Flex className=" text-gray-700 gap-6 mt-16 ">
                
                <ImFacebook className='text-xl' />
                <FaLinkedinIn className='text-xl'/>
                <FaInstagram className='text-xl'/>
              </Flex>
            </div>
            <Flex className="flex-col justify-between">
              <div>
                <Image className="w-[100px]" src={logo} />
              </div>
              <ul>
                <List
                  text="2020 Orebi Minimal eCommerce Figma Template by Adveits"
                />
              </ul>
            </Flex>
          </Flex>
        </Container>
      </section>
    );
  };
export default Footer;