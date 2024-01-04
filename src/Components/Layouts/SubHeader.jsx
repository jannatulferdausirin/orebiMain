import Container from "../Container";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import ClickSvg from "./ClickSvg";
import { useRef } from "react";
import Heading from "../Heading";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const SubHeader = () => {
  const dropRef = useRef(null);
  const userRef = useRef(null);
  const shoppingRef = useRef(null);

  const handleClick = () => {
    // console.log(dropRef)
    // dropRef.current.style.display = 'block';
    if (dropRef.current.style.display == "block") {
      dropRef.current.style.display = "none";
    } else {
      dropRef.current.style.display = "block";
    }
  };
  const userClick = () => {
    if (userRef.current.style.display == "block") {
      userRef.current.style.display = "none";
    } else {
      userRef.current.style.display = "block";
    }
  };

  const shoppingCartClick = () => {
    if (shoppingRef.current.style.display == "block") {
      shoppingRef.current.style.display = "none";
    } else {
      shoppingRef.current.style.display = "block";
    }
  };

  const Menus = [
    "Accessories",
    "Furniture",
    "Electronics",
    "Clothes",
    "Bags",
    "Home Appliance",
  ];

  return (
    <section className="py-6 bg-gray-100 border border-b-2 border-gray-300">
      <Container>
        <Flex className="items-center justify-between">
          <div className="" onClick={handleClick}>
            <Flex className="relative items-center gap-6 ml-2">
              <button>
                <ClickSvg />
              </button>
              <Paragraph
                text="Sort by name"
                className="text-sm text-gray-500 "
              />
            </Flex>
            <div className="absolute z-20 hidden" ref={dropRef}>
              <ul className="p-2 bg-black shadow rounded-box w-52">
                {Menus.map((menu) => (
                  <li
                    className="z-50 p-2 text-sm text-white cursor-pointer hover:pl-6 hover:font-bold "
                    key={menu}
                  >
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* form section start here */}
          <form action="#" className="relative w-[600px]">
            <input
              type="text"
              className="w-full py-4 pl-5 rounded-lg"
              placeholder="Search Products"
            />
            <button
              className="absolute top-5 right-10 items-middle"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
          {/*  user part start here*/}
          <Flex className="gap-4 mr-4">
            <div className="relative">
              <button onClick={userClick}>
                <Flex>
                  <FaUser />
                  <GoTriangleDown />
                </Flex>
              </button>
              <div className="absolute z-40 hidden" ref={userRef}>
                <ul className="-ml-24 text-center bg-black rounded shadow">
                  {/* <List to="signup" text="My Account" className="block w-32 p-2 text-sm text-white cursor-pointer hover:font-bold hover:bg-white hover:text-black">
                  </List> */}

                  <Link
                    to="/signUp"
                    className="block w-32 p-2 text-sm text-white cursor-pointer hover:font-bold hover:bg-white hover:text-black"
                  >
                    SignUp
                  </Link>
                  <Link
                    to="/logout"
                    className="block w-32 p-2 text-sm text-white cursor-pointer hover:font-bold hover:bg-white hover:text-black"
                  >
                    {" "}
                    LogOut
                  </Link>
                </ul>
              </div>
            </div>
            {/* shopping cart section start here */}
            <div className="relative">
              <button onClick={shoppingCartClick}>
                <FaShoppingCart />
              </button>
            </div>
            <div
              className="absolute z-30 hidden mt-6 -ml-32 text-black bg-white rounded shadow w-54"
              ref={shoppingRef}
            >
              <div>
                <Flex className="items-center justify-between px-6 py-4 mb-2">
                  <Heading as="h2" text="Black smart watch" />
                  <IoClose />
                </Flex>
              </div>
              <Paragraph text="Subtotal:$44.00" className={`pl-6`} />
              <Flex className={`py-6 gap-4 px-4 justify-evenly`}>
                <Link
                  to="/viewcart"
                  className={` hover:text-black border border-black hover:bg-transparent bg-black text-white p-1 rounded`}
                >
                  View Cart
                </Link>
                <Link
                  to="/cheakout"
                  className={` hover:text-black border border-black hover:bg-transparent bg-black text-white p-1 rounded`}
                >
                  Check Out
                </Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default SubHeader;
