import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Form from './Form'

export default function page() {

  return (
    <div className='flex gap-2 mt-4'>
      <div className='w-2/5 h-[29rem] rounded-xl border border-offwhite_100 rounded-xl shadow shadow-offwhite_200 h-max
      flex flex-col p-4 gap-2'>
        <div className='flex'>
          <input type='text' placeholder='Search...?' 
          className='w-full h-10 border border-lightgray shadow outline-none pl-2 rounded-md'/>
        </div>
        <div className='w-full h-14 shadow shadow-semibold_200 bg-offwhite_100 rounded-md px-2 py-1 rounded-md flex justify-between items-center'>
          <div className='w-16 h-full bg-mainorange rounded-md'></div>
          <div className='flex flex-col items-between'>
              <p className='text-md font-semibold'>Green Army Jacket</p>
              <p className='text-sm text-offwhite_200 font-semibold'>Clothing</p>
          </div>
          <div className='flex flex-col items-between'>
              <p className='text-md font-semibold'>$ 65.50</p>
              <p className='text-sm text-offwhite_200 font-semibold'>Shipping: free</p>
          </div>
        </div>
        <div className='w-full h-14 shadow shadow-semibold_200 bg-offwhite_100 rounded-md px-2 py-1 rounded-md flex justify-between items-center'>
          <div className='w-16 h-full bg-mainorange rounded-md'></div>
          <div className='flex flex-col items-between'>
              <p className='text-md font-semibold'>Green Army Jacket</p>
              <p className='text-sm text-offwhite_200 font-semibold'>Clothing</p>
          </div>
          <div className='flex flex-col items-between'>
              <p className='text-md font-semibold'>$ 65.50</p>
              <p className='text-sm text-offwhite_200 font-semibold'>Shipping: free</p>
          </div>
        </div>
        <div className='w-full h-14 shadow shadow-semibold_200 bg-offwhite_100 rounded-md px-2 py-1 rounded-md flex justify-between items-center'>
          <div className='w-16 h-full bg-mainorange rounded-md'></div>
          <div className='flex flex-col items-between'>
              <p className='text-md font-semibold'>Green Army Jacket</p>
              <p className='text-sm text-offwhite_200 font-semibold'>Clothing</p>
          </div>
          <div className='flex flex-col items-between'>
              <p className='text-md font-semibold'>$ 65.50</p>
              <p className='text-sm text-offwhite_200 font-semibold'>Shipping: free</p>
          </div>
        </div>

      </div>
      <div className='w-3/5 h-[29rem] border border-offwhite_100 rounded-xl shadow shadow-offwhite_200 p-4'>
          <h2 className='text-lg font-semibold'>Add New Product</h2>
          <p className='text-md text-offwhite_200'>0 products in total</p>
          <Form />
      </div>
    </div>
  )
}
