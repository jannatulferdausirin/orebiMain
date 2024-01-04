import React from "react";
import Heading from "./Heading";
import Label from "./Label";
import Input from "./Input";
import Flex from "./Flex";

const PersonalDetails = () => {
  return (
    <div className="w-full border-gray-100 border-y-2">
      <Heading
        as="h2"
        text="Your Personal Details"
        className="text-[#262626] text-[39px] font-bold leading-[30px] mt-[30px] w-[610px] font-jost pb-4"
      />
      <Flex >
      <div className="w-1/2">
        <Label labelName="First Name" className={`text-[#262626] `}/>
        <Input inputType="text" inputPh="First Name" />
      </div>
      <div className="w-1/2 pb-6">
        <Label labelName="Last Name" className={`text-[#262626] `}/>
        <Input inputType="text" inputPh="First Name"/>
      </div>
      </Flex>
      <Flex >
      <div className="w-1/2">
        <Label labelName="Email Address" className={`text-[#262626] `}/>
        <Input inputType="text" inputPh="company@domain.com" />
      </div>
      <div className="w-1/2 pb-12">
        <Label labelName="Telephone" className={`text-[#262626] `}/>
        <Input inputType="text" inputPh="Your phone number"/>
      </div>
      </Flex>
    </div>
  );
};

export default PersonalDetails;
