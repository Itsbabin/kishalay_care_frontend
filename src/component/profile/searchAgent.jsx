"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BackendURL } from '../../../const';

export default function SearchAgent() {
   
      const [SearchResult, setSearchResult] = useState([])
      const [agentSearchData, setAgentSearchData] = useState("")

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


  useEffect(() => {
   
    
    if (agentSearchData != "" && agentSearchData != undefined) {
      searchAgent();
    } else {
      setSearchResult([]);
    }
    return () => {
      controler.abort();
    };
  }, [agentSearchData]);

  return (
    <>
    <div className="h-full w-full flex flex-col justify-baseline items-center gap-6">
    <div className="">Search Agents</div>
      
      <input type="text" className='mt-14 shadow-lg rounded-xl w-70 h-10 bg-gray-100 placeholder:text-gray-700 px-4' placeholder='Search Phone number , User ID or Name ' onChange={(e)=>{
        setAgentSearchData(e.target.value)
      }} />
        <div className="">Matched Search Results </div>
      <div className="flex justify-center items-center flex-wrap space-x-1 w-full h-96  overflow-y-scroll gap-3 bg-blue-100 p-4">
      {
        SearchResult.map((e) =>{
          return (
            <div key={e.userid} className="w-80 p-4 shadow-lg rounded-2xl bg-white">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{e.userid}</h2>
              <p><strong>Email:</strong> {e.name}</p>
              <p><strong>Email:</strong> {e.email}</p>
              <p><strong>Phone:</strong> {e.phone_number}</p>
              <p><strong>Date of Birth:</strong> {e.date_of_birth}</p>
              <p><strong>KYC:</strong> {e.kyc == 0 ? "false" : "true"}</p>
              <div>
                <h3 className="font-semibold">Address:</h3>
                <p><strong>Care of:</strong> {e.address.careof}</p>
                <p><strong>Post:</strong> {e.address.post}</p>
                <p><strong>Police Station:</strong> {e.address.policestation}</p>
                <p><strong>State:</strong> {e.address.state}</p>
              <p><strong>Updated At:</strong> {new Date(e.updatedAt).toLocaleString()}</p>
              <p><strong>Created At:</strong> {new Date(e.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
          )
        })
      }
      </div>
</div>
    </>
  )
}
