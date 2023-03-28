import React, {useState, useEffect} from 'react'
import JobCard from '../components/JobCard'
import SearchJobs from '../components/SearchJobs'
import { useAppContext } from '../context'

function AllJobs() {
    const { getJobs, state } = useAppContext()
    const {jobs} = state

    useEffect(()=>{
        getJobs()
    }, [])

  return (
    <div className='mt-4 px-10 mx-auto md:px-20'>
        <SearchJobs/>
        <h1 className='text-white text-2xl font-semibold'>{jobs.length} Jobs Found</h1>
        {jobs && <div className='grid grid-cols-1 mt-5 md:grid-cols-3 gap-x-5 gap-y-10'>
            {
                jobs.map(job=>
                    <JobCard
                        key={job._id}
                        jobDetails = {job}
                        />
                )
            }
        </div>}
    </div>
  )
}

export default AllJobs