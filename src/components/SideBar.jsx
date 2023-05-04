import React from 'react'
import Card from './home/Card';
import Link from 'next/link';
import { BsBookmark,BsBell }from 'react-icons/bs';
import {IoLogOutOutline,IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { useRouter } from 'next/router';

export default function SideBar() {
  const router = useRouter();
  const{pathname} = router;
  return (
    <div className='p-7 lg:p-0'>
      <Card >
        <h2 className='hidden lg:block mb-2 '>Navigation</h2>
       <ul className='flex lg:flex-col items-start justify-evenly ml-2 text-gray-600 relative p-5'>
            <Link href='/' className='before:hover:content-["home"]  sidebarlinks sidebartooltips '>
                <li className='sidebarli '> 
                    <IoHomeOutline  className='text-3xl'/>
                    <p className='hidden md:block  '>Home</p>
                </li>
            </Link>
            <Link href='/profile/friends' className='sidebarlinks before:hover:content-["friends"] sidebartooltips'>
              <li className='sidebarli relative'> 
                  <IoPersonOutline className='text-3xl'/>
                  <p className='hidden md:block '>Friends</p>
              </li>
            </Link>
            <Link href='/saved' className='sidebarlinks before:hover:content-["saved"] sidebartooltips'>
              <li  className='sidebarli relative'> 
                  <BsBookmark className='text-3xl'/>
                  <p  className='hidden md:block '>Saved Post</p>
              </li>
            </Link>
            <Link href='/notifications' className='sidebarlinks before:hover:content-["notifications"] sidebartooltips'>
              <li className='sidebarli relative'> 
                  <BsBell className='text-3xl'/>
                  <p   className='hidden md:block '>Notifications</p>
              </li>
            </Link>
            <Link href='/login' className='sidebarlinks before:hover:content-["logout"] sidebartooltips'>
              <li className='sidebarli relative'> 
                  <IoLogOutOutline className='text-3xl'/>
                  <p className='hidden md:block '>Logout</p>
              </li>
            </Link>
       </ul>       
      </Card>
    </div>
  )
}
