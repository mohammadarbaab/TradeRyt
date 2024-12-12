import React, { useState } from "react";
import Arrow_Forward from "../../../assests/arrow_forward.png";
import expand_more from "../../../assests/expand_more.png";
import search from "../../../assests/search.png";

function AddTradesForm({ closeModal }) {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = ["Stocks", "Options", "Futures", "Op.Strat."];
  return (
    <div className="bg-blue-400 rounded-md flex flex-row flex-wrap">
      <div className="flex flex-row w-[100%]">
        {/* side nav form */}
        <div
          className="flex flex-col w-[25%] h-[500px] py-2 px-3 bg-red-400 
        rounded-tl-[14px] rounded-bl-[14px]"
        >
          <div className="flex flex-row justify-start font-[700] text-[20px] leading-[27px]">
            Add a Trade
          </div>
          <div className="w-[full] bg-red-500 h-[40px] flex flex-row justify-between items-center px-2 mt-3 cursor-pointer">
            <p className="text-[16px] font-[500] leading-[21px]">
              Manual Entry
            </p>
            <img
              src={Arrow_Forward}
              className="w-[20px] h-[20px]"
              alt="arrow"
            ></img>
          </div>
          {/* here another set options add */}
          {/* <div>2</div>
          <div>3</div> */}
        </div>
        {/* side nav end here */}
        {/* content start here */}
        <div className="w-[75%] bg-orange-300 flex flex-col px-2 py-2 rounded-tr-[14px] rounded-br-[14px] gap-2">
          <div className="flex flex-wrap justify-between items-center px-2 bg-green-300">
            <div className="flex flex-wrap gap-2 items-center bg-red-500">
              <p className="font-[400] text-[20px] leading-[27px]">
                Manually Enter Your Trade
              </p>
              <div className="w-[180px] flex flex-wrap justify-between px-[15px]  items-center border border-[#41B18F4D] rounded-[6px] h-[40px]">
                <p>My Portfolios</p>
                <img
                  src={expand_more}
                  alt="drop_arrow"
                  className="flex items-center"
                />
              </div>
            </div>
            <button
              className=" top-2 right-2 text-gray-500 hover:text-black
                w-[40px] h-[40px] border rounded-[200px] border-[#DEDEDE]"
              onClick={closeModal}
            >
              &#10005;
            </button>
          </div>
          <div className="flex flex-row flex-wrap border bg-blue-900">
            <div className="flex flex-col rounded-tl-[14px] rounded-bl-[14px] border w-[50%] px-2 py-2 gap-1">
              <div className="">
                <label className="text-[12px] font-[400] leading-[16px] text-[#B0BAC9]">
                  Market
                </label>
                <div className="flex flex-row gap-2">
                  {buttons.map((button, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveButton(index)}
                      className={`w-[70px] h-[40px] rounded-[6px] font-[500] text-[14px] text-center leading-[24px] ${
                        activeButton === index
                          ? "bg-[#41B18F] text-[#FFFFFF]"
                          : "bg-white text-[#41B18F] border border-[#41B18F]"
                      }`}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-[400] leading-[16px] text-[#B0BAC9]">
                  Symbol
                </label>
                <div className="relative">
                  <input
                    className="w-full h-[35px] border rounded-[6px] px-2 pr-8 bg-[#41B18f] text-[14px] text-[#000] placeholder-[#B0BAC9] outline-none"
                    placeholder="Search Symbol"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B0BAC9]">
                    {/* Search Icon */}
                    <img src={search} alt="search-logo" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-[400] leading-[16px] text-[#B0BAC9]">
                  Action
                </label>
                <div className="flex flex-row gap-1">
                  <button className="w-[140px] h-[40px] border border-[#009792] rounded-[6px] font-[600] text-[16px] text-center text-[#009792] ">
                    Buy
                  </button>
                  <button className="w-[140px] h-[40px] border border-[#009792] rounded-[6px] font-[600] text-[16px] text-center text-[#009792] ">
                    Sell
                  </button>
                </div>
                <div className="flex flex-row gap-1">
                  <input
                    className="w-[132px] h-[40px] border border-[#009792] rounded-[6px] font-[600] text-[16px] r text-[#2E384D] px-2"
                    placeholder="₹0.00"
                  />
                  <input
                    className="w-[135px] h-[40px] border border-[#009792] rounded-[6px] font-[600] text-[16px]  text-[#2E384D] px-2"
                    placeholder="₹0.00"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-[400] leading-[16px] text-[#B0BAC9]">
                  Share/Contracts
                </label>
                <div className="relative">
                  <input
                    className="w-full h-[35px] border rounded-[6px] px-2 pr-8 bg-[#41B18f] text-[14px] text-[#000] placeholder-[#B0BAC9] outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-[400] leading-[16px] text-[#B0BAC9]">
                  Commission
                </label>
                <div className="relative">
                  <input
                    className="w-full h-[35px] border rounded-[6px] px-2 pr-8 bg-[#41B18f] text-[14px] text-[#000] placeholder-[#B0BAC9] outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-[400] leading-[16px] text-[#B0BAC9]">
                  Fees
                </label>
                <div className="relative">
                  <input
                    className="w-full h-[35px] border rounded-[6px] px-2 pr-8 bg-[#41B18f] text-[14px] text-[#000] placeholder-[#B0BAC9] outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
            <div className="w-[50%] flex flex-col rounded-tr-[14px] rounded-br-[14px] border">
              right
            </div>
          </div>
        </div>
        {/* content end here */}
      </div>
    </div>
  );
}

export default AddTradesForm;
