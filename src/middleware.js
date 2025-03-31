import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const token = req.cookies.get('jwt');
//   const usertype = req.cookies.get('usertype')
//   console.log(usertype);
  
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login
//   }

//   if (req.url.slice(-5) === 'admin') {

//     if (usertype.value === "admin") {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL('/login', req.url))
//   }
//   if (req.url.slice(-7) == 'profile') {

//     if (usertype.value === "user") {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL('/login', req.url))
//   }
  
//   if (req.url.slice(-5) == 'stalf') {
   
//     if (usertype.value == "stalf") {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL('/login', req.url))  
//   }
  
//   return NextResponse.redirect(new URL('/login', req.url))
//       // return NextResponse.next();
  
// }


// export const config = {
//   matcher: ['/profile','/admin','/stalf'], // Protect /profile page
// };

export function middleware(req) {
    return NextResponse.next();
}