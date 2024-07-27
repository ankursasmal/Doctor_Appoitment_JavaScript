'use client'
 
import React, { useContext, useEffect, useState } from 'react'
import { contextdatas } from '../contextData/ContextApiData';  
import OpdDetailAdd from '../_components/OpdDetailAdd';
import { useSelector } from 'react-redux';
import { SummeryApi } from '../util/SummeryApi';
import { MdEdit } from "react-icons/md";
 import indianCurrrency from '../util/indianCurrency';
import EditOpdDetail from '../_components/EditOpdDetail';


function OpdDetail() {
  let [opdinfo,setOpdinfo]=useState([]);
    let {fetchAuthData}=useContext(contextdatas);
    let [showOpd,setShowOpd]=useState(false);
    let [showOpdUpdate,setshowOpdUpdate]=useState(false);
    let [specificOpdId,setspecificOpdId]=useState('');
    let user=useSelector(state=>state?.user?.user);
   
    let handelOpdeDetailAdd=()=>{
         setShowOpd(true);
    }

  
// all opd Detail show get request

let handelGetOpdeDetail=async()=>{
  try{
 
let res=await fetch(SummeryApi.GetAllOpdDetails.url+'/'+`${user._id}`,{
  method:SummeryApi.GetAllOpdDetails.method,
  credentials:'include'
})

let result=await res.json();
if(result.success){
  setOpdinfo(result.data);
}

  }
  catch(e){
console.log('data not fetch');
  }
}

useEffect(()=>{
  handelGetOpdeDetail();
  fetchAuthData();
 },[])

 
//  console.log(opdinfo);   


// edit id pass
let handelEditDetail=(id)=>{
  console.log(id)
  setshowOpdUpdate(true);
setspecificOpdId(id);
 }



  return (
    <div className='  mt-[5.8rem] flex justify-center flex-col    w-[95%]   mx-2 md:mx-10  '  >
        {/* post get edit 3 req */}
        <div className='flex items-center justify-between py-4 bg-slate-200 shadow-lg px-2 rounded-lg  '>
<a className='text-[1.2rem] font-semibold'>All Opd Details</a>
<button className='text-[1rem] font-normal text-white bg-blue-500 px-2 py-0.5 rounded-lg' onClick={handelOpdeDetailAdd}>Upload Opd</button>

        </div>
{showOpd?<OpdDetailAdd onClose={()=>setShowOpd(false)} user={user} fetchAuthData={fetchAuthData} handelGetOpdeDetail={handelGetOpdeDetail}/>:null}
{showOpdUpdate?<EditOpdDetail onClose={()=>setshowOpdUpdate(false)} user={user} OpdId={specificOpdId}    handelGetOpdeDetail={handelGetOpdeDetail}/>:null}


      {/* add all opd ddetail show data and above add button opd detail */}
      <div className='flex items-center justify-center flex-wrap w-[100%]  gap-3 pt-3 px-4 '>
    {opdinfo?.map((val,i)=>{
      return(
        <div  key={i} className='flex items-center flex-col md:flex-row shadow-lg m-3 bg-slate-200 p-2'>
        <div className='flex flex-col rounded-lg items-center justify-center  '>
    <img src={val.OpdCenterImg} alt="" className='w-[200px] h-[200px]' />
    <a className='text-3xl font-bold pt-3'>{val.name}</a>
    <a className='text-3xl font-bold py-2 text-blue-600'>{val.Specialist}</a>

    {/*  indianCurrrency is function convert inr */}
     </div>
           <div className='flex flex-col rounded-lg items-start justify-start px-1 md:px-4'> 
         <a className='text-[1rem] font-bold py-2'>City:{val.place}</a>
        <a className='text-[1rem] font-bold py-2 line-clamp-2'>Address:{val.Address}</a>
        <a className='text-[1rem] font-bold py-2'>Day:{val.day}</a>
        <a className='text-[1rem] font-bold py-2'>Time:{val.time}</a>
        <a className='text-[1rem] font-bold py-2'>No.patient:{val.noOfPatients}</a>
        <a className='text-[1rem] font-bold py-2'>Fees:{ indianCurrrency(val.fees,'IN')}</a>
        <a className='text-[1rem] font-bold py-2'>Contact:{val.helpline}</a>
        <div className='h-6 w-6 flex items-center justify-center rounded-full bg-red-400 cursor-pointer text-white hover:bg-green-500 hover:text-red-500 self-end -mr-[1rem] '  onClick={()=>handelEditDetail(val._id)}><MdEdit/></div>

        </div>
        </div>
         
       )
    })}
    
    </div>
 
      {/* all card edit option */}
    </div>
  )
}

export default OpdDetail
