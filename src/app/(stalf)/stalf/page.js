"use client"
import BulkJoin from '@/component/admin/BulkJoin';
import SearchStalf from '@/component/admin/SearchStalf';
import StalfJoin from '@/component/admin/StalfJoin';
import BusenessPlan from '@/component/BusenessPlan';
import SearchAgent from '@/component/profile/searchAgent';
import DashboardStalf from '@/component/stalf/DashboardStalf';
import NavStalf from '@/component/stalf/NavStalf';
import AddAgent from '@/utils/Addagents';
import React, { useState } from 'react'

let  SetShowebleHomeStalf0 ;
export default function Admin() {
  const [loading, setloading] = useState(false)
   const [ShowebleHomeAdmin, SetShowebleHomeStalf] = useState("DashBoard");
     SetShowebleHomeStalf0 = SetShowebleHomeStalf
    let component;
    switch (ShowebleHomeAdmin) {
      case "DashboradAdmin":
        component = <DashboardStalf />;
        break;
      case "JoiningForm":
        component = <AddAgent setloading={setloading}/>;
        break;
      case "BusenessPlan":
        component = <BusenessPlan />;
        break;
      case "SearchAgent":
        component = <SearchAgent />;
        break;


      default:
        component = <DashboardStalf />;
        break;
    }
  return (
    <>
    <NavStalf />
    <div className="w-screen h-screen md:pt-26 pt-22 md:pl-94 p-4 overflow-y-scroll bg-[#f0fbff]">  
      {
       loading ? <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
       <div className="animate-spin h-12 w-12 border-t-4 border-blue-600 rounded-full"></div>
     </div> : component
      }
      <div className="max-md:w-full max-md:h-5"></div>
      </div> 
    </>
  )
}


export { SetShowebleHomeStalf0}