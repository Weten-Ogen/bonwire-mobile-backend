import React from 'react'
import { SideBar } from '../components';





export default function Layout({children,hideNavigation}) {
  return (
    <main>
      <section className='lg:mt-5  w-full lg:max-w-6xl  lg:flex lg:items-start mx-auto lg:gap-2 '>
        {!hideNavigation && 
        
        <div className='block w-full lg:w-1/5'>
          <SideBar/>
        </div>
        
        }
    <div className={hideNavigation? 'w-full':'w-full h-full mx-auto lg:w-3/5  flex flex-col p-5 lg:px-10 lg:p-0'}>
            {children}
          </div>
       </section>
    </main>
  )
}
