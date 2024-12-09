import React from "react";
import { useState } from "react";
import tradeLogo from "../../assests/tradeLogo.png";
import dashLogo from "../../assests/dashLogo.png";
import journalicon from "../../assests/journalicon.png";
import reporticon from "../../assests/reporticons.png";
import calenderIcon from "../../assests/calendeIcon.png";
import configicon from "../../assests/configicons.png";
import accounticon from "../../assests/accounticons.png";
import helpicon from "../../assests/helpicons.png";
import logoutIcon from "../../assests/Logouticons.png";
import SidebarItem from "./SideNavItems";
function SideNav() {
  const [activeItem, setActive] = useState("dashboard");
  const items = [
    { key: "dashboard", label: "Dashboard", icon: dashLogo },
    { key: "journal", label: "Journal", icon: journalicon },
    { key: "reports", label: "Reports", icon: reporticon },
    { key: "calendar", label: "Calendar", icon: calenderIcon },
    { key: "configuration", label: "Configuration", icon: configicon },
    { key: "account", label: "Account", icon: accounticon },
    { key: "help", label: "Help", icon: helpicon },
    { key: "logout", label: "Log Out", icon: logoutIcon },
  ];

  return (
    <div
      className="w-[220px] h-[900px] flex flex-col justify-between"
      style={{ boxShadow: "4px 0px 12px 0px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Logo Section */}
      <div>
        <div className="flex flex-row gap-[6px] justify-center pt-[35px]">
          <img src={tradeLogo} className="w-[42px] h-[42px]" />
          <h1 className="text-[24px] font-[600] leading-[47px] tracking-[1.37px] text-[#00000099]">
            TradeRyt
          </h1>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col mt-4">
          {items.slice(0, 5).map((item) => (
            <SidebarItem
              key={item.key}
              activeItem={activeItem}
              setActive={setActive}
              icon={item.icon}
              label={item.label}
              itemKey={item.key}
            />
          ))}
        </div>
      </div>

      {/* Bottom Items */}
      <div className="flex flex-col">
        {items.slice(5).map((item) => (
          <SidebarItem
            key={item.key}
            activeItem={activeItem}
            setActive={setActive}
            icon={item.icon}
            label={item.label}
            itemKey={item.key}
          />
        ))}
      </div>
    </div>
  );
}

export default SideNav;
