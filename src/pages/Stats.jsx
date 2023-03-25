import React from 'react'
import StatsCard from '../components/StatsCard'
import {
    faSuitcaseRolling,
    faCalendarDays,
    faBug
    } from '@fortawesome/free-solid-svg-icons'

function Stats() {
  return (
    <div className='grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-10 mt-10'>
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
  )
}

export default Stats