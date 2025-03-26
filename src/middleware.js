import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('jwt');
  const usertype = req.cookies.get('usertype')
  console.log(req.url.slice(-5))
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login
  }

  if (req.url.slice(-5) === 'admin') {

    if (usertype === "admin") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if (req.url.slice(-7) == 'profile') {

    if (usertype != "user") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', req.url))
  }
  
  if (req.url.slice(-5) == 'stalf') {
   
    if (usertype == "stalf") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', req.url))  
  }
  
  return NextResponse.redirect(new URL('/login', req.url))
      // return NextResponse.next();
  
}


export const config = {
  matcher: ['/profile','/admin','/stalf'], // Protect /profile page
};

// export function middleware(req) {
//     return NextResponse.next();
// }