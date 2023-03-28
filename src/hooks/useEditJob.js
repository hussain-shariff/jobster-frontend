import { notifySuccess } from "./useNotifications"

const useEditJob = async (company, position, location, jobType, status, id) =>{
    const token = localStorage.getItem('token')
    const data = {
        company,
        position,
        location,
        jobType,
        status
    }
    const res = await fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs/${id}`, {
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