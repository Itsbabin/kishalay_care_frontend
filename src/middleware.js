import { NextResponse } from 'next/server';
// import jwt from "jsonwebtoken";

// export function middleware(req) {
//   const token = req.cookies.get('jwt');
//   const user = req.cookies.get('user')
//   console.log(req.url.slice(-5))
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login
//   }

//   if (req.url.slice(-5) === 'admin') {

//     if (user.value === "admin") {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL('/login', req.url))
//   }
//   if (req.url.slice(-7) == 'profile') {

//     if (user.value != "admin") {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL('/login', req.url))
//   }
  
//   if (req.url.slice(-5) == 'stalf') {
//     const usertype = req.cookies.get('usertype')
//     if (usertype != undefined) {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL('/login', req.url))  
//   }
  
//   return NextResponse.redirect(new URL('/login', req.url))
//       // return NextResponse.next();
  
// }

// Apply middleware to only protected routes
// export const config = {
//   matcher: ['/profile','/admin','/stalf'], // Protect /profile page
// };

export function middleware(req) {
  return NextResponse.next();
}