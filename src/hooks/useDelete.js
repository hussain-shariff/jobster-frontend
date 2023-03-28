import { notifySuccess, notifyError } from '../hooks/useNotifications'

const deleteJob = async (id) =>{
    const token = localStorage.getItem('token')
    fetch(`https://jobs-api-81wf.onrender.com/api/v1/jobs/${id}`, {
        method : "DELETE",
        headers : {
            Authorization : `Bearer ${token}` 
        }
    })
        .then(res=> res.json())
        .then(json=> {
            notifySuccess('Job Deleted')
        })
        .catch(err=> notifyError('Try again'))
}

export default deleteJob