import mongoose from "mongoose";
import {Connection} from '../../lib/db/connection'
import { userModel } from "@/app/lib/userModel/user";
import { NextResponse } from "next/server";
 import jwt from 'jsonwebtoken'
  


export async function GET(req,res){
    try{
        let tokon=req.cookies.get('jwt');
        // return obj
// console.log(tokon)
        let verifiedUser=jwt.verify(tokon.value,'ejejijeuuu838xhxhhx8hh8h8h3hh3');
        // console.log(verifiedUser.email)
  let user=await userModel.findOne({email:verifiedUser.email});
if(!user){
    throw new Error('not signup user');
}
 
return NextResponse.json({
    success:true,
error:false,
data:user,
status:200}
)

    }
    catch(e){
        console.log('data not get',e.message);
        return NextResponse.json({
            success:false,
        error:true,
         status:401,
         mess:e.message
        })
    }
}
