import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ModalPc = ({ isOpen, onClose }) => {
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
      isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="relative w-[750px] h-[497 px] rounded-lg">
              <button
                className="absolute top-[-50px] right-[-50px] m-4 p-1 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="">
                <div className="bg-[#EFFFF4] h-[50px] flex items-center justify-center w-full rounded-t-lg">
                  <p className="text-[#008A45] ">
                    Let's learn, share & inspire each other with our passion for
                    computer engineering. Sign up now 🤘🏼
                  </p>
                </div>
                <div className="flex justify-between px-[36px] pt-[24px]">
                  <h1 className="text-[24px] font-bold">Sign In</h1>
                  <h1>
                    Don't have an account ?{" "}
                    <span
                      className="text-[#2F6CE5] cursor-pointer"
                      onClick={() => setSignin(false)}
                    >
                      Create a new account for free!
                    </span>
                  </h1>
                </div>
                <div className="p-[36px]">
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="">
                      <div className="grid grid-cols-1 place-items-center">
                        <input
                          type="text"
                          className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-t-[#8A8A8A] h-[46px] text-[13px] p-[12px] rounded-t-lg"
                          placeholder="Email"
                          name=""
                          id=""
                        />

                        <div className="relative w-full">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handleInputChange}
                            className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-y-[#8A8A8A] h-[46px] text-[13px] p-[12px] rounded-b-lg"
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
                        <button className="bg-[#2F6CE5] py-[10px] w-full text-white rounded-full">
                          Create Account
                        </button>
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
                        <p className="text-[12px] font-semibold text-center mt-[23px] cursor-pointer">
                          Forgot password?
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        className="h-[320px] w-[320px]"
                        src="login.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl">
            <div className="relative w-[750px] h-[553px] rounded-lg">
              <button
                className="absolute top-[-50px] right-[-50px] m-4 p-1 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="">
                <div className="bg-[#EFFFF4] h-[50px] flex items-center justify-center w-full rounded-t-lg">
                  <p className="text-[#008A45] ">
                    Let's learn, share & inspire each other with our passion for
                    computer engineering. Sign up now 🤘🏼
                  </p>
                </div>
                <div className="flex justify-between px-[36px] pt-[24px]">
                  <h1 className="text-[24px] font-bold">Create Account</h1>
                  <h1>
                    Already have an account?{" "}
                    <span
                      className="text-[#2F6CE5] cursor-pointer"
                      onClick={() => setSignin(true)}
                    >
                      Sign In
                    </span>
                  </h1>
                </div>
                <div className="p-[36px]">
                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="">
                      <div className="grid grid-cols-1 place-items-center">
                        <div className="flex justify-center w-full ">
                          <input
                            type="text"
                            className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-t-[#8A8A8A]  h-[46px] text-[13px] p-[12px] rounded-tl-lg"
                            placeholder="First Name"
                            name=""
                            id=""
                          />
                          <input
                            type="text"
                            className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-t-[#8A8A8A] h-[46px] text-[13px] p-[12px] rounded-tr-lg"
                            placeholder="Last Name"
                            name=""
                            id=""
                          />
                        </div>
                        <input
                          type="text"
                          className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-t-[#8A8A8A] h-[46px] text-[13px] p-[12px]"
                          placeholder="Email"
                          name=""
                          id=""
                        />

                        <div className="relative w-full">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handleInputChange}
                            className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-t-[#8A8A8A] h-[46px] text-[13px] p-[12px]"
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
                          className="w-full bg-[#F7F8FA] border border-x-[#8A8A8A] border-y-[#8A8A8A] h-[46px] text-[13px] p-[12px] rounded-b-lg"
                          placeholder="Confirm Password"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="mt-[22px] flex justify-between items-center">
                        <button className="bg-[#2F6CE5] py-[10px] w-full text-white rounded-full">
                          Create Account
                        </button>
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
                      </div>
                    </div>
                    <div>
                      <img
                        className="h-[320px] w-[320px]"
                        src="login.png"
                        alt=""
                      />
                      <p className="text-[10px] text-center mt-[20px]">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPc;
