import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function AllJobs() {
    const user = localStorage.getItem('user')
    const navigate = useNavigate()

    const getAllJobs = async () =>{
        const token = localStorage.getItem('token')
        fetch('https://jobs-api-81wf.onrender.com/api/v1/jobs', {
            method : "GET",
            headers : {
                Authorization : `Bearer ${token}` 
            }
        })
            .then(res=> res.json())
            .then(json=> console.log(json))
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
    <div>
        All jobs
    </div>
  )
}

export default AllJobs