"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import Navtoggel from "./Navtoggel";

export default function NavProfile() {
 const [toggel, setToggel] = useState("hidden");


return (
    <>
        <nav className="fixed top-0 left-0 w-screen bg-[#EAFCFF] pl-6 shadow-lg z-40">
            <div className="container w-full flex md:justify-between justify-baseline items-center">
                <button id="menu-btn" className="text-black text-xl md:hidden flex" onClick={() => {
                            toggel === "hidden" ? setToggel("flex") : setToggel("hidden");
                            }
                }>
                    ☰
                </button>
                <Link href="/profile" className="text-white text-xl font-bold">
                    <div className="relative h-20 w-40 md:h-20 md:w-50">
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
                <ul id="menu" className="hidden md:flex space-x-4">
                    <li>
                        <Link href="#" className="text-black text-xl hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black text-xl hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black text-xl hover:text-gray-300">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-black text-xl hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                id="mobile-menu"
                className={`${toggel} absolute md:top-21 top-21 left-0 h-[calc(100vh-5.5rem)] w-[280px] bg-[#EAFCFF] md:flex flex-col space-y-2 p-4 shadow-lg shadow-gray-500/50`}
            >
                <Navtoggel/>
            </div>
        </nav>
    </>
);
}
