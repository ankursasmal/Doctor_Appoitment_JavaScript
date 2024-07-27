import mongoose from "mongoose";
 import { userModel } from "@/app/lib/userModel/user";
import { NextResponse } from "next/server";
   import { Connection } from "@/app/lib/db/connection";

 export async function GET(req,res){
    try{
  
 let existUser=await userModel.find({role:'ADMIN'});
 
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
