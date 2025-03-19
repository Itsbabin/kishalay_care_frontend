import Navbar from "@/component/home/Navbar";
import "../globals.css";
import LoadingScreen from "@/component/LoadingScreen";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="w-screen h-20"></div>
        <LoadingScreen/>
        {children}
      </body>
    </html>
  );
}
