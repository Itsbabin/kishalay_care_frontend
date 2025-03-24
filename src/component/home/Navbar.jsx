"use client";
import Image from "next/image";
import Link from 'next/link'
import React, { useState } from "react";

export default function Navbar() {
  const [toggel, setToggel] = useState("w-0 p-0");

  return (
    <>
      <nav className="fixed top-0 left-0 bg-white shadow-lg z-40">
        <div id="notification" className="h-8 w-screen bg-[#0A0037]">
            {/* <marquee behavior="alternate" direction="left" className=" text-amber-300">hello every one</marquee> */}
        </div>
        <div className="container h-16 mx-auto md:mx-16 flex justify-between items-center">
          <button
            id="menu-btn"
            className="text-black md:hidden ml-5 text-2xl  hover:bg-gray-300 duration-300 p-3 rounded-xl "
            onClick={() => {
              toggel === "w-0 p-0" ? setToggel("w-screen  p-4") : setToggel("w-0 p-0");
            }}
          >
            ☰
          </button>
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
          <ul id="menu" className="hidden md:flex gap-3 space-x-4 text-xl">
            <li>
              <Link href="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="about" className="text-gray-600 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="services" className="text-gray-600 hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="contact" className="text-gray-600 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
          <Link href={'/login'} className="flex justify-between items-center space-x-2 md:mr-0 mr-7">
          <span>Login </span>
        <div className="h-8 w-8 ">
          <img src="/home/nav/8847419.png" alt="login" />
        </div>
          </Link>
        </div>
        <div
          id="mobile-menu"
          className={` absolute top-24 left-0 h-screen md:hidden ${toggel} overflow-hidden flex flex-col space-y-2 bg-[#e4f8ff] duration-300 gap-3`}
        >
          <Link href="#" className="text-black py-1.5 text-xl font-semibold pl-2 w-full hover:text-gray-300" onClick={() =>{
             toggel === "w-0 p-0" ? setToggel("w-screen  p-4") : setToggel("w-0 p-0");
          }}>
            Home
          </Link>
          <Link href="#" className="text-black py-1.5 text-xl font-semibold pl-2 w-full hover:text-gray-300" onClick={() =>{
             toggel === "w-0 p-0" ? setToggel("w-screen  p-4") : setToggel("w-0 p-0");
          }}>
            About
          </Link>
          <Link href="#" className="text-black py-1.5 text-xl font-semibold pl-2 w-full hover:text-gray-300" onClick={() =>{
             toggel === "w-0 p-0" ? setToggel("w-screen  p-4") : setToggel("w-0 p-0");
          }}>
            Services
          </Link>
          <Link href="#" className="text-black py-1.5 text-xl font-semibold pl-2 w-full hover:text-gray-300" onClick={() =>{
             toggel === "w-0 p-0" ? setToggel("w-screen  p-4") : setToggel("w-0 p-0");
          }}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
