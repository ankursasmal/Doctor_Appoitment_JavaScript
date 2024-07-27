import mongoose from "mongoose";

export const Connection=await mongoose.connect('mongodb+srv://ankursasmal2024:Ankur123@cluster0.ey4tibo.mongodb.net/Appointment?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('db connect');
}).catch((e)=>{
    console.log('db not conect');
})



