import mongoose from "mongoose";
import {Connection} from '../../lib/db/connection'
import { userModel } from "@/app/lib/userModel/user";
import { NextResponse } from "next/server";
 
import { cookies } from "next/headers";



export async function GET(req,res){
    try{
 cookies().delete('jwt');
 return NextResponse.json({
    success:true,
error:false,
 status:200
}
)

    }
    catch(e){
        console.log('logout not success',e.message);
        return NextResponse.json({
            success:false,
        error:true,
         status:401,
         mess:e.message
        })
    }
}
