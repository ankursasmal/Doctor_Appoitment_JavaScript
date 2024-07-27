"use client"
import React, { createContext, useEffect, useState } from 'react'
  import { SummeryApi } from '../util/SummeryApi';
import { userdata } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
let contextdatas=createContext(null);


function ContextApiData({children}) {
 
 let [data,setData]=useState({});
//  for redux toolkit store
let dispatch=useDispatch();

// auth info get
 let fetchAuthData=async()=>{
  try{
    let res=await fetch(SummeryApi.AuthDetail.url,{
      method:SummeryApi.AuthDetail.method
    })
    let user=await res.json();
    if(user.success){
setData(user.data);
// instant change no occures so user.data
dispatch(userdata(user.data));
    }

  }
   catch(e){
console.log('data not fetch')
  }
 }

//  console.log(data)


 useEffect(()=>{
  fetchAuthData();
 
 },[])
  return (
    <contextdatas.Provider  value={{fetchAuthData}} >
      {children}
    </contextdatas.Provider>
  )
}

export default ContextApiData
export {contextdatas};