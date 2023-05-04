import React from 'react'
import Profile from '../Profile'

export default function FriendsList() {
  return (
    <div className='my-2'>
        <section className='profilefriendsoutersec'>
        <div>
            <Profile styleProp={'profilefriendslistimage'}/>
        </div>
      <div>
        <h3 className='font-bold capitalize'>Marcus Oware</h3>
        <p className='text-gray-600'>5 mutual friends</p>
      </div>
        </section>
    </div>
  )
}
