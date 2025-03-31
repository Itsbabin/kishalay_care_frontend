"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackendURL } from "../../../../const";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function ForgetPassword() {
  const [disabled, setDisabled] = useState(false);
  const [otp, setOtp] = useState();
  const [inputOTP, setInputOTP] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);
  const [otpMatched, setOtpMatched] = useState(false);
  const [otpReadonly, setOtpReadonly] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [token, setToken] = useState()
  const [password, setPassword] = useState("")
  const [confirmpassword, setconfirmPassword] = useState("")
  const [loading, setLoading] = useState(false);
      const router = useRouter(); 

  useEffect(() => {

    setHydrated(true);
  }, []);
  useEffect(() => {

    console.log(otpMatched);
    console.log(otp);
    
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setDisabled(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  let getOtp = async (e) => {
    e.preventDefault();
    let randomSixDigit = Math.floor(100000 + Math.random() * 900000);
    setOtp(randomSixDigit);
    console.log(randomSixDigit);
    
    if (mobileNumber && mobileNumber.length == 10 && !isNaN(mobileNumber)) {
      setDisabled(true);
      
      setLoading(true)
      await axios
        .post(`${BackendURL}/user/forgetPassword`, {
          otp: randomSixDigit,
          phone_number: mobileNumber
        })
        .then((response) => {
          if (response.data.status === true) {
            setLoading(false)
            setToken(response.data.token)
            alert(" Otp send Successfully");
          } else {
            alert("Phone number Dose not exist")
            setDisabled(false);
          }
        })
        .catch((err) => {
        setLoading(false)
         alert("Error on Problem on sending OTP")
        });
    } else {
      alert("Please enter Phone Number");
    }
  };

  let updatePassword = async () =>{
    console.log(token);
    setLoading(true)
    try {
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
           alert("Password Updated Successfully");
           router.push('/login')
       })
       .catch((err) =>{
       setLoading(false)
        alert("Error occured!!");
       })
    }
    else{
        
       setLoading(false)
        alert("Please Confirm Password!!")
    }
        
    } catch (err) {
        setLoading(false)
        alert("Error Occured")
        
    }
}


  if (!hydrated) {
    return null;
  } else {
    return (
      <>
      <div className=" absolute top-0 -z-10 h-screen w-screen">
        <Image
        fill={true}
        alt="cover"
        src={"/home/forgotbg.jpg"}
        className=" opacity-40"
        />
      </div>
{
    loading ? <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
    <div className="animate-spin h-12 w-12 border-t-4 border-blue-600 rounded-full"></div>
  </div> : <></> 
}

      {
        otpMatched ? 
          <>
        <div className="w-full pt-40 flex justify-center items-center">
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
                <button className='px-10 bg-blue-500 py-2 mt-3 rounded-2xl cursor-pointer text-white font-bold'
                onClick={updatePassword}>
                    Update Password
                </button>
        </div>
        </div>
         </> : 
        <div className="w-full pt-30 justify-center flex flex-col items-center">
          <h1 className=" justify-center flex items-center mb-8 text-2xl font-bold text-gray-600">Forget password</h1>
          <div className=" grid grid-cols-1 w-70 space-y-2 rounded-xl border-blue-200 border-6 p-6 bg-white">
            <label htmlFor="phone">Phone Number</label>
            <input
              value={mobileNumber}
              onChange={(e) =>{
                setMobileNumber(e.target.value)
              }}
              type="text"
              id="phone"
              className=" border-2 border-blue-200 rounded-xl px-4 py-1"
            />
            <label htmlFor="phone">Enter Otp</label>
            <input
              disabled={otpReadonly}
              type="text"
              id="phone"
              className=" border-2 border-blue-200 rounded-xl px-4 py-1"
              onChange={(e) =>{
                  setInputOTP(e.target.value)
              }}
            />

            <div className="flex space-x-2">
              <button
                type="button"
                className={`${disabled ? "bg-yellow-800" : "bg-yellow-400"} ${
                  otpMatched ? "hidden" : "flex"
                }  px-4 py-2 h-11 rounded-[2rem] text-nowrap cursor-pointer`}
                disabled={disabled}
                onClick={(e) => {
                  getOtp(e);
                }}
              >
                {disabled
                  ? `Wait ${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
                      .toString()
                      .padStart(2, "0")}`
                  : "Get OTP"}
              </button>
              <button
                type="button"
                className={`bg-green-500 px-4 py-2 h-11 rounded-[2rem] text-nowrap cursor-pointer ${
                  otpMatched ? "hidden" : "flex"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(inputOTP);
                  if (inputOTP === `${otp}`) {
                    setOtpMatched(true);
                    alert("otp matched");
                    
                    
                  } else {
                    alert("OTP not matched");
                  }
                }}
              >
                Validate OTP
              </button>
            </div>
          </div>
        </div>
          }
      </>
    );
  }
}
