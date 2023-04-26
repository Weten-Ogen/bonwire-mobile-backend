import React from 'react'
import { SideBar } from '../components';





export default function Layout({children}) {
  return (
    <main>
      <section className='mt-5 w-full md:max-w-6xl  flex items-start mx-auto gap-2 '>
          <div className='hidden lg:block  lg:w-1/5'>
            <SideBar/>
          </div>
          <div className='w-full h-full mx-auto lg:w-3/5  flex flex-col p-5 md:px-10 lg:p-0'>
            {children}
          </div>
       </section>
    </main>
  )
}
