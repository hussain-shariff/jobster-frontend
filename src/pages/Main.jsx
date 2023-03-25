import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar'
import MainNav from '../components/MainNav';
import Stats from './Stats';

function Main() {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  const [showSideBar, setshowSideBar] = useState(false)

  useEffect(()=>{
    if (!user){
      console.log('no user');
      navigate('/')
    }
  }, [])

  return (
    <div className='h-[105vh] bg-gradient-to-l from-[#130e3e] to-[#030209]'>
        <MainNav
          showSideBar={showSideBar}
          setshowSideBar={setshowSideBar}
          user={user}/>
        {showSideBar && 
        <SideBar
          setshowSideBar={setshowSideBar}/>}
        <Stats/>
    </div>
  )
}

export default Main