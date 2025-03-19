"use client"
import BulkJoin from '@/component/admin/BulkJoin';
import DashboradAdmin from '@/component/admin/DashboradAdmin';
import NavAdmin from '@/component/admin/NavAdmin'
import SearchStalf from '@/component/admin/SearchStalf';
import StalfJoin from '@/component/admin/StalfJoin';
import BusenessPlan from '@/component/BusenessPlan';
import JoiningForm from '@/component/profile/JoiningForm';
import SearchAgent from '@/component/profile/searchAgent';
import AddAgent from '@/utils/Addagents';
import React, { useState } from 'react'

let SetShowebleHomeAdmin0 ;
export default function Admin() {
  const [loading, setloading] = useState(false)
   const [ShowebleHomeAdmin, setShowebleHomeAdmin] = useState("DashBoard");
    SetShowebleHomeAdmin0 = setShowebleHomeAdmin
    let component;
    switch (ShowebleHomeAdmin) {
      case "DashboradAdmin":
        component = <DashboradAdmin />;
        break;
      case "BulkJoining":
        component = <BulkJoin setloading={setloading}/>;
        break;
      case "StalfJoin":
        component = <StalfJoin setloading={setloading}/>;
        break;
      case "JoiningForm":
        component = <AddAgent setloading={setloading}/>;
        break;
      case "BusenessPlan":
        component = <BusenessPlan />;
        break;

      case "SearchStalf":
        component = <SearchStalf />;
        break;
      case "SearchAgent":
        component = <SearchAgent />;
        break;


      default:
        component = <DashboradAdmin />;
        break;
    }
  return (
    <>
    <NavAdmin/>
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


export {SetShowebleHomeAdmin0}