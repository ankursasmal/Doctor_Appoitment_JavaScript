
export   const SummeryApi={
    
Login:{
    url:'http://localhost:3000/api/login',
    method:'POST',
} ,
SignUp:{
    url:'http://localhost:3000/api/signup',
    method:'POST',
} ,
AuthDetail:{
    url:'http://localhost:3000/api/auth',
    method:'GET',
},
Logout:{
    url:'http://localhost:3000/api/logout',
    method:'GET',
},
UpadtaRole:{
    url:'http://localhost:3000/api/doctorReg',
    method:'PUT',
},
updateDoctorDetail:{
    url:'http://localhost:3000/api/doctorReg',
    method:'GET',
},
deleteDoctorDetail:{
    url:'http://localhost:3000/api/doctorReg',
    method:'PATCH',
},
GetAllDoctorDetail:{
    url:'http://localhost:3000/api/doctorInfo',
    method:'GET',
} ,
AddOpdDetails:{
    url:'http://localhost:3000/api/addopdDetail',
    method:'POST', 
},
EditOpdDetails:{
    url:'http://localhost:3000/api/addopdDetail',
    method:'PUT', 
},
DeleteSpecificOpdId:{
    url:'http://localhost:3000/api/addopdDetail',
    method:'DELETE',
},
SpecificOpdId:{
    url:'http://localhost:3000/api/getOpdAdd',
    method:'GET', 
},
GetAllOpdDetails:{
    url:'http://localhost:3000/api/addopdDetail',
    method:'GET', 
}
 
 

}