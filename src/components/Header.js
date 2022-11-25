import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const headerData = [
  "Fresh",
  "Today's Deals",
  "Mobiles",
  "Gift Cards",
  "Women Clothing",
  "Men Clothing",
  "Kids Clothing",
  "Health",
  "Pet Corner",
  "Books",
  "Beauty",
  "Kitchen",
  "Bed Room",
  "Sport",
  "Bags",
];
const Header = () => {
  return (
    <div className="w-[90%] h-[90%] mx-auto">
      <div className=" flex justify-between pt-[40px] pb-[30px] border-b border-solid border-[#808080]">
        <div>
          <h3 className="text-[32px] font-bold text-black">
            shop <span className="font-normal">cart</span>
          </h3>
        </div>
        <div className="text-[16px] font-bold text-black flex items-center">
          <span className="text-[30px]">
            <FaUserCircle />
          </span>
          <span className="font-normal mx-2">Sign In</span>
        </div>
      </div>

      <div className=" flex justify-between pt-[40px] pb-[30px]">
        <div className="w-[151px] h-[56px] bg-[#FFAE5D] rounded-[20px] flex justify-center items-center">
          <span className="text-[30px] text-black">
            <GrLocation />
          </span>
          <span className="text-[16px] text-black">Dhaka,1212</span>
        </div>
        <div className="w-[622px] h-[56px] font-bold text-black flex items-center border border-solid border-[#80808080] rounded-[20px]">
          <input
            className="w-[90%] px-[16px] outline-none border-none font-normal"
            type="text"
            placeholder="Search"
          />
          <BiSearch className="w-[10%] text-[30px] text-[#808080] cursor-pointer" />
        </div>
      </div>
      <div className=" flex justify-between pt-[20px] pb-[30px]">
        {headerData.map((data, index) => (
          <span className="text-[16px] text-[#606060] font-medium" key={index}>
            <Link to={"/"}>{data}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
