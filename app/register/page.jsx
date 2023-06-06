'use client'

import React, { useEffect, useState } from 'react'
import { poppins, montserrat } from '../fonts'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function page() {
    
    const [response, setResponse] = useState(null)
    const router = useRouter()
    const [form, setForm] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...form
                }
            )})
            
            const res_data = await res.json()
            setResponse(res_data);
            if(res_data === "success") router.push("/login");
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setResponse(null)
        }, 3000)

        return () => {
            clearTimeout(timeout);
        }
    })

  return (
    <div className={`flex items-center justify-center bg-emerald-300 h-screen gap-2 bg-secondarywhite`}>
        <img className='rounded-xl max-md:hidden w-2/6 h-4/6 object-cover'
        src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?w=826&t=st=1685403196~exp=1685403796~hmac=016715e276bccf5e4baca6580afbf2dd6a04653b274d1aa34b8874d332b9b3ab" alt="" />
        <form className='w-form_lg h-4/6 bg-white rounded-xl flex flex-col items-center p-6 justify-between max-md:w-3/4  max-md:p-2
            max-sm:w-full max-sm:h-full max-sm:p-2 relative'> 
            <h2 className={`text-4xl font-semibold text-mainorange ${montserrat.className} max-md:text-2xl`}>Sign Up</h2>
            {response && <p className='absolute top-16 text-red'>{response}</p>}
            <div>
            <div className='w-full flex max-md:flex-col'>
                <div className='w-1/2 p-2 max-md:w-full max-md:p-0' >
                    <label htmlFor='fullname' className='max-md:text-sm'>
                        Full Name
                    </label>
                    <input type='text' name='fullname' onChange={(e) => handleChange(e)}
                    className='w-full p-2 bg-secondarywhite rounded-md outline-none max-sm:mb-2 max-sm:p-0 max-sm:h-8'/>
                </div>
                <div className='w-1/2 p-2 max-md:w-full max-md:p-0'>
                    <label htmlFor='username' className='max-md:text-sm'>
                        Username
                    </label>
                    <input type='text' name='username'  onChange={(e) => handleChange(e)} 
                    className='w-full p-2 bg-secondarywhite rounded-md outline-none max-sm:mb-2 max-sm:p-0 max-sm:h-8'/>
                </div>
            </div>
            <div className='w-full p-2 max-md:p-0'>
                <label htmlFor="email" className='max-md:text-sm'>
                    E-mail
                </label>
                <input type='email' name='email'  onChange={(e) => handleChange(e)}
                 className='w-full p-2 bg-secondarywhite rounded-md outline-none max-sm:mb-2 max-sm:p-0 max-sm:h-8'/>
            </div>
            <div className='w-full p-2 max-md:p-0'>
                <label htmlFor="password" className='max-md:text-sm'>
                    Password
                </label>
                <input type='password' name='password'  onChange={(e) => handleChange(e)}
                 className='w-full p-2 bg-secondarywhite rounded-md outline-none max-sm:mb-2 max-sm:p-0 max-sm:h-8'/>
            </div>
            <div className='w-full p-2 max-md:p-0'>
                <label htmlFor="confirm-password" className='max-md:text-sm'>
                    Confirm Password
                </label>
                <input type='password' name='confirm-password'  onChange={(e) => handleChange(e)}
                 className='w-full p-2 bg-secondarywhite rounded-md outline-none max-sm:mb-2 max-sm:p-0 max-sm:h-8'/>
            </div>
            <span className='w-full flex gap-2 p-2 max-md:p-0'>
                    <input type='checkbox' />
                    <p className='max-md:text-sm'>I agree with terms and conditions!</p>
            </span>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <button onClick={(e) => handleSubmit(e)}
                className='p-2 w-48 bg-mainorange text-white font-semibold rounded-xl max-md:p-0 max-md:h-8'>
                    Sign Up
                </button>
                <p className='text-sm'>Already an user? 
                <Link href="/login" className='text-mainorange'>
                    Sign In!
                </Link>
                </p>
            </div>
             
        </form>
    </div>
  )
}
