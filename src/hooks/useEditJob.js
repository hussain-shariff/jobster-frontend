import { notifySuccess } from "./useNotifications"

const useEditJob = async (jobDetails, id) =>{
    const token = localStorage.getItem('token')
    const data = {
        company : 'razorpay',
        position : 'frontend',
        location : 'Bglr',
        jobType : 'Full-time',
        status : 'pending'
    }
    const res = await fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs/6422e0c3909245dc3007c421`, {
            method : "PATCH",
            headers : {
                'content-type' : 'application/json',
                Authorization : `Bearer ${token}` 
            },
            body : JSON.stringify(data)
        })
    notifySuccess('Job Edited')
}

export default useEditJob