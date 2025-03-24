import Navbar from "@/component/home/Navbar";
import "../globals.css";
import LoadingScreen from "@/component/LoadingScreen";



export const metadata = {
  title: "Kishalay Care",
  description: "A Direct Selling Company With Unique plan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"  />
      </head>
      <body>
        <Navbar/>
        <div className="w-screen h-20"></div>
        <LoadingScreen/>
        {children}
      </body>
    </html>
  );
}
