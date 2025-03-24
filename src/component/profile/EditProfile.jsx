import getpincode_details from '@/utils/getpincode_details';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { BackendURL } from '../../../const';

export default function EditProfile({setLoading}) {
      const [coName, setCoName] = useState("");
      const [address, setAddress] = useState("");
      const [village, setVillage] = useState("");
      const [postOffice, setPostOffice] = useState("");
      const [policeStation, setPoliceStation] = useState("");
      const [pin, setPin] = useState("");
      const [town, setTown] = useState("");
      const [district, setDistrict] = useState("");
      const [state, setState] = useState("");
        const [Townlist, setTownlist] = useState([])
        const [TownlistHeight, setTownlistHeight] = useState("hidden")
const [token, settoken] = useState(null);

useEffect(() => {  
    let tokencookie = Cookies.get("jwt");
  settoken(tokencookie);
  
}, [])

let updateAddress = async (e) =>{
    e.preventDefault();
    try {
    setLoading(true)
    let response =  await axios({
        method : "post",
        url: `${BackendURL}/user/update/address`,
       data : 
           {   pin : pin ,
               address : {
                careof : coName,
                addressline1 : address,
                addressline2 : village ,
                post : postOffice,
                policestation : policeStation,
                town_city : town,
                dist : district,
                state : state 
               }
           },
       headers : {
           token : token,
           Accept: "*/*",
           "Content-Type": "application/json",
       }
      })

      setLoading(false)
      Cookies.set('user',JSON.stringify(response?.data?.user),{
        expires: 3 / 24,
        path: "/",
      })
      alert("Address Updated Successfully !!")
          
    } catch (error) {
        console.log(error);
        
        alert("Faild to Update Address")
    }

}

  return (
    <form className='w-[85%] mx-auto flex flex-col justify-center items-center gap-8 mt-13' onSubmit={updateAddress}>
        <div className="font-bold text-gray-600 ">Update Address</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="C/o Full Name"
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-white text-black"
                    value={coName}
                    onChange={(e) => setCoName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Flat, House No, Building, Apartment"
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-white text-black"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Village, Area, Street, Sector"
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem]  bg-white text-black"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Post Office"
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-white text-black"
                    value={postOffice}
                    onChange={(e) => setPostOffice(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Police Station"
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-white text-black"
                    value={policeStation}
                    onChange={(e) => setPoliceStation(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="PIN"
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-white text-black"
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
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-slate-300 text-black cursor-pointer"
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
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-slate-300 text-black"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                    readOnly
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-6 p-2 border-2 border-gray-300 rounded-[2rem] bg-slate-300 text-black"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    readOnly
                  />
                </div>
                <button type='submit' className=' cursor-pointer px-10 bg-blue-500 md:w-60 shadow-xl py-2 mt-3 rounded-2xl text-white font-bold'>
                Update Address
                </button>
    </form>
  )
}
