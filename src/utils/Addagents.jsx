"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BackendURL } from "../../const.js";
import getpincode_details from "@/utils/getpincode_details.js";
import { useRouter } from "next/navigation";

export default function AddAgent({setloading}) {
  const [cheacked, setCheacked] = useState(0);
  const [Name, setName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DateofBirth, setDateofBirth] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Password, setPassword] = useState("");
  const [Introducer, setIntroducer] = useState("");
  const [Introducername, setIntroducername] = useState("");
  const [Address, setAddress] = useState("");
  const [Pin, setPin] = useState("");
  const [Careof, setCareof] = useState("");
  const [address_line2, setaddress_line2] = useState("");
  const [Post, setPost] = useState("");
  const [TownorCity, setTownorCity] = useState("");
  const [Policestation, setPolicestation] = useState("");
  const [District, setDistrict] = useState("");
  const [State, setState] = useState("");
  const [agentSearchData, setagentSearchData] = useState();
  const [SearchResult, setSearchResult] = useState([]);
  const [SearchResultPosition, setSearchResultPosition] = useState("hidden");
  const [makeReadOlny, setmakeReadOlny] = useState("bg-white");
  const [Townlist, setTownlist] = useState([]);
  const [TownlistHeight, setTownlistHeight] = useState("hidden");
  const [confirmColor, setConfirmColor] = useState("bg-white");
  const [Pronoun, setPronoun] = useState("Mr.");
  const [filePath, setFilePath] = useState("/profile/Joining/upload.png");
  const [file, setFile] = useState(null);
  const [otp, setOtp] = useState(null);
  const [inputOTP, setInputOTP] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [otpMatched, setOtpMatched] = useState(false);
  const [otpReadonly, setOtpReadonly] = useState(false);

  let controler = new AbortController();
  const signal = controler.signal;
  
  let searchAgent = async () => {
    await axios
      .post(
        `${BackendURL}/user/search`,
        {
          phone_number: agentSearchData,
        },
        { signal }
      )
      .then((response) => {
        setSearchResult(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let fileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setFilePath(imageUrl);
    }
  };

  
  let getOtp = async () => {
    let randomSixDigit = Math.floor(100000 + Math.random() * 900000);
    console.log(randomSixDigit);
    setOtp(`${randomSixDigit}`);
    if (Name) {
    if (MobileNo && MobileNo.length == 10 && !isNaN(MobileNo)) {
        await axios.post(`${BackendURL}/otp`,{
            otp : `${randomSixDigit}`,
            phone_number : MobileNo,
            name : Name
        })
        .then((response)=> {
          if(response.data.status === true){
            
          alert(" Otp send Successfully")
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
      alert("Enter Mobile Number")
    }
  }
  else{
    alert("Please enter Name")
  }
  };

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

  useEffect(() => {

    if (agentSearchData != "" && agentSearchData != undefined) {
      setSearchResultPosition("flex");
      searchAgent();
    } else {
      setSearchResultPosition("hidden");
      setSearchResult([]);
    }
    return () => {
      controler.abort();
    };
  }, [agentSearchData]);

  const handelSubmit = async () => {
    if (cheacked) {
        
    if (file) {
      if (confirmColor == "bg-green-200") {
        const formData = new FormData();
        formData.append("profilePic", file);

        let userData = {
          name: Pronoun + ` ${Name}` + ` ${middleName}` + " " + LastName,
          password: Password,
          introducer: {
            id: Introducer,
            name: Introducername,
          },
          phone_number: MobileNo,
          email: Email,
          pin: Pin,
          address: {
            careof: Careof,
            addressline1: Address,
            addressline2: address_line2,
            post: Post,
            policestation: Policestation,
            town_city: TownorCity,
            dist: District,
            state: State,
          },
          date_of_birth: DateofBirth,
        };

        formData.append("json", JSON.stringify(userData));

        await axios
          .post(`${BackendURL}/user/singup`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(async (response) => {
             await axios.post(`${BackendURL}/confirm`,{
                      userid : response?.data?.userid,
                      password : Password,
                      phone_number : MobileNo,
                      name: Pronoun + ` ${Name}` + ` ${middleName}` + " " + LastName,
                  })
                  .then(() =>{
                    console.log(response.data);
                    alert("User created successfuly");
                  })
                  .catch(() =>{
                    console.log(response.data);
                    alert("User created successfuly");
                  })
          })
          .catch((e) => {
            console.log(e);
            
            alert("some error occured");
          });
      } else {
        alert("Confirm Password!!");
      }
    } else {
      alert("Please upload Profile photo");
    }
}
else{
    alert("Please confirm introducer")
}

setloading(false)
  };

  return (
    <>
      <div className="flex justify-center items-start pt-10 px-8 h-full w-full overflow-scroll">
        {/*  */}
        <form
          className="max-h-max py-8 max-md:pl-0 p-2 w-[900px] max-md:w-[350px] rounded-4xl bg-[#1F225B] border-[#0006B8] border-2  flex max-md:flex-col justify-center items-center flex-wrap gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setloading(true)
            await handelSubmit();
          }}
        >
          <div className="w-[90%] h-10 text-4xl flex justify-between items-center font-semibold text-white my-10">
            <div className="">
              <div className=" relative bg-white border-[#4BABFF] border-4 rounded-bl-4xl rounded-tr-4xl h-30 w-30">
                <Image
                  src="/profile/Joining/Kishalay Care Logo Final.png"
                  fill={true}
                  alt="cover"
                  className=" object-cover"
                />
              </div>
            </div>
            <div className="">Joining</div>
            <div className="">
              <label
                htmlFor="UploadProfilePic"
                className="h-30 w-30 bg-white flex justify-center items-center cursor-pointer"
              >
                <img src={filePath} className="" alt="usericon" />
                <input
                  type="file"
                  accept=".png, .jpg , .jpeg"
                  onChange={fileChange}
                  name="UploadProfilePic"
                  id="UploadProfilePic"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col relative">
            <div className="text-white w-5/6 text-start ">Search Introducer</div>
            <div className="flex justify-baseline items-center ">
              <input
                type="text"
                readOnly={cheacked}
                placeholder="Enter name / Mobile No  "
                className={`${makeReadOlny} rounded-l-xl h-8 w-5/6 px-4`}
                onChange={(e) => {
                  setagentSearchData(e.target.value);
                }}
              />
              <img
                src="/Search Sponser.png"
                className={`h-8 p-0.5 ${makeReadOlny}  rounded-r-xl`}
                alt="Search Sponser"
              />
            </div>
            <div
              className={` bg-white  ${SearchResultPosition} w-[95%] gap-2 top-[104%] h-48 rounded-2xl flex flex-col justify-baseline items-center overflow-scroll absolute z-10 p-2`}
            >
              {SearchResult.map((e) => {
                return (
                  <li
                    className="flex cursor-pointer justify-center rounded-lg  bg-slate-300 items-center flex-col w-[100%] "
                    key={e.phone_number}
                    onClick={() => {
                      setIntroducer(e.userid);
                      setIntroducername(e.name);
                      setSearchResultPosition("hidden");
                    }}
                  >
                    <div className="">{e.name}</div>
                    <div className="font-semibold">{e.userid}</div>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-start flex-col">
            <div className="text-white w-5/6 text-start ">Introducer Code</div>
            <div className="flex justify-baseline items-center ">
              <input
                required
                value={Introducer}
                type="text"
                readOnly={cheacked}
                placeholder="Introducer Code"
                className={`${makeReadOlny} rounded-xl h-8 w-[240px] px-4 `}
                onChange={(e) => {
                  setIntroducer(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-start flex-col">
            <div className="text-white w-5/6 text-start ">Introducer Name</div>
            <div className="flex justify-baseline items-center gap-2 ">
              <input
                required
                readOnly={cheacked}
                value={Introducername}
                type="text"
                placeholder="Enter Introducer Name"
                className={`${makeReadOlny} rounded-xl h-8 w-5/6 px-4`}
                onChange={(e) => {
                  setIntroducername(e.target.value);
                }}
              />
              <input
                type="checkbox"
                className="flipswitch"
                name=""
                value={cheacked}
                id=""
                onChange={() => {
                  cheacked == 0 ? setCheacked(1) : setCheacked(0);
                  cheacked == 0
                    ? setmakeReadOlny("bg-[#d4d4d4]")
                    : setmakeReadOlny("bg-white");
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-start max-md:items-center flex-col relative left-2 w-[260px] ">
            <div className="text-white w-5/6 text-start ">First Name</div>
            <div className="flex justify-baseline max-md:justify-center items-center gap-2">
              <select
                name=""
                className="bg-white rounded-xl p-0.5 py-1"
                id=""
                onChange={(e) => {
                  setPronoun(e.target.value);
                }}
              >
                <option value="Mr.">Mr.</option>
                <option value="Miss.">Miss.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
              <input
                required
                type="text"
                placeholder="Enter First Name"
                className="bg-white rounded-xl h-8  w-3/5 px-4"
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(Pronoun);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col relative -left-3  w-[250px] ">
            <div className="text-white w-5/6 text-start ">Middle Name</div>
            <div className="flex justify-baseline items-center ">
              <input
                type="text"
                placeholder="Enter Middle Name"
                className="bg-white rounded-xl h-8 w-full px-4"
                onChange={(e) => {
                  setmiddleName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center relative  -left-3 flex-col">
            <div className="text-white w-5/6 text-start ">Last Name</div>
            <div className="flex justify-center max-md:justify-center items-center ">
              <input
                type="text"
                placeholder="Enter Last Name"
                required
                className="bg-white rounded-l-xl h-8 w-5/6 px-4"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <div className="h-8 w-8 p-0.5 bg-white rounded-r-xl"></div>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col">
            <div className="text-white w-5/6 text-start ">Date of Birth</div>
            <div className="flex justify-baseline items-center ">
              <input
                required
                type="date"
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setDateofBirth(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">E-Mail ID</div>
            <div className="flex justify-center items-center ">
              <input
                required
                type="email"
                placeholder="Enter E-Mail ID"
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">Mobile Number </div>
            <div className="flex justify-center items-center ">
              <input
                required
                type="tel"
                maxLength={10}
                minLength={10}
                placeholder="Enter Mobile Number "
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-start max-md:items-center flex-col">
            <div className="text-white w-5/6 text-start ">OTP</div>
            <div className="flex justify-baseline items-center ">
              <input
                type="text"
                placeholder="Enter OTP"
                className={`${
                  otpReadonly ? "bg-gray-400" : "bg-white"
                } rounded-xl h-8 w-5/6 px-4`}
                onChange={(e) => {
                  setInputOTP(e.target.value);
                }}
                readOnly={otpReadonly}
                required
              />
            </div>
          </div>
          <div
            className={` ${
              otpMatched ? "hidden" : "flex"
            }  items-center justify-baseline space-x-2 px-10`}
          >
            <button
              className={`${
                disabled ? "bg-yellow-800" : "bg-yellow-400"
              } px-4 py-2 h-11 rounded-[2rem] text-nowrap cursor-pointer`}
              disabled={disabled}
              onClick={() => {
                getOtp();
                setDisabled(true);
              }}
            >
              {disabled
                ? `Wait ${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
                    .toString()
                    .padStart(2, "0")}`
                : "Get OTP"}
            </button>
            <button
              className={`bg-green-500   px-4 py-2 h-11 rounded-[2rem] text-nowrap cursor-pointer`}
              onClick={(e) => {
                console.log(inputOTP);
                console.log(otp);
                if (inputOTP == `${otp}`) {
                  alert("otp matched");
                  setOtpReadonly(true);
                  setOtpMatched(true);
                } else {
                  alert("OTP not matched");
                }
              }}
            >
              Validate OTP
            </button>
          </div>
          <div className="flex justify-center max-md:justify-center items-center w-[85%] text-3xl text-white my-2 px-10">
            <div className="flex justify-center items-start flex-col w-[280px]">
              <div className="text-white w-5/6 text-sm text-start ">
                Password
              </div>
              <div className="flex justify-baseline items-center ">
                <input
                  type="text"
                  required
                  placeholder="Enter Password"
                  className="bg-white text-black text-lg rounded-xl h-8 w-5/6 px-4"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center flex-col w-[280px]">
              <div className="text-white w-5/6 text-start text-sm ">
                Confirm Password
              </div>
              <div className="flex justify-center items-center ">
                <input
                  required
                  type="text"
                  placeholder="Confirm Password"
                  className={`${confirmColor}  text-black text-lg rounded-xl h-8 w-5/6 px-4`}
                  onChange={(e) => {
                    if (e.target.value !== Password) {
                      setConfirmColor("bg-red-200");
                    } else {
                      setConfirmColor("bg-green-200");
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col w-[75%] text-3xl font-semibold text-white h-8">
            Address :{" "}
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">Care of Name</div>
            <div className="flex justify-center items-center ">
              <input
                type="text"
                required
                placeholder="Enter Care of Name"
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setCareof(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start text-sm text-nowrap ">
              Flat, House No, Building, Apartment
            </div>
            <div className="flex justify-center items-center ">
              <input
                required
                type="text"
                placeholder="Enter Flat, House No, Building, Apartment"
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">
              Village, Area, Street, Sector
            </div>
            <div className="flex justify-center items-center ">
              <input
                required
                type="text"
                placeholder="Enter Village, Area, Street, Sector"
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setaddress_line2(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">Police Station</div>
            <div className="flex justify-center items-center ">
              <input
                required
                type="text"
                placeholder="Enter Police Station"
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setPolicestation(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">PIN</div>
            <div className="flex justify-center items-center ">
              <input
                type="text"
                required
                placeholder="Enter PIN"
                className="bg-white rounded-xl h-8 w-62 px-4"
                onChange={(e) => {
                  setPin(e.target.value);
                  if (e.target.value.length == 6) {
                    getpincode_details(
                      e.target.value,
                      setDistrict,
                      setState,
                      setTownlist,
                      setTownlistHeight
                    );
                  }
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col relative">
            <div className="text-white w-5/6 text-start ">Town/City</div>
            <div className="flex justify-center items-center ">
              <input
                type="text"
                value={TownorCity}
                placeholder="Town/City"
                readOnly
                className="bg-slate-300 rounded-l-xl h-8 w-50   px-4"
              />
              <div
                className="h-8 flex bg-slate-300 rounded-r-xl pr-2"
                onClick={() => {
                  TownorCity.length !== 0
                    ? setTownlistHeight("flex")
                    : setTownlistHeight("hidden");
                }}
              >
                <img src="/down-arrow.png" alt="downarrow" />
              </div>
            </div>
            <div
              className={` absolute w-[250px] h-30 top-[105%] bg-white rounded-lg ${TownlistHeight} justify-baseline p-2 items-center flex-col gap-1 overflow-scroll`}
            >
              {Townlist.map((e) => {
                return (
                  <li
                    key={e}
                    className="flex cursor-pointer justify-center rounded-lg  bg-slate-300 items-center py-1 flex-col w-[100%] "
                    onClick={() => {
                      setTownorCity(e);
                      setTownlistHeight("hidden");
                    }}
                  >
                    {" "}
                    {e}{" "}
                  </li>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">District</div>
            <div className="flex justify-center items-center ">
              <input
                type="text"
                placeholder="District"
                value={District}
                readOnly
                className="bg-slate-300 rounded-xl h-8 w-62 px-4"
                onChange={(e) => {}}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-white w-5/6 text-start ">State</div>
            <div className="flex justify-center items-center ">
              <input
                type="text"
                value={State}
                readOnly
                placeholder="State"
                className="bg-slate-300 rounded-xl h-8 w-62 px-4"
                onChange={(e) => {}}
              />
            </div>
          </div>
          <div className="w-[90%] h-10 md:pr-10  flex max-md:justify-center justify-end items-center gap-8">
           
            <input
              type="submit"
              value={"Create"}
              className="px-8 cursor-pointer py-1 text-lg font-semibold rounded-lg bg-green-400"
            />
          </div>
        </form>
      </div>
    </>
  );
}
