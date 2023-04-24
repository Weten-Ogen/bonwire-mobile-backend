import React from 'react'
import Card from './CardLink'

import { BsBookmark,BsBell }from 'react-icons/bs';
import {IoLogOutOutline,IoHomeOutline, IoPersonOutline } from 'react-icons/io5'


export default function SideBar() {
  const activeElement = 'active icons';
  const nonActiveElement = 'nonactive icons';

  return (
    <div className='hidden md:block'>
      <Card>
        <h2 className='mb-2 '>Navigation</h2>
       <ul className='flex flex-col items-start justify-evenly ml-2 text-gray-600'>
        <li className={`${activeElement} mt-2`}> 
                <IoHomeOutline  className='text-xl'/>
                <a href='' className='block  '>Home</a>
            </li>
            <li className={`${nonActiveElement} mt-3`}> 
                <IoPersonOutline className='text-xl'/>
                <a href='' className='block '>Friends</a>
            </li>
            <li  className={`${nonActiveElement} mt-3`}> 
                <BsBookmark className='text-xl'/>
                <a href='' className='block '>Saved Post</a>
            </li>
            <li className={`${nonActiveElement} mt-3`}> 
                <BsBell className='text-xl'/>
                <a href='' className='block '>Notifications</a>
            </li>
            <li className={`${nonActiveElement} my-3`}> 
                <IoLogOutOutline className='text-xl'/>
                <a href='' className='block '>Logout</a>
            </li>
       </ul>       
      </Card>
    </div>
  )
}
