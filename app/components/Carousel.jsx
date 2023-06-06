'use client'
import React, { useEffect, useState } from 'react'
import "./Carousel.css"
import { pacifico } from '../fonts'

export default function Carousel() {
    const [current, setCurrent] = useState('first')
    const [next, setNext] = useState('second')
    const [prev, setPrev] = useState('third')

  const handleCarousel = () => {
      const temp = current;
      setCurrent(prev)
      setPrev(next)
      setNext(temp)
    }

    useEffect(() => {
      const interval = setInterval(handleCarousel, 4500);

      return () => {
        clearInterval(interval)
      }
    })


return (
    <div className='w-screen overflow-hidden h-[30vw] bg-red relative'>
        <div className={`h-[30vw] min-h-[12.5rem] w-screen bg-red ${prev} 
        bg-[url('/carousel1.jpg')] bg-cover flex flex-col items-end justify-center pr-48`}>
            <div className='flex flex-col justify-center gap-2'>
              <h2 className={`text-5xl text-white font-semibold text-center ${pacifico.className}`}>Limited Time Offer!</h2>
              <p className='text-3xl text-white font-semibold text-center'>-50% off shipping for all skincare products!</p>
            </div>
        </div>
        <div className={`h-[30vw] min-h-[12.5rem] w-screen bg-mainorange ${current}
        bg-[url('/carousel2.jpg')] bg-cover flex flex-col items-end justify-center pr-48 `}>
            <div className='flex flex-col justify-center gap-2'>
              <h2 className={`text-5xl text-white font-semibold text-center ${pacifico.className}`}>Limited Time Offer!</h2>
              <p className='text-3xl text-white font-semibold text-center'>-50% off shipping for all skincare products!</p>
            </div>
        </div>
        <div className={`h-[30vw] min-h-[12.5rem] w-screen bg-mainpink ${next}
        bg-[url('/carousel3.jpg')] bg-cover flex flex-col items-start justify-center pl-48`}>
            <div className='flex flex-col justify-center gap-2'>
              <h2 className={`text-5xl text-white font-semibold text-center ${pacifico.className}`}>Limited Time Offer!</h2>
              <p className='text-3xl text-white font-semibold text-center'>-50% off shipping for all skincare products!</p>
            </div>
        </div>
    </div>
  )
}
