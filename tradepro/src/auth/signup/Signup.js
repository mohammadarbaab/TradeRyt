import React from "react";
import tradeLogo from "../../assests/tradeLogo.png";
import googleLogo from "../../assests/googleLogo.png";

function Signup() {
  return (
    <div className="flex flex-wrap lg:flex-row lg:pl-[57px] lg:pt-[57px] lg:pb-[57px] lg:pr-[150px] lg:gap-[130px] bg-[#352e6b]">
      {/* signup main div start here*/}
      <div className="lg:w-[460px] lg:h-[850px] lg:rounded-[16px] border border-black border-opacity-15 bg-white pt-[40px] px-[52px]">
        {/* inner div signup */}
        <div className="flex flex-wrap flex-col gap-6">
          <div className="flex flex-row gap-[6px] justify-start">
            <img src={tradeLogo} className="w-[52px]" />
            <h1 className="text-[34px] font-[600] leading-[47px] tracking-[1.37px] text-[#00000099]">
              TradeRyt
            </h1>
          </div>
          <div className="flex flex-wrap justify-start text-[32px] font-[600] tracking-[-0.22px]">
            Sign In
          </div>
        </div>
        {/* top section end here */}
        <div className="mt-3 flex flex-wrap flex-col gap-[14px]">
          <div className="flex flex-col gap-[2px] justify-start">
            <label className="text-[12px] font-[400] text-[#00000099] tracking-[-0.14px;] leading-[19.12px]">
              First Name
            </label>
            <input
              type="text"
              // placeholder="Enter your first name"
              className="w-full p-[10px] rounded-[4px] border-[1px] border-[#67676799] h-[44px]"
            />
          </div>
          <div className="flex flex-col gap-[2px] justify-start">
            <label className="text-[12px] font-[400] text-[#00000099] tracking-[-0.14px;] leading-[19.12px]">
              Email
            </label>
            <input
              type="text"
              // placeholder="Enter your first name"
              className="w-full p-[10px] rounded-[4px] border border-[#67676799] h-[44px]"
            />
          </div>
          <div className="flex flex-col gap-[2px] justify-start">
            <label className="text-[12px] font-[400] text-[#00000099] tracking-[-0.14px;] leading-[19.12px]">
              Username
            </label>
            <input
              type="text"
              // placeholder="Enter your first name"
              className="w-full p-[10px] rounded-[4px] border border-[#67676799] h-[44px]"
            />
          </div>
          <div className="flex flex-col gap-[2px] justify-start">
            <label className="text-[12px] font-[400] text-[#00000099] tracking-[-0.14px;] leading-[19.12px]">
              Password
            </label>
            <input
              type="text"
              // placeholder="Enter your first name"
              className="w-full p-[10px] rounded-[4px] border border-[#67676799] h-[44px]"
            />
          </div>
        </div>
        <div className="pt-[28px] flex flex-col flex-wrap gap-[30px]">
          <div className="w-full h-[24px] flex flex-row gap-[13px] justify-start items-center">
            <input
              type="checkbox"
              id="admin"
              name="roles"
              value="admin"
              className="h-[20px] w-[20px] text-[#000000B2] border-[#574CB1] border-[5px] rounded focus:ring-indigo-500"
            />
            <p className="text-[14px]">
              I have read and agree to the{" "}
              <b className="font-[500] text-[#574CB1] text-[14px] ">
                Terms and Conditions
              </b>{" "}
            </p>
          </div>

          <div className="">
            <button className=" w-full h-[44px] rounded-[10px] bg-[#574CB1] text-[#FFFFFF] font-[500]">
              Sign Up
            </button>
          </div>

          <div className="">
            <button className="w-full h-[44px] text-[14px] rounded-[2px] text-[#2E384D] font-[500] flex flex-row justify-center items-center gap-[10px] border-[#8798AD] border-[2px]">
              <img src={googleLogo} alt="GoogleLogo" />
              Sign In With Google
            </button>
          </div>
          <div className="flex flex-col flex-wrap justify-center items-center gap-[8px]">
            <p className="font-[400] text-[14px] leading-[16px] text-[#8798AD]">
              Already a user?
              <span className="text-[#574CB1] font-bold ml-2">Login</span>
            </p>
            <p className="font-[400] text-[14px] leading-[16px] text-[#8798AD]">
              By clicking ‘Sign Up’ you agree to our{" "}
              <b className="text-[#2E384D]">Terms of Use</b>
            </p>
          </div>
        </div>
      </div>
      {/* signup main div end here */}

      <div className="lg:w-[460px] lg:h-[850px] lg:rounded-[16px] flex flex-col justify-center items-center">
        <div className="w-[420px] h-[230px] bg-[#FFFFFF] rounded-[10px] flex justify-center items-center">
          <div className="w-[400px] h-[220px] bg-[#FFFFFF] opacity-[50%] rounded-[10px] mb-4 -mt-4 flex justify-center items-center">
            <div className="w-[380px] h-[210px] bg-[#FFFFFF] opacity-[50%] rounded-[10px] mb-4 -mt-4"></div>
          </div>
        </div>

        <div className="w-[400px] h-[140px] rounded-[10px] flex flex-col justify-center items-center text-[#FFFFFF] gap-3 mt-8">
          <p className="font-[600] text-[24px]">Meet the New Trading Journal</p>
          <p className="font-[400] text-[18px] text-center text-[#FFFFFF99] w-[420px]">
            Revolutionize your trading experience with our cutting-edge
            journaling software. Effortlessly track, analyze, and optimize your
            trades for success and growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
