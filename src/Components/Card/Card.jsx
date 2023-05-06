import React from "react";

const Card = () => {
  return (
    <div className=" w-[320px]   lg:w-[692px] border border-inherit rounded-[4px]">
      <img
        className=" w-[318px] h-[115px] lg:w-[692px] lg:h-[220px] object-cover"
        src="bg1.png"
        alt=""
      />
      <div className="lg:px-[20px] px-[18px] ">
        <h1 className="flex justify-start font-medium pt-[14px] lg:pt-[20px]">
          ✍️
          <span className="pt-1 text-[14px] lg:text-[18px]">Article</span>
        </h1>
        <div className="flex justify-center">
          <h1 className=" text-[15px] lg:text-[22px]  font-semibold">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h1>
          <div className="dropdown dropdown-end ml-[18px] ">
            <label tabIndex={0} className="">
              <div className=" cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
                </svg>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content  p-2 shadow bg-base-100  w-52"
            >
              <li className="py-[7px] mx-[12px]">
                <button>Edit</button>
              </li>
              <li className="py-[7px] mx-[12px]">
                <button>Report</button>
              </li>
              <li className="py-[7px] mx-[12px]">
                <button>Option 3</button>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[19px] my-[12px] text-[#5C5C5C] hidden lg:block">
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
        <p className="text-[12px] my-[10px] text-[#5C5C5C] lg:hidden">
          I’ve worked in UX for the better part of a decade. F...
        </p>
        <div className="lg:mt-[32px] lg:mb-[26px] my-[21px] flex items-center justify-between ">
          <div className="flex justify-start items-center">
            <img
              className="lg:h-[48px] lg:w-[48px] h-[37px] w-[37px] rounded-full mr-[10px]"
              src="https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-[13px] lg:text-[18px]">
                Sarthak Kamra
              </h1>
              <p className="text-[12px] lg:hidden mt-[-3px]">1.4k views</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="lg:flex hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 011.172 8z"></path>
                <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"></path>
              </svg>
              <p className="ml-[8px] font-medium text-[14px]">1.4k views</p>
            </div>
            <button className="px-[12px] py-[9px] bg-[#EDEEF0] ml-[40px] flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-share-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5z"></path>
              </svg>
              <span className="lg:hidden pl-[4px] text-[12px]">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
