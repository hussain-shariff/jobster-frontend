import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar'
import MainNav from '../components/MainNav';
import Stats from './Stats';
import AllJobs from './AllJobs';
import AddJob from './AddJob';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../context';

function Main() {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  const {state, getUser} = useAppContext()
  const {showSideBar, currentPage} = state

  useEffect(()=>{
    getUser()
    setTimeout(()=>{
      if (!user){
        navigate('/')
      }
    }, [2000])
  }, [])

  return (
    <div className='bg-gradient-to-l min-h-screen from-[#130e3e] to-[#030209]'>
        <MainNav/>
        {showSideBar && <SideBar/>}
        {currentPage === 'Stats' && <Stats/>}
        {currentPage === 'All jobs' && <AllJobs/>}
        {currentPage === 'Add a job' && 
        <div className='px-12 md:px-20 mt-5'>
            <AddJob/>
        </div>}
        <ToastContainer/>
    </div>
  )
}

export default Main