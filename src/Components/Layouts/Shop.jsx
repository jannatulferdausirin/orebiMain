import useTitle from "../hooks/UseTitle";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaChevronRight, FaPlus } from "react-icons/fa6";
import Cards from "./Cards";
import batiImg from "../../assets/bati white.png";
import merunHeadPhoneImg from "../../assets/merun headphone.png";
import capImg from "../../assets/cap.png";
import Ghori from "../../assets/clock3.png";
import Bag from "../../assets/bag.png";
import sunglass from "../../assets/black sunglass.png";
import table from "../../assets/table.png";
import Paragraph from "../Paragraph";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Image from "../Image";
import grid from "../../assets/Grid_1.png";
import gridTwo from "../../assets/Grid_2.png";
import Input from "../Input";

const Shop = () => {
  useTitle("shop");
  return (
    <Container>
      <div className="mt-40">
        <Heading
          as="h2"
          text="Products"
          className="text-[#262626] text-[39px] font-bold leading-[30px] mt-[30px] w-[610px] font-jost pb-4"
        />

        <Flex className="items-center gap-2 mt-6 mb-40 text-lg font-medium">
          <Link to="/home">Home</Link>
          <FaChevronRight />
          <Link to="/shop">Products</Link>
        </Flex>
      </div>
      <div className="grid grid-cols-4 ">
        {/* shop by category part*/}
        <div className="shop_category">
          <Heading
            as="h3"
            text=" Shop By Category"
            className="text-[#262626] text-[20px] font-bold leading-[30px] w-[610px] font-jost pb-6"
          />
          <div>
            <Flex className={`justify-between items-center border-b py-2`}>
              <Paragraph text="Category1" />
              <FaPlus />
            </Flex>
            <Paragraph text="Category2" className={`border-b py-2`} />
            <Flex className={`justify-between items-center border-b py-2`}>
              <Paragraph text="Category3" />
              <FaPlus />
            </Flex>
            <Paragraph text="Category4" className={`border-b py-2`} />
            <Paragraph text="Category5" className={`border-b py-2`} />
          </div>
          <div className="shop_category">
            <Flex className={`justify-between items-center`}>
              <Heading
                as="h3"
                text=" Shop By Color"
                className="text-[#262626] text-[20px] font-bold leading-[30px] w-[610px] font-jost pb-6 pt-8"
              />
              <MdArrowDropUp className="w-[50px] h-[20px]" />
            </Flex>
            <div>
              <Flex className={`items-center gap-2 border-b  py-2`}>
                <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
                <Paragraph text="Color 1 " />
              </Flex>
              <Flex className={`items-center gap-2 border-b  py-2`}>
                <div className="w-[10px] h-[10px] rounded-full bg-orange-500"></div>
                <Paragraph text="Color 1 " />
              </Flex>
              <Flex className={`items-center gap-2 border-b  py-2`}>
                <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
                <Paragraph text="Color 1 " />
              </Flex>
              <Flex className={`items-center gap-2 border-b  py-2`}>
                <div className="w-[10px] h-[10px] rounded-full bg-gray-400"></div>
                <Paragraph text="Color 1 " />
              </Flex>
              <Flex className={`items-center gap-2 border-b  py-2`}>
                <div className="w-[10px] h-[10px] rounded-full bg-sky-400"></div>
                <Paragraph text="Color 1 " />
              </Flex>
            </div>
          </div>

          <div className="shop_category">
            <Flex className={`justify-between items-center`}>
              <Heading
                as="h3"
                text=" Shop By Brand"
                className="text-[#262626] text-[20px] font-bold leading-[30px] w-[610px] font-jost pb-6 pt-8"
              />
              <MdArrowDropUp className="w-[50px] h-[20px]" />
            </Flex>
            <div>
              <Paragraph text="Brand 1" className={`border-b py-2`} />
              <Paragraph text="Brand 2" className={`border-b py-2`} />
              <Paragraph text="$Brand 3" className={`border-b py-2`} />
              <Paragraph text="$Brand 4" className={`border-b py-2`} />
              <Paragraph text="Brand 5" className={`border-b py-2`} />
            </div>
          </div>
          <div className="shop_category">
            <Heading
              as="h3"
              text=" Shop By Price"
              className="text-[#262626] text-[20px] font-bold leading-[30px] w-[610px] font-jost pb-6 pt-8"
            />
            <div>
              <Paragraph text="$0.00 - $9.99" className={`border-b py-2`} />
              <Paragraph text="$10.00 - $19.99" className={`border-b py-2`} />
              <Paragraph text="$20.00 - $29.99" className={`border-b py-2`} />
              <Paragraph text="$30.00 - $39.99" className={`border-b py-2`} />
              <Paragraph text="$40.00 - $69.99" className={`border-b py-2`} />
            </div>
          </div>
        </div>
        {/*  productsComponents part*/}
        <div className="col-span-3 px-4 ">
          <div className="pb-4">
            <Flex className={`justify-between`}>
              <Flex className={`gap-4 items-center px-4`}>
                <Image src={grid} alt="grid" />
                <Image src={gridTwo} alt="grid" />
              </Flex>
              <Flex>
                {" "}
                <Flex className={`gap-4 items-center p-4 relative `}>
                  <Paragraph text="Sort By:" />
                  <Input
                    inputType="text"
                    inputPh="Featured"
                    className={` border w-64 pl-2 `}
                  />
                  <MdArrowDropDown className="w-1/4 h-[30px] absolute left-[280px]" />
                </Flex>
                <Flex className={`gap-4 items-center p-4 relative`}>
                  <Paragraph text="Show:" />
                  <Input
                    inputType="text"
                    inputPh="Featured"
                    className={` border  pl-2 w-28`}
                  />
                  <MdArrowDropDown className="w-[50px] h-[30px] absolute left-[140px]" />
                </Flex>
              </Flex>
            </Flex>
          </div>
          <Flex className={`mb-6`}>
            <Cards
              cardsImage={batiImg}
              buttonText="New"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
            <Cards
              cardsImage={merunHeadPhoneImg}
              buttonText="-10%"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
            <Cards
              cardsImage={table}
              buttonText="New"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
          </Flex>
          <Flex className={`mb-6`}>
            <Cards
              cardsImage={capImg}
              buttonText="New"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
            <Cards
              cardsImage={Ghori}
              buttonText="new"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
            <Cards
              cardsImage={Bag}
              buttonText="New"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
          </Flex>
          <Flex className={`mb-6`}>
            <Cards
              cardsImage={sunglass}
              buttonText="-10%"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
            <Cards
              cardsImage={table}
              buttonText="-15%"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
            <Cards
              cardsImage={capImg}
              buttonText="-10%"
              headingText="Basic Crew Neck Tee"
              paraText="Basic Crew Neck tee"
              cardText="Black"
            />
          </Flex>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
