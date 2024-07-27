
import mongoose from "mongoose";
 import { NextResponse } from "next/server";
   import { Connection } from "@/app/lib/db/connection";  
import { OpdAddModel } from "@/app/lib/doctorOpdModel/outSideOpd";
 

// get all add opd Address by doctor id
export async function GET(req,{params}){
    try{
    let id=params.id;
     console.log(id);
       let data=await OpdAddModel.find({doctorId:id});
    
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
    

    
      // edit opd adress by id
      export async function PUT(req,{params}){
        try{
        let id=params.id;
        // console.log(id);
        let payload=await req.json();
           let data=await OpdAddModel.findByIdAndUpdate({_id:id},payload,{new:true});
        
          return NextResponse.json({
            mess:'data update successfull',
            success:true,
            error:false,
            data:data
          })
        }
        catch(e){
          return NextResponse.json({
            mess:'data not update successfull',
            success:false,
            error:true,
            e:e.message
           })
        }
        }
        
          // delete opd adress by id
      export async function DELETE(req,{params}){
        try{
        let id=params.id;
        // console.log(id);
            let data=await OpdAddModel.findByIdAndDelete({_id:id});
        
          return NextResponse.json({
            mess:'data delete successfull',
            success:true,
            error:false,
            data:data
          })
        }
        catch(e){
          return NextResponse.json({
            mess:'data not delete successfull',
            success:false,
            error:true,
            e:e.message
           })
        }
        }
        