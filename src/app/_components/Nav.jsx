'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { BiBookBookmark } from "react-icons/bi";
import { PiSignInBold } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from "react-icons/ci";
import { SummeryApi } from '../util/SummeryApi';
import { userdata } from '../Redux/userSlice';
import { contextdatas } from '../contextData/ContextApiData';
import { useRouter } from 'next/navigation';
import GeneralAdminPanal from './GeneralAdminPanal';
import AdminDashBoard from './AdminDashBoard';
import DoctorRegistration from './DoctorRegistration';
import DashBordSmDevice from './DashBordSmDevice';
import DoctorRegistrationUpdate from './DoctorRegistrationUpdate';

function Nav() {
  let [ShowPanal,setShowPanal]=useState(false);
let [ShowDoctorReg,setShowDoctorReg]=useState(false);
   let route=useRouter();
  // for updata logout user
  let dispatch=useDispatch();
  let {fetchAuthData}=useContext(contextdatas);

   let user=useSelector(state=>state?.user?.user);
  //  console.log(user)

  // logout
  let handelLogout=async(e)=>{
    try{
      e.preventDefault();
      let res=await fetch(SummeryApi.Logout.url,{
        method:SummeryApi.Logout.method,
        credentials:'include'
      })
      let data=await res.json();
      if(data.success){
dispatch(userdata(null));
fetchAuthData();
route.push('/signup')
      }

    }
    catch(e){
      console.log('logout not suuceess');
    }
  }


// doctor registration
let  handelDoctorRegestration=(e)=>{
setShowDoctorReg(true);

}

   return (
    <div className='flex items-center justify-between px-[1.5rem] py-[1rem] bg-slate-200 shadow-lg fixed top-0 left-0 w-[100vw] cursor-pointer'>
      <Link href='/' className='text-[2.2rem]'>Home</Link>
      <div  className='flex items-center gap-6 md:gap-4'>  
      <a className='text-[1.8rem] font-medium cursor-pointer'>
       <div className='flex items-center ' onClick={()=>setShowPanal(true)}>  
        <FaCircleUser className='text-[1.7rem] mr-2'/>
       <a className='text-[1.8rem] hidden md:block font-medium'>User</a>
       </div></a>
{user?.role=='GENERAL'?(ShowPanal?<GeneralAdminPanal onclose={()=>setShowPanal(false)} Logout={handelLogout}/>:null):null}
{user?.role=='ADMIN'?(ShowPanal?<AdminDashBoard onclose={()=>setShowPanal(false)} Logout={handelLogout}/>:null):null}
{user?.role=='ADMIN'?(ShowPanal?<DashBordSmDevice onclose={()=>setShowPanal(false)} Logout={handelLogout}/>:null):null}
{user?.role=='GENERAL'?(ShowPanal?<DashBordSmDevice onclose={()=>setShowPanal(false)} Logout={handelLogout}/>:null):null}

       <Link href='/' className='text-[1.8rem] font-medium cursor-pointer'> <div className='flex items-center '> 
        <BiBookBookmark className='text-[1.7rem] mr-2'/>
       <a className='text-[1.8rem] hidden md:block font-medium'>Appoitment</a>
       </div></Link>

       <Link href='/' className='text-[1.8rem] font-medium cursor-pointer'>
       <div className='flex items-center ' onClick={handelDoctorRegestration}>  
        <FaUserDoctor className='text-[1.7rem] mr-2'/>
       <a className='text-[1.8rem] hidden md:block font-medium'>Doctor</a>
       </div></Link>
       {user?.role=='GENERAL'?(ShowDoctorReg?<DoctorRegistration onClose={()=>setShowDoctorReg(false)}  fetchAuthData={fetchAuthData}/>:null):null}
       {user?.role=='ADMIN'?(ShowDoctorReg?<DoctorRegistrationUpdate onClose={()=>setShowDoctorReg(false)}  fetchAuthData={fetchAuthData} />:null):null}

 
      {!(user?.email)?
       <Link href='/signup' className='text-[1.8rem] font-medium cursor-pointer'>
       <div className='flex items-center '>  
        <PiSignInBold className='text-[1.7rem] mr-2'/>
       <a className='text-[1.8rem] hidden md:block font-medium'>SignUp</a>
       </div></Link>
       :
       <Link href='/signup' className='text-[1.8rem] font-medium cursor-pointer'>
       <button className='flex items-center outline-none border-none ' type='button' onClick={handelLogout}>  
        <CiLogout className='text-[1.7rem] mr-2'/>
       <b className='text-[1.8rem] hidden md:block font-medium'>Logout</b>
       </button></Link>}

</div>
    </div>
  )
}

export default Nav
