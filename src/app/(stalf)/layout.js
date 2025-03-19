"use client"
import React from 'react'
import "../globals.css";

export default function layout({ children }) {
  
  return (
    <>
      <html>
        <body className=''>
            {children}
        </body>
        </html>
    </>
    )
}