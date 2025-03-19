"use client";
import React, { use, useEffect, useState } from 'react'
import Image from "next/image";
import Cookies from 'js-cookie';

export default function DashBoard() {
  const [user, setuser] = useState(null)

  useEffect(() => {
    let cookie = Cookies.get('user')

    let json = cookie ?  JSON.parse(cookie) : null ;
     setuser(json)
     console.log(json);
  }, [])

  return (
    <>
      <div className="flex max-md:flex-col-reverse items-start justify-baseline gap-4">
        <div className="h-screen max-md:h-full max-w-[900px] max-md:w-full overflow-x-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="relative h-25 w-25 mx-auto">
                <Image
                  src="/profile/dashboard/istock.png"
                  fill={true}
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain"
                />
              </div>
              <p className="text-gray-600">You Earn</p>
              <p className="text-2xl font-bold"> &#8377; {user?.earning ? user?.earning : 0}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="relative h-25 w-25 mx-auto">
                <Image
                  src="/profile/dashboard/Self BV.png"
                  fill={true}
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain"
                />
              </div>
              <p className="text-gray-600">Self BV</p>
              <p className="text-2xl font-bold">{user?.bv ? user?.bv : 0}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="relative h-25 w-25 mx-auto">
                <Image
                  src="/profile/dashboard/Team BV.png"
                  fill={true}
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain"
                />
              </div>
              <p className="text-gray-600">Team BV</p>
              <p className="text-2xl font-bold">{user?.bv ? user?.bv : 0}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="relative h-25 w-25 mx-auto">
                <Image
                  src="/profile/dashboard/Promotion.png"
                  fill={true}
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain"
                />
              </div>
              <p className="text-gray-600 max-md:text-md">
                Remaining BV for Next Level Promotion
              </p>
              <p className="text-2xl font-bold">{user?.bv ? user?.bv : 0}</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
              <div className="relative h-60 w-120 max-md:w-75 mx-auto">
                <Image
                  src="/profile/dashboard/chart.jpg"
                  fill={true}
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain"
                />
              </div>
              <p className="text-gray-600 font-bold">
                Revenue VS Profit Margin Analysis
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-gray-600">Direct Hand Count</p>
              <p className="text-2xl font-bold">{user?.juniors.length}</p>
            </div>
          </div>

          <div className={`max-w-6xl ${user?.juniors.length == 0 ? "hidden" : "grid"} mx-auto mt-6 grid-cols-1 md:grid-cols-2 gap-4`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold text-gray-700">
                  Direct Hand Downline
              </p>
              <table className="w-full mt-2 text-left">
                <thead>
                  <tr>
                    <th className="border-b p-2">User Name</th>
                    <th className="border-b p-2">User ID</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {

                    user?.juniors.map((e) =>{
                     return <tr key={e.id}>
                      <td className="p-2">{e.name}</td>
                      <td className="p-2">{e.id}</td>
                    </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-baseline items-center max-md:items-start flex-col max-md:flex-row max-md:w-full sm:min-w-[300px] min-w-[230px] h-[calc(100vh-5.8rem)] max-md:h-max">
          <div className="w-full grid grid-cols-1 max-md:grid-cols-2 gap-2">
            <div className="">
            <div className="bg-white h-full p-4 rounded-lg shadow-md text-center items-center sm:col-span-2">
            <div className="relative h-30 w-30 mx-auto">
                <Image
                  src="/profile/dashboard/ProfileImage.jpg"
                  fill={true}
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain"
                />
              </div>
              <p className="text-gray-600">{user?.name ? user.name.toUpperCase() : "------"}</p>
              <p className="text-blue-500">{user?.userid ? user?.userid : "------"}</p>
              <p className="font-bold text-gray-700">User</p>
              </div>
              </div>
              <div className="p-0.5">
              <div className="bg-white max-md:py-3 shadow-md flex justify-center items-center flex-col rounded-xl p-1">
              <div className="relative h-40 w-40 max-md:h-27 max-md:w-27 mx-auto">
                <Image
                  src="/profile/dashboard/rank-achieve.png"
                  fill={true}
                  sizes="( h-full)"
                  alt="team"
                  className=" object-contain"
                />
              </div>
              <p className="font-bold text-gray-700">Events</p>
              <p className="text-gray-600">March</p>
              <p className="text-gray-700 mt-2 text-center text-sm">The next level is yours 
              to achieve!</p>
                <p className="text-gray-500">Rank-{user?.rank ? user?.rank : "-"}</p>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    
    </>
  )
}
