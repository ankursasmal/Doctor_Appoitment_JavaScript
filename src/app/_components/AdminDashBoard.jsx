 'use client'
 import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { useSelector } from 'react-redux';
import Link from 'next/link';

function AdminDashBoard({onclose,Logout}) {
  let user=useSelector(state=>state?.user?.user);
  return (
    <div className='hidden lg:block  '> 
    <div className='h-[96vh] fixed  top-[5.8rem]  left-0 bg-[#edfcf5] -z-20' > 
     <div className='flex items-center justify-between'>
       <a className='text-[2vw] text-red-500  ml-[1vw] font-bold'>Doctor</a>
           <div className='flex justify-end mr-[.5vw]  ' onClick={onclose}><RxCross2 className='text-3xl'/></div>
 </div> 
     <div className=' w-[15vw]'>
 
      {user?.email?
      <div   className='flex justify-center flex-col mb-2'>
       <a className='font-semibold  text-center text-[2.3vw] text-blue-400'>{user.name}</a>
       <a className='font-semibold text-center  text-[2.3vw]'>{user.role}</a>
       </div>
       :     <div className=' flex justify-center  '> <a className='font-semibold text-[2.3vw]  '>User</a></div>
 } 
 
  <div className='flex justify-start items-start flex-col pl-3'>
 <Link href="/doctor-community" className='text-[1.7vw] text-blue-500 py-2 pl-1'>Doctors Commnity</Link>
 <Link href="/opdDetailsAdd" className='text-[1.7vw] text-blue-500 py-2 pl-1'> Opd Details</Link>
 <a href="/" className='text-[1.7vw] text-blue-500 py-2 pl-1'>My Order</a>
 <div className='flex items-center py-2 justify-center fixed bottom-3 left-1'>
 <div>
   <CiLogout className='text-3xl font-semibold ml-2'/></div> 
 <a href="/" className='text-[1.7vw] text-red-500  pl-2 ' onClick={Logout}>Logout</a>
 </div>
 
 </div> 
 
     </div>
     </div>
     </div>
     
     
     
  )
}

 
export default AdminDashBoard
