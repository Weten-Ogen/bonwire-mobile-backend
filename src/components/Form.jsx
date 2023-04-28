import React from 'react'
import Card from './Card'
import Image from 'next/image';
import {IoLocationOutline } from 'react-icons/io5';
import {BsEmojiSmile,BsPersonFill } from 'react-icons/bs';
import Profile from './Profile';


export default function Form() {
  return (
    <div className='mb-4 '>
      <Card cardProp={'homecards'}>
       <div className=''>
       <form className='flex items-start pt-2  gap-3 text-slate-500 hover:ring hover:ring-gray-200 p-2 rounded relative'>
            
            <Profile styleProp={'homeprofilepic'}/>
           <textarea
           placeholder='what is on your mind'
            type='text'
            className='w-[100%]  rounded-md py-2 pl-2 pb-12 grow outline-none hover:bg-gray-100 '/>
            
        </form>
        <div className=' flex items-center gap-5 text-gray-600 mt-2'>
            <p className='flex items-center gap-1 icons'>
                <BsPersonFill className='text-2xl text-blue- hover:text-white'/>
                <span>people</span>
            </p>
            <p className='flex items-center gap-1 icons'>
                <IoLocationOutline className='text-2xl text-blue- hover:text-white'/>
                <span>check-In</span>
            </p>
           
            <p className='flex items-center gap-1 icons'>
                <BsEmojiSmile className='text-2xl text-blue- hover:text-white'/>
                <span>mood</span>
            </p>
            <button 
             className='formbtn btn '>share</button>
        </div>
       </div>
      </Card>
    </div>
  )
}
