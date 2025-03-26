"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { BackendURL } from "../../../../const";
import getpincode_details from "@/utils/getpincode_details";
import JoiningForm from "@/component/profile/JoiningForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const [referalID, setreferalID] = useState(null);
  const [referalName, setreferalName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [agree, setAgree] = useState(false);
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
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmColor, setConfirmColor] = useState("bg-white");
  const [otp, setOtp] = useState();
  const [inputOTP, setInputOTP] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [otpMatched, setOtpMatched] = useState(false);
  const [otpReadonly, setOtpReadonly] = useState(false);
  const [Townlist, setTownlist] = useState([]);
  const [TownlistHeight, setTownlistHeight] = useState("hidden");
  const [hydrated, setHydrated] = useState(false);
  const [termsandCondition, setTermsandCondition] = useState(false);

  const router = useRouter();
  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let referalID0 = params.get("referal"); // is the string "Jonathan"
    let referalName0 = params.get("name");
    setreferalID(referalID0);
    setreferalName(referalName0);

    setHydrated(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      if (agree) {
        if (otpMatched) {
          if (confirmColor === "bg-green-300") {
            setLoading(true);
            const formData = new FormData();
            let userData = {
              name: title + ` ${firstName}` + ` ${middleName}` + " " + lastName,
              password: password,
              introducer: {
                id: referalID,
                name: referalName,
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
                await axios.post(`${BackendURL}/confirm`, {
                  User: response?.data?.userid,
                  Password: password,
                  email: email,
                });

                alert("Form submitted successfully:", response.data);
                setLoading(false);
                router.push("/login");
              } catch (error) {
                alert(`Error submitting form ${error.response?.data?.messeg}`);
                setLoading(false);
                console.error("Error submitting form:", error.response.data);
              }
            } else {
              alert("Please upload profile pic");
            }
          } else {
            console.log(password);

            alert("Password does not match");
          }
        } else {
          alert("Please Validate OTP");
        }
      } else {
        alert("Agree with terms and condition");
      }
    } else {
      alert("Please upload your Profile Picture");
    }
  };

  let getOtp = async (e) => {
    e.preventDefault();
    let randomSixDigit = Math.floor(100000 + Math.random() * 900000);
    if (email) {
      setDisabled(true)
      setOtp(`${randomSixDigit}`);
      await axios.post(`${BackendURL}/otp`,{
          otp : randomSixDigit,
          email : email
      })
      .then((response)=> {
        if(response.data.status === true){
          alert("Otp sent to Email Successfully")
        }
        else{
          alert("problem in otp sending")
          setDisabled(false)
        }
      })
      .catch((err) =>{
          console.log(err);
      })
    } else {
      alert("Please enter Email Id");
    }
  };

  if (!hydrated) {
    return null;
  } else {
    return (referalID && referalName) ? (
      <div className="h-full w-screen flex justify-center items-start pt-6">
        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
            <div className="animate-spin h-12 w-12 border-t-4 border-blue-600 rounded-full"></div>
          </div>
        ) : (
          <>
            <form
              className="bg-[#2E307B] text-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto mt-5"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="relative h-30 w-30 max-md:h-16 max-md:w-16 bg-white rounded-xl">
                  <Image
                    src="/profile/Joining/Kishalay Care Logo Final.png"
                    fill={true}
                    priority
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
                      priority
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
                  className={`${
                    otpReadonly ? "bg-gray-200" : "bg-white"
                  } px-6 p-2 h-11 rounded-[2rem]  text-black`}
                  onChange={(e) => {
                    setInputOTP(e.target.value);
                  }}
                  readOnly={otpReadonly}
                  required
                />
                <div className="flex space-x-2">
                  <button
                  type="button"
                    className={`${
                      disabled ? "bg-yellow-800" : "bg-yellow-400"
                    } ${
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
                      e.preventDefault()
                      console.log(inputOTP);
                      if (inputOTP === `${otp}`) {
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
                    onClick={(e) => {
                      if (Townlist.length != 0) {
                        TownlistHeight == "hidden"
                          ? setTownlistHeight("flex")
                          : setTownlistHeight("hidden");
                      }
                    }}
                  />
                  <div
                    className={`absolute  bottom-full w-[250px] h-38 bg-white rounded-lg ${TownlistHeight} justify-baseline p-2 items-center flex-col gap-1 overflow-scroll`}
                  >
                    {Townlist.map((e) => {
                      return (
                        <li
                          key={e}
                          className="flex text-black cursor-pointer justify-center rounded-lg  bg-slate-300 items-center py-1 flex-col w-[100%] "
                          onClick={() => {
                            setTown(e);
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

              <div className="flex flex-col justify-center gap-5 px-4 mt-6">
                <div className="">
                  <input
                    type="checkbox"
                    onClick={() => {
                      agree ? setAgree(false) : setAgree(true);
                    }}
                  />{" "}
                  I Agree with terms and condition
                </div>
                <div
                  className="text-amber-200 underline cursor-pointer"
                  onClick={() => {
                    setTermsandCondition(true);
                  }}
                >
                  View Terms and Condition
                </div>
                <button
                  type="submit"
                  className={`${
                    agree ? "bg-green-500" : "bg-gray-500"
                  } px-6 py-2 rounded-[2rem] text-black cursor-pointer`}
                >
                  Create
                </button>
              </div>
            </form>
            <div
              id="popup"
              className={` absolute top-26 left-0 h-screen w-screen bg-white ${
                termsandCondition ? "flex" : "hidden"
              } flex-col`}
            >
              <div className="text-black text-2xl font-bold  p-10">
                <div className="">Terms and conditions</div>
              </div>
              <div className="h-[80%] w-full bg-white text-black p-10 pb-20 overflow-scroll">
                <div className="font-medium">
                  {`This document including the Distributor Application, if fully completed, signed by the applicant(s) when duly accepted by Kishalay Care Pvt. Ltd., constitutes the Distributor Agreement (" Agreement") between Kishalay Care Pvt. Ltd., and the applicant(s) whose signature and other identification data appear overhere.`}
                </div>
                <div className="font-medium">
                  {`
                  1. 	Kishalay Care Pvt. Ltd. appoints the - identified applicant(s) as a distributor of KISHALAY CARE products and the applicant(s) (herein after individually and collectively referred to as the "Distributor") accept(s) such appointment. Distributor may, on a non-exclusive basis, purchase KISHALAY CARE products from Kishalay Care Pvt. Ltd., to resell, distribute and market in the territory of India. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  2. 	Distributor hereby confirms that he/she has entered into this Agreement as an independent contractor. Nothing in this Agreement shall establish an employment relationship, or any other labour relationship between the Distributor and Kishalay Care Pvt. Ltd., and nothing shall establish the Distributor's position as procurer, broker, commercial agent, contracting representative or other representative of Kishalay Care Pvt. Ltd. When purchasing and selling KISHALAY CARE products, the Distributor shall act as an independent vendor, acting in his/her own name, at his/her own responsibility and for his/her own account. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  3. 	Distributor shall not sell any KISHALAY CARE product for a price exceeding the Maximum Retail Price. Distributor may charge, at his discretion, any price that is lower than the Maximum Retail Price indicated on the label of any product or in any, then applicable, price list issued by Kishalay Care Pvt. Ltd.

                  `}
                </div>
                <div className="font-medium">
                  {`
                  4. 	Relation between Kishalay Care Pvt. Ltd. and the Distributor and all his/her activities hereunder shall be governed, in addition to this Agreement, by the rules contained in the Kishalay Care Business Starter Guide which includes the 

                  `}
                </div>
                <div className="">
                  {`
                  a) Kishalay Care Sales and Marketing Plan 

                  `}
                </div>
                <div className="">
                  {`
                  b) Code of Ethics and Rules of Conduct (hereinafter collectively referred to as "Official Documents". The Distributor confirms that he/she has received a copy of Official Documents and has read the terms and conditions thereof and agrees to be bound by them in addition to this Agreement. Kishalay Care Pvt. Ltd. may amend from time to time, any of the terms and conditions of the Official Documents through notice on its website www.kishalaycare.com. If any Distributor does not agree to be bound by such amendment, he/she may terminate this Agreement within 45 days of such publication by giving a written notice to Kishalay Care Pvt. Ltd. Distributor's continued relationship with Kishalay Care Pvt. Ltd. would constitute an affirmative 

                  `}
                </div>
                <div className="">
                  {`
                  a) acknowledgment by the Distributor of the amendment and 

                  `}
                </div>
                <div className="">
                  {`
                  b) Agreement by the Distributor to abide and be bound by this Agreement, Official Documents and its modifications. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  5. 	This Agreement becomes effective from the date of acceptance by Kishalay Care Pvt. Ltd. of the Applicant's contractual offer in the form of this fully completed Distributor Application form. Such acceptance shall be communicated by sending to the Distributor, a Distributor Identification Card or upon entering the particulars of the Distributor in Kishalay Care's Distributor Database, whichever is earlier. The Distributor Identification Card is and shall remain the property of Kishalay Care Pvt. Ltd. and Distributor shall return it to Kishalay Care Pvt. Ltd. without any delay upon termination or expiration of this Agreement. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  6. 	The Co-Applicant/Second Authorized Representative acknowledges that Kishalay Care Pvt. Ltd. will deal exclusively with the Primary Applicant/ First Authorized Representative in respect of all business matters, and also pay commission and / or any other incentives to and in the name of the Primary Applicant/Entity. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  7. 	Kishalay Care Pvt. Ltd. will make all payments on account of returns or refunds through Bank transfers /account payee cheques drawn in favour of Primary Applicant/Entity only. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  8. 	The Distributor hereby expressly authorizes Kishalay Care Pvt. Ltd. to make available, release and disseminate all or part of the information set forth herein to other Kishalay Care Distributors & Customers within or outside of India. The Distributors agrees that he/she has read and understand Kishalay Care Pvt. Ltd.'s Privacy Policy as published on www.kishalaycare.com in respect of the information set forth herein or any other information provided by the distributor to Kishalay Care Pvt. Ltd. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  9. 	The Distributor needs to activate the distributorship within the respective calendar month of joining by doing 1-1000 BV of personal purchases of Kishalay Care products for retailing. Failure to activate the distributorship will result in automatic termination of this agreement. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  10. 	The distributor will be allowed to sponsor a prospect into the Kishalay Care business only after activating his/her distributorship. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  11. 	This Agreement is effective for an initial definitive period of one (1) year, from the date of acceptance hereof by Kishalay Care Pvt. Ltd.. However, in-case of acceptance by Kishalay Care Pvt. Ltd. of the Applicant's contractual offer on or after September 1, this Agreement will be effective till December 31 of the following year. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  12. 	All Distributors are required to renew their distributorships for the following year on or before December 31 of each year. Kishalay Care Pvt. Ltd. reserves the right, at its complete discretion, to reject any application for renewal. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  13. 	The Distributor may terminate this Agreement at any time by giving a written notice to Kishalay Care Pvt. Ltd. Kishalay Care Pvt. Ltd. may terminate this agreement by giving a written notice (a) pursuant to the provisions of the Rules of Conduct; (b) for reasons of non-performance and (c) for the breach of any terms and conditions of this Agreement. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  14. 	Kishalay Care Pvt. Ltd. may reject this application for any reason, at its discretion, including if the application contains incomplete, inaccurate, false or misleading information. Any alteration or modification will be subject to verification. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  15. 	This Agreement is entered into on a personal basis and neither this Agreement nor any of the rights or obligations of Distributor arising under this Agreement may be assigned or transferred without the prior written consent of Kishalay Care Pvt. Ltd. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  16. 	Kishalay Care Pvt. Ltd.'s liability, whether in contract, tort or otherwise arising out of or in connection with this agreement and/or relationship arising therefrom shall not exceed the lesser of 

                  `}
                </div>
                <div className="">
                  {`
                  a) actual damages or loss assessed by the arbitrator or any other dispute resolution mechanism adopted by the parties or; 

                  `}
                </div>
                <div className="">
                  {`
                  b) the total commission earned by the distributor during the preceding six months of the date of dispute. 

                  `}
                </div>
                <div className="font-medium">
                  {`
                  17. 	Any dispute, differences or claim arising out of as in connection with this Agreement shall be submitted to binding arbitration and shall be referred to the sole Arbitrator appointed by Kishalay Care Pvt. Ltd. in accordance with the rules and regulation of Indian Constitution. The venue of such arbitration shall be at Ranaghat jurisdiction and the award of the Arbitrator shall be final and binding on all parties. The courts at Ranaghat jurisdiction shall alone have jurisdiction in relation to this Arbitration Agreement and any award arising therefrom.

                  `}
                </div>
                <div className="font-medium">
                  {`
                  The Distributor agrees to comply with Kishalay Care Pvt. Ltd.'s Customer Product Refund Policy as laid down in the Code of Ethics & Rules of Conduct for Kishalay Care Distributors which are part of the Kishalay Care Business Starter Guide.

                  `}
                </div>
              </div>
              <div className="flex w-full justify-center items-center">
                <button
                  className="bg-gray-500 text-amber-50 px-8 py-2 rounded-2xl"
                  onClick={() => {
                    setTermsandCondition(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    ) : (
      <div className="h-screen w-screen flex justify-center items-center">
        You dont have any referal link
      </div>
    );
  }
}
