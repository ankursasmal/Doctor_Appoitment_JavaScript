import mongoose from "mongoose";
 import { NextResponse } from "next/server";
   import { Connection } from "@/app/lib/db/connection";
import { OpdAddModel } from "@/app/lib/doctorOpdModel/outSideOpd";
 
 export async function POST(req,res){
    try{
  let payload=await req.json();
  //  console.log("payload",payload);
 
  let addopd=new OpdAddModel(payload);
//  console.log(addopd._id)
  let result=await addopd.save();
    
//   console.log(result)
  return NextResponse.json({
    success:true,
error:false,
data:result,
status:200})
    }
    catch(e){
        console.log('data not post to opd',e.message);
        return NextResponse.json({
            success:false,
        error:true,
         status:401,
         mess:e.message
        })
    }
}

 