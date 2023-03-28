import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar'
import MainNav from '../components/MainNav';
import Stats from './Stats';
import AllJobs from './AllJobs';
import AddJob from './AddJob';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  const [currentPage, setcurrentPage] = useState('Stats')
  const [showSideBar, setshowSideBar] = useState(false)

  useEffect(()=>{
    if (!user){
      console.log('no user');
      navigate('/')
    }
  }, [])

  return (
    <div className='bg-gradient-to-l min-h-screen from-[#130e3e] to-[#030209]'>
        <MainNav
          showSideBar={showSideBar}
          setshowSideBar={setshowSideBar}
          user={user}/>
        {showSideBar && 
        <SideBar
          setshowSideBar={setshowSideBar}
          setcurrentPage = {setcurrentPage}/>}
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