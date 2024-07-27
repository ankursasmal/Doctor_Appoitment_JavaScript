 
 import mongoose from "mongoose";
 import { NextResponse } from "next/server";
   import { Connection } from "@/app/lib/db/connection";  
import { OpdAddModel } from "@/app/lib/doctorOpdModel/outSideOpd";  
 
 
 // get only specific one opd add by opdeAddress id
 export async function GET(req,{params}){
    try{
    let id=params.id;
    // console.log(id);
       let data=await OpdAddModel.findOne({_id:id});
    
      return NextResponse.json({
        mess:'data get successfull',
        success:true,
        error:false,
        data:data
      })
    }
    catch(e){
      return NextResponse.json({
        mess:'data not get successfull',
        success:false,
        error:true,
        e:e.message
       })
    }
    }
   