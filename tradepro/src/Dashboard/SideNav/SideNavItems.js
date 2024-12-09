import { useState } from "react";

export default function SidebarItem({ activeItem, setActive, icon, label, itemKey }) {
  return (
    <div
      className={`relative w-full h-[60px] flex flex-row justify-start items-center px-[32px] gap-[12px] ${
        activeItem === itemKey ? "font-bold" : ""
      }`}
      onClick={() => setActive(itemKey)}
    >
      {/* Left Border */}
      {activeItem === itemKey && (
        <div className="absolute left-0 top-[50%] transform -translate-y-[50%] h-[38px] w-[4px] bg-[#4745A4]"></div>
      )}
      <img src={icon} alt="icon" />
      <p className="text-[16px] text-[#2E384D] cursor-pointer">{label}</p>
    </div>
  );
}

