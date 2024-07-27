import { Inter } from "next/font/google";
import "./globals.css";
 import Footer from "./_components/Footer";
import Providers from "./Redux/Providers";
import Nav from "./_components/Nav";
import ContextApiData from "./contextData/ContextApiData";
  // import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

  const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor's Appointment",
  description: "Generated by Ankur",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body className={`${inter.className} layout-body`}>
 
          <Providers> 
 <ContextApiData> 
  {/* <ToastContainer /> */}

     <Nav/>  
  {children}
  <Footer/>
   </ContextApiData> 
     </Providers>
    </body>
    </html>
   );
}
