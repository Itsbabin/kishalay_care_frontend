import React from 'react'
import "../globals.css";

export const metadata = {
  title: "Kishalay Care",
  description: "A Direct Selling Company With Unique plan",
};


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