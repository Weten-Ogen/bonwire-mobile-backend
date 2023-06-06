import Image from 'next/image'
import Avatarr from '@/components/common/Avatarr'
import SearchBar from '@/components/common/SearchBar'
import SignUp from '@/components/common/SignUp'
import LogOut from '@/components/common/LogOut'
import Logo from '@/components/common/Logo'

export default function Home() {
  return (
  <main className='p-4 '>
    <div className='flex items-center  gap-4 justify-between mb-5 m' >
    <Logo/>
    <Avatarr/>
    </div>
    <SearchBar/>
    <SignUp/>
    <LogOut/>
  </main>
  )
}
