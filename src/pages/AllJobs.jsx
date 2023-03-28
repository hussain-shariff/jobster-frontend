import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import JobCard from '../components/JobCard'
import SearchJobs from '../components/SearchJobs'
import getAllJobs from '../hooks/useGetJobs'
import { useAppContext } from '../context'

function AllJobs({setcurrentPage}) {
    const { getJobs, state } = useAppContext()
    const user = localStorage.getItem('user')
    const navigate = useNavigate()
    const {jobs} = state
    useEffect(()=>{
        if(!user){
            navigate('/')
        }
        else{
            getJobs()
        }
    }, [])

  return (
    <div className='mt-4 px-10 mx-auto md:px-20'>
        <SearchJobs/>
        <h1 className='text-white text-2xl font-semibold'>{jobs.length} Jobs Found</h1>
        {jobs && <div className='grid grid-cols-1 mt-5 md:grid-cols-3 gap-x-5 gap-y-10'>
            {
                jobs.map(job=>(
                    <JobCard
                        key={job._id}
                        id = {job._id}
                        position={job.position}
                        company={job.company}
                        createdAt ={job.createdAt}
                        status ={job.status}
                        location={job.location}
                        type={job.jobType}
                        setcurrentPage={setcurrentPage}
                        />
                ))
            }
        </div>}
    </div>
  )
}

export default AllJobs