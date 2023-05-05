import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const RecomenondedGroups = () => {
  const [inputValue, setInputValue] = useState("");

  const clearInputField = () => {
    setInputValue("");
  };
  return (
    <div className="w-[243px]">
      <div className="relative  z-10">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="py-2 pl-10 pr-10 border-b-2 border-gray-300 focus:border-gray-600 focus:ring-0 transition duration-300 w-full focus:outline-none text-[14px]"
          placeholder="Enter your location"
        />
        <div className="absolute left-0 top-0 mt-2 ml-3">
          <GrLocation
            style={{ height: "20px", width: "20px" }}
            className="text-gray-400"
          />
        </div>
        {inputValue && (
          <div
            className="absolute right-0 top-0 mt-2 mr-3 cursor-pointer"
            onClick={clearInputField}
          >
            <RxCross2
              className="text-gray-400"
              style={{ height: "24px", width: "24px" }}
            />
          </div>
        )}
      </div>
      <div>
        <p className="mt-[32px] flex">
          <AiOutlineInfoCircle
            style={{ height: "16px", width: "16px" }}
            className="text-gray-400"
          />
          <span className="text-[12px] ms-[7px] text-gray-400">
            Your location will help us serve better <br /> and extend a
            personalised experience.
          </span>
        </p>
      </div>

      <div className=" flex items-center mt-[54px]">
        <AiFillLike
          style={{ height: "16px", width: "16px" }}
          className="text-gray-800"
        />
        <h1 className="text-[16px] ms-[4px] ">RECOMONDED GROUPS</h1>
      </div>

      <div className="mt-[23px]">
        <div className="flex justify-between items-center my-[11px]">
          <div className="flex justify-start items-center ">
            <img
              src="p4.png"
              className="h-[36px] w-[36px] rounded-full"
              alt=""
            />
            <h1 className="text-[14px] ms-[12px]">Leisure</h1>
          </div>
          <button className="text-[12px] bg-[#EDEEF0] px-[12px] py-[4px] rounded-full ">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center my-[11px]">
          <div className="flex justify-start items-center ">
            <img
              src="p4.png"
              className="h-[36px] w-[36px] rounded-full"
              alt=""
            />
            <h1 className="text-[14px] ms-[12px]">Leisure</h1>
          </div>
          <button className="text-[12px] bg-[#EDEEF0] px-[12px] py-[4px] rounded-full ">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center my-[11px]">
          <div className="flex justify-start items-center ">
            <img
              src="p4.png"
              className="h-[36px] w-[36px] rounded-full"
              alt=""
            />
            <h1 className="text-[14px] ms-[12px]">Leisure</h1>
          </div>
          <button className="text-[12px] bg-[#EDEEF0] px-[12px] py-[4px] rounded-full ">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomenondedGroups;
