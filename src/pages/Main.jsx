import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar'
import MainNav from '../components/MainNav';
import StatsCard from '../components/StatsCard';
import {
  faSuitcaseRolling,
  faCalendarDays,
  faBug
  } from '@fortawesome/free-solid-svg-icons'

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
        <div className='grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-10'>
          <StatsCard
            color="blue"
            icon={faSuitcaseRolling}
            number={24}
            stat='Pending Applications'
            />
          <StatsCard
            color="red"
            icon={faCalendarDays}
            number={27}
            stat='Interviews Scheduled'/>
          <StatsCard
            color="purple"
            icon={faBug}
            number={30}
            stat='Jobs Declined'/>
        </div>
    </div>
  )
}

export default Main