"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { useRouter } from "next/navigation";

export default function Login() {
    const [Password, setPassword] = useState("")
  const [userid, setuserid] = useState("")

  const router =  useRouter()
     
  let handelClicked = async () => {
   await axios(`${BackendURL}/user/login`,{
      method : 'post',
      headers: {
        "Accept": '*/*',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
      data : {
        phone_number :  userid ,
         password : Password
      }
    })
    .then((result) => {
      Cookies.set('jwt',result.data.token ,{expires: 7, path: '/' })
      localStorage.setItem('user',JSON.stringify(result.data))
      alert('Login Successfull')
      router.push('/Profile')
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  return (
    <>
        <div className=" absolute top-0 left-0 -z-10 h-screen w-screen ">
        <Image src="/home/login/coverphoto.jpg"
          fill={true}
          alt="cover"
          className=' object-cover'
        />
      </div>
      <div className="flex justify-center items-center h-screen w-screen ">
        <div className="h-[460px] w-[720px] max-md:w-[300px] rounded-4xl border-[#0006B8] border-2  flex max-md:flex-col  justify-center items-center">
          <div className="relative h-full w-[45%]  max-md:h-1/4">
            <Image src="/home/login/Kishalay Care Logo Final.png"
              fill={true}
                sizes="(w-full h-full)"
              alt="cover"
              className=' object-contain'
            />
          </div>
          <form id="login items" className="flex flex-col justify-center gap-4 items-center bg-[#1F225B] max-md:rounded-b-4xl max-md:w-full max-md:h-3/4  max-md:rounded-r-none rounded-r-4xl h-full w-[55%] py-4"
          onSubmit={(e) => {
            e.preventDefault();
            handelClicked();
          }}>
                <div className="text-white text-3xl font-semibold mb-6">Wellcome!</div>
                <div className="text-white text-xl flex justify-baseline gap-2 w-5/6 items-center">
                  <img src="/home/login/usericon.png" alt="id" className="h-6" />
                  User ID
                  </div>
                <input required placeholder="Enter Your User ID or Mobile Number" className="bg-white rounded-xl h-8 w-5/6 px-4" type="text" onChange={(e) =>{
                    setuserid(e.target.value)
                }}/>
                <div className="text-white text-xl flex justify-baseline gap-2 w-5/6 items-center">
                <img src="/home/login/keyicon (2).png" alt="id" className="h-8" />
                  Password</div>
                <input  required placeholder="Enter Your Password" className="bg-white rounded-xl h-8 w-5/6 px-4" type="text" onChange={(e) =>{
                    setPassword(e.target.value)
                }}/>
                <div className="flex justify-between gap-4 w-5/6 items-center">
                  <div className="text-white "><input type="checkbox" name="" id="" /> Remember me</div>
                  <div className="text-[#FFF000] underline ">forget Password</div>
                </div>
                <button type='submit' className="login p-1 w-5/6 rounded-lg cursor-pointer " >Log in</button>
                <Link href={'/singup'} className="text-[#FFF000] underline">Join Us</Link>
          </form>
        </div>
      </div>
    </>
  )
}
