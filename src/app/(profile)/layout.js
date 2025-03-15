import NavProfile from '@/component/profile/NavProfile'
import React from 'react'
import "../globals.css";

export default function layout({ children }) {
  
  return (
    <>
      <html>
        <body>
          <NavProfile/>
           <div className="w-screen h-screen bg-amber-600 md:pt-23 pt-22 md:pl-77 pl-2 ">  
            {children}
           </div>
        </body>
        </html>
    </>
    )
}