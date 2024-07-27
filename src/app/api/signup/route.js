import mongoose from "mongoose";
import {Connection} from '../../lib/db/connection'
import { userModel } from "@/app/lib/userModel/user";
import { NextResponse } from "next/server";
import bcript from 'bcryptjs'

export async function POST(req,res){
    try{
let payload=await req.json();
payload={...payload,role:'GENERAL'};
let ExistUser=await userModel.findOne({email:payload.email});
if(ExistUser){
    throw new Error('already signup');
}
let user=new userModel(payload);
user.password=await bcript.hash(payload.password,10);
user.cpassword=await bcript.hash(payload.cpassword,10);

let data=await user.save();
return NextResponse.json({
    success:true,
error:false,
data:data,
status:200})
    }
    catch(e){
        console.log('data not signUp',e.message);
        return NextResponse.json({
            success:false,
        error:true,
         status:401,
         mess:e.message
        })
    }
}
