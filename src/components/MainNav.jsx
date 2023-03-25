import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import UserInfoBtn from './UserInfoBtn'
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom';

function MainNav({user, showSideBar ,setshowSideBar}) {
    const [showLogOutBtn, setshowLogOutBtn] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () =>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
    }

  return (
    <div className='text-white flex items-center justify-between px-10 py-8 md:px-20'>
        <div>
            {!showSideBar && <div className='flex gap-3 items-center'>
                <FontAwesomeIcon onClick={()=> setshowSideBar(!showSideBar)} icon={faBars} className='h-6 cursor-pointer'/>
            <Logo/>
        </div>}
        </div>
        <div className='relative'>
            <UserInfoBtn
                setshowLogOutBtn={setshowLogOutBtn}
                user={user}/>
            {showLogOutBtn && 
            <LogoutBtn
                handleLogOut={handleLogOut}/>}
        </div>
    </div>
  )
}

export default MainNav