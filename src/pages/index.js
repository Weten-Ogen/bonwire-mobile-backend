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
          
            <Form/>
            <div className='mt-3 '>
              <Post/>
            </div>
          
    </main>
  )
}
 
