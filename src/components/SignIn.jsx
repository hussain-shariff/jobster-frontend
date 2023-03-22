import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='h-screen bg-gradient-to-r from-black to-[#130e3c] flex items-center justify-center'>
        <div className=' text-white flex flex-col gap-4 bg-[rgba(0,0,0,.1)] p-10 rounded-lg'>
            <h1 className='text-center font-semibol text-3xl'>Sign in to Jobster</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" className='mt-2 p-2 bg-inherit border-2 border-gray-500 
                rounded-md w-full focus:outline-none focus:border-blue-600' placeholder='elon@email.com' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id='password' type="text" className='mt-2 p-2 bg-inherit border-2 border-gray-500 
                rounded-md w-full focus:outline-none focus:border-blue-600'/>
            </div>
            <button className='bg-gradient-to-r from-green-200  to-pink-200 py-2 px-10 rounded-md 
            font-semibold hover:scale-105 transition ease-out duration-500 w-full text-black'>
                Sign in
            </button>
            <p className='text-gray-400 mt-4 text-center'>Need an account?
                <Link to={'/register'}>
                    <span className='border px-2 py-1 rounded-md ml-2 cursor-pointer hover:border-blue-600
                    transition ease-out duration-500'>Sign up</span>
                </Link>
            </p>
        </div>
    </div>
  )
}

export default SignIn