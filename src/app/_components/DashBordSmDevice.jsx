import React from 'react'
import { RxCross2 } from "react-icons/rx";
  import {  useSelector } from 'react-redux';
 import { CiLogout } from "react-icons/ci";
 import { FaRegUserCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
 function DashBordSmDevice({onclose,Logout}) {
let user=useSelector(state=>state?.user?.user);
   

  return (
    <div className='block lg:hidden  '> 

    <div className='absolute dashbord flex items-start flex-col left-[13rem]  top-[5.7rem]   w-[25vw] z-10   bg-[#dccbf9] p-2 shadow-lg'>
           
    {user?.role=='ADMIN'?<div className='flex items-center justify-between w-[100%]'>
  <a className='text-[3vw] font-semibold text-red-500'>Doctors</a> 
  <a className='  mr-[.5vw]  ' onClick={onclose}><RxCross2 className='text-3xl'/></a>
   </div>:  
   <div className='flex items-center justify-between w-[100%]'>
  <a className='text-[3vw] font-semibold text-red-500'>Patients</a> 
  <a className='  mr-[.5vw]  ' onClick={onclose}><RxCross2 className='text-3xl'/></a>
   </div>   }

 <a href='/all-user' > 
 <div className='flex items-center py-2'>
    <FaRegUserCircle className='text-2xl mr-[1.4vw] '/>
   <a  className='text-[1.7vw] text-blue-500 font-semibold pl-1'>All User</a> 

   </div></a>

   <a href='/my-order' > 
   <div className='flex items-center py-2'>
     <TbTruckDelivery className='text-2xl mr-[1.4vw] '/>

 <a className='text-[1.7vw] font-semibold text-blue-500 py-2 pl-1'>My Order</a>
 </div></a>

{user?.role=='ADMIN'?
<a href='/all-product'><div className='flex items-center py-2'>
     <TbTruckDelivery className='text-2xl mr-[1.4vw] '/>

 <a className='text-[1.7vw] font-semibold text-blue-500 py-2 pl-1'>All Products</a>
 </div></a>:null}

 

 <a href='/cart' > 
   <div className='flex items-center py-2'>
     <IoCartOutline className='text-2xl mr-[1.4vw] '/>

 <a className='text-[1.7vw] font-semibold text-blue-500 py-2 pl-1'>Cart</a>
 </div></a>

<div className='flex items-center py-2 justify-center  '>
<div><CiLogout className='text-3xl font-semibold'/></div> 
<a  className='text-[1.7vw] text-red-500  pl-1 font-bold' onClick={Logout}>Logout</a>
</div>

    </div>
    </div>
  )
}

 
export default DashBordSmDevice
