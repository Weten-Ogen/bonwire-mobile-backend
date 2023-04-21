import React from 'react'
import Card from './CardLink';
import PostCard from './PostCard'

export default function Post() {
  return (
   <section className='py-2 ' >
     <Card>
        <PostCard/>
    </Card>
   </section>
  )
}
