import React from 'react'
import ProfileCard from './ProfileCard'
import FriendsList from './FriendsList'

export default function Friends() {
  return (
    <div className='mt-10 '>
        <ProfileCard>
            <section className='p-4'>
                <h1 className='text-center font-bold text-gray-800 text-3xl'>Friends</h1>
                <div>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                  <FriendsList/>
                </div>
            </section>
        </ProfileCard>
      
    </div>
  )
}
