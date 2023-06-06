'use client'

import React, { useState, useEffect } from 'react'
import { poppins, montserrat } from '../fonts'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function page() {
    
    const [response, setResponse] = useState(null)
    const router = useRouter()
    const [form, setForm] = useState({
        email: "",
        password: "",
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
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    ...form
                }
            )})
            
            const res_data = await res.json()
            typeof res_data !== 'object' && setResponse(res_data);
            if(typeof res_data === 'object') router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(typeof response === 'object') return

        const timeout = setTimeout(() => {
            setResponse(null)
        }, 3000)

        return () => {
            clearTimeout(timeout);
        }
    })

  return (
    <div className={`flex items-center justify-center bg-emerald-300 h-screen gap-2 bg-secondarywhite relative`}>
        <img className='rounded-xl max-md:hidden w-2/6 h-4/6 object-cover absolute top-0 left-0 w-screen h-screen z-10 opacity-70'
        src="https://img.freepik.com/free-photo/stylish-teen-girl-culottes-white-sweater-sits-supermarket-trolley-model-glasses-sends-kiss-makes-selfie-pink_197531-14261.jpg?w=1380&t=st=1685803841~exp=1685804441~hmac=3d61b25f04c59885eada472462ba904bd80186cd526c2b07c3aab71be5e6a0b7" alt="" />
        <form className='w-96 h-96 bg-white rounded-xl flex flex-col items-center px-6 py-4 justify-between max-md:w-3/4  max-md:p-2 z-20
            max-sm:w-full max-sm:h-full max-sm:p-2 relative'> 
            <h2 className={`text-4xl font-semibold text-mainpink ${montserrat.className} max-md:text-2xl`}>Sign In</h2>
            {response && <p className='absolute top-16 text-red text-sm'>{response}</p>}
            
            <div>
            <div className='w-full p-2 max-md:p-0'>
                <label htmlFor="email" className='max-md:text-sm'>
                    E-mail
                </label>
                <input type='email' name='email'  onChange={(e) => handleChange(e)} placeholder='example@gmail.com'
                 className='w-full p-2 bg-secondarywhite rounded-md outline-none max-sm:mb-2 max-sm:p-0 max-sm:h-8'/>
            </div>
            <div className='w-full p-2 max-md:p-0'>
                <label htmlFor="password" className='max-md:text-sm'>
                    Password
                </label>
                <input type='password' name='password'  onChange={(e) => handleChange(e)}
                 className='w-full p-2 bg-secondarywhite rounded-md outline-none max-sm:mb-2 max-sm:p-0 max-sm:h-8'/>
            </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center p-2'>
                <button onClick={(e) => handleSubmit(e)}
                className='p-2 w-full bg-mainpink text-white font-semibold rounded-xl max-md:p-0 max-md:h-8'>
                    Sign Up
                </button>
                <p className='text-sm mt-2'>Dont have an account? 
                <Link href="/register" className='text-mainpink '>
                    Sign Up!
                </Link>
                </p>
            </div>
             
        </form>
    </div>
  )
}
