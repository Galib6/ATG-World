import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TopBanner = () => {
  return (
    <div class="relative">
      <img
        src="banner-bg.png"
        alt="Your Image"
        class="lg:w-full lg:h-full object-cover  hidden lg:block"
      />
      <img
        src="banner2.png"
        alt="Your Image"
        class=" object-cover w-full h-full  lg:hidden"
      />
      <div class="absolute inset-0 bg-black opacity-50 w-full"></div>
      <div class="absolute inset-0  flex-col justify-end items-start mb-[107px] ms-[137px] hidden lg:flex">
        <p class="text-white text-[36px] font-bold">Computer Engineering</p>
        <p className="text-white text-[18px]">
          142,765 Computer Engineers follow this
        </p>
      </div>
      <div class="absolute inset-0  flex-col justify-end items-start mb-[50px] ms-[16px] flex lg:hidden">
        <p class="text-white text-[17px] font-bold">Computer Engineering</p>
        <p className="text-white text-[12px]">
          142,765 Computer Engineers follow this
        </p>
      </div>
      <div class="absolute inset-0 flex justify-between items-start m-[16px] lg:hidden">
        <button className="text-white  ">
          <AiOutlineArrowLeft className="h-[20px] w-[20px]" />
        </button>
        <button className="text-white p-[6px] border border-white rounded-lg">
          Join group
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
