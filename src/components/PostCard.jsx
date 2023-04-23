import React,{useState} from 'react';
import Profile from './Profile';
import {BsHeart,BsHeartFill,BsImage,BsShareFill,BsThreeDots } from 'react-icons/bs';
import {FaCommentAlt } from 'react-icons/fa';
import Card from './CardLink';
import { ClickOutHandler } from 'react-clickout-ts';
import DropDown from './DropDown';



export default function PostCard() {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdown = () => {
      setShowDropdown(prev  => !prev);
    }
  return (
   <section className='my-5'>
    <Card>
      <div className='flex items-start gap-4 '>
        <Profile/>
            {/* Header */}
          <div className='mb-2 grow'>
            <div className='flex justify-between items-center '>
              {/* title */}
              <p>John Doe shared a
                <span className='text-socialBlue normal'> post 
                </span>
              </p>
              {/* threedots */}
              <div className='text-gray-800 cursor-pointer'>
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
                autoPlay='true'
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
                  <Profile/>
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
