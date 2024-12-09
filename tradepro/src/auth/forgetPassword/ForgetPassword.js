import React from "react";
import tradeLogo from "../../assests/tradeLogo.png";
import new_release from "../../assests/new_releases.png"

function ForgetPassword() {
  return (
    <div className="flex justify-center items-center w-full h-[618px] bg-[#352E6B]">
      <div className="w-[500px] h-[430px] flex-col rounded-[14px] border justify-center items-center flex bg-[white]">
        <div className="flex flex-row gap-[6px] justify-start">
          <img src={tradeLogo} className="w-[52px]" />
          <h1 className="text-[34px] font-[600] leading-[47px] tracking-[1.37px] text-[#00000099]">
            TradeRyt
          </h1>
        </div>
        <div className="flex flex-col gap-[24px] mt-8 w-full justify-center px-[48px]">
          <div className="font-[600] text-[24px] leading-[24px] text-[#574CB1] text-center">
            Forget Password
          </div>
          <div className="flex flex-col gap-[2px] justify-start">
            <label className="text-[12px] font-[400] text-[#67676799] tracking-[-0.14px;] leading-[19.12px]">
              Email
            </label>
            <input
              type="text"
              // placeholder="Enter your first name"
              className="w-full p-[10px] rounded-[4px] border-[1px] border-[#67676799] h-[44px]"
            />
          </div>
          <button className="justify-center items-center rounded-[4px] flex w-full bg-[#574CB1] h-[44px] text-[white] text-[16px] font-[500]">
            Send
          </button>
        </div>
        <div className="flex mt-[20px] px-[48px] flex-col gap-[20px]">
          <button className="justify-center items-center rounded-[4px] border- flex w-full text-[#2E384D] font-[600] text-[16px] leading-[21px]">
            Back to Login
          </button>
          <div className="flex flex-row gap-[8px] justify-start items-center">
          <img src={new_release} alt="logo"/>
            <p className="text-[#41B18F] text-[18px] font-[500] leading-[15px] text-center">Check your Email to reset your password.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
