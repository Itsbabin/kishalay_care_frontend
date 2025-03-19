"use client"
import React from 'react'
import "../globals.css";
import LoadingScreen from '@/component/LoadingScreen';

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