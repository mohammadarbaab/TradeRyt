import React from "react";
import add_circle from "../../assests/add_circle.png";
import profile_pic from "../../assests/profile_picture.png";
import arrow_down from "../../assests/arrow-down.png";
import nodataicon from "../../assests/no data icon.png";
import bgAddtreders from "../../assests/bg-add-rades.png";

function DashHome() {
  return (
    <div className="flex flex-col mt-10 gap-10">
      <div className="flex flex-row gap-4 justify-end items-center pr-4">
        <div className="w-[403px] h-[52px] border border-[#DEDEDE] rounded-[14px] flex flex-row gap-[8px] justify-center items-center bg-[#FFFFFF]">
          <button className="border-[1px] border-[#8798AD] w-[103px] text-[#8798AD] rounded-[8px] h-[38px] leading-[24px]">
            Symbol
          </button>
          <button className="border-[1px] border-[#8798AD] w-[93px] text-[#8798AD] rounded-[8px] h-[38px] leading-[24px]">
            Setup
          </button>
          <button className="border-[1px] border-[#8798AD] w-[81px] text-[#8798AD] rounded-[8px] h-[38px]">
            Side
          </button>

          <div
            className="w-[87px] h-[52px] flex justify-center items-center flex-row gap-[6px] border-l"
            style={{ boxShadow: "-4px 0px 8px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={add_circle} alt="add-logo" />
            <p className="text-[16px] font-[400] text-[#8798AD]">Add</p>
          </div>
        </div>
        <button className="w-[150px] h-[41px] rounded-[6px] bg-[#4159B1] text-[#FFFFFF] font-[600] text-[16px] text-center leading-[21px]">
          Add Trades
        </button>
        <div className="flex flex-row gap-2 w-[234px] h-[52px] border rounded-[14px] bg-[#FFFFFF]">
          <img src={profile_pic} alt="lg" className="pl-2 py-1" />
          <div className="flex flex-row gap-2 justify-center items-center bg-[#FFFFFF] ">
            <button className="w-[165px] h-[44px] border py-2 rounded-[10px] flex flex-row justify-center items-center font-[400] text-[16px] gap-2 text-[#2E384D] bg-[#FFFFFF]">
              My Portfolio 1
              <img
                src={arrow_down}
                alt="arrow_down"
                className="h-[24px] w-[24px] bg-[#FFFFFF]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div
          className="flex flex-col gap-8 w-[700px] h-[590px] justify-center items-center"
          style={{
            backgroundImage: `url(${bgAddtreders})`,
            backgroundSize: "contain", // Make the image fit without cropping
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent the image from repeating
            backgroundColor: "#FFFFFF33",
            backdropFilter: "blur(25px)",
            borderRadius: "10px",
          }}
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={nodataicon} className="w-[152px] h-[152px]" />
            <p className="font-[600] text-[16px] text-center leading-[27px] w-[300px]">
              Every journey starts with a first step! Start by adding your first
              trade.
            </p>
          </div>
          <button className="w-[130px] h-[41px] rounded-[6px] bg-[#4159B1] text-[#FFFFFF] font-[600] text-[16px] text-center leading-[21px]">
            Add Trades
          </button>
        </div>

        <div>2</div>
      </div>
    </div>
  );
}

export default DashHome;
