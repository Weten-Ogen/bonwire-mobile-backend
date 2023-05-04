import React from 'react'
import PostCard from '../components/home/PostCard';

export default function Saved() {
  return (
    <div>
        <h1 className='font-bold text-white text-3xl '>your saved Posts </h1>
      <section>
       
           <div className=''>
            <li className='my-3'>
             <PostCard/>
            </li>
            <li className='my-3'>
            <PostCard/>
            </li>
            <li className='my-3'>
            <PostCard/>

            </li>
           </div>
      </section>
    </div>
  )
}
