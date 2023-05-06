import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MobileModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signIn, setSignin] = useState(false);

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };

  if (signIn) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          isOpen ? "visible" : "invisible"
        } transition-all duration-300`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="fixed bottom-0 w-full px-[20px] pb-4 bg-white  rounded-t-lg shadow-lg">
          <div className="flex justify-between items-center border-b border-gray-200 py-2">
            <h2 className="text-[18px] font-bold text-gray-800  ml-2">
              Welcome Back
            </h2>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#212529] text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            >
              X
            </button>
          </div>
          <div className="py-4">
            <div className="grid grid-cols-1 place-items-center">
              <input
                type="text"
                className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-t-[#8A8A8A] h-[40px] text-[13px] p-[12px]"
                placeholder="Email"
                name=""
                id=""
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleInputChange}
                  className="w-full bg-[#F7F8FA] border border-[#8A8A8A] h-[40px] text-[13px] p-[12px]"
                  placeholder="Password"
                  name=""
                  id=""
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 bg-transparent hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  onClick={handleToggleClick}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="mt-[22px] flex justify-between items-center">
              <div>
                <button className="bg-[#2F6CE5] py-[10px] px-[28px] text-white rounded-full">
                  Sign in
                </button>
              </div>
              <div className="cursor-pointer" onClick={() => setSignin(false)}>
                <p className="text-[13px] text-[#495057] underline">
                  or, Create Account
                </p>
              </div>
            </div>
            <div className="mt-[22px]">
              <button className="flex justify-center items-center text-[13px] w-full py-[12px] border border-inherit rounded-sm">
                <img
                  src="fb.png"
                  className="h-[16px] w-[16px] mr-[10px]"
                  alt=""
                />
                Sign in with Facebook
              </button>

              <button className="flex justify-center items-center text-[13px] w-full py-[12px] mt-[12px] border border-inherit rounded-sm">
                <img
                  src="ggl.png"
                  className="h-[16px] w-[16px] mr-[10px]"
                  alt=""
                />
                Sign in with Google
              </button>
              <p className="text-[11px] text-center mt-[22px] pb-[92px] font-semibold">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      } transition-all duration-300`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="fixed bottom-0 w-full px-[20px] pb-4 bg-white  rounded-t-lg shadow-lg">
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <h2 className="text-[18px] font-bold text-gray-800  ml-2">
            Create Account
          </h2>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#212529] text-white font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          >
            X
          </button>
        </div>
        <div className="py-4">
          <div className="grid grid-cols-1 place-items-center">
            <div className="flex justify-center w-full">
              <input
                type="text"
                className="w-full bg-[#F7F8FA] border border-[#8A8A8A] h-[40px] text-[13px] p-[12px]"
                placeholder="First Name"
                name=""
                id=""
              />
              <input
                type="text"
                className="w-full bg-[#F7F8FA] border border-[#8A8A8A] h-[40px] text-[13px] p-[12px]"
                placeholder="Last Name"
                name=""
                id=""
              />
            </div>
            <input
              type="text"
              className="w-full bg-[#F7F8FA] border border-[#8A8A8A] h-[40px] text-[13px] p-[12px]"
              placeholder="Email"
              name=""
              id=""
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleInputChange}
                className="w-full bg-[#F7F8FA] border border-[#8A8A8A] h-[40px] text-[13px] p-[12px]"
                placeholder="Password"
                name=""
                id=""
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 bg-transparent hover:text-gray-900 focus:outline-none focus:text-gray-900"
                onClick={handleToggleClick}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <input
              type="password"
              onChange={handleInputChange}
              className="w-full bg-[#F7F8FA] border border-[#8A8A8A] h-[40px] text-[13px] p-[12px]"
              placeholder="Confirm Password"
              name=""
              id=""
            />
          </div>
          <div className="mt-[22px] flex justify-between items-center">
            <div>
              <button className="bg-[#2F6CE5] py-[10px] px-[28px] text-white rounded-full">
                Create Account
              </button>
            </div>
            <div className="cursor-pointer" onClick={() => setSignin(true)}>
              <p className="text-[13px] text-[#495057] underline">
                or, Sign In
              </p>
            </div>
          </div>
          <div className="mt-[22px]">
            <button className="flex justify-center items-center text-[13px] w-full py-[12px] border border-inherit rounded-sm">
              <img
                src="fb.png"
                className="h-[16px] w-[16px] mr-[10px]"
                alt=""
              />
              Sign up with Facebook
            </button>

            <button className="flex justify-center items-center text-[13px] w-full py-[12px] mt-[12px] border border-inherit rounded-sm">
              <img
                src="ggl.png"
                className="h-[16px] w-[16px] mr-[10px]"
                alt=""
              />
              Sign up with Google
            </button>
            <p className="text-[11px] text-center mt-[22px]">
              By signing up, you agree to our Terms & <br /> conditions, Privacy
              policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
