import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faCaretDown
    } from '@fortawesome/free-solid-svg-icons'

function UserInfoBtn({setshowLogOutBtn, user}) {
  return (
    <div className='flex items-center bg-[#ffffff28] cursor-pointer px-2 py-1 rounded-md 
        hover:bg-[#ffffff4d] transition ease-out duration-500' onClick={()=>setshowLogOutBtn(prev=> !prev)}>
        <FontAwesomeIcon icon={faUser} className='text-purple-500 p-2 rounded-full'/>
        <p className='mr-2'>{user}</p>
        <FontAwesomeIcon icon={faCaretDown} className='mr-2'/>
    </div>
  )
}

export default UserInfoBtn