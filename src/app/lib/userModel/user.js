import mongoose from "mongoose";
 import validator from 'validator';
 
// Define the schema options object
const schema = {
    name: {
        type: String,
     },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Email is invalid'
        }
    },
    password: {
        type: String,
     },
    cpassword: {
        type: String,
     },
    role: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    doctorReg:{
        degree:{
            type:String
        },
        currentJob:{
            type:String
        },
        images:[],

        certificate: [],
        specilization:{
            type:String

        },
        Address:{
            type:String

        },
        phone:{
            type:Number

        }
    }
};

 
// Export mongoose model
export const userModel = mongoose.models.userModel || mongoose.model('userModel', schema);
