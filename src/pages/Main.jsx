import React, {useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faChartSimple,
  faMagnifyingGlass,
  faFileInvoice,
  faAddressCard,
  faUser,
  faCaretDown
  } from '@fortawesome/free-solid-svg-icons'
import SideSectionItem from '../components/SideSectionItem'
import Logo from '../components/Logo'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Main() {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  const [showLogOutBtn, setshowLogOutBtn] = useState(false)
  const [showSideBar, setshowSideBar] = useState(false)

  useEffect(()=>{
    if (!user){
      console.log('no user');
      navigate('/')
    }
  }, [])
  

  const handleLogOut = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className='h-screen bg-gradient-to-l from-[#130e3e] to-[#030209]'>
      <div className='text-white flex items-center justify-between px-10 py-8 md:px-20'>
        <div>
          {!showSideBar && <div className='flex gap-3 items-center'>
            <FontAwesomeIcon onClick={()=> setshowSideBar(!showSideBar)} icon={faBars} className='h-6 cursor-pointer'/>
          <Logo/>
            </div>}
        </div>
        <div className='relative'>
          <div className='flex items-center bg-[#ffffff28] cursor-pointer px-2 py-1 rounded-md 
          hover:bg-[#ffffff4d] transition ease-out duration-500' onClick={()=>setshowLogOutBtn(!showLogOutBtn)}>
            <FontAwesomeIcon icon={faUser} className='text-purple-500 p-2 rounded-full'/>
            <p className='mr-2'>{user}</p>
            <FontAwesomeIcon icon={faCaretDown} className='mr-2'/>
          </div>
            {showLogOutBtn && <motion.h2
            onClick={handleLogOut}
            initial = {{ y : '-4vh' }}
            animate = {{ y : 0 }}
            transition = {{ duration: 0.2 }}
            className='absolute top-12 bg-[#ffffff38] text-center w-28 ml-2 rounded-md py-1
            hover:bg-[#ffffff4d] transition ease-out duration-500 cursor-pointer'>Logout</motion.h2>}
        </div>
      </div>
        {showSideBar && <motion.div 
        initial = {{ x : '-150vw' }}
        animate = {{ x : 0 }}
        transition = {{ duration: 0.6 }}
        className='h-screen w-60 text-gray-400 bg-gradient-to-r from-[#3e387248] to-[#6c639d45] fixed top-0 left-0'>
            <FontAwesomeIcon icon={faBars} className=' h-7 cursor-pointer absolute top-5 right-7'
            onClick={()=>setshowSideBar(!setshowSideBar)}/>
            <div className='flex flex-col mt-20  items-center gap-5'>
              <SideSectionItem
                name='Stats'
                icon= {faChartSimple} />
              <SideSectionItem
                name='All jobs'
                icon={faMagnifyingGlass}/>
              <SideSectionItem
                name='Add a job'
                icon={faFileInvoice}/>
              <SideSectionItem
                name='Profile'
                icon={faAddressCard}/>
            </div>
        </motion.div>}
    </div>
  )
}

export default Main