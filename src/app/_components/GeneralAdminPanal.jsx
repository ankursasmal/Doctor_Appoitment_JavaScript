'use client'
import Link from 'next/link';
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { useSelector } from 'react-redux';

function GeneralAdminPanal({onclose,Logout}) {
  let user=useSelector(state=>state?.user?.user);
  return (
    <div className='hidden lg:block  '> 
    <div className='h-[96vh] fixed top-[5.8rem]   left-0 bg-[#edfcf5] z-10' > 
     <div className='flex items-center justify-between'>
       <a className='text-[2vw] text-red-500  ml-[1vw] font-bold'>Patient</a>
           <div className='flex justify-end mr-[.5vw]  ' onClick={onclose}><RxCross2 className='text-3xl'/></div>
 </div> 
     <div className=' w-[15vw]'>
 
       {user?.role?
      <div   className='flex justify-center flex-col mb-3'>
       <a className='font-semibold text-[2.3vw] text-center text-blue-400'>{user.name}</a>
       <a className='font-semibold text-[2.3vw] text-center'>{user.role}</a>
       </div>
       :      <a className='font-semibold text-[2.3vw]'>User</a>
 }
 
  <div className='flex justify-start items-start flex-col pl-3'>
 <a href='/all-user' className='text-[1.7vw] text-blue-500 py-2 pl-1'>All User</a>
  <a href='/my-order' className='text-[1.7vw] text-blue-500 py-2 pl-1'>My Order</a>
 <div className='flex items-center py-2 justify-center fixed bottom-3 left-3'>
 <div>
   <CiLogout className='text-3xl font-semibold ml-2'/></div> 
 <a  className='text-[1.7vw] text-red-500  pl-2 ' onClick={Logout}>Logout</a>
 </div>
 
 </div> 
 
     </div>
     </div>
     </div>
     
  )
}

export default GeneralAdminPanal
