"use client"
import React, { useState } from 'react'
import { SummeryApi } from '../util/SummeryApi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import { toast } from 'react-toastify';

function Signup() {
  const router = useRouter();
  const [data, setData] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const res = await fetch(SummeryApi.SignUp.url, {
        method: SummeryApi.SignUp.method,
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
        // toast.success('Signup success');
        router.push('/login');
      } else {
        // toast.error('Signup not successful');
       }
    } catch (e) {
      console.error(e.message);
       // toast.error('Signup not successful');
       router.push('/signup');

    }
  }

  return (
    <center className='mt-[13vw] md:mt-[10vw] mx-[10vw] md:mx-[25vw] lg:mx-[30vw] px-3 py-4 shadow-2xl rounded-lg'>
      <form onSubmit={handleSignup} className='flex flex-col px-3 py-4'>
        <h1 className='text-center text-[4.5vw] md:text-[3.2vw] font-bold'>SIGN UP</h1>
        <label htmlFor="name" className='text-start'>Name:</label>
        <input type='text' name='name' className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.name} onChange={handleChange} />
        <label htmlFor="email" className='text-start'>Email:</label>
        <input type='email' name='email' className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.email} onChange={handleChange} />
        <label htmlFor="password" className='text-start'>Password:</label>
        <input type='password' name='password' className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.password} onChange={handleChange} />
        <label htmlFor="cpassword" className='text-start'>Confirm Password:</label>
        <input type='password' name='cpassword' className='py-[.5vw] mb-3 border-[.5px] border-black rounded-lg' value={data.cpassword} onChange={handleChange} />
        <button type='submit' className='rounded-full text-center self-center px-3 my-3 py-1 bg-red-500 text-white'>SignUp</button>
        <div className='flex items-center mb-2'>
          <span className='font-semibold'>Already have an Account?</span>
          <Link href='/login' className='text-blue-600'>Login</Link>
        </div>
      </form>
    </center>
  );
}

export default Signup;
