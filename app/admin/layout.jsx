'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {FaDollarSign, FaRegCreditCard, FaUser} from "react-icons/fa"
import {TbActivityHeartbeat} from "react-icons/tb"

export default function AdminLayout({ children }) {
    const pathname = usePathname()

    let location = pathname.split('/')[2]
    location = location.charAt(0).toUpperCase() + location.slice(1)

    let currentDate = new Date().toLocaleDateString()
  return (
    <div className='lg:px-32 py-8 '>
        <div className='border border-lightgray shadow shadow-offwhite_200 rounded-xl p-4'>
          <section className='w-full flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-3xl font-bold'>{location }</h2>
              <p>{currentDate}</p>
            </div>
            <ul className='flex shadow shadow-semibold_200 w-fit bg-offwhite_100 p-1 text-offwhite_200 font-semibold gap-1'>
              <li className={`py-1 px-2 rounded-md ${location === 'Overview' && 'bg-white'}`}>
                <Link href="/admin/overview"> Overview </Link> 
              </li>
              <li className={`py-1 px-2 rounded-md ${location === 'Products' && 'bg-white'}`}>
              <Link href="/admin/products"> Products </Link>
              </li>
              <li className={`py-1 px-2 rounded-md ${location === 'Customers' && 'bg-white'}`}>
              <Link href="/admin/customers"> Customers </Link>
              </li>
            </ul>
            <div className='flex gap-4'>
              <div className='flex-1 h-32 border border-offwhite_100 rounded-xl shadow shadow-offwhite_200 lg:p-4 flex flex-col'>
                <div className='flex justify-between'>
                    <p className='text-sm'>Total Revenue</p>
                    <FaDollarSign  className='text-offwhite_200'/>
                </div>
                <p className='font-bold text-3xl mt-2'>$ 45,351.21</p>
                <p className='text-xs text-offwhite_200'>+20.1% from last month</p>
              </div>
              <div className='flex-1 h-32 border border-offwhite_100 rounded-xl shadow shadow-offwhite_200 lg:p-4 flex flex-col'>
                <div className='flex justify-between'>
                    <p className='text-sm'>Supscriptions</p>
                    <FaUser  className='text-offwhite_200'/>
                </div>
                <p className='font-bold text-3xl mt-2'>2500</p>
                <p className='text-xs text-offwhite_200'>+25 from last month</p>
              </div>
              <div className='flex-1 h-32 border border-offwhite_100 rounded-xl shadow shadow-offwhite_200 lg:p-4 flex flex-col'>
                <div className='flex justify-between'>
                    <p className='text-sm'>Total Sales</p>
                    <FaRegCreditCard  className='text-offwhite_200'/>
                </div>
                <p className='font-bold text-3xl mt-2'> 35,351</p>
                <p className='text-xs text-offwhite_200'>+20.1% from last month</p>
              </div>
              <div className='flex-1 h-32 border border-offwhite_100 rounded-xl shadow shadow-offwhite_200 lg:p-4 flex flex-col'>
                <div className='flex justify-between'>
                    <p className='text-sm'>Active Now</p>
                    <TbActivityHeartbeat  className='text-offwhite_200'/>
                </div>
                <p className='font-bold text-3xl mt-2'> 351</p>
                <p className='text-xs text-offwhite_200'>+20.1% since last hour</p>
              </div>
            </div>
          </section>
          <section>
            {children}
          </section>
        </div>
    </div>
  )
}
