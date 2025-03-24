"use client";
import BulkJoining from "@/component/admin/BulkJoin";
import BusenessPlan from "@/component/BusenessPlan";
import DashBoard from "@/component/profile/DashBoard";
import DownlineChain from "@/component/profile/DownlineChain";
import JoiningForm from "@/component/profile/JoiningForm";
import NavProfile from "@/component/profile/NavProfile";
import Userprofile from "@/component/profile/Userprofile";
import DatePicker1 from "@/utils/Datepicker";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";

let SetShowebleHome0;

export default function Page() {
  const [ShowebleHome, setShowebleHome] = useState("DashBoard");
  SetShowebleHome0 = setShowebleHome;
  let component;
  switch (ShowebleHome) {
    case "Dashborad":
      component = <DashBoard />;
      break;

    case "JoiningForm":
      component = <JoiningForm />;
      break;

    case "BulkJoining":
      component = <BulkJoining />;
      break;

    case "DownlineChain":
      component = <DownlineChain />;
      break;
    case "BusenessPlan":
      component = <BusenessPlan />;
      break;
    case "Profile":
      component = < Userprofile/>;
      break;
    
    case "Maintanense":
        
        component = <DashBoard />;
      break;


    default:
      component = <DashBoard />;
      break;

  }
  
  return (
    <>
     <NavProfile/>
     <div className="w-screen h-screen md:pt-23 pt-22 md:pl-84 p-4 overflow-y-scroll bg-[#f0fbff]">  
      {
        component

      }
      <div className="max-md:w-full max-md:h-5"></div>
      </div> 
    </>
  );
}

export { SetShowebleHome0 };
