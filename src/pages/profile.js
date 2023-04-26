import React from 'react'
import Image from 'next/image';
import Profile from '../components/Profile';
import ProfileCard from '../components/ProfileCard';


export default function profile() {
  return (
   <div className='p-5 md:p-4 lg:p-0 relative'>
      {/* HEADER */}
      <div className='relative'>
        <ProfileCard>
          {/* HEADER IMAGE */}
          <div className='relative w-full bg-black/80 object-contain'>
            <Image
            src={'/blackish.jpg'}
            width={500}
            height={500}
            alt={'blackish'}
            className=' object-cover  h-[500px] w-full'
            />
          </div>
          {/* USER INFORMATION */}
          <div className='h-[30vh] z-20 bg-white w-full absolute bottom-0 left-0  
          '>
            <section className='grid grid-cols-2'>
            <div className='relative w-2/4 '>
              <Profile styleProp={'profileprofilepic'}/>
            </div>
            {/* INFO */}
            <div className='w-3/4 m-1   border border-red-600 col-span-3 ml-auto '>
              <div className='bg-gray-800  relative w-full rounded p-2 h-10 object-cover '>
                <h2 className='bg-white hidden'>Marcus Oware</h2>
              </div>
            </div>
            </section>
          </div>
        </ProfileCard>
      </div>
   </div>
  )
}
