import React from 'react'
import "../globals.css";
import LoadingScreen from '@/component/LoadingScreen';

export const metadata = {
  title: "Kishalay Care",
  description: "A Direct Selling Company With Unique plan",
};


export default function layout({ children }) {
  
  return (
    <>
      <html>
        <body className=''>
         <LoadingScreen/>
            {children}
        </body>
        </html>
    </>
    )
}