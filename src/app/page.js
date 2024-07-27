 
   "use client"

import React, { useContext, useEffect, useState } from 'react'
import { contextdatas } from './contextData/ContextApiData';
import { SummeryApi } from './util/SummeryApi';
import Image from 'next/image';
import AllCatagoryImage from './_components/AllCatagoryImage';
 
  function page() {
   let [data,setData]=useState([]);
  let {fetchAuthData}=useContext(contextdatas);

  // fetch all doctor info get req
let  handelAllDoctorData=async()=>{
try{
  let res= await fetch(SummeryApi.GetAllDoctorDetail.url,{
      method:SummeryApi.GetAllDoctorDetail.method,
      credentials:'include'
     })
let result= await res.json();
 
  if(result.success){
      setData(result.data);
      // console.log(result.data)
      // toast.success('doctor reg sucesfull');
   }
}
catch(e){
console.log('dtat not fetch in doctor communoty');
}
}
 useEffect(()=>{
      fetchAuthData();
  handelAllDoctorData();
  },[])
   console.log(data)
 
   return (
     <div>
      {/* style={{backgroundImage:"url('https://t4.ftcdn.net/jpg/04/24/30/93/360_F_424309320_UkOxg2z3sq7yXwGnWCO6xBXkRI4byhnI.jpg')"}}  */}
    <div className='  mt-[5.8rem] flex justify-center flex-col    w-[100%]     '   >
      {/* catagory wise doctor list */}
   <AllCatagoryImage/>

       {/*       {/* all doctor display wise doctor list */}
     <div className='flex items-center justify-center flex-wrap w-[100%]  gap-3 pt-3 px-4 '>
    {data?.map((val,i)=>{
      return(
        <div  key={i} className='flex   flex-col md:flex-row shadow-lg m-3 bg-slate-200 p-2'>
        <div className='flex flex-col rounded-lg items-center justify-center  '>
    <img src={val.doctorReg.images[0]} alt="" className='w-[200px] h-[200px]' />
    <a className='text-3xl font-bold pt-3'>{val.name}</a>
    <a className='text-3xl font-bold py-2 text-blue-600'>{val.doctorReg.specilization}</a>

    {/*  indianCurrrency is function convert inr */}
     </div>
           <div className='flex flex-col rounded-lg items-start justify-start px-1 md:px-4'> 
         <a className='text-[1rem] font-bold py-2 line-clamp-3'>Address:{val.doctorReg.Address}</a>
         <a className='text-[1rem] font-bold py-2 line-clamp-2'>Current Position:{val.doctorReg.currentJob}</a>
 
        </div>
        </div>
         
       )
    })}
    
    </div>
 
      </div>
 <a>kkkwl</a>       
     </div>
   )
 }
 
 export default page
 