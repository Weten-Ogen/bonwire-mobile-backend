import React from 'react'
import Image from 'next/image';
import avatar from '../../public/marcus.png';


export default function Profile() {
  return (
    
       <Image
                src={avatar}
                alt={avatar}
                width={400}
                height={400}
                className=' h-12 w-12 object-cover rounded-full text-slate-600 '/>
  )
}
