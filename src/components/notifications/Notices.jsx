import React from 'react'
import NotifiCard from './NotifiCard';
import Profile from '../Profile';



export default function Notices() {
  return (
    <div className=''>
      <section>
        <NotifiCard>
            <div className='p-2 flex items-center gap-1'>
                <Profile styleProp={'h-12 w-12'}/>
                <div>
                    <p className='text-xl font-bold'>Marcus send you a friend request.</p>
                </div>
            
            </div>
        </NotifiCard>
      </section>
    </div>
  )
}
