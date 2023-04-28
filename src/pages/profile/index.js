import React from 'react'
import Image from 'next/image';
import Profile from '../../components/Profile';
import ProfileCard from '../../components/ProfileCard';
import ProfileInfo from '../../components/ProfileInfo';
import Link from 'next/link';
import {BsExclamationCircle,BsPeople, BsImage, BsFillFilePostFill } from 'react-icons/bs';
import { Post } from '../../components';
import { useRouter } from 'next/router';
import ProfileOtherDetails from '../../components/ProfileOtherDetails';




export default function ProfilePage() {



  const router  =  useRouter();
  const {asPath:pathname} = router;
  
  const isPosts = pathname.includes('posts') || pathname.length <= 8 ? true : false;
  const isAbout = pathname.includes('about');
  const isFriends =pathname.includes('friends');
  const isPhotos = pathname.includes('photos');
  const tabClasses =  'profilenavlinks ';
  const activeClass= 'profilenavlinks profileactivelinks';


  return (
   <div className='p-5 md:p-4 lg:p-0 relative rounded-lg'>
      {/* HEADER */}
      <div className='relative rounded-lg'>
        <ProfileCard>
          {/* HEADER IMAGE */}
          <div className='relative w-full bg-black/80 object-contain rounded-lg'>
            <Image
            src={'/blackish.jpg'}
            width={300}
            height={500}
            alt={'blackish'}
            className=' object-cover rounded-t-lg h-[300px] w-full'
            />
          </div>
          {/* USER INFORMATION */}
          <div className=' z-20 bg-white w-full absolute bottom-0 left-0  
          '>
            <section className='grid grid-cols-2 mb-2'>
            <div className='relative w-2/4 '>
              <Profile styleProp={'profileprofilepic'}/>
            </div>
            {/* INFO */}
            <div className='w-3/4 m-1  col-span-3 ml-auto  '>
              <ProfileInfo>
                {/* NAME OF  USER */}
                <h2 className='text-3xl text-gray-900 capitalize font-bold text-right p-2'>
                  marcus oware
                </h2>
                <p className='text-lg  capitalize'>Kumasi,Ghana</p>
              </ProfileInfo>
            </div>
            </section>
            <section>
              <nav className='flex gap-0 sm:gap-2 md:gap-3 captalize mt-5'>
                <Link className={isPosts || pathname === "" ? activeClass : tabClasses} href='/profile/posts'>
                 
                  <BsFillFilePostFill/>
                  <span className=''>posts</span>

                </Link>
                <Link className={isAbout? activeClass:tabClasses} href='/profile/about'>
                <BsExclamationCircle/>
                  <span className=''>about</span>
                </Link>
                <Link className={isFriends? activeClass:tabClasses} href='/profile/friends'>
                <BsPeople/>
                  <span className=''>friends</span>
                </Link>
                <Link className={isPhotos? activeClass:tabClasses} href='/profile/photos'>
                <BsImage/>
                  <span className=''>photos</span>
                </Link>
               
                
              </nav>
            </section>
          </div>
        </ProfileCard>
      </div>
        <ProfileOtherDetails isPosts={isPosts} isAbout={isAbout} isFriends={isFriends} isPhotos={isPhotos}/>
   </div>
  )
}
