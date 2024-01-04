import React from "react";
import Flex from "./Flex";
import Label from "./Label";
import Input from "./Input";
import Heading from "./Heading";
import CountriesApi from "./Layouts/CountriesApi";

const NewCustomer = () => {
  return (
    <div className="py-4 border-b-2 border-gray-100 ">
      <Heading
        as="h2"
        text="New Customer"
        className="text-[#262626] text-[39px] font-bold leading-[30px] mt-[30px] w-[610px] font-jost pb-4"
      />
      <Flex >
        <div className="w-1/2">
          <Label labelName="Address 1" className={`text-[#262626] `} />
          <Input inputType="text" inputPh="4279 Zboncak Port Suite 6212" />
        </div>
        <div className="w-1/2 pb-6">
          <Label labelName="Address 2" className={`text-[#262626] `} />
          <Input inputType="text" inputPh="-" />
        </div>
      </Flex>
      <Flex>
        <div className="w-1/2">
          <Label labelName="City" className={`text-[#262626] `} />
          <Input inputType="text" inputPh="Your City" />
        </div>
        <div className="w-1/2 pb-6 ">
          <Label labelName="Post Code" className={`text-[#262626] `} />
          <Input inputType="text" inputPh="05228" />
        </div>
      </Flex>
      <Flex>
        <div className="w-1/2">
          <Label labelName="Country" className={`text-[#262626] `} />
          {/* <Input inputType="text" inputPh="Your City" /> */}
          <CountriesApi/>
        </div>
        <div className="w-1/2 pb-6 ">
          <Label labelName="Region/State" className={`text-[#262626] `} />
          {/* <Input inputType="text" inputPh="05228" /> */}
          <CountriesApi/>
        </div>
      </Flex>
    </div>
  );
};

export default NewCustomer;
