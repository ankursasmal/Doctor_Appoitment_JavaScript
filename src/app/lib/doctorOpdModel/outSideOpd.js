import mongoose from "mongoose";
  
 const Opdschema = {
    name: {
        type: String,
     },
    doctorId:{
       type:String 
    },
    doctorImg: {
        type: String,
     },
     Specialist:{
        type: String,

     },
  
     place: {
        type: String,
     },
     Address:{
        type: String,

     },
     day:{
        type: String,

     },
     time: {
        type: String,
     },
     OpdCenterImg:[],
     noOfPatients:{
        type:Number
     },
     fees:{
        type:Number

     },
      
    helpline:{
        type:Number
    },

    
         
};

 
// Export mongoose model
export const OpdAddModel = mongoose.models.OpdAddModel || mongoose.model('OpdAddModel', Opdschema);
