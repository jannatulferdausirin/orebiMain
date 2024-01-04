import React from "react";
import Button from "../Button";
import Image from "../Image";
import Heading from "../Heading";
import Container from "../Container";
import Paragraph from "../Paragraph";
import Flex from "../Flex";
import Price from "../Price";
import { FaHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const Cards = ({ cardsImage, buttonText, cardText, headingText }) => {
  return (
    <Container className="">
      <Flex className="relative items-center justify-center gap-4 ">
        <div className="group">
          <div className="w-[366px] ">
            <Image className="w-full" src={cardsImage} />
            <Button text={buttonText} className="absolute top-5 left-14 " />
            <Flex className="items-center justify-between pb-2">
              <Heading text={headingText} className="text-xl" as="h3" />
              <Price text="44.99" />
            </Flex>
            <Paragraph text={cardText} className="text-xl text-gray-500" />
          </div>
          <div className="absolute invisible w-[366px]   top-[200px] group-hover:visible  bg-white duration-500 ease-in">
            <Flex className="items-center justify-end gap-8 py-4 mr-8 align-middle ">
              <Paragraph text="Add to wishlist" />
              <FaHeart />
            </Flex>
            <Flex className="items-center justify-end gap-8 py-4 mr-8 align-middle">
              <Paragraph text="Compare" />
              <FaCodeCompare />
            </Flex>
            <Flex className="items-center justify-end gap-8 py-4 mr-8 align-middle">
              <Paragraph text="Add to Cart" />
              <FaCartPlus />
            </Flex>
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Cards;
