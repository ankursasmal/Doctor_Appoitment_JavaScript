"use client"
import React, { useContext, useState } from 'react'
import { SummeryApi } from '../util/SummeryApi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
 
// import { toast } from 'react-toastify';
import {contextdatas} from '../contextData/ContextApiData';

function Login() {
  const router = useRouter();
let {fetchAuthData}=useContext(contextdatas);

  const [data, setData] = useState({ email: "", password: "" });
   const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const res = await fetch(SummeryApi.Login.url, {
        method: SummeryApi.Login.method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const user = await res.json();
    //   console.log("user", user);

      if (user.success) {
        fetchAuthData();
                router.push('/');
        // toast.success('login success')
      } else {
        // toast.error('login not success')
      }
    } catch (e) {
      console.error(e.message);
      // toast.error('login not success')
    }
  }

  return (
    <center className='mt-[13vw] md:mt-[10vw] mx-[10vw] md:mx-[25vw] lg:mx-[30vw] px-3 py-4 shadow-2xl rounded-lg'>
      <form onSubmit={handleLogin} className='flex flex-col px-3 py-4'>
        <h1 className='text-center text-[4.5vw] md:text-[3.2vw] font-bold'>LOGIN</h1>
        <label htmlFor="email" className='text-start'>Email:</label>
        <input type='email' name='email' className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.email} onChange={handleChange} />
        <label htmlFor="password" className='text-start'>Password:</label>
        <input type='password' name='password' className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.password} onChange={handleChange} />
        <button type='submit' className='rounded-full text-center self-center px-3 my-3 py-1 bg-red-500 text-white'>Login</button>
        <div className='flex items-center mb-2'>
          <span className='font-semibold'>Do not have Account?</span>
          <Link href='/signup' className='text-blue-600'>SignUp</Link>
        </div>
      </form>
    </center>
  )
}

export default Login;
