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
    <div className='p-5 lg:p-0'>
      <Card >
        <h2 className='mb-2 '>Navigation</h2>
       <ul className='flex lg:flex-col items-start justify-evenly ml-2 text-gray-600'>
            <Link href='/' className='sidebarlinks'>
                <li className='sidebarli '> 
                    <IoHomeOutline  className='text-3xl'/>
                    <p className='hidden md:block  '>Home</p>
                </li>
            </Link>
            <Link href='/profile/friends' className='sidebarlinks'>
              <li className='sidebarli '> 
                  <IoPersonOutline className='text-3xl'/>
                  <p className='hidden md:block '>Friends</p>
              </li>
            </Link>
            <Link href='/saved' className='sidebarlinks'>
              <li  className='sidebarli '> 
                  <BsBookmark className='text-3xl'/>
                  <p  className='hidden md:block '>Saved Post</p>
              </li>
            </Link>
            <Link href='/notifications' className='sidebarlinks'>
              <li className='sidebarli '> 
                  <BsBell className='text-3xl'/>
                  <p   className='hidden md:block '>Notifications</p>
              </li>
            </Link>
            <Link href='/login' className='sidebarlinks'>
              <li className='sidebarli '> 
                  <IoLogOutOutline className='text-3xl'/>
                  <p className='hidden md:block '>Logout</p>
              </li>
            </Link>
       </ul>       
      </Card>
    </div>
  )
}
