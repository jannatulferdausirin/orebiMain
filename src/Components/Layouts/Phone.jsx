import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import ImagePhone from "../../assets/ash clock.png";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Button from "../Button";

const Phone = () => {
  return (
    <Container>
      <Flex className="mt-16 py-16">
        <div className="">
          <Image src={ImagePhone} alt={ImagePhone} className="" />
        </div>
        <div className="bg-gray-100 w-full pl-8">
          <Heading
            text="Phone of the year"
            as="h3"
            className="font-bold text-4xl pt-8"
          />
          <div className="pl-8">
            <Paragraph
              className="w-[370px] py-4 text-lg "
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.."
            />
            <Button text="Shop Now" />
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Phone;
