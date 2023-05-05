import React from "react";

const Navigationbar = () => {
  return (
    <div>
      <div className="mx-[16px] lg:hidden flex justify-between items-center ">
        <ul>
          <li>
            <h3 className="font-bold text-[14px]">Posts(368)</h3>
          </li>
        </ul>

        <button className="bg-[#EDEEF0] py-[8px] px-[10px] rounded-md flex justify-center items-center">
          Filter: All
          <img className="pl-[10px]" src="down.png" alt="" />
        </button>
      </div>
      <div className="justify-between items-center bg-white hidden lg:flex ">
        <div>
          <ul className=" items-center list-none  inline-flex">
            <li>
              <button
                href="#"
                class="px-[16px] py-[20px] text-base text-gray-500 transition duration-500 ease-in-out transform  focus:shadow-outline focus:outline-none  hover:text-black hover:border-b hover:border-black  text-[16px]"
              >
                All Post(32)
              </button>
            </li>
            <li>
              <button
                href="#"
                class="px-[16px] py-[20px] text-base text-gray-500 transition duration-500 ease-in-out transform  focus:shadow-outline focus:outline-none  hover:text-black hover:border-b hover:border-black  text-[16px]"
              >
                Artical
              </button>
            </li>
            <li>
              <button
                href="#"
                class="px-[16px] py-[20px] text-base text-gray-500 transition duration-500 ease-in-out transform  focus:shadow-outline focus:outline-none  hover:text-black hover:border-b hover:border-black  text-[16px]"
              >
                Event
              </button>
            </li>
            <li>
              <button
                href="#"
                class="px-[16px] py-[20px] text-base text-gray-500 transition duration-500 ease-in-out transform  focus:shadow-outline focus:outline-none  hover:text-black hover:border-b hover:border-black  text-[16px]"
              >
                Education
              </button>
            </li>
            <li>
              <button
                href="#"
                class="px-[16px] py-[20px] text-base text-gray-500 transition duration-500 ease-in-out transform  focus:shadow-outline focus:outline-none  hover:text-black hover:border-b hover:border-black  text-[16px]"
              >
                Job
              </button>
            </li>
          </ul>
        </div>
        <div className="flex gap-[16px] h-[36px]">
          <button className="bg-[#EDEEF0] py-[8px] px-[12px] rounded-md flex justify-center items-center">
            Write a post
            <img className="pl-[10px]" src="down.png" alt="" />
          </button>
          <button className="bg-[#2F6CE5] py-[8px] px-[12px] rounded-md flex justify-center items-center text-white">
            <img className="mr-[6px]" src="add.png" alt="" />
            Join Group
          </button>
        </div>
      </div>
      <hr className="hidden lg:flex" />
    </div>
  );
};

export default Navigationbar;
