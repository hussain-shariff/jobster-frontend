import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import {isMobileScreen} from '../utils/common.utils'

function NavBar() {
  const isMobile = isMobileScreen();

  return (
    <div className='text-gray-400 flex items-center mx-auto px-10 py-10 relative md:max-w-5xl md:px-0'>
        <div className='flex-grow'>
            <Logo/>
        </div>
        {!isMobile && (<>
          <Link to={'/register'}>
            <h3 className="cursor-pointer text-sm md:text-base mx-2 md:mr-10 hover:text-white hover:-translate-y-1 transition ease-out duration-500">Sign Up</h3>
          </Link>
          <Link to={'/signIn'}>
            <h3 className='cursor-pointer hover:text-white hover:-translate-y-1 transition ease-out duration-500'>Log In</h3>
          </Link>
        </>)}
    </div>
  )
}

export default NavBar