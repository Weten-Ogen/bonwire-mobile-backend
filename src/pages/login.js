import React from 'react'
import Layout from '../components/Layout'
import LoginCard from '../components/login/LoginCard';

export default function Login() {
  return (
    <div className='p-4'>
      <Layout hideNavigation={true}>
        <div className='p-10 md:p-18 '>
            <LoginCard>
                <form className='my-3 p-2 mx-auto '>
                    <input type='text' 
                    placeholder='Name'
                    className='logininputelement'
                    />
                    <input type='email' 
                    placeholder='Email'
                    className='logininputelement'
                    />
                    <input type='password' 
                    placeholder='Password'
                    className='logininputelement'
                    />
                    <button
                    className='loginbutton' 
                    type='submit'>
                       submit     
                    </button>
                </form>
            </LoginCard>
        </div>
      </Layout>
    </div>
  )
}
