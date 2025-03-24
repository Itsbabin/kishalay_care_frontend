
import axios from 'axios';
import React, { useState } from 'react';
import { BackendURL } from '../../../const';

export default function StalfJoin({setloading}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [file, setfile] = useState(null)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleProfilePictureChange = (e) => {
    setfile(e.target.files[0]);
    console.log('Profile Picture:', e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
      const formData = new FormData();
      let userData = {
        name : name,
        password : password,
        phone_number : phoneNumber,
        email : email,
      };

      formData.append("json", JSON.stringify(userData));
      if (file) {
        formData.append("profilePic", file);
      
      try {
        const response = await axios.post(
          `${BackendURL}/stalf/singup`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setloading(false)
        window.location.reload();
        alert("Form submitted successfully:");
      } catch (error) {
        setloading(false)
        alert("Error submitting form")
        console.log("Error submitting form:", error);
      }
    }
    else{
      setloading(false)
       alert("Please upload profile pic")
    }
    
  };
  

  return (
    <>
    <div className=" flex flex-col w-96  bg-white p-6 rounded-lg shadow mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Stalf Registration</h2>
      <form onSubmit={handleSubmit}>
      <label className="block mb-2">Name</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded mb-4"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
        required

      />

      <label className="block mb-2">Password</label>
      <input
        type="password"
        className="w-full px-3 py-2 border rounded mb-4"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <label className="block mb-2">Phone Number</label>
      <input
        type="tel"
        className="w-full px-3 py-2 border rounded mb-4"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
      />

      <label className="block mb-2">Email</label>
      <input
        type="email"
        className="w-full px-3 py-2 border rounded mb-4"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label className="block mb-2">Profile Picture URL</label>
      <input
        type="file"
        className="w-full px-3 py-2 border rounded mb-4"
        onChange={handleProfilePictureChange}
        required
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
    </>
  );
  }