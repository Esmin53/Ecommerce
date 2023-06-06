import Image from 'next/image'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className='h-screen overflow-x-hidden relative'>
      <Navbar />
      <Carousel />
      Testing
      <div className='h-screen'></div>
    </main>
  )
}
