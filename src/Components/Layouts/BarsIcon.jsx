import React, { useState } from "react";

const BarsIcon = () => {
  // const [open,setOpen]=useState(false);
   const Menus = [
    "Accessories",
    "Furniture",
    "Electronics",
    "Clothes",
    "Bags",
    "Home Appliance",
  ];
  return (
    
   
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
       
           <svg
          // onClick={() => SetOpen(!open)}
            width="19"
            height="10"
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z"
              fill="#262626"
            />
            <path
              d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z"
              fill="#262626"
            />
          </svg>
       
        </div>
     
         <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-52"
        >
          {Menus.map((menu) => (
                <li
                  className="p-2 text-sm cursor-pointer hover:pl-6 hover:font-bold text-white z-50 "
                  key={menu}
                >
                  {menu}
                </li>
              ))}
        </ul>
     
      </div>
   
       



    
  );
};

export default BarsIcon;
