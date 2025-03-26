import axios, { all } from 'axios'
import React, { use, useEffect, useState } from 'react'
import { BackendURL } from '../../../const'
import Cookies from 'js-cookie'

export default function UserDetails({user , setLoading }) {
const [password, setPassword] = useState("")
const [confirmpassword, setconfirmPassword] = useState("")
const [token, settoken] = useState(null);

useEffect(() => {
    
    let tokencookie = Cookies.get("jwt");
  settoken(tokencookie);
  
}, [])


let updatePassword = async () =>{
    console.log(token);
    
    try {
        setLoading(true)
        if (password == confirmpassword) {
         
       await axios({
         method : "post",
         url: `${BackendURL}/user/update/password`,
        data :
            {
                password : password
            },
        headers : {
            token : token,
            Accept: "*/*",
            "Content-Type": "application/json",
        }
       })
       .then(() =>{
           setLoading(false)
           alert("Password Updated Successfully");
       })
       .catch(() =>{
        setLoading(false)
        alert("Error occured!!");
       })
    }
    else{
        alert("Please Confirm Password!!")
    }
        
    } catch (err) {
        alert("Error Occured")
        
    }
}

  return (
    <div className='w-full h-max flex gap-6 flex-wrap justify-center items-center pt-8 '>
        <div className="w-[340px] md:w-[420px] h-max p-3 mx-2 rounded-xl border-blue-200 border-6 shadow-xl ">
            <div className="font-semibold">
                Name : {`${user?.name}`}
            </div>
            <div className="font-semibold">
                User ID :   {`${user?.userid}`}  
            </div>
            <div className="font-semibold">
                Rank Name : Consultant	
            </div>
            <div className="font-semibold">
                Rank : {`${user?.rank || 1}`}
            </div>
            <div className="font-semibold flex items-center">
                <div className="w-[85%] flex  flex-col flex-wrap">
                    <div className="font-extrabold">
               Referral Link:      
                    </div>
                    <div className="w-full bg-white p-2 border-gray-200 border-2 rounded-md flex flex-wrap text-[0.75rem] overflow-scroll text-wrap">
               { encodeURI( `https://kishalaycare.in/signin?referal=${user?.userid}&name=${user?.name}`) }
               </div>
                </div>
               <div className="w-5 h-5 ml-3 cursor-pointer" onClick={() =>{
                navigator.clipboard.writeText(encodeURI(`https://kishalaycare.in/signin?referal=${user?.userid}&name=${user?.name}`));
                alert("copied to clipboard!!")
               }}>
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/></svg>
                </div> 
            </div>
        </div>
        <div className="w-[450px] h-max p-3 rounded-xl border-blue-200 border-6 flex gap-1.5 flex-col justify-center items-center shadow-xl">
            <label className='font-semibold' htmlFor="">
               Update Password
            </label>
                <input className='bg-white px-3 py-1 border-gray-200 border-2 rounded-md' type="text" 
                onChange={(e) =>{
                    setPassword(e.target.value)
                }} />
            <label className='font-semibold' htmlFor="">
              Confirm Password
            </label>
                <input className='bg-white px-3 py-1 border-gray-200 border-2 rounded-md' type="text" 
                onChange={(e) =>{
                    setconfirmPassword(e.target.value)
                }} />
                <button className='px-10 bg-blue-500 py-2 mt-3 rounded-2xl text-white font-bold'
                onClick={updatePassword}>
                    Update Password
                </button>
        </div>
    </div>
  )
}
