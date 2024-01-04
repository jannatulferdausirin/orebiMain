import { FaChevronRight } from "react-icons/fa6";
import Anchor from "../../Anchor";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import useTitle from "../hooks/UseTitle";
import Paragraph from "../Paragraph";
import NewCustomer from "../NewCustomer";
import PersonalDetails from "../PersonalDetails";
import Password from "../Password";
import Button from "../Button";
import Input from "../Input";
import { Link } from "react-router-dom";


const SignUp = () => {
  useTitle("signUp");
  return (
    <Container>
      <div className="mt-40">
        <Heading
          as="h2"
          text="Sign up"
          className="font-bold text-[49px] mb-6"
        />
        <Flex className="items-center gap-2 text-lg font-medium">
          <Link to="/home">Home</Link>
          <FaChevronRight />
          <Link to="/signup">Sign up</Link>
          {/* <FaChevronRight />
            <Anchor text="Log out" href="logout"/> */}
        </Flex>
        <Paragraph
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          className={`text-[#767676] text-[16px] font-normal leading-[30px] mt-[120px] w-[610px] font-jost pb-[100px]`}
        />
      </div>
      <div>
        <PersonalDetails />
        <NewCustomer />
        <Password />
      </div>
      <div>
        <Flex className={`w-[340px] items-center gap-4 mt-8 `}>
          <Input
            inputType="checkbox"
            name="Yes"
            className={`w-[11px] h-[11px]`}
          />
          <Paragraph text="I have read and agree to the Privacy Policy" />
        </Flex>
        <div>
          <Flex className={`items-center w-[340px] gap-4 mt-6`}>
            <Paragraph text="Subscribe Newsletter "/>
            <Input
              inputType="checkbox"
              name="No"
              className={`w-[11px] h-[11px]`}
            />
            <Paragraph text="Yes"/>
            <Input inputType="checkbox" className={`w-[11px] h-[11px]`} />
            <Paragraph text="No"/>
          </Flex>
        </div>
      </div>

      <Button
        text="Login"
        type="submit"
        className={`my-8 w-[200px] h-[50px]`}
      />
    </Container>
  );
};

export default SignUp;
