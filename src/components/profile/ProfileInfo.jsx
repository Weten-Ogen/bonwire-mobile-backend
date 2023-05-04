import React from 'react'

export default function ProfileInfo({children}) {
  return (
    <div className='text-2xl text-slate-700 flex flex-col items-start'>
      {children}
    </div>
  )
}
