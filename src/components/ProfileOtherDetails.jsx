import React from 'react'
import  Post  from './Post';
import About from './About';
import Friends from './Friends';
import Photos from './Photos';
import { useRouter } from 'next/router';

export default function ProfileOtherDetails({isPhotos,isPosts,isFriends,isAbout}) { 

    return (
    <section>
      {isPosts? <Post/> : isAbout? <About/>: isFriends? <Friends/>: isPhotos? <Photos/> : <Post/>}
      
    </section>
  )
}
