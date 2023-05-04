import React from "react";

const TopBanner = () => {
  return (
    <div class="relative">
      <img
        src="banner-bg.png"
        alt="Your Image"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 flex flex-col justify-end items-start mb-[107px] ms-[137px]">
        <p class="text-white text-[36px] font-bold">Computer Engineering</p>
        <p className="text-white text-[18px]">
          142,765 Computer Engineers follow this
        </p>
      </div>
      <div class="absolute inset-0 flex justify-around">
        {/* <p class="text-white text-[36px] font-bold">Computer Engineering</p> */}
        <p class="text-white text-2xl font-bold">Your Text Here</p>
      </div>
    </div>
  );
};

export default TopBanner;
