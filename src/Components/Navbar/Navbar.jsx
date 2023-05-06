import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MobileModal from "../MobileModal/MobileModal";
import ModalPc from "../ModalPc/ModalPc";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <nav className="bg-white shadow">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Left: Item Name */}
            <div className="hidden md:flex items-center">
              <img src="atg.png" className="ms-[48px]" alt="" />
            </div>
          </div>

          {/* Center: Input Field */}
          <div className="hidden md:flex items-center justify-center w-full">
            <div className="relative w-360 h-42">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l5.3 5.3a1 1 0 11-1.414 1.414l-5.3-5.3A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                className="block w-[360px] h-[42px] pl-10 border border-gray-300 focus:outline-none focus:border-gray-400 text-[14px] rounded-full bg-[#F2F2F2]"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
          </div>

          {/* Right: Profile Picture and Name */}
          <div className="flex items-center min-w-[178px]">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://source.unsplash.com/random/50x50"
                alt="Profile"
              />
              <p className="ml-[12px] text-[14px] font-medium text-gray-700">
                Siddharth Goyal
              </p>
              <AiFillCaretDown className="ms-[4px]" />
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[16px] min-w-[183px] cursor-pointer">
              Create account.{" "}
              <span className="text-[#2F6CE5]" onClick={openModal}>
                It’s free!
              </span>
            </p>
          </div>
          {/* <MobileModal isOpen={isModalOpen} onClose={closeModal} /> */}
          <ModalPc isOpen={isModalOpen} onClose={closeModal}></ModalPc>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
