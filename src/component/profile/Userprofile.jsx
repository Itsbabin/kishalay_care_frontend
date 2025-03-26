"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import UserDetails from "./UserDetails";
import EditProfile from "./EditProfile";
import SettingsProfile from "./SettingsProfile";
import KycProfile from "./KycProfile";

export default function Userprofile() {
  const [loading, setLoading] = useState(false)
  const [user, setuser] = useState(null);
  const [showinprofile, setShowinprofile] = useState("profile");
  const [toggel, settoggel] = useState("hidden")

  let component;
  switch (showinprofile) {
    case "profile":
      component = <UserDetails user={user} setLoading={setLoading} />;
      break;
    case "edit":
      component = <EditProfile setLoading={setLoading}/>;
      break;
    case "settings":
      component = <SettingsProfile />;
      break;

    case "kyc":
      component = <KycProfile />;
      break;

    default:
      break;
  }

  useEffect(() => {
    let cookie = Cookies.get("user");

    let json = cookie ? JSON.parse(cookie) : null;
    setuser(json);
  }, []);
  const router = useRouter();
  return (
    <>
      <div className="w-full relative h-50 bg bg-blue-600 p-1.5 flex flex-col">
        <label className=" bg-black relative top-8 w-37 h-37 ml-3 rounded-full hover:opacity-80">
          <Image
            src={user?.profile_pic_URL || "/home/login/usericon.png"}
            fill={true}
            priority
            sizes="( h-full)"
            alt="team"
            className=" object-contain rounded-full p-0.5"
          />
        </label>
        <div className="w-full bg-white max-md:flex max-md:flex-row-reverse">
          <div className="w-full hidden md:flex h-10 bg bg-white  justify-center py-1">
            <div
              className="px-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5  cursor-pointer  flex gap-2 "
              onClick={() => {
                setShowinprofile("profile");
              }}
            >
              <div className=" bg-black relative w-6 h-6 rounded-full ">
                <Image
                  src={"/home/login/usericon.png"}
                  fill={true}
                  priority
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain rounded-full p-0.5"
                />
              </div>
              Profile
            </div>
            <div
              className="px-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5 cursor-pointer "
              onClick={() => {
                setShowinprofile("edit");
              }}
            >
              📝 Edit Info
            </div>
            <div
              className="px-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5 cursor-pointer "
              onClick={() => {
                setShowinprofile("settings");
              }}
            >
              ⚙️ Settings
            </div>
            <div
              className="px-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5 cursor-pointer "
              onClick={() => {
                setShowinprofile("kyc");
              }}
            >
              KYC
            </div>
          </div>

          <div className=" flex md:hidden p-1 mr-3 text-xl cursor-pointer"
          onClick={() =>{
           toggel == "hidden" ?  settoggel("flex") : settoggel("hidden");
          }}
          >☰</div>
          <div className={`${toggel} md:hidden flex-col gap-1.5 absolute h-max w-40 translate-y-9 bg-gray-100 shadow-xl p-1`}>
          <div
              className="px-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5  cursor-pointer  flex gap-2 "
              onClick={() => {
                setShowinprofile("profile");
                toggel == "hidden" ?  settoggel("flex") : settoggel("hidden")
              }}
            >
              <div className=" bg-black relative w-6 h-6 rounded-full ">
                <Image
                  src={"/home/login/usericon.png"}
                  fill={true}
                  priority
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain rounded-full p-0.5"
                />
              </div>
              Profile
            </div>
            <div
              className="px-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5 cursor-pointer "
              onClick={() => {
                setShowinprofile("edit");
                toggel == "hidden" ?  settoggel("flex") : settoggel("hidden")
              }}
            >
              📝 Edit Info
            </div>
            <div
              className="px-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5 cursor-pointer "
              onClick={() => {
                setShowinprofile("settings");
                toggel == "hidden" ?  settoggel("flex") : settoggel("hidden")
              }}
            >
              ⚙️ Settings
            </div>
            <div
              className="px-4 flex items-center gap-3 hover:opacity-60 rounded-lg hover:bg-gray-300 py-0.5 cursor-pointer "
              onClick={() => {
                setShowinprofile("kyc");
                toggel == "hidden" ?  settoggel("flex") : settoggel("hidden")
              }}
            >
              <div className="h-4.5 w-4.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"/></svg>
              </div>
              KYC
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 h-full w-full">{
      loading ? <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <div className="animate-spin h-12 w-12 border-t-4 border-blue-600 rounded-full"></div>
    </div> :
      component}</div>
    </>
  );
}
