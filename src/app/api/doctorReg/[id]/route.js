import mongoose from "mongoose";
import {Connection} from '../../../lib/db/connection'
import { userModel } from "@/app/lib/userModel/user";
import { NextResponse } from "next/server";
   

// transform role admin acordeing id of doctoe
export async function PUT(req,{params}){
    try{
        let id=params.id;
        // console.log(id)
 let payload=await req.json();
//  console.log(payload)

 payload={...payload,role:'ADMIN'};
let existUser=await userModel.findOne({_id:id});
if(!existUser){
    throw new Error('not  signup');
}
let ExistUser=await userModel.findByIdAndUpdate({_id:payload._id},payload,{new:true});
 
  
let data=await ExistUser.save();
return NextResponse.json({
    success:true,
error:false,
data:data,
status:200})
    }
    catch(e){
        console.log('data not update to doctor',e.message);
        return NextResponse.json({
            success:false,
        error:true,
         status:401,
         mess:e.message
        })
    }
}

// get data of specific id of doctor
export async function GET(req,{params}){
    try{
        let id=params.id;
        // console.log(id)
 
 let existUser=await userModel.findOne({_id:id});
if(!existUser){
    throw new Error('not  signup');
}
//   console.log(existUser)
  
 return NextResponse.json({
    success:true,
error:false,
data:existUser,
status:200})
    }
    catch(e){
        console.log('data not get to doctor',e.message);
        return NextResponse.json({
            success:false,
        error:true,
         status:401,
         mess:e.message
        })
    }
}




// transform role general after reg cancile acordeing id of doctoe
export async function PATCH(req,{params}){
    try{
        let id=params.id;
        // console.log(id)

let payload=await req.json();
// console.log(payload);
payload={...payload,role:'GENERAL'};
let existUser=await userModel.findOne({_id:id});
if(!existUser){
    throw new Error('not  signup');
}
let ExistUser=await userModel.findByIdAndUpdate({_id:payload._id},payload,{new:true});
 
  
let data=await ExistUser.save();
return NextResponse.json({
    success:true,
error:false,
data:data,
status:200})
    }
    catch(e){
        console.log('data not update to doctor',e.message);
        return NextResponse.json({
            success:false,
        error:true,
         status:401,
         mess:e.message
        })
    }
}