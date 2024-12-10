import React from "react";
import SideNav from "./SideNav/SideNav";
import DashHome from "./Pages/DashHome";

function Dashboard() {
  return (
    <div className="flex flex-row gap-3">
      <div className="">
        <SideNav />
      </div>
      <div className="w-full bg-red-300">
        <DashHome />
      </div>
      {/* <div className="flex flex-row gap-2">
          <div className="">1</div>
          <div className="">2</div>
        </div> */}
    </div>
  );
}

export default Dashboard;
