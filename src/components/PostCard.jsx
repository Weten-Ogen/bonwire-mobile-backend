import React from 'react';
import Profile from './Profile';


export default function PostCard() {
    
  return (
    <div className='flex items-start gap-4'>
        <Profile/>
        <div className='text-gray-600'>
            <div>
            <a>John Doe shared a <span className='text-socialBlue normal'> post </span>
            </a>
            <div className='text-gray-400 text-sm'>2 hours ago</div>
            </div>
            <p className='max-w-[500px] mt-3 text-md text-gray-500'>dfsioahf lshafo jils jlhfoajeoifalh  fhoajfih ljf
                fhoaheh reidhofj hefoje h
            </p>
            <div className='w-[500px] mt-4 rounded bg-gray-200  h-[400px] flex items-center '>
             <video 
             className='w-full'  
             controls 
             loop 
             autoplay 
             src=''></video>
            </div>
        </div>
    </div>
  )
}
