import React from 'react'
import Image from 'next/image';
import avatar from '../../public/marcus.png';


export default function Profile({styleProp}) {
  return (
    
       <Image
                src={avatar}
                alt={avatar}
                width={400}
                height={400}
                className={`${styleProp} generalprofilepic`}/>
  )
}
