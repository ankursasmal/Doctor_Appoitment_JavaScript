'use client'
import React, { useEffect, useState } from 'react'
import ShowImgBigSize from './ShowImgBigSize';
import { IoMdCloudUpload } from "react-icons/io";
 import { MdDelete } from "react-icons/md";
  import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';
 import { SummeryApi } from '../util/SummeryApi';
import { FaHand } from 'react-icons/fa6';
 
function EditOpdDetail({onClose,user,OpdId,handelGetOpdeDetail}) {
 let router=useRouter();
  let [ShowBigimg,setShowBigImg]=useState(false);
let [SelectedImg,setSelectedImg]=useState('');

let [data,setData]=useState({});

 // data get from user model
 // console.log(user)

const {name}=user;
const { specilization,images}=user.doctorReg;
const imgSrc=images[0];
 
 
// post req for add opd addreass
 let handelchangeInput=(e)=>{
   let name=e.target.name;
 let   value=e.target.value;
    // extra dydefault field addd below
    setData({...data,[name]:value});
      }
      // to convert phone number type  
      data={...data,phone:Number.parseInt(data.noOfPatients),helpline:Number.parseInt(data.helpline),fees:Number.parseInt(data.fees)};
    //  console.log(typeof(data.helpline),data.helpline)

//  console.log(user)


// get opd address
let handelGetSpecificOpdDatail=async()=>{
  try{
    let res=await fetch(SummeryApi.SpecificOpdId.url+'/'+`${OpdId}`,{
 method:SummeryApi.SpecificOpdId.method,
 credentials:'include'
    }      
    )

    let result=await res.json();
    if(result.success){
      setData(result.data);
     }

  }
  catch(e){
console.log('data not fetch');
  }
}

useEffect(()=>{
  handelGetSpecificOpdDatail();
},[])


 
//  update doctor opd details 
 let handelDoctorOpdUpdate= async(e)=>{
   try{ 
   e.preventDefault();
  //  retailer is in data base all signup detail and extra field add retailer:{data}
     data={...data,name:name,doctorId:user._id,doctorImg:imgSrc,Specialist:specilization}
    // console.log("user",data);

    let res= await fetch(SummeryApi.EditOpdDetails.url+'/'+`${OpdId}`,{
      method:SummeryApi.EditOpdDetails.method,
      headers:{
         'Content-Type':'application/json'
      },
       body:JSON.stringify(data)
    })
let result= await res.json()
//  console.log('result',result)
  if(result.success){
     handelGetOpdeDetail();
    router.push('/opdDetailsAdd');
 }

 else{
  // toast.error(' doctor reg not sucesful in fronteneed');
router.push('/opdDetailsAdd') 
}
   }
 catch(e){
   router.push('/opdDetailsAdd') 
  //  toast.error('reg not sucesful in fronteneed');

 console.log('opd data not success in frontened',e)
 }
}
 
 
// delete opd address 
let handelDeleteOpdAdd=async(e)=>{
  try{
    e.preventDefault();

    let res=await fetch(SummeryApi.DeleteSpecificOpdId.url+'/'+`${OpdId}`,{
      method:SummeryApi.DeleteSpecificOpdId.method,
      credentials:'include'
         }      
         )
     
         let result=await res.json();
         if(result.success){
          handelGetOpdeDetail();
          router.push('/opdDetailsAdd')
           }
       }
  catch(e)
{
console.log('delete not succecc');
}}




//  To  for upload image  of opdImage
const HandelUploadImage = (event) => {
    const file = event.target.files[0]; // Get the file selected by the user
    const reader = new FileReader(); 
  
     reader.onload = () => {
      let imgurl= (reader.result);  
      // array under store hocha array distructure
         setData({...data,OpdCenterImg:[...data.OpdCenterImg,imgurl]})
   };
  
  // Read the file as a data URL (base64 encoded)
    reader.readAsDataURL(file);
   };
  
  
  
  //  To see Big img on click image
  
  let HandelZoomUploadImg=(index)=>{
    setSelectedImg(data.OpdCenterImg[index]);
    setShowBigImg(true);
     }
    // console.log(SelectedImg,ShowBigimg);
    
    // ***** onclick img delte it 
    let handelDeleteImg=(index)=>{
      // console.log('annak')
      // setData under ****call back***** to change specfic 
      setData(data=>
        ({...data,OpdCenterImg:data.OpdCenterImg.filter((val,id)=>id!==index)}
      ))
    }

    
  return (
     <div className=' absolute w-[100%] top-[6rem] left-0 h-[100vh] bg-slate-200  bg-opacity-40  flex justify-center items-center '>
    <div className='bg-white rounded absolute top-[20px] left-10 md:left-[20vw]  p-4 h-[30rem] w-[85%] md:h-[33rem] md:w-[60%] overflow-x-hidden' style={{backgroundColor:'white !important'}}>
             <div className='text-3xl flex items-end justify-end w-[100%]  mr-2' onClick={onClose}><RxCross2 className='text-end text-3xl'/></div>

        <div className='flex items-center justify-between px-2'>

      <div className='flex justify-center w-[100%]'>  <h1 className='text-2xl font-semibold '>Doctors Opd Details Add </h1> </div> 
       {/* props through onClose Function call */}

       </div>

       <form action="" className='mx-[10%]'>
         <div className='flex flex-col items-start  '> 
           <label htmlFor='place' className='text-2xl my-1'>Place:</label>
           <input type="text" id="place" placeholder='enter city,state Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='place' value={data.place} onChange={handelchangeInput}/>
           </div>
           <div className='flex flex-col items-start '> 
           <label htmlFor='Address' className='text-2xl my-1'>Address:</label>
           <input type="text" id="Address" placeholder='enter Address Name' name='Address' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' value={data.Address} onChange={handelchangeInput}/>
           </div>
 
           <div className='flex flex-col items-start '> 
           <label htmlFor='day' className='text-2xl my-1'>Day:</label>
<select name="day" id="" className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' onChange={handelchangeInput}>
    <option value="">Chose Day</option>
<option value="Sunday">Sunday</option>
<option value="Mondey">Monday</option>
<option value="Tuesday">Tuesday</option>
<option value="Wednesday">Wednesday</option>
<option value="Thursday">Thursday</option>
<option value="Friday">Friday</option>
<option value="Saturday">Saturday</option>
<option value="All Day">All Day</option>

</select>  
              </div>

           <div className='flex flex-col items-start '> 
           <label htmlFor='time' className='text-2xl my-1'>Time:</label>
           <input type="text" id="time" placeholder='enter Time  ' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='time' value={data.time} onChange={handelchangeInput}/>
            </div>

                 <div className='flex flex-col items-start '> 
           <label htmlFor='noOfPatients' className='text-2xl my-1'>NoOfPatients:</label>
           <input type='Number' id="noOfPatients" placeholder='enter product Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='noOfPatients' value={data.noOfPatients} onChange={handelchangeInput}/>
           </div>

           <div className='flex flex-col items-start '> 
           <label htmlFor='fees' className='text-2xl my-1'>Fees:</label>
           <input type='number' id="fees" placeholder='enter product Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='fees' value={data.fees} onChange={handelchangeInput}/>
           </div>

           <div className='flex flex-col items-start '> 
           <label htmlFor='helpline' className='text-2xl my-1'>Helpline:</label>
           <input type='number' id="helpline" placeholder='enter product Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='helpline' value={data.helpline} onChange={handelchangeInput}/>
           </div>

{/* shop or opd image */}
<div className='flex flex-col items-start '> 
<label htmlFor='OpdCenterImg' className='text-2xl my-1'>OpdCenterImg:</label>
            <div className='   py-20 rounded-lg border-[3px] w-[100%] border-black ' > 
            <label htmlFor='OpdCenterImg' className='flex flex-col items-center justify-center cursor-pointer' >

<div className='text-4xl'><IoMdCloudUpload/></div>
<a className='text-lg mt-4'>Upload Image  </a>     
 <input type="file"  id="OpdCenterImg"  className='self-center ml-[10vw] mt-3 hidden' onChange={HandelUploadImage}/>

 </label>
 </div>

 {/* for display images under arry of certificate img and see and delete operation*/}
 <div className='flex items-center justify-center flex-wrap m-3'> 
 {data.OpdCenterImg?.map((val,index)=>{
   return(
     <div key={index} className='w-[30%] relative m-3'>
     <img src={val} alt="" style={{width:'100%',height:'100%'}}  onClick={()=>HandelZoomUploadImg(index)}/>
   <div className='text-red-600 absolute bottom-0 right-0 text-2xl bg-white ' onClick={()=>{handelDeleteImg(index)}} >
     <MdDelete/>
     </div>
   </div>)
 })}
 </div>   
</div>

            

           <button type='submit' className='px-4 w-[100%] py-1.5 bg-blue-500 text-white self-center rounded-full my-3 text-center'  onClick={handelDoctorOpdUpdate}>Upload Opd Details</button> 
       <div className='flex justify-end'>
<button className='bg-red-500 text-white px-6 py-2 rounded-lg' onClick={handelDeleteOpdAdd}>Delete</button>
</div>
       </form>

</div>
{ShowBigimg &&
<ShowImgBigSize onClose={()=>setShowBigImg(false)}  image={SelectedImg} />}

</div>
 
  )
}

export default EditOpdDetail
  