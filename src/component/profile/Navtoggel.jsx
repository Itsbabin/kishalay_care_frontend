"use client";
import React from "react";
import Image from "next/image";

export default function Navtoggel() {
  return (
    <>
      <div
        className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5"
        onClick={() => {
          // setShowebleHome("Dashborad")
        }}
      >
        <div className="relative h-10 w-8 ">
          <Image
            src="/profile/nav/dashboard.png"
            fill={true}
            sizes="( h-full)"
            alt="Kishalay"
            className=" object-contain"
          />
        </div>
        <div className="text-lg font-medium ">Dashboard</div>
      </div>
      <div className=" group mb-3 max-h-max w-[90%] flex justify-baseline pl-8 duration-300 rounded-lg items-center cursor-pointer flex-wrap">
        <div className="relative h-10 w-8">
          <Image
            src="/profile/nav/team.png"
            fill={true}
            sizes="( h-full)"
            alt="team"
            className="object-contain"
          />
        </div>
        <div className="text-lg font-medium pl-[20px]">Team</div>
        <div className="group-hover:h-25 h-0 w-full overflow-hidden rounded-xl flex duration-300 justify-baseline items-start flex-col">
          <div
            className="p-1 w-full gap-1 pl-5 flex justify-baseline items-center rounded-lg hover:bg-[#A3E5FF] duration-200"
            onClick={() => {
              // setShowebleHome("AddNew")
            }}
          >
            {" "}
            <span className="dot2 mr-4"></span>
            <span>Add New</span>
          </div>
          <div
            className="p-1 w-full gap-1 pl-5 flex justify-baseline items-center rounded-lg hover:bg-[#A3E5FF] duration-200"
            onClick={() => {
              // setShowebleHome("ShowTeam")
            }}
          >
            {" "}
            <span className="dot2 mr-4"></span>
            <span>Show Team</span>
          </div>
          <div
            className="p-1 w-full gap-1 pl-5 flex justify-baseline items-center rounded-lg hover:bg-[#A3E5FF] duration-200"
            onClick={() => {
              // setShowebleHome("SearchMember")
            }}
          >
            {" "}
            <span className="dot2 mr-4"></span>
            <span>Search Member</span>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5">
        <div className="relative h-10 w-8 ">
          <Image
            src="/profile/nav/store.png"
            fill={true}
            sizes="( h-full)"
            alt="store"
            className=" object-contain"
          />
        </div>
        <div className="text-lg font-medium">Online Store</div>
      </div>

      <div className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5">
        <div className="relative h-10 w-8 ">
          <Image
            src="/profile/nav/Busenessplan.png"
            fill={true}
            sizes="( h-full)"
            alt="team"
            className=" object-contain"
          />
        </div>
        <div className="text-lg font-medium">Business Plan</div>
      </div>
      <div className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5">
        <div className="relative h-10 w-8 ">
          <Image
            src="/profile/nav/wallet-5.png"
            fill={true}
            sizes="( h-full)"
            alt="team"
            className=" object-contain"
          />
        </div>
        <div className="text-lg font-medium">Wallet</div>
      </div>
      <div className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5">
        <div className="relative h-10 w-8 ">
          <Image
            src="/profile/nav/moderator.png"
            fill={true}
            sizes="( h-full)"
            alt="team"
            className=" object-contain"
          />
        </div>
        <div
          className="text-lg font-medium"
          onClick={() => {
            //   setShowebleHome("Profile")
          }}
        >
          Profile
        </div>
      </div>
      <div className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5">
        <div className="relative h-10 w-8 ">
          <Image
            src="/profile/nav/blogger.png"
            fill={true}
            sizes="( h-full)"
            alt="team"
            className=" object-contain"
          />
        </div>
        <div className="text-lg font-medium">Blogs</div>
      </div>
    </>
  );
}
