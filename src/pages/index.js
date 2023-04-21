import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SideBar,Form,Post } from '../components'
const inter = Inter({ subsets: ['latin'] })
import {BsMoonStars, BsMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';



export default function Home() {


  const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => {
    setDarkMode(prev => !prev)
  }


  return (
    <main className={darkMode? 'dark': ''}>
       <section className='mt-5 md:max-w-4xl  flex items-start mx-auto gap-6'>
          <div className='hidden md:block   lg:w-1/5'>
            <SideBar/>
          </div>
          <div className=' w-full h-full lg:w-4/5 sm:w-3/5 flex flex-col  overflow-hidden '>
            <Form/>
            <div className='mt-6 '>
              <Post/>
            </div>
          </div>
       </section>
    </main>
  )
}
