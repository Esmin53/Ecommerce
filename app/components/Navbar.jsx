'use client';

import React, { useState, useEffect, useRef } from 'react'
import {FaShoppingBasket} from "react-icons/fa"
import { pacifico } from '../fonts'
import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function Navbar() {

  const ref = useRef(null);
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();
  let styles = pathname === '/' ? "text-white bg-transparent fixed"  : "text-black bg-offwhite shadow sticky"

  const handleScroll = () => {
    const scrollTop = ref.current.scrollTop;
    setIsTop(scrollTop === 0);
    console.log("SCROLLEDDDD")
  };

  useEffect(() => {
    const container = ref.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);
 


  return (
    <nav ref={ref} className={`w-full h-20  flex items-center p-2 gap-2 lg:px-32 z-40 top-0 ${styles}`}>
        <Link className='mr-auto' href="/"><h2 className={`mr-auto text-2xl font-semibold ${pacifico.className}`}>Next Shop</h2></Link>
        <div className='w-1/4 flex relative items-center shadow-md'>
            <input type='text' className='w-full outline-none p-2 h-9 text-black'
            placeholder='Search...?' />
            <button className='h-9 w-20 bg-mainorange text-white'>Search</button>
        </div>
        <ul className='flex p-2 font-semibold gap-2 text-lg items-center'>
            <li className='e'>Sign In</li>
            <li className='text-2xl'> <FaShoppingBasket /></li>
        </ul>
    </nav>
  )
}
