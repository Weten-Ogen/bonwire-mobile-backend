import React from 'react'
import Card from './CardLink';
import PostCard from './PostCard'

export default function Post() {
  return (
   <section className='py-2 mb-3 gap-5' >
  
        <PostCard/>
        <PostCard/>
        <PostCard/>

   </section>
  )
}
