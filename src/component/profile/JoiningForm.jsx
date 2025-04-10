"use client";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { BackendURL } from "../../../const";
import getpincode_details from "@/utils/getpincode_details";

export default function JoiningForm() {
  const [passwordShow, setPasswordShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("Mr.");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [coName, setCoName] = useState("");
  const [address, setAddress] = useState("");
  const [village, setVillage] = useState("");
  const [postOffice, setPostOffice] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [pin, setPin] = useState("");
  const [town, setTown] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [filePath, setFilePath] = useState("/profile/Joining/upload.png");
  const [file, setFile] = useState();
  const [password, setPassword] = useState("");
  const [confirmColor, setConfirmColor] = useState("bg-white");
  const [otp, setOtp] = useState(null);
  const [inputOTP, setInputOTP] = useState("")
  const [disabled, setDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [otpMatched, setOtpMatched] = useState(false)
  const [otpReadonly, setOtpReadonly] = useState(false)
  const [Townlist, setTownlist] = useState([])
  const [TownlistHeight, setTownlistHeight] = useState("hidden")
   
    
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = JSON.parse(Cookies.get("user"))
    if (otpMatched) {
      
      if ((confirmColor === "bg-green-300") && user ) {
        
      const formData = new FormData();
      let userData = {
        name: title + ` ${firstName}` + ` ${middleName}` + " " + lastName,
        password: password,
        introducer: {
          id: user?.userid,
          name: user?.name,
        },
        phone_number: mobileNumber,
        email: email,
        pin: pin,
        address: {
          careof: coName,
          addressline1: address,
          addressline2: village,
          post: postOffice,
          policestation: policeStation,
          town_city: town,
          dist: district,
          state: state,
        },
        date_of_birth: dob,
      };

      formData.append("json", JSON.stringify(userData));
      if (file) {
        formData.append("profilePic", file);
        setLoading(true)
      try {
        const response = await axios.post(
          `${BackendURL}/user/singup`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        await axios.post(`${BackendURL}/confirm`,{
          userid : response?.data?.userid,
          password : password,
          phone_number : mobileNumber,
          name: title + ` ${firstName}` + ` ${middleName}` + " " + lastName,
      })
      await alert("Form submitted successfully:");
      
      let newUserjunior = [...user.juniors,{
        id : response.data.userid,
        name :  response.data.name
      }]
      
      user.juniors = newUserjunior
      
      Cookies.set('user',JSON.stringify(user),{ expires: 3 / 24, path: "/" })
      setLoading(false)
         
       window.location.reload()
      } catch (error) {
        setLoading(false)
        alert("Error submitting form")
        console.error("Error submitting form:", error.response.data);
      }
    }
    else{
       alert("Please upload profile pic")
    }
    } else {
      alert("Password does not match");
    }
  }else{
    alert("Please verify OTP!")
  }
       
  };

  let getOtp = async() => {
    let randomSixDigit = Math.floor(100000 + Math.random() * 900000)
      setOtp(randomSixDigit)
      if (firstName) {
        
      if (mobileNumber && mobileNumber.length == 10 && !isNaN(mobileNumber)) {
      setDisabled(true)
      await axios.post(`${BackendURL}/otp`,{
          otp : randomSixDigit,
          phone_number : mobileNumber,
          name : firstName
      })
      .then((response)=> {
        if(response.data.status === true){
          alert(" Otp senD Successfully")
        }
        else{
          alert("problem in otp sending")
          setDisabled(false)
        }
      })
      .catch((err) =>{
          console.log(err);
      })
    }
    else{
      alert("Please enter Phone Number")
    }
  }
  else{
    alert("Please Enter Name")
  }
    }

  return (
    <>
    {
      loading ? <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <div className="animate-spin h-12 w-12 border-t-4 border-blue-600 rounded-full"></div>
    </div> :
      <form
        className="bg-[#2E307B] text-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto mt-5"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="relative h-30 w-30 max-md:h-16 max-md:w-16 bg-white rounded-xl">
            <Image
              src="/profile/Joining/Kishalay Care Logo Final.png"
              fill={true}
              sizes="( h-full)"
              alt="team"
              className=" object-contain p-1.5"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Joining</h2>
          <label
            htmlFor="profilePic"
            className="bg-white hover:opacity-80 text-black cursor-pointer rounded-xl"
          >
            <div className="relative h-30 w-30 max-md:h-16 max-md:w-16 rounded-xl">
              <Image
                src={`${filePath}`}
                fill={true}
                sizes="( h-full)"
                alt="team"
                className="rounded-xl object-contain"
              />
            </div>
          </label>
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            className="hidden"
            accept=".png, .jpg , .jpeg"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
                const imageUrl = URL.createObjectURL(e.target.files[0]);
                setFilePath(imageUrl);
              }
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" flex justify-baseline items-center overflow-hidden px-2 rounded-[2rem] bg-white text-black">
            <select
              className="w-10 text-sm relative left-0 "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            >
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Miss</option>
            </select>
            <input
              type="text"
              placeholder="First Name"
              className=" px-6 p-2 rounded-[2rem] bg-white text-black"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Middle Name"
            className=" px-6 p-2 rounded-[2rem] bg-white text-black"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className=" px-6 p-2 rounded-[2rem] bg-white text-black"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <input
            type="date"
           className={`${
              dob ? "" : "Date"
            } px-6 p-2 rounded-[2rem] max-md:w-full bg-white text-black placeholder:text-sm`}
            value={dob}
            onChange={(e) => {
              console.log();
              console.log(dob);

              setDob(e.target.value);
            }}
            required
            placeholder="Enter Date of Birth"
          />
          <input
            type="email"
            placeholder="Enter E-Mail ID"
            className=" px-6 p-2 rounded-[2rem] bg-white text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className=" px-6 p-2 h-11 rounded-[2rem] bg-white text-black"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter OTP"
            className={`${otpReadonly ? "bg-gray-200" : "bg-white"} px-6 p-2 h-11 rounded-[2rem]  text-black`}
            onChange={(e) =>{
                 setInputOTP(e.target.value)
            } }
            readOnly={otpReadonly}
            required
          />
          <div className="flex space-x-2">
            <button type="button" className={`${disabled ?"bg-yellow-800":"bg-yellow-400"} ${otpMatched ?"hidden":"flex"}  px-4 py-2 h-11 rounded-[2rem] text-nowrap cursor-pointer`} disabled={disabled} 
         onClick={(e) => {
          e.preventDefault();
           getOtp();
           
          }}
    > 
      {disabled ? `Wait ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`  : "Get OTP"}
            </button>
            <button type="button" className={`bg-green-500 px-4 py-2 h-11 rounded-[2rem] text-nowrap cursor-pointer ${otpMatched ?"hidden":"flex"}`}
            onClick={(e) =>{
              e.preventDefault()
               if (inputOTP === `${otp}`) {
                 alert("otp matched")
                 setOtpReadonly(true)
                  setOtpMatched(true)
               }
               else{
                 alert("OTP not matched")
               }
            }}>
              Validate OTP
            </button>
          </div>
          <div className=""></div>
          <input
                  type={passwordShow ? "text" : "password"}
                  placeholder="Enter Password"
                  className=" px-6 p-2 h-11 rounded-[2rem] bg-white text-black"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type={passwordShow ? "text" : "password"}
                  placeholder="Confirm Password"
                  className={` px-6 p-2 h-11 rounded-[2rem] ${confirmColor} text-black`}
                  required
                  onChange={(e) => {
                    if (e.target.value == password) {
                      setConfirmColor("bg-green-300");
                    } else {
                      setConfirmColor("bg-red-300");
                    }
                  }}
                />

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    className="mr-2"
                    id=""
                    onChange={() => {
                      passwordShow
                        ? setPasswordShow(false)
                        : setPasswordShow(true);
                    }}
                  />{" "}
                  {passwordShow ? `Hide` : "Show"} password
                </div>
        </div>

        <h3 className="text-xl font-bold mt-4">Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="C/o Full Name"
            className="px-6 p-2 rounded-[2rem] bg-white text-black"
            value={coName}
            onChange={(e) => setCoName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Flat, House No, Building (optional)"
            className="px-6 p-2 rounded-[2rem] bg-white text-black"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Village, Area, Street, Sector (optional)"
            className="px-6 p-2 rounded-[2rem]  bg-white text-black"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />
         
          <input
            type="text"
            placeholder="Police Station"
            className="px-6 p-2 rounded-[2rem] bg-white text-black"
            value={policeStation}
            onChange={(e) => setPoliceStation(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="PIN"
            className="px-6 p-2 rounded-[2rem] bg-white text-black"
            value={pin}
            maxLength="6"
            onChange={ (e) => {
              setPin(e.target.value)
              if(e.target.value.length == 6){
                getpincode_details(e.target.value,setDistrict,setState,setTownlist,setTownlistHeight)
              }
            }}
            required
          />
          
          <div className="flex relative">
          <input
            type="text"
            placeholder="Town/City"
            className="px-6 p-2 rounded-[2rem] bg-slate-300 text-black cursor-pointer"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            required
            readOnly
            onClick={(e) =>{
              if (Townlist.length != 0) { 
                TownlistHeight == "hidden" ?  setTownlistHeight("flex") : setTownlistHeight("hidden") ;
              }
            }}
          />
          <div className={`absolute  bottom-full w-[250px] h-38 bg-white rounded-lg ${TownlistHeight} justify-baseline p-2 items-center flex-col gap-1 overflow-scroll`}>
              {
                Townlist.map((e) => {
                   return <li key={e} className="flex text-black cursor-pointer justify-center rounded-lg  bg-slate-300 items-center py-1 flex-col w-[100%] "
                   onClick={() =>{
                      setTown(e)
                      setTownlistHeight('hidden')
                   }}
                   > {e} </li>
                })
              }
            </div>
          </div>
          <input
            type="text"
            placeholder="District"
            className="px-6 p-2 rounded-[2rem] bg-slate-300 text-black"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
            readOnly
          />
          <input
            type="text"
            placeholder="State"
            className="px-6 p-2 rounded-[2rem] bg-slate-300 text-black"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            readOnly
          />
        </div>

        <div className="flex justify-center gap-5 mt-6">
          <button
            type="submit"
            className="bg-green-500 px-6 py-2 rounded-[2rem] text-black cursor-pointer"
          >
            Create
          </button>
        </div>
      </form>
      }
    </>
  );
}
