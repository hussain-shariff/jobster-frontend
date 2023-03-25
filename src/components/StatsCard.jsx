import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function StatsCard({color, icon, number, stat}) {
    const cardColors = {
        blue: 'from-[#35415d] to-[#1c4acd]',
        red : 'from-[#da2775] to-[#c01540]',
        purple : 'from-[#6520a4] via-[#4e1c97] to-[#6520a4]'
    }
  return (
    <div className={`text-white bg-gradient-to-b ${cardColors[color]} px-10 rounded-lg hover:scale-105
    transition ease-out duration-300 cursor-pointer py-12`}>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-semibold'>{number}</h1>
            <FontAwesomeIcon icon={icon} className='h-8'/>
        </div>
        <p className='text-xl mt-5'>{stat}</p>
    </div>
  )
}

export default StatsCard