import React from 'react'
import Card from './CardLink'

import { BsBookmark,BsBell }from 'react-icons/bs';
import {IoLogOutOutline,IoHomeOutline, IoPersonOutline } from 'react-icons/io5'


export default function SideBar() {
  return (
    <div className='hidden md:block'>
      <Card>
        <h2 className='mb-2 '>Navigation</h2>
       <ul className='flex flex-col items-start justify-evenly ml-2 text-gray-600'>
        <li className='flex items-center gap-2 icons mt-1 '> 
                <IoHomeOutline  className='text-xl'/>
                <a href='' className='block text-gray-400 '>Home</a>
            </li>
            <li className='flex items-center gap-2 mt-3 icons'> 
                <IoPersonOutline className='text-xl'/>
                <a href='' className='block text-gray-400'>Friends</a>
            </li>
            <li className='flex items-center gap-2 mt-3 icons'> 
                <BsBookmark className='text-xl'/>
                <a href='' className='block text-gray-400'>Saved Post</a>
            </li>
            <li className='flex items-center gap-2 mt-3 icons'> 
                <BsBell className='text-xl'/>
                <a href='' className='block text-gray-400'>Notifications</a>
            </li>
            <li className='flex items-center gap-2 mt-3 mb-4 icons'> 
                <IoLogOutOutline className='text-xl'/>
                <a href='' className='block text-gray-400'>Logout</a>
            </li>
       </ul>
    
       
       
        
 
      </Card>
    </div>
  )
}
