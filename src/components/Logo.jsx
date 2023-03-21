import React from 'react'

function Logo() {
  return (
    <div className='flex text-white items-center justify-between w-36 cursor-pointer'>
        <div className='w-10 h-10 bg-gradient-to-r from-purple-600 rounded-xl' >
            <h1 className='text-center font-bold text-3xl'>J</h1>
        </div>
        <p className='font-semibold text-3xl mb-1'>jobster</p>
    </div>
    
  )
}

export default Logo