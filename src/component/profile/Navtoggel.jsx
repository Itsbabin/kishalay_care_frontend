"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SetShowebleHome0 } from "@/app/(profile)/profile/page";

export default function Navtoggel({ setToggel }) {
  const [teamitemHeight, setTeamitemHeight] = useState("h-0");

  return (
    <>
      <div
        className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5"
        onClick={() => {
          SetShowebleHome0("Dashborad");
          setToggel("w-[0px]");
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
      <div
        className=" group mb-3 max-h-max w-[90%] flex justify-baseline pl-8 duration-300 rounded-lg items-center cursor-pointer flex-wrap"
        onClick={() => {
          teamitemHeight == "h-0" ? setTeamitemHeight("h-25") : setTeamitemHeight("h-0");
        }}
      >
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
        <div className={`group-hover:h-25 ${teamitemHeight} w-full overflow-hidden rounded-xl flex duration-300 justify-baseline items-start flex-col`}>
          <div
            className="p-1 w-full gap-1 pl-5 flex justify-baseline items-center rounded-lg hover:bg-[#A3E5FF] duration-200"
            onClick={() => {
              SetShowebleHome0("JoiningForm");
              teamitemHeight == "h-0" ? setTeamitemHeight("h-25") : setTeamitemHeight("h-0");
              setToggel("w-[0px]");
            }}
          >
            <span className="dot2 mr-4"></span>
            <span>Add New</span>
          </div>
          <div
            className="p-1 w-full gap-1 pl-5 flex justify-baseline items-center rounded-lg hover:bg-[#A3E5FF] duration-200"
            onClick={() => {
              SetShowebleHome0("DownlineChain");
              teamitemHeight == "h-0" ? setTeamitemHeight("h-25") : setTeamitemHeight("h-0");
              setToggel("w-[0px]");
            }}
          >
            <span className="dot2 mr-4"></span>
            <span>Show Team</span>
          </div>
          <div
            className="p-1 w-full gap-1 pl-5 flex justify-baseline items-center rounded-lg hover:bg-[#A3E5FF] duration-200"
            onClick={() => {
              SetShowebleHome0("SearchMember");
              teamitemHeight == "h-0" ? setTeamitemHeight("h-25") : setTeamitemHeight("h-0");
              setToggel("w-[0px]");
            }}
          >
            {" "}
            <span className="dot2 mr-4"></span>
            <span>Search Member</span>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div
        className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5"
        onClick={() => setToggel("w-[0px]")}
      >
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

      <div
        className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5"
        onClick={() =>{
          setToggel("w-[0px]")
          SetShowebleHome0("BusenessPlan")
        }}
      >
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
      <div
        className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5"
        onClick={() => setToggel("w-[0px]")}
      >
        <div className="relative h-10 w-8 ">
          <Image
            src="/profile/nav/wallet-5.png"
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
            setToggel("w-[0px]");
          }}
        >
          Profile
        </div>
      </div>
      <div
        className=" mb-3 max-h-max w-[90%] flex justify-baseline pl-8 hover:bg-[#A3E5FF] duration-300 rounded-lg items-center cursor-pointer gap-5"
        onClick={() => setToggel("w-[0px]")}
      >
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
