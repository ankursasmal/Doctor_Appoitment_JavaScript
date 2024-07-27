'use client'
import React, { useContext, useEffect, useState } from 'react'
import { contextdatas } from '../contextData/ContextApiData';
import styles from '@/app/styles/DoctorCommunity.module.css'
import { SummeryApi } from '../util/SummeryApi';
import Link from 'next/link';

function DoctorCommunity() {
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
 
    <div className='  mt-[8rem]     w-[98%]   bg-slate-200 mx-2 md:mx-4  '  >
       <table className={styles.table}>
      <thead>
        <tr className='bg-slate-300'>
          <th className={`${styles.td}  text-[.7rem] md:text-[1.2rem] `}>SL.</th>
          <th className={`${styles.td}  text-[.7rem] md:text-[1.2rem]`}>Name</th>
          <th className={`${styles.td}  text-[.7rem] md:text-[1.2rem]`}>Specialization</th>
          <th className={`${styles.td}  text-[.7rem] md:text-[1.2rem]`}>Contact</th>
          <th className={`${styles.td}  text-[.7rem] md:text-[1.2rem]`}>Address</th>
          <th className={`${styles.td}  text-[.7rem] md:text-[1.2rem]`}>Details</th>



        </tr>
      </thead>
      <tbody>
        {data.map((item,i) => (
          <tr key={i} className={styles.tr}>
            <td className={`${styles.td} text-[.7rem] md:text-[1.2rem]`} >{i}</td>
            <td className={`${styles.td}  text-[.7rem] md:text-[1.2rem]`}>{item.name}</td>
            <td className={`${styles.td}  text-[.7rem] md:text-[1.2rem]`}>{item.specilization}</td>
            <td className={`${styles.td} text-[.7rem] md:text-[1.2rem]`}>{item.phone}</td>
            <td className={`${styles.td} text-[.7rem] md:text-[1.2rem]` }>{item.Address}</td>
            <td className={`${styles.td} w-[100%] flex justify-center`}  >           
            <Link href={`/doctor-community/${item._id}`}  className='  text-[.7rem] md:text-[1.2rem] bg-blue-600 text-white py-[2px] px-[7px] rounded-lg'>  Details  </Link> 
            </td>
 
          </tr>
        ))}
      </tbody>
    </table>
 
     </div>
     
  )
}

export default DoctorCommunity
