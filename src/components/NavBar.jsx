import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='text-gray-400 flex items-center mx-auto px-10 py-10 relative md:max-w-5xl md:px-0'>
        <div className='flex-grow'>
            <Logo/>
        </div>
        <Link to={'/register'}>
          <h3 className="cursor-pointer mr-10 hover:text-white hover:-translate-y-1 transition ease-out duration-500">Sign Up</h3>
        </Link>
        <Link to={'/signIn'}>
          <h3 className='cursor-pointer hover:text-white hover:-translate-y-1 transition ease-out duration-500'>Log In</h3>
        </Link>
    </div>
  )
}

export default NavBar