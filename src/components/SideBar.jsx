import React from 'react'
import { motion } from 'framer-motion'
import SideSectionItem from './SideSectionItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faChartSimple,
  faMagnifyingGlass,
  faFileInvoice,
  faAddressCard,
  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function SideBar({setshowSideBar}) {
  return (
    <motion.div 
        initial = {{ x : '-150vw' }}
        animate = {{ x : 0 }}
        transition = {{ duration: 0.6 }}
        className='h-screen z-50 w-full text-gray-400 bg-gradient-to-r from-[#130e3e] to-[#0b072e] fixed top-0 left-0 md:w-60'>
            <FontAwesomeIcon icon={faBars} className=' h-7 cursor-pointer absolute top-5 right-7'
            onClick={()=>setshowSideBar(!setshowSideBar)}/>
            <div className='flex flex-col mt-20  items-center gap-5'>
                <Link to={'/dashboard/stats'}>
                  <SideSectionItem
                      name='Stats'
                      icon= {faChartSimple} />
                </Link>
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
    </motion.div>
  )
}

export default SideBar