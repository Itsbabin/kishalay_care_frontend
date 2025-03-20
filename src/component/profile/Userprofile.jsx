"use client"
import React from 'react'
import { useRouter } from "next/navigation";

export default function Userprofile() {
    const router =  useRouter()
    return (
    <div className='w-full h-full flex justify-center items-center'>
        <button className=' px-6 py-2 bg-red-300 shadow-xl rounded-xl cursor-pointer font-semibold hover:opacity-70'
        onClick={() =>{
                    let confirmation = confirm("Are you want to Logout ? ")
                   
                   if (confirmation) {
                     Cookies.remove('user', { path: '/' })
                     Cookies.remove('jwt', { path: '/' })
                     router.push('/')
                    }
        
                  }}
        >Logout</button>
    </div>
  )
}
