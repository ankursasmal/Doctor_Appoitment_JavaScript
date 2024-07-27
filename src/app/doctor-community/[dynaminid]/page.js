 
//   ********************  //
// for data pass next/router
// for routing route.pusg nex/navigate
'use client'
import { SummeryApi } from "@/app/util/SummeryApi";
import { useEffect, useState } from "react";

 
function page({params}) {
     let id=params.dynaminid;
    // console.log(params.dynaminid)
     const [data, setData] = useState({});

       let  fetchDoctorDetail=async()=>{
        try{
             let res= await fetch(SummeryApi.updateDoctorDetail.url+'/'+`${id}`,{
                method:SummeryApi.updateDoctorDetail.method,
                credentials:'include'
               })
           let result= await res.json();
             if(result.success){
                setData(result.data);
                 // toast.success('doctor reg sucesfull');
             }
        }
        catch(e){
        console.log('dtat not fetch in doctor communoty');
        }
        }
           useEffect(()=>{
            fetchDoctorDetail();
           },[])
console.log(data)

  return (
    <div className='  mt-[8rem]     w-[98%]   bg-slate-200 mx-2 md:mx-4  '  >
    {/* 1row */}
      {/* image art */}
      {/* detail part */}

{/* 2row */}
{/* all chamber detalis */}

{/* 3row */}

      {/* feed backs and rattin ggiven by patients last */}
    </div>
  )
}

export default page
