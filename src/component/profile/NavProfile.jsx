"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import Navtoggel from "./Navtoggel";

export default function NavProfile() {
 const [toggel, setToggel] = useState("w-[0px]");
 
return (
    <>
        <nav className="fixed flex items-center top-0 left-0 max-md:h-18 w-screen bg-[#EAFCFF] pl-6 shadow-lg z-40">
            <div className="w-full flex justify-between items-center">
                <button id="menu-btn" className="text-black h-full w-13 absolute max-md:top-0 top-6 left-0 text-xl md:hidden flex cursor-pointer justify-center items-center " onClick={() => {
                            toggel === "w-[300px]" ? setToggel("w-[0px]") : setToggel("w-[300px]");
                            }
                }>
                    ☰
                </button>
                <Link href="/profile" className="text-white text-xl font-bold">
                    <div className="relative h-20 w-32 md:h-20 md:w-50 ml-8 md:ml-0 my-auto">
                        <Image
                            src="/home/nav/Kishalay Care Logo Nav.png"
                            priority={true}
                            fill={true}
                            sizes="(w-full h-full)"
                            alt="Kishalay"
                            className="object-contain"
                        />
                    </div>
                </Link>
                <ul id="menu" className="flex space-x-2.5 md:space-x-4 h-10 mr-4 ">
                    <li className="">
                        <div className="text-black text-xl cursor-pointer hover:text-gray-300"
                         onClick={() =>{
                            alert("This portion is under Maintanense")
                        }}
                        >
                        <div className="relative h-7 w-7 md:h-8 md:w-8">
                        <Image
                            src="/profile/nav/cart.png"
                            priority={true}
                            fill={true}
                            sizes="(w-full h-full)"
                            alt="ccart"
                            className="object-contain "
                        />
                    </div>
                        </div>
                    </li>
                    <li>
                        <div  className="text-black text-xl cursor-pointer hover:text-gray-300"
                         onClick={() =>{
                            alert("This portion is under Maintanense")
                        }}
                        >
                            <div className="relative h-7 w-7 md:h-8 md:w-8">
                        <Image
                            src="/profile/nav/wallet.png"
                            priority={true}
                            fill={true}
                            sizes="(w-full h-full)"
                            alt="ccart"
                            className="object-contain "
                        />
                    </div>
                        </div>
                    </li>
                    <li>
                        <div  className="text-black text-xl cursor-pointer hover:text-gray-300"
                         onClick={() =>{
                            alert("This portion is under Maintanense")
                        }}
                        >
                            <div className="relative h-7 w-7 md:h-8 md:w-8">
                        <Image
                            src="/profile/nav/notification.png"
                            priority={true}
                            fill={true}
                            sizes="(w-full h-full)"
                            alt="ccart"
                            className="object-contain "
                        />
                    </div>
                        </div>
                    </li>
                    <li>
                        <div href="#" className="text-black text-xl cursor-pointer hover:text-gray-300"
                        onClick={() =>{
                            alert("This portion is under Maintanense")
                        }}
                        >
                            <div className="relative h-7 w-7 md:h-8 md:w-8">
                        <Image
                            src="/profile/nav/settings.png"
                            priority={true}
                            fill={true}
                            sizes="(w-full h-full)"
                            alt="ccart"
                            className="object-contain "
                        />
                    </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div
                id="mobile-menu"
                className={`${toggel} md:w-[300px] absolute max-md:top-18  top-20 left-0 h-[calc(100vh-5.5rem)] overflow-hidden bg-[#EAFCFF] md:flex flex-col space-y-2 py-4 shadow-lg shadow-gray-500/50 duration-300`}
            >
                <Navtoggel setToggel={setToggel}/>
            </div>
        </nav>
    </>
);
}
