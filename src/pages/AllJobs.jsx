import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import JobCard from '../components/JobCard'

function AllJobs() {
    const user = localStorage.getItem('user')
    const navigate = useNavigate()
    const [jobs, setjobs] = useState([])
    console.log(jobs);

    const getAllJobs = async () =>{
        const token = localStorage.getItem('token')
        fetch('https://jobs-api-81wf.onrender.com/api/v1/jobs', {
            method : "GET",
            headers : {
                Authorization : `Bearer ${token}` 
            }
        })
            .then(res=> res.json())
            .then(json=> setjobs(json.jobs))
            .catch(err=> console.log(err))
    }

    useEffect(()=>{
        if(!user){
            navigate('/')
        }
        else{
            const getJobs = async () =>{
                await getAllJobs()
            }
            getJobs()
        }
    }, [])

  return (
    <div className='mt-4 max-w-sm mx-auto md:max-w-6xl'>
        <h1 className='text-white text-2xl font-semibold'>{jobs.length} Jobs Found</h1>
        <div className='grid grid-cols-1 mt-5 md:grid-cols-3 gap-5'>
            {
                jobs.map(job=>(
                    <JobCard
                        key={job._id}
                        position={job.position}
                        company={job.company}
                        createdAt ={job.createdAt}
                        status ={job.status}
                        />
                ))
            }
        </div>
    </div>
  )
}

export default AllJobs