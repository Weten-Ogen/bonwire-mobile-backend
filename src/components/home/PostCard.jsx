import React,{useState} from 'react';
import Profile from '../Profile';
import {BsHeart,BsHeartFill,BsImage,BsShareFill,BsThreeDots } from 'react-icons/bs';
import {FaCommentAlt } from 'react-icons/fa';
import Card from './Card';
import { ClickOutHandler } from 'react-clickout-ts';
import DropDown from './DropDown';
import Link from 'next/link';


export default function PostCard() {
    
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdown = () => {
      setShowDropdown(prev  => !prev);
    }



  return (
   <section className='my-8'>
    <Card>
      <div className='flex items-start gap-4 '>
        <Profile styleProp={'homeprofilepic'} />
            {/* Header */}
          <div className='mb-2 grow'>
            <div className='flex justify-between items-center '>
              {/* title */}
              <p className='text-gray-600'>
                <Link className='px-1' href='/profile'>
                  <span className='cursor-pointer text-gray-800'>John Doe 
                  </span>
                </Link>
                shared a
                <span className='text-socialBlue normal cursor-pointer'> post 
                </span>
              </p>
              {/* threedots   and  dropdown*/}
              <div className='text-gray-800 cursor-pointer flex flex-col  gap-5 realative'>
                <BsThreeDots onClick={handleDropdown} className='c'/>
                {showDropdown&&<DropDown/>}
              </div>
            </div>
            {/* time */}
          <div className='text-gray-400 text-sm'>2 hours ago
          </div>
        </div>
      </div>
      
      <div>
      {/* paragraph */}
      <p className='max-w-[500px] mt-3 text-md text-gray-800'>dfsioahf lshafo jils jlhfoajeoifalh  fhoajfih ljf
                      fhoaheh reidhofj hefoje h
              </p>
      <div className=' mt-4 rounded bg-gray-900  w-full h-[300px] flex items-center '>
                {/* video */}
                <video 
                className='w-full'  
                  src=''>
                </video>
                </div>
                <div className='my-4 flex items-center gap-10 '>
                  {/* likes */}
                  <div className='videoicons'>{true ? 
                      <BsHeart className=''/> : 
                      <BsHeartFill className='text-red-500'/>}
                      <span className='text-gray-800' >72</span>
                  </div>
                  {/* comments */}
                  <div className='videoicons ml-5'>
                      <FaCommentAlt />
                      <span className='text-gray-800'>30</span>
                  </div>
                  {/* share */}
                  <div className='videoicons ml-5'>
                      <BsShareFill/>
                      <span className='text-gray-800'>4</span>
                  </div>
                </div>
              {/* add a comment */}
              <div className='flex relative my-3'>
                <div>
                  <Profile styleProp={'homeprofilepic'}/>
                </div>
                  <textarea 
                      className='p-2 bg-gray-200 text-gray-900 outline-none ring ring-gray-200 ml-2 rounded grow h-[50px]'
                      placeholder='Leave A Comment'/>
                      <BsImage className='absolute right-0 m-1 text-socialBlue'
                  />
              </div>
      </div>
    </Card>

   </section>
  )
}
