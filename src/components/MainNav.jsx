import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import UserInfoBtn from './UserInfoBtn'
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context'

function MainNav() {
    const { toggleSidebar, state, clearValues, setcurrentPage } = useAppContext()
    const {showSideBar, showLogoutButton} = state
    const navigate = useNavigate()

    const handleLogOut = () =>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setcurrentPage('Stats')
        clearValues()
        navigate('/')
    }

  return (
    <div className='text-white z-50 sticky top-0 backdrop-blur-md flex items-center 
    justify-between px-10 py-5 md:px-20'>
        <div>
            {!showSideBar && <div className='flex gap-3 items-center'>
                <FontAwesomeIcon onClick={()=> {
                    toggleSidebar()
                }} icon={faBars} className='h-6 cursor-pointer'/>
            <Logo/>
        </div>}
        </div>
        <div className='relative'>
            <UserInfoBtn/>
            {showLogoutButton && <LogoutBtn handleLogOut={handleLogOut}/>}
        </div>
    </div>
  )
}

export default MainNav