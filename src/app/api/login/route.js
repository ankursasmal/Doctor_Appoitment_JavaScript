import mongoose from "mongoose";
import {Connection} from '../../lib/db/connection'
import { userModel } from "@/app/lib/userModel/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
import { cookies } from "next/headers";



export async function POST(req,res){
    try{
let payload=await req.json();
 let ExistUser=await userModel.findOne({email:payload.email});
if(!ExistUser){
    throw new Error('not signup');
}
 
let isMatch=await bcrypt.compare(payload.password,ExistUser.password);
// console.log(isMatch);
 
if(isMatch){
    let tokon =jwt.sign({email:payload.email},'ejejijeuuu838xhxhhx8hh8h8h3hh3',{
        expiresIn:'3d',
    })
    //  console.log(tokon);
    cookies().set('jwt',tokon,{expiresIn:'3d',httpOnly:true});
    
return NextResponse.json({
    success:true,
error:false,
 status:200
}
)
}
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
