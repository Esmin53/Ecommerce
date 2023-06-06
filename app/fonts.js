import { Poppins, Montserrat, Pacifico } from "next/font/google"

export const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })

  export const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin']
  })
  
  export const pacifico = Pacifico({
    weight: ['400'],
    subsets: ['latin']
  })
  
  
