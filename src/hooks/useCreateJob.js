import { notifySuccess } from "./useNotifications"

const useCreateJob = async (jobDetails) =>{
    const token = localStorage.getItem('token')
    const data = {
        company : jobDetails.company,
        position : jobDetails.position,
        location : jobDetails.location,
        jobType : jobDetails.jobType,
        status : jobDetails.status
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