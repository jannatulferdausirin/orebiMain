import React from "react";
import Heading from "./Heading";
import Flex from "./Flex";
import Label from "./Label";
import Input from "./Input";

const Password = () => {
  return (
    <div className="py-6 border-b-2 border-gray-100">
      <Heading
        as="h2"
        text="Your Password"
        className="text-[#262626] text-[39px] font-bold leading-[30px] mt-[30px] w-[610px] font-jost pb-4"
      />
      <Flex className={`pb-4`}>
        <div className="w-1/2">
          <Label labelName="Password" className={`text-[#262626] `} />
          <Input inputType="Password" inputPh="Password" />
        </div>
        <div className="w-1/2 pb-6 ">
          <Label labelName="Repeat Password" className={`text-[#262626] `} />
          <Input inputType="Password" inputPh="Repeat Password" />
        </div>
      </Flex>
    </div>
  );
};

export default Password;
