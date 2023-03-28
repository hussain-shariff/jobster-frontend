import { notifySuccess } from "./useNotifications"

const useCreateJob = async ( company, position, location, jobType, status) =>{
    const token = localStorage.getItem('token')
    const data = {
        company,
        position,
        location,
        jobType,
        status 
    }
    const res = await fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs`, {
            method : "POST",
            headers : {
                'content-type' : 'application/json',
                Authorization : `Bearer ${token}` 
            },
            body : JSON.stringify(data)
        })
    notifySuccess('Job created')
}

export default useCreateJob