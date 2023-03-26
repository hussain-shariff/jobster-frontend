import React, {useState, useEffect} from 'react'

function AllJobs() {

    const getAllJobs = async () =>{
        fetch('https://jobs-api-81wf.onrender.com/api/v1/jobs', {
            method : "GET",
            headers : {
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDFiMDIwMmNhMDM5OGM0MmJhYTM1MjEiLCJuYW1lIjoiZWxvbiIsImlhdCI6MTY3OTQ5MTYwOCwiZXhwIjoxNjgyMDgzNjA4fQ.JjUq3Qg5wdz05Z1zRWWiK6x0KSaFHGT3z4Cgpc843hQ'
            }
        })
            .then(res=> res.json())
            .then(json=> console.log(json))
            .catch(err=> console.log(err))
    }

    useEffect(()=>{
        const getJobs = async () =>{
            await getAllJobs()
        }
        getJobs()
    }, [])

  return (
    <div>
        All jobs
    </div>
  )
}

export default AllJobs