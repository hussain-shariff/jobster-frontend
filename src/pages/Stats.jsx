import React, {useState, useEffect} from 'react'
import StatsCard from '../components/StatsCard'
import {
    faSuitcaseRolling,
    faCalendarDays,
    faBug
    } from '@fortawesome/free-solid-svg-icons'
import BarChartComp from '../components/BarChartComp'
import AreaChartComp from '../components/AreaChartComp'
import { useAppContext } from '../context'

function Stats() {
  const [showBarChart, setshowBarChart] = useState(true)
  const { state, getStats } = useAppContext()
  const {pending, declined, interview} = state

  useEffect(()=>{
    getStats()
  }, [])
  

  return (
    <div>
      <div className='grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-10 my-3'>
          <StatsCard
          color="blue"
          icon={faSuitcaseRolling}
          number={pending}
          stat='Pending Applications'
          />
          <StatsCard
          color="red"
          icon={faCalendarDays}
          number={interview}
          stat='Interviews Scheduled'/>
          <StatsCard
          color="purple"
          icon={faBug}
          number={declined}
          stat='Jobs Declined'/>
      </div>
      <div className='mx-auto mt-7 flex flex-col items-center'>
        <h1 className='text-center text-2xl text-white md:text-3xl font-semibold'>Monthly Applications</h1>
        <div className='text-[#8884d8] group flex w-32 cursor-pointer mt-3 mb-5 text-xl font-semibold'
        onClick={()=> setshowBarChart(!showBarChart)}>
          {showBarChart?  'Area Chart' : "Bar Chart" } 
          <h1 className='group-hover:translate-x-2
          transition ease-out duration-300 ml-1'>→</h1>
        </div>
        {showBarChart && <BarChartComp />}
        {!showBarChart && <AreaChartComp/>}
      </div>
    </div>
  )
}

export default Stats