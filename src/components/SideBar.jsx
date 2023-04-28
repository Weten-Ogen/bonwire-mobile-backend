import React from 'react'
import Card from './Card';
import Link from 'next/link';
import { BsBookmark,BsBell }from 'react-icons/bs';
import {IoLogOutOutline,IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { useRouter } from 'next/router';

export default function SideBar() {
  const router = useRouter();
  const{pathname} = router;
  return (
    <div className='hidden md:block'>
      <Card >
        <h2 className='mb-2 '>Navigation</h2>
       <ul className='flex flex-col items-start justify-evenly ml-2 text-gray-600'>
            <Link href='/' className='sidebarlinks'>
                <li className='sidebarli '> 
                    <IoHomeOutline  className='text-xl'/>
                    <p className='block  '>Home</p>
                </li>
            </Link>
            <Link href='/' className='sidebarlinks'>
              <li className='sidebarli '> 
                  <IoPersonOutline className='text-xl'/>
                  <p className='block '>Friends</p>
              </li>
            </Link>
            <Link href='' className='sidebarlinks'>
              <li  className='sidebarli '> 
                  <BsBookmark className='text-xl'/>
                  <p  className='block '>Saved Post</p>
              </li>
            </Link>
            <Link href='' className='sidebarlinks'>
              <li className='sidebarli '> 
                  <BsBell className='text-xl'/>
                  <p   className='block '>Notifications</p>
              </li>
            </Link>
            <Link href='' className='sidebarlinks'>
              <li className='sidebarli '> 
                  <IoLogOutOutline className='text-xl'/>
                  <p className='block '>Logout</p>
              </li>
            </Link>
       </ul>       
      </Card>
    </div>
  )
}
