"use client";
import { SetShowebleHomeAdmin0 } from "@/app/(admin)/admin/page";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function NavAdmin() {
  const router =  useRouter()
  return (
    <>
      <nav className="fixed top-0 left-0 bg-[#e4f8ff] shadow-lg z-40">
        <div id="notification" className="h-8 w-screen bg-[#0A0037]">
            {/* <marquee behavior="alternate" direction="left" className=" text-amber-300">hello every one</marquee> */}
        </div>
        <div className="container h-16 mx-auto flex justify-between items-center">
         
          <Link href="/" className="text-white text-xl md:flex font-bold">
            <div className="relative h-20 w-40  md:h-25 md:w-50 ">
              <Image
                src="/home/nav/Kishalay Care Logo Nav.png"
                fill={true}
                sizes="(w-full h-full)"
                alt="Kishalay"
                className=" object-contain"
                priority
              />
            </div>
          </Link>
          <div  className="flex justify-between items-center space-x-2 md:mr-0 mr-7 cursor-pointer" onClick={() =>{
            let confirmation = confirm("Are you want to Logout ? ")
           
           if (confirmation) {
             Cookies.remove('user', { path: '/' })
             Cookies.remove('jwt', { path: '/' })
             router.push('/')
            }

          }}>
          <span>Log out </span>
        <div className="h-8 w-8 ">
          <img src="/settings.png" alt="login" />
        </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={` absolute p-6 top-24 left-0 h-screen w-80 shadow-xl overflow-hidden flex flex-col space-y-2 bg-[#e4f8ff] duration-300 gap-1`}
        >
          <div className="text-black group py-0.5 text-xl font-semibold pl-2 w-full cursor-pointer" onClick={() =>{            
          }}>
           <div className=" hover:bg-blue-300 px-4 py-1 rounded-xl">Team</div>
            <div className=" cursor-pointer group-hover:h-32 group-hover:pt-2 group-hover:pl-4 h-0 text-lg flex flex-col gap-1 overflow-hidden duration-300">
                  <div className="w-5/6 pl-4 py-1 hover:bg-blue-300 rounded-xl" 
                  onClick={() =>{
                    SetShowebleHomeAdmin0("JoiningForm")
                  }}
                  >New Joing</div>
                  <div className="w-5/6 pl-4 py-1 hover:bg-blue-300 rounded-xl"
                  onClick={() =>{
                    SetShowebleHomeAdmin0("SearchAgent")
                  }}
                  >Search User</div>
                  <div className="w-5/6 pl-4 py-1 hover:bg-blue-300 rounded-xl" onClick={() =>{
                     SetShowebleHomeAdmin0("BulkJoining")
                  }}>Bulk Join</div>
            </div>
          </div>
          <div className="text-black group py-0.5 text-xl font-semibold pl-2 w-full cursor-pointer" onClick={() =>{
          }}>
             <div className=" hover:bg-blue-300 px-4 py-1 rounded-xl">Office User</div>
            <div className=" cursor-pointer group-hover:h-22 group-hover:pt-2 group-hover:pl-4 h-0 text-lg flex flex-col gap-1 overflow-hidden duration-300">
                  <div className="w-5/6 pl-4 py-1 hover:bg-blue-300 rounded-xl"
                  onClick={() =>{
                    SetShowebleHomeAdmin0("StalfJoin")
                  }}
                  >Add User</div>
                  <div className="w-5/6 pl-4 py-1 hover:bg-blue-300 rounded-xl"
                  onClick={() =>{
                    SetShowebleHomeAdmin0("SearchStalf")
                  }}
                  
                  >Search User</div>
            </div>
          </div>
          <div className="text-black group py-0.5 text-xl font-semibold pl-2 w-full cursor-pointer" onClick={() =>{
          }}>
            <div className="hover:bg-blue-300 px-4 py-1 rounded-xl">Business Plan</div>
            <div className=" cursor-pointer group-hover:h-30 group-hover:pt-2 group-hover:pl-4 h-0 text-lg flex flex-col gap-1 overflow-hidden duration-300">
                  <div className="w-5/6 pl-4 py-1 hover:bg-blue-300 rounded-xl" onClick={() =>{
                SetShowebleHomeAdmin0("BusenessPlan")
            }}>View Plan</div>
                  <div className="w-5/6 pl-4 py-1 hover:bg-blue-300 rounded-xl">Manage Plan</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
