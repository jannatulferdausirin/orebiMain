import React from "react";
import Banner from "./Banner";
import Sales from "./Sales";
import Cards from "./Cards";
import SellerCard from "../SellerCard";
import Phone from "./Phone";
import SpecialOffer from "./SpecialOffer";
import ImageOne from '../../assets/Image (7).png';
import ImageTwo from '../../assets/19_23fa6f2c-04d4-4c97-a102-80171c95556c_grande (1) 1.png'
import Flex from "../Flex";
import ImageFour from '../../assets/Image (4).png';
import ImageThree from '../../assets/Image (5).png';
import Container from "../Container";
import Heading from "../Heading";
import useTitle from "../hooks/UseTitle";

const Home = () => {
  useTitle('home');
  return (
    <Container> 
      <Banner />
      <Sales />
      
      {/* new arrivals part start here */}
    <div>
    <Heading text="New Arrivals" as="h3" className=" font-bold text-4xl font-sans my-8 pl-8"/>
        <Flex>
        <Cards cardsImage={ImageOne} buttonText="New" headingText="Basic Crew Neck Tee"  paraText="Basic Crew Neck tee" cardText="Black"/>
        <Cards cardsImage={ImageTwo} buttonText="New" headingText="Basic Crew Neck Tee"  paraText="Basic Crew Neck tee" cardText="Black"/>
        <Cards cardsImage={ ImageFour} buttonText="New" headingText="Basic Crew Neck Tee"   paraText="Basic Crew Neck tee" cardText="Black"/>
        <Cards cardsImage={ImageThree} buttonText="New" headingText="Basic Crew Neck Tee"   paraText="Basic Crew Neck tee" cardText="Black"/>
        </Flex>
    </div>
 {/* new arrival part end here */}

      <SellerCard />
      <Phone />
      <SpecialOffer />
    </Container>
  );
};

export default Home;
