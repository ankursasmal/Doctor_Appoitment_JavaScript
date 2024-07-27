import React, { useState } from 'react'
  // import imgtObase64 from '../imgConvert/imgt0base64';
// import { toast } from 'react-toastify';
 import ShowImgBigSize from './ShowImgBigSize';
import { IoMdCloudUpload } from "react-icons/io";
 import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
 import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import { userdata } from '../Redux/userSlice';
import { SummeryApi } from '../util/SummeryApi';

function DoctorRegistration({onClose,fetchAuthData}) {
  let [show,setShow]=useState(true);
 let [ShowBigimg,setShowBigImg]=useState(false);
let [SelectedImg,setSelectedImg]=useState('');
let dispatch=useDispatch();
let router=useRouter();

let [data,setData]=useState({ 
  degree:" ",
  currentJob:" ", 
  images:[],
  certificate:[],
  specilization:" ",
  Address:" ",
  phone:0
  })

 let user=useSelector(state=>state?.user?.user)

let value,name;
let handelchangeInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    // extra dydefault field addd below
    setData({...data,[name]:value});
      }
      // to convert phone number type  
      data={...data,phone:Number.parseInt(data.phone)};

//  console.log(user)
 
//  update doctor info role in Admin
 let handelNewDoctorReg= async(e)=>{
   try{ 
   e.preventDefault();
  //  retailer is in data base all signup detail and extra field add retailer:{data}
     user={...user, doctorReg:data}
  //  console.log(user);
    let res= await fetch(SummeryApi.UpadtaRole.url+'/'+`${user?._id}`,{
      method:SummeryApi.UpadtaRole.method,
      headers:{
         'Content-Type':'application/json'
      },
       body:JSON.stringify(user)
    })
let result= await res.json()
 
  if(result.success){
    // redux tolkit must update after become saller
     dispatch(userdata(result.data));
     fetchAuthData();
    // toast.success('doctor reg sucesfull');
    router.push('/');
 }

 else{
  // toast.error(' doctor reg not sucesful in fronteneed');
router.push('/signup') 
}
   }
 catch(e){
   router.push('/signup') 
  //  toast.error('reg not sucesful in fronteneed');

 console.log('reg not success in frontened',e)
 }
}

//   *************certificate section ***************//
//  To  for upload image  of certifictae
const HandelUploadImage = (event) => {
  const file = event.target.files[0]; // Get the file selected by the user
  const reader = new FileReader(); 

   reader.onload = () => {
    let imgurl= (reader.result);  
    // array under store hocha array distructure
       setData({...data,certificate:[...data.certificate,imgurl]})
 };

// Read the file as a data URL (base64 encoded)
  reader.readAsDataURL(file);
 };



//  To see Big img on click image

let HandelZoomUploadImg=(index)=>{
  setSelectedImg(data.certificate[index]);
  setShowBigImg(true);
   }
  // console.log(SelectedImg,ShowBigimg);
  
  // ***** onclick img delte it 
  let handelDeleteImg=(index)=>{
    // console.log('annak')
    // setData under ****call back***** to change specfic 
    setData(data=>
      ({...data,certificate:data.certificate.filter((val,id)=>id!==index)}
    ))
  }
  


//   *************doctor img section ***************//

 //  To  for upload image  of doctor
const HandelUploadDoctorImage = (event) => {
  const file = event.target.files[0]; // Get the file selected by the user
  const reader = new FileReader(); 

   reader.onload = () => {
    let imgurl= (reader.result);  
    // array under store hocha array distructure
       setData({...data,images:[...data.images,imgurl]})
 };

// Read the file as a data URL (base64 encoded)
  reader.readAsDataURL(file);
 };
 
  


//  To see Big img on click image

let HandelZoomUploadImgDoctor=(index)=>{
  setSelectedImg(data.images[index]);
  setShowBigImg(true);
   }
  // console.log(SelectedImg,ShowBigimg);
  
  // ***** onclick img delte it 
  let handelDeleteImgDoctor=(index)=>{
    // console.log('annak')
    // setData under ****call back***** to change specfic 
    setData(data=>
      ({...data,images:data.images.filter((val,id)=>id!==index)}
    ))
  }
  


 
 
  return (
     <div className=' absolute w-[100%] top-[6rem] left-0 h-[100vh] bg-slate-200  bg-opacity-40  flex justify-center items-center '>
    <div className='bg-white rounded absolute top-[20px] left-10 md:left-[20vw]  p-4 h-[30rem] w-[85%] md:h-[33rem] md:w-[60%] overflow-x-hidden' style={{backgroundColor:'white !important'}}>
             <div className='text-3xl flex items-end justify-end w-[100%]  mr-2' onClick={onClose}><RxCross2 className='text-end text-3xl'/></div>

        <div className='flex items-center justify-between px-2'>

      <div className='flex justify-center w-[100%]'>  <h1 className='text-2xl font-semibold '>Doctors Registration </h1> </div> 
       {/* props through onClose Function call */}

       </div>

       <form action="" className='mx-[10%]'>
         <div className='flex flex-col items-start  '> 
           <label htmlFor='degree' className='text-2xl my-1'>degree:</label>
           <input type="text" id="degree" placeholder='enter product Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='degree' value={data.degree} onChange={handelchangeInput}/>
           </div>
           <div className='flex flex-col items-start '> 
           <label htmlFor='currentJob' className='text-2xl my-1'>currentJob:</label>
           <input type="text" id="currentJob" placeholder='enter currentJob Name' name='currentJob' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' value={data.currentJob} onChange={handelchangeInput}/>
           </div>
 
{/* upload img in of doctor section */}
<div className='flex flex-col items-start '> 
<label htmlFor='images' className='text-2xl my-1'>Images:</label>
            <div className='   py-20 rounded-lg border-[3px] w-[100%] border-black ' > 
            <label htmlFor='images' className='flex flex-col items-center justify-center cursor-pointer' >

<div className='text-4xl'><IoMdCloudUpload/></div>
<a className='text-lg mt-4'>Upload Image  </a>     
 <input type="file"  id="images"  className='self-center ml-[10vw] mt-3 hidden' onChange={HandelUploadDoctorImage}/>

 </label>
 </div>

 {/* for display images under arry of doctor img and see and delete operation*/}
 <div className='flex items-center justify-center flex-wrap m-3'> 
 {data?.images?.map((val,index)=>{
   return(
     <div key={index} className='w-[30%] relative m-3'>
     <img src={val} alt="" style={{width:'100%',height:'100%'}}  onClick={()=>HandelZoomUploadImgDoctor(index)}/>
   <div className='text-red-600 absolute bottom-0 right-0 text-2xl bg-white ' onClick={()=>{handelDeleteImgDoctor(index)}} >
     <MdDelete/>
     </div>
   </div>)
 })}

       </div>   
</div>



{/* upload img in certificate section */}
          <div className='flex flex-col items-start '> 
<label htmlFor='certificate' className='text-2xl my-1'>certificate:</label>
            <div className='   py-20 rounded-lg border-[3px] w-[100%] border-black ' > 
            <label htmlFor='certificate' className='flex flex-col items-center justify-center cursor-pointer' >

<div className='text-4xl'><IoMdCloudUpload/></div>
<a className='text-lg mt-4'>Upload Image  </a>     
 <input type="file"  id="certificate"  className='self-center ml-[10vw] mt-3 hidden' onChange={HandelUploadImage}/>

 </label>
 </div>

 {/* for display images under arry of certificate img and see and delete operation*/}
 <div className='flex items-center justify-center flex-wrap m-3'> 
 {data.certificate?.map((val,index)=>{
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


           <div className='flex flex-col items-start '> 
           <label htmlFor='specilization' className='text-2xl my-1'>specilization:</label>
           <input type="text" id="specilization" placeholder='enter product Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='specilization' value={data.specilization} onChange={handelchangeInput}/>
            </div>

                 <div className='flex flex-col items-start '> 
           <label htmlFor='Address' className='text-2xl my-1'>Address:</label>
           <input type='text' id="Address" placeholder='enter product Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='Address' value={data.Address} onChange={handelchangeInput}/>
           </div>

           <div className='flex flex-col items-start '> 
           <label htmlFor='phone' className='text-2xl my-1'>Phone:</label>
           <input type='number' id="phone" placeholder='enter product Name' className='py-1.5 rounded-lg border-[3px] w-[100%] border-black' name='phone' value={data.phone} onChange={handelchangeInput}/>
           </div>

           <button type='submit' className='px-4 w-[100%] py-1.5 bg-blue-500 text-white self-center rounded-full my-3 text-center'  onClick={handelNewDoctorReg}>Upload Doctor Details</button> 
       </form>

</div>
{ShowBigimg &&
<ShowImgBigSize onClose={()=>setShowBigImg(false)}  image={SelectedImg} />}

</div>
 
  )
}

export default DoctorRegistration
