import React from 'react'
import {
    faLocationDot,
    faBriefcase,
    faCalendarDays,
    faClock,
    faBan,
    faPaperPlane
  } from '@fortawesome/free-solid-svg-icons'
import JobItem from './JobItem'
import moment from 'moment'

function JobCard({id, position, company, status, createdAt, location, type}) {
    let icon;
    if(status.toLowerCase() === "pending"){
        icon = faClock
    }else if (status.toLowerCase() === "declined"){
        icon = faBan
    }else{
        icon = faPaperPlane
    }

    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY')

    const deleteJob = async () =>{
        const token = localStorage.getItem('token')
        fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs/${id}`, {
            method : "DELETE",
            headers : {
                Authorization : `Bearer ${token}` 
            }
        })
            .then(res=> res.json())
            .then(json=> console.log(json))
            .catch(err=> console.log(err))
    }

    const handleDelete = async () =>{
        await deleteJob()
    }

  return (
    <div className='bg-white/20 backdrop-blur-3xl p-5 rounded-md
    hover:scale-105 cursor-pointer transition ease-out duration-500 relative'>
        <div className={`absolute w-1 h-full bg-[#8d53de] top-0 left-0 rounded-l-md`}></div>
        <div className='flex items-center gap-5 border-b-2 pb-5'>
            <div className='w-12 h-12 bg-purple-500 rounded-full text-white flex items-center
            justify-center text-2xl font-semibold uppercase'>
                {company[0]}
            </div>
            <div className='text-white text-lg'>
                <h1>{position}</h1>
                <p>{company}</p>
            </div>
        </div>
        <div className='grid gap-1 grid-cols-2 md:gap-0 p-3 text-gray-400'>
            <div className='flex flex-col gap-1'>
                <JobItem
                    icon={faLocationDot}
                    name={location}/>
                <JobItem
                    icon={faBriefcase}
                    name={type}/>
            </div>
            <div className=''>
                <JobItem
                    icon={faCalendarDays}
                    name={date}/>
                <JobItem
                    icon={icon}
                    name={status}/>
            </div>
        </div>
        <div className='ml-2'>
            <button className='border-gray-400 border-2 px-2 text-gray-400 rounded-md mr-3
            hover:text-purple-300 hover:border-purple-300'>Edit</button>
            <button className='border-gray-400 border-2 px-2 text-gray-400 rounded-md
            hover:text-purple-300 hover:border-purple-300'
            onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default JobCard