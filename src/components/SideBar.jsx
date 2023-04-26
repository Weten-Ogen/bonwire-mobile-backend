import React from 'react'
import Card from './Card';
import Link from 'next/link';
import { BsBookmark,BsBell }from 'react-icons/bs';
import {IoLogOutOutline,IoHomeOutline, IoPersonOutline } from 'react-icons/io5'


export default function SideBar() {
  const activeElement = 'active sidebarli';
  const nonActiveElement = 'nonactive sidebarli';

  return (
    <div className='hidden md:block'>
      <Card >
        <h2 className='mb-2 '>Navigation</h2>
       <ul className='flex flex-col items-start justify-evenly ml-2 text-gray-600'>
            <Link href='/' className='sidebarlinks'>
                <li className={`${activeElement} mt-2`}> 
                    <IoHomeOutline  className='text-xl'/>
                    <p className='block  '>Home</p>
                </li>
            </Link>
            <Link href='/' className='sidebarlinks'>
              <li className={`${nonActiveElement} mt-3`}> 
                  <IoPersonOutline className='text-xl'/>
                  <p className='block '>Friends</p>
              </li>
            </Link>
            <Link href='' className='sidebarlinks'>
              <li  className={`${nonActiveElement} mt-3`}> 
                  <BsBookmark className='text-xl'/>
                  <p  className='block '>Saved Post</p>
              </li>
            </Link>
            <Link href='' className='sidebarlinks'>
              <li className={`${nonActiveElement} mt-3`}> 
                  <BsBell className='text-xl'/>
                  <p   className='block '>Notifications</p>
              </li>
            </Link>
            <Link href='' className='sidebarlinks'>
              <li className={`${nonActiveElement} my-3`}> 
                  <IoLogOutOutline className='text-xl'/>
                  <p className='block '>Logout</p>
              </li>
            </Link>
       </ul>       
      </Card>
    </div>
  )
}
